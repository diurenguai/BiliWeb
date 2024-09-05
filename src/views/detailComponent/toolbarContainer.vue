<template>
    <div class="video-toolbar-container">
        <div class="video-toolbar-left">
            <div title="点赞" class="video-toolbar-left-wrap hover-blue change-color" @click="changeLike"
                :class="data.isLike ? 'active-blue' : ''">
                <svg width="36" height="36" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg"
                    class="video-toolbar-item-left-icon">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M9.77234 30.8573V11.7471H7.54573C5.50932 11.7471 3.85742 13.3931 3.85742 15.425V27.1794C3.85742 29.2112 5.50932 30.8573 7.54573 30.8573H9.77234ZM11.9902 30.8573V11.7054C14.9897 10.627 16.6942 7.8853 17.1055 3.33591C17.2666 1.55463 18.9633 0.814421 20.5803 1.59505C22.1847 2.36964 23.243 4.32583 23.243 6.93947C23.243 8.50265 23.0478 10.1054 22.6582 11.7471H29.7324C31.7739 11.7471 33.4289 13.402 33.4289 15.4435C33.4289 15.7416 33.3928 16.0386 33.3215 16.328L30.9883 25.7957C30.2558 28.7683 27.5894 30.8573 24.528 30.8573H11.9911H11.9902Z"
                        fill="currentColor"></path>
                </svg>
                <span>{{ detailList.likesChange }}</span>
                <canvas class="like-container" :class="data.isDone ? 'hide' : ''" ref="like_cnv" height="360 "
                    width="360"></canvas>
            </div>
            <div title="投币" class="video-toolbar-left-wrap hover-blue change-color">
                <svg width="28" height="28" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg"
                    class="video-toolbar-item-left-icon " data-v-47535144="">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M14.045 25.5454C7.69377 25.5454 2.54504 20.3967 2.54504 14.0454C2.54504 7.69413 7.69377 2.54541 14.045 2.54541C20.3963 2.54541 25.545 7.69413 25.545 14.0454C25.545 17.0954 24.3334 20.0205 22.1768 22.1771C20.0201 24.3338 17.095 25.5454 14.045 25.5454ZM9.66202 6.81624H18.2761C18.825 6.81624 19.27 7.22183 19.27 7.72216C19.27 8.22248 18.825 8.62807 18.2761 8.62807H14.95V10.2903C17.989 10.4444 20.3766 12.9487 20.3855 15.9916V17.1995C20.3854 17.6997 19.9799 18.1052 19.4796 18.1052C18.9793 18.1052 18.5738 17.6997 18.5737 17.1995V15.9916C18.5667 13.9478 16.9882 12.2535 14.95 12.1022V20.5574C14.95 21.0577 14.5444 21.4633 14.0441 21.4633C13.5437 21.4633 13.1382 21.0577 13.1382 20.5574V12.1022C11.1 12.2535 9.52148 13.9478 9.51448 15.9916V17.1995C9.5144 17.6997 9.10883 18.1052 8.60856 18.1052C8.1083 18.1052 7.70273 17.6997 7.70265 17.1995V15.9916C7.71158 12.9487 10.0992 10.4444 13.1382 10.2903V8.62807H9.66202C9.11309 8.62807 8.66809 8.22248 8.66809 7.72216C8.66809 7.22183 9.11309 6.81624 9.66202 6.81624Z"
                        fill="currentColor"></path>
                </svg>
                <span>{{ detailList.coinsChange }}</span>
            </div>
            <div title="收藏" class="video-toolbar-left-wrap hover-blue change-color">
                <svg width="28" height="28" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg"
                    class="video-toolbar-item-left-icon " data-v-912a7b4a="">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M19.8071 9.26152C18.7438 9.09915 17.7624 8.36846 17.3534 7.39421L15.4723 3.4972C14.8998 2.1982 13.1004 2.1982 12.4461 3.4972L10.6468 7.39421C10.1561 8.36846 9.25639 9.09915 8.19315 9.26152L3.94016 9.91102C2.63155 10.0734 2.05904 11.6972 3.04049 12.6714L6.23023 15.9189C6.96632 16.6496 7.29348 17.705 7.1299 18.7605L6.39381 23.307C6.14844 24.6872 7.62063 25.6614 8.84745 25.0119L12.4461 23.0634C13.4276 22.4951 14.6544 22.4951 15.6359 23.0634L19.2345 25.0119C20.4614 25.6614 21.8518 24.6872 21.6882 23.307L20.8703 18.7605C20.7051 17.705 21.0339 16.6496 21.77 15.9189L24.9597 12.6714C25.9412 11.6972 25.3687 10.0734 24.06 9.91102L19.8071 9.26152Z"
                        fill="currentColor"></path>
                </svg>
                <span>{{ detailList.starsChange }}</span>
            </div>
            <div title="转发" class="video-toolbar-left-wrap hover-blue change-color">
                <svg data-v-3ed9880c="" width="28" height="28" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg"
                    class="video-toolbar-item-left-icon ">
                    <path
                        d="M12.6058 10.3326V5.44359C12.6058 4.64632 13.2718 4 14.0934 4C14.4423 4 14.78 4.11895 15.0476 4.33606L25.3847 12.7221C26.112 13.3121 26.2087 14.3626 25.6007 15.0684C25.5352 15.1443 25.463 15.2144 25.3847 15.2779L15.0476 23.6639C14.4173 24.1753 13.4791 24.094 12.9521 23.4823C12.7283 23.2226 12.6058 22.8949 12.6058 22.5564V18.053C7.59502 18.053 5.37116 19.9116 2.57197 23.5251C2.47607 23.6489 2.00031 23.7769 2.00031 23.2122C2.00031 16.2165 3.90102 10.3326 12.6058 10.3326Z"
                        fill="currentColor"></path>
                </svg>
                <span>{{ detailList.sharesChange }}</span>
            </div>
        </div>
        <div class="video-toolbar-right">
            <div class="video-toolbar-right-wrap  hover-blue change-color" @click="$util.goBlank('manuscript_complaint')">
                <svg data-v-67e5402c="" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor" class="video-toolbar-item-right-icon">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M9.40194 3.75C10.5566 1.74999 13.4434 1.75001 14.5981 3.75L21.7428 16.125C22.8975 18.125 21.4541 20.625 19.1447 20.625H4.8553C2.5459 20.625 1.10253 18.125 2.25723 16.125L9.40194 3.75ZM12.866 4.75C12.4811 4.08333 11.5189 4.08333 11.134 4.75L3.98928 17.125C3.60438 17.7917 4.08551 18.625 4.8553 18.625H19.1447C19.9145 18.625 20.3957 17.7917 20.0108 17.125L12.866 4.75Z">
                    </path>
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M12 8C12.4142 8 12.75 8.33579 12.75 8.75V13.75C12.75 14.1642 12.4142 14.5 12 14.5C11.5858 14.5 11.25 14.1642 11.25 13.75V8.75C11.25 8.33579 11.5858 8 12 8Z">
                    </path>
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M12 15.5C12.4142 15.5 12.75 15.8358 12.75 16.25V16.75C12.75 17.1642 12.4142 17.5 12 17.5C11.5858 17.5 11.25 17.1642 11.25 16.75V16.25C11.25 15.8358 11.5858 15.5 12 15.5Z">
                    </path>
                </svg>
                <span>稿件投诉</span>
            </div>
            <div class="video-toolbar-right-wrap  hover-blue change-color" @click="$util.goBlank('take_notes')"
                style="margin-right: 0;">
                <svg data-v-f362968c="" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor" class="video-toolbar-item-right-icon">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M6.75 10C6.75 9.58579 7.08579 9.25 7.5 9.25H16.5C16.9142 9.25 17.25 9.58579 17.25 10C17.25 10.4142 16.9142 10.75 16.5 10.75H7.5C7.08579 10.75 6.75 10.4142 6.75 10Z">
                    </path>
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M6.75 14C6.75 13.5858 7.08579 13.25 7.5 13.25H13C13.4142 13.25 13.75 13.5858 13.75 14C13.75 14.4142 13.4142 14.75 13 14.75H7.5C7.08579 14.75 6.75 14.4142 6.75 14Z">
                    </path>
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M12 5.25C9.48998 5.25 7.29811 5.3777 5.75109 5.50315C4.79223 5.58091 4.05407 6.31053 3.96899 7.25687C3.85555 8.51874 3.75 10.1822 3.75 12C3.75 13.8178 3.85555 15.4813 3.96899 16.7431C4.05408 17.6895 4.79214 18.4191 5.75095 18.4968C7.17292 18.6122 9.14013 18.7294 11.3987 18.7476C11.951 18.752 12.3951 19.2033 12.3906 19.7556C12.3862 20.3079 11.9349 20.752 11.3826 20.7475C9.06584 20.7289 7.04905 20.6087 5.58929 20.4903C3.67182 20.3348 2.15034 18.8499 1.97703 16.9222C1.8597 15.6172 1.75 13.892 1.75 12C1.75 10.108 1.8597 8.38283 1.97703 7.07779C2.15034 5.15 3.67203 3.66518 5.58944 3.50969C7.17721 3.38094 9.42438 3.25 12 3.25C14.5759 3.25 16.8232 3.38096 18.411 3.50973C20.3281 3.6652 21.8497 5.14946 22.0231 7.07716C22.1127 8.07392 22.1977 9.31512 22.233 10.6888C22.2471 11.2409 21.811 11.6999 21.2589 11.7141C20.7068 11.7282 20.2478 11.2921 20.2336 10.74C20.1997 9.41683 20.1177 8.21901 20.0311 7.25626C19.946 6.31026 19.2081 5.58094 18.2494 5.50319C16.7023 5.37772 14.5103 5.25 12 5.25Z">
                    </path>
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M18.2557 13.3102C19.0368 12.5292 20.3031 12.5292 21.0841 13.3102L22.4983 14.7244C23.2794 15.5055 23.2794 16.7718 22.4983 17.5528L18.5486 21.5026C18.1735 21.8777 17.6648 22.0884 17.1344 22.0884L15.0702 22.0884C14.3246 22.0884 13.7202 21.484 13.7202 20.7384V18.6742C13.7202 18.1437 13.9309 17.635 14.306 17.26L18.2557 13.3102ZM21.0841 16.1386L19.6699 14.7244L15.7202 18.6742L15.7202 20.0884L17.1344 20.0884L21.0841 16.1386Z">
                    </path>
                </svg>
                <span>记笔记</span>
            </div>
        </div>
    </div>
</template>

<script>
import { inject, reactive,getCurrentInstance, ref ,onMounted} from 'vue';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';
export default {
    name: 'toolbarContainer',
    setup() {
        const data = reactive({
            isLike: false,
            isDone: true
        })
        const route = useRoute();
        const store = useStore();
        const detailList = inject('detailList')
        const getDetail = inject('getDetail')
        const like_cnv = ref(null);
        const globalProperties = getCurrentInstance().appContext.config.globalProperties;
        const initFrame = function (cnv, image) {
            cnv.width = 360
            cnv.height = 360
            const cxt = cnv.getContext("2d");
            const len = image.length;
            
            let i = 0;
            let lastTime = null;
            let frameId;
            const frame = function (timestamp) {
                if (!lastTime) {
                    lastTime = timestamp;
                }
                const timeDiff = timestamp - lastTime;
                if (timeDiff > 1000 / 15) { // 控制帧率为 15fps
                    const img = new Image();
                    img.src = image[i % len];
                    cxt.clearRect(0, 0, cnv.width, cnv.height);
                    cxt.drawImage(img, 0, 0);
                    if (i == len * 4 - 1) {
                        data.isDone = true
                        cancelAnimationFrame(frameId);
                        return
                    } else {
                        i++;
                        frameId = requestAnimationFrame(frame);
                    }
                    lastTime = timestamp;
                } else {
                    frameId = requestAnimationFrame(frame);
                }
            }
            frameId = requestAnimationFrame(frame);
        }
        const changeLike = async function () {
            // 更新数据库
            // 更新like数
            let res = await globalProperties.$utils.post('user/changeLike', { id: route.params.id, isAdd: !data.isLike })
            // token过期，重新登录
            if (res.code == 401) {
                store.commit('logout')
                store.commit('changeLogView')
                return
            }
            if (res.code != 10000) return
            data.isLike = !data.isLike
            // 点赞动画
            if (data.isLike) {
                data.isDone = false
                initFrame(like_cnv.value, data.like_image)
            }
            getDetail()
            // 更新用户like数组
            console.log(store.state.userInfo.id);
            res = await globalProperties.$utils.get('video/getUsers/' + store.state.userInfo.id)
          
            console.log('res', res);
            let arrLike
            if (res.data.like) {
                arrLike = res.data.like.split(',')
            } else {
                arrLike = []
            }
            if (data.isLike) {
                arrLike.push(route.params.id)
            } else {
                let num = arrLike.findIndex(item => item == route.params.id)
                arrLike.splice(num, 1)
            }
            arrLike = arrLike.join(',')
            res = await globalProperties.$utils.post('user/changeUserLike', { id: store.state.userInfo.id, arrLike: arrLike })
        }
        const getLike = async function () {
            //用户是否点赞
            if (store.state.userInfo) {
                console.log( store.state.userInfo.id)
                let res = await globalProperties.$utils.get('video/getUsers/' + store.state.userInfo.id)
                
                if (res.data.like) {
                    let arrLike = res.data.like.split(',')
                    if (arrLike.includes(route.params.id)) {
                        data.isLike = true
                    }
                }
            }
        }

        onMounted(() => {
            // 获取点赞的状态
            getLike()
        })
        return{
        data,like_cnv,changeLike,detailList }
    }
}
   

</script>

<style scoped>
.active-blue {
    color: #00AEEC;
    fill: #00AEEC;
}

.video-toolbar-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 18px;
    padding-bottom: 12px;
    line-height: 28px;
    border-bottom: 1px solid #E3E5E7;
}

.video-toolbar-left {
    position: relative;
    display: flex;
    align-items: center;
    font-size: 13px;
    color: #62666c;
    font-weight: 500;
}

.video-toolbar-right {
    position: relative;
    display: flex;
    align-items: center;
    font-size: 13px;
    color: #61666d;
}

.video-toolbar-left-wrap {
    position: relative;
    margin-right: 30px;
    display: flex;
    align-items: center;
    cursor: pointer;
}

.video-toolbar-item-left-icon {
    width: 28px;
    height: 28px;
    margin-right: 8px;
}

.video-toolbar-right-wrap {
    margin-right: 18px;
    display: flex;
    align-items: center;
    cursor: pointer;
}

.video-toolbar-item-right-icon {
    width: 20px;
    height: 20px;
    margin-right: 6px;
}

.like-container {
    position: absolute;
    z-index: 9999;
    bottom: -140px;
    left: -50px;
    pointer-events: none;
}
</style>