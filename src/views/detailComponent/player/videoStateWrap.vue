<template>
    <div class="bpx-player-state-wrap">
        <div v-show="!isPlay" @click="$parent.changePlay" class="bpx-player-state-play"></div>
    </div>
</template>

<script>

export default {
    name: 'videoStateWrap',
    props: [
        "isPlay"
    ],
    data() {
        return {

        }
    },

}
</script>

<style scoped>
.bpx-player-state-wrap {
    position: absolute;
    bottom: 62px;
    right: 34px;
    cursor: pointer;
}

.bpx-player-state-play {
    background: url(//s1.hdslb.com/bfs/static/player/img/play.svg) 50% no-repeat;
    display: block;
    height: 64px;
    width: 64px;
}
</style>