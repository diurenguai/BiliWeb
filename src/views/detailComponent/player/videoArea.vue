<template>
    <div class="bpx-player-video-area" ref="videoArea">
        <div class="bpx-player-video-perch" @click="changePlay">
            <video ref="video" :muted="data.isMuted" crossorigin="anonymous" preload="auto"></video>
        </div>
        <canvas ref="canvas" id="canvas" :style="{ width: data.w + 'px', height: data.h + 'px' }">
            您的浏览器不支持canvas标签。
        </canvas>
        <div class="hover-box">
            <videoTopWrap :isFull="data.isFull"></videoTopWrap>
            <videoControlWrap :duration="data.duration" :currentTime="data.currentTime" :isPlay="data.isPlay" :isFullWeb="data.isFullWeb"
                :isFull="data.isFull" :bufferedTime="data.bufferedTime">
            </videoControlWrap>
        </div>
        <videoStateWrap :isPlay="data.isPlay"></videoStateWrap>
    </div>
</template>

<script>
import videoTopWrap from './videoTopWrap.vue'
import videoStateWrap from './videoStateWrap.vue'
import videoControlWrap from './videoControlWrap.vue'
import Hls from 'hls.js';
import {inject, onMounted, reactive,ref,getCurrentInstance,provide } from 'vue'
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';
export default {
    name: 'videoArea',
    components: {
        videoTopWrap,
        videoControlWrap,
        videoStateWrap
    },
    setup() {
        const store = useStore();
        const route = useRoute();
        const detailList = inject("detailList")
        let hls = null;
        let dmMove = null;
        const canvas = ref(null)
        const ctx = ref(null);
        // let ctx;
        const globalProperties = getCurrentInstance().appContext.config.globalProperties; // 获取全局挂载
        const bus = getCurrentInstance().appContext.config.globalProperties.$bus;
        const data = reactive({
            isPlay: false,
            isFullWeb: false,
            isFull: false,
            isMuted: store.state.videoInfo.isMuted,
            // 之后替换为服务器提供的url
            video_url: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
            duration: 0,
            currentTime: 0,
            bufferedTime: 0,
            barrageList: [],
            lastText: [null, null, null, null],
            w: 0,
            h: 0,
            dmList: []
        })
        const video = ref(null);
        const videoArea = ref(null);
        const changePlay = function () {
            data.isPlay = !data.isPlay
            if (data.isPlay) {
                video.value.play()
                draw()
            } else {
                video.value.pause()
                cancelAnimationFrame(dmMove); // 取消动画帧
            }
        };
        // const changeVol = function (volNum) {
        //    video.value.volume = volNum
        // };
        const changeRate = function (rate) {
            video.value.playbackRate = rate
        };
        const changeQuality = function (quality) {
            // 会卡住，触发立即质量级别切换到新的质量级别，将中止当前片段请求
            // data.hls.currentLevel = quality
            // 很久，设置下一个加载片段的质量级别
            // data.hls.loadLevel = quality
            // 触发下一个片段的质量级别切换。这最终可能会刷新已经缓冲的下一个片段
            hls.nextLevel = quality
        };
        const changeCurrentTime = function (currentTime) {
            video.value.currentTime = currentTime
        };
        // const changeFull = function () {
        //     data.isFull = !data.isFull
        //     if (data.isFull) {
        //         if (videoArea.value.requestFullscreen) {
        //             videoArea.value.requestFullscreen();
        //         } else if (videoArea.value.msRequestFullscreen) {
        //             videoArea.value.msRequestFullscreen();
        //         } else if (videoArea.value.mozRequestFullScreen) {
        //            videoArea.value.mozRequestFullScreen();
        //         } else if (videoArea.value.webkitRequestFullscreen) {
        //             videoArea.value.webkitRequestFullscreen();
        //         }
        //     } else {
        //         if (document.exitFullscreen) {
        //             document.exitFullscreen();
        //         } else if (document.msExitFullscreen) {
        //             document.msExitFullscreen();
        //         } else if (document.mozCancelFullScreen) {
        //             document.mozCancelFullScreen();
        //         } else if (document.webkitExitFullscreen) {
        //             document.webkitExitFullscreen();
        //         }
        //     }
        // };
        const initVideo = function () {
           
            if (Hls.isSupported()) {
                hls = new Hls()
                hls.loadSource(data.video_url)
                // console.log(data.video_url);
                hls.attachMedia(video.value)
                console.log(video.value);
            
                hls.on(Hls.Events.BUFFER_APPENDED, () => {
                    console.log('shibai')
                    data.duration = video.value.duration
                    
                });
                hls.on(Hls.Events.LEVEL_SWITCHED, function () {
                    console.log('Video quality level switched successfully!');
                });

                hls.on(Hls.Events.ERROR, function (event, data) {
                    console.log('error', data);
                });
            } else if (video.value.canPlayType('application/vnd.apple.mpegurl')) {
                video.value.src = data.video_url;
                
            } else {
                // 兼容性处理
                console.log('请升级浏览器')
            }
        };
        const getTime = function () {
           // console.log(video);
            video.value.addEventListener('timeupdate', () => {
                data.currentTime = video.value.currentTime
                // 发送弹幕
                const currentTimeNum = Math.floor(data.currentTime)
                if (currentTimeNum == data.lastTime) {
                    return
                }
                data.lastTime = currentTimeNum
                let i = 0
                while (data.dmList[i] && data.dmList[i].time <= currentTimeNum) {
                    if (data.dmList[i].time == currentTimeNum) {
                        data.shoot(data.dmList[i].talk)
                    }
                    i++
                }
            })
            
            video.value.addEventListener('progress', () => {
                data.bufferedTime = video.value.buffered.end(0) - video.value.buffered.start(0)
            })
        };
        const shoot = async function (text) {
            // 1~4的随机整数
            const rNum = Math.floor(Math.random() * 4 + 1)
            const top = rNum * 10
            const dmWidth = data.ctx.measureText(text).width
            let left
            if (data.lastText[rNum]) {
                left = Math.max(data.w, data.lastText[rNum].left + data.lastText[rNum].dmWidth + 10)
            } else {
                left = data.w
            }
            const barrage = {
                text: text,
                top: top,
                left: left,
                dmWidth: dmWidth
            }
            data.lastText[rNum] = barrage
            data.barrageList.push(barrage)
        };
        const draw = function () {
            if (data.barrageList.length > 0) {
                data.ctx.clearRect(0, 0, data.w, data.h)
                for (let i = 0; i < data.barrageList.length; i++) {
                    const item = data.barrageList[i]
                    if (item.left + item.dmWidth <= 0) {
                        data.barrageList.splice(i, 1);
                        i--;
                        continue;
                    }
                    item.left -= data.offset;
                    data.ctx.fillStyle = "#fff"
                    data.ctx.fillText(item.text, item.left, item.top);
                }

            }
            dmMove = requestAnimationFrame(draw);
        };
        const addDanmaku = async function (text) {
            // 提交弹幕到数据库
            let res = await globalProperties.$utils.post('user/addDanmaku', { video_id: route.params.id, user_id: store.state.userInfo.id, time: data.currentTime, talk: text })
            // token过期，重新登录
            if (res.code == 401) {
                store.commit('logout')
                store.commit('changeLogView')
                return
            }
            if (res.code != 10000) return
                getDanmaku()
                shoot(text)
        };
        const getDanmaku = async function () {
            let res
            // 获取弹幕数
            res = await globalProperties.$utils.get('video/getDanmakuByvideo/' + route.params.id)
            if (res.code != 10000) return
            data.danmakuChange = globalProperties.$utils.numChange(res.data.result.count)
            //获取弹幕
            data.dmList = res.data.result.rows
        };
        const initCanvas = function () {
            const rect = video.value.getBoundingClientRect();
            data.w = rect.right - rect.left;
            data.h = rect.bottom - rect.top;
            ctx.value = canvas.value.getContext("2d")
            // 弹幕字体大小
            ctx.value.font = "8px Microsoft YaHei"
            ctx.value.shadowOffsetX = 1;
            ctx.value.shadowOffsetY = 1;
            ctx.value.shadowBlur = 0;
            ctx.value.shadowColor = '#000';
            //弹幕滚动速度
            data.offset = 0.5
            if (data.isPlay) {
                data.draw()
            }
            // 订阅
            bus.on('addDm', async (text) => {
                addDanmaku(text);
            });
        }
        provide('changeQualityP', changeQuality);
        provide('initVideoP', initVideo);
        provide('changeRateP', changeRate);
        provide('changeCurrentTime', changeCurrentTime);
        
        onMounted(() => {
            getDanmaku();
            getTime()
            initCanvas()
        }
            
            
        ) 
        return {
            detailList,data,changePlay,video,videoArea,canvas
       }
    }
    

   
}
</script>


<style scoped>
#canvas {
    position: absolute;
    top: 0;
    left: 0;
}

.bpx-player-video-area {
    flex: 1;
    background-color: #000;
    position: relative;
    height: 100%;
    width: 100%;
}

.bpx-player-video-perch {
    position: relative;
    height: 100%;
    width: 100%;
    /* visibility: hidden; */
}

.bpx-player-video-perch video {
    height: 100%;
    width: 100%;
    /* object-fit: fill; */
    /* position: absolute;
    top: 0;
    left: 0; */
}

.hover-box {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    visibility: hidden;
    transition: all .2s;
}

.bpx-player-video-area:hover .hover-box {
    visibility: visible;
}
</style>
