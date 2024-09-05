<template>
    <div class="bpx-player-sending-area">
        <div class="bpx-player-sending-bar">
            <div class="bpx-player-video-info">{{ numClients }} 人正在看，已装填 {{ detailList.danmakuCount }} 条弹幕</div>
            <dmRoot></dmRoot>
        </div>
    </div>
</template>

<script>
import dmRoot from './dmRoot.vue'

export default {
    name: 'sendingArea',
    components: {
        dmRoot
    },
    inject: [
        'detailList',
        'numClients'
    ],

}
</script>


<style scoped>
.bpx-player-sending-area {
    box-shadow: 0 2px 4px #00000014;
}

.bpx-player-sending-bar {
    background: #fff;
    display: flex;
    font-size: 12px;
    height: 46px;
    padding: 0 12px 0 20px;
    justify-content: space-between;
    align-items: center;
}

.bpx-player-video-info {
    margin-right: 24px;
    height: 16px;
    color: #62666c;
}
</style>