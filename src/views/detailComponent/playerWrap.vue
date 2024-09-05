<template>
    <div class="playerWrap">
        <div class="bpx-player-primary-area">
            <videoArea></videoArea>
            <sendingArea></sendingArea>
        </div>
    </div>
</template>

<script>
import videoArea from './player/videoArea.vue'
import sendingArea from './player/sendingArea.vue'
export default {
    name: 'playerWrap',
    components: {
        videoArea,
        sendingArea
    },
    data() {
        return {

        }
    },

}
</script>


<style scoped>
.playerWrap {
    height: auto;
}

.bpx-player-primary-area {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
}
</style>