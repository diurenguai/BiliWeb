<template>
    <div class="bpx-player-top-wrap">
        <div class="bpx-player-top-left-title" v-show="isFull">
            {{ detailList.title }}
        </div>
        <div class="bpx-player-top-left-follow">
            <img class="bpx-player-follow-face"
                :src="$utils.url.load + '//i1.hdslb.com/bfs/face/629fbb98f982703efbe7fd675d341ccfb64e47a0.jpg@96w.webp'">
            <span class="bpx-player-follow-icon">
                <span class="bpx-common-svg-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" fill="currentColor" data-pointer="none"
                        style="enable-background:new 0 0 16 16" viewBox="0 0 16 16">
                        <path
                            d="M7.25 7.25v-4.5a.75.75 0 0 1 1.5 0v4.5h4.5a.75.75 0 0 1 0 1.5h-4.5v4.5a.75.75 0 0 1-1.5 0v-4.5h-4.5a.75.75 0 0 1 0-1.5h4.5z">
                        </path>
                    </svg>
                </span>
            </span>
            <span class="bpx-player-follow-text">关注</span>
        </div>
    </div>
</template>


<script>
import {inject,getCurrentInstance} from 'vue'
export default {
    name: 'videoTopWrap',
    props: [
        "isFull"
    ],
    setup() {
        const detailList = inject("detailList")
        const globalProperties = getCurrentInstance().appContext.config.globalProperties; // 获取全局挂载
        return{
                detailList,globalProperties
        }
    }
   

}
</script>

<style scoped>
.bpx-player-top-wrap {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 5;
    padding-top: 18px;
    padding-left: 12px;
}

.bpx-player-top-left-title {
    font-weight: 500;
    font-size: 20px;
    margin-bottom: 12px;
    margin: 0 0 8px;
    color: #fff;
}

.bpx-player-top-left-follow {
    align-items: center;
    background-color: rgba(0, 0, 0, .4);
    border-radius: 26px;
    cursor: pointer;
    font-size: 12px;
    height: 32px;
    line-height: 32px;
    text-align: center;
    width: 89px;
    z-index: 2;
    display: flex;
    fill: #fff;
    color: #fff;
}

.bpx-player-follow-face {
    border-radius: 50%;
    flex: none;
    height: 24px;
    margin-left: 4px;
    /* vertical-align: bottom; */
    width: 24px;
}

.bpx-player-follow-icon {
    display: inline-flex;
    flex: none;
    margin-left: 8px;
    width: 14px;
    height: 14px;

}

.bpx-common-svg-icon {
    display: inline-flex;
    height: 100%;
    width: 100%;
}

.bpx-common-svg-icon svg {
    height: 100%;
    width: 100%;
}

.bpx-player-follow-text {
    flex: none;
    margin-left: 5px;
}

.bpx-player-top-issue {
    cursor: pointer;
    height: 24px;
    line-height: 24px;
    margin: 18px 12px 0;
    min-width: 36px;
    text-align: center;
    z-index: 2;
}
</style>