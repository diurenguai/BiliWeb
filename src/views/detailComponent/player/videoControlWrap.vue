<template>
    <div class="bpx-player-control-wrap">
        <div class="bpx-player-control-mask"></div>
        <div class="bpx-player-control-entity">
            <div class="bpx-player-control-top">
                <progressWrap :duration="duration" :currentTime="currentTime" :bufferedTime="bufferedTime"></progressWrap>
            </div>
            <div class="bpx-player-control-bottom">
                <div class="bpx-player-control-bottom-left">
                    <div class="bpx-player-ctrl-btn-icon" @click="$parent.changePlay">
                        <svg v-if="isPlay" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"
                            preserveAspectRatio="xMidYMid meet"
                            style="width: 100%; height: 100%; transform: translate3d(0px, 0px, 0px);">
                            <defs>
                                <clipPath id="__lottie_element_356">
                                    <rect width="28" height="28" x="0" y="0"></rect>
                                </clipPath>
                            </defs>
                            <g clip-path="url(#__lottie_element_356)">
                                <g transform="matrix(1,0,0,1,14,14)" opacity="1" style="display: block;">
                                    <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                        <path fill="rgb(255,255,255)" fill-opacity="1"
                                            d=" M-5.484000205993652,-10 C-7.953000068664551,-10 -8,-7.984000205993652 -8,-7.984000205993652 C-8,-7.984000205993652 -8.008000373840332,7.984000205993652 -8.008000373840332,7.984000205993652 C-8.008000373840332,7.984000205993652 -7.984000205993652,9.991999626159668 -5.5,9.991999626159668 C-3.0160000324249268,9.991999626159668 -3.003999948501587,7.995999813079834 -3.003999948501587,7.995999813079834 C-3.003999948501587,7.995999813079834 -2.9839999675750732,-8 -2.9839999675750732,-8 C-2.9839999675750732,-8 -3.015000104904175,-10 -5.484000205993652,-10z">
                                        </path>
                                        <path stroke-linecap="butt" stroke-linejoin="miter" fill-opacity="0"
                                            stroke-miterlimit="4" stroke="rgb(255,255,255)" stroke-opacity="1"
                                            stroke-width="0"
                                            d=" M-5.484000205993652,-10 C-7.953000068664551,-10 -8,-7.984000205993652 -8,-7.984000205993652 C-8,-7.984000205993652 -8.008000373840332,7.984000205993652 -8.008000373840332,7.984000205993652 C-8.008000373840332,7.984000205993652 -7.984000205993652,9.991999626159668 -5.5,9.991999626159668 C-3.0160000324249268,9.991999626159668 -3.003999948501587,7.995999813079834 -3.003999948501587,7.995999813079834 C-3.003999948501587,7.995999813079834 -2.9839999675750732,-8 -2.9839999675750732,-8 C-2.9839999675750732,-8 -3.015000104904175,-10 -5.484000205993652,-10z">
                                        </path>
                                    </g>
                                </g>
                                <g transform="matrix(1,0,0,1,24.812000274658203,14)" opacity="1" style="display: block;">
                                    <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                        <path fill="rgb(255,255,255)" fill-opacity="1"
                                            d=" M-5.484000205993652,-10 C-7.953000068664551,-10 -8,-7.984000205993652 -8,-7.984000205993652 C-8,-7.984000205993652 -8.008000373840332,7.984000205993652 -8.008000373840332,7.984000205993652 C-8.008000373840332,7.984000205993652 -7.984000205993652,9.991999626159668 -5.5,9.991999626159668 C-3.0160000324249268,9.991999626159668 -3.003999948501587,7.995999813079834 -3.003999948501587,7.995999813079834 C-3.003999948501587,7.995999813079834 -2.9839999675750732,-8 -2.9839999675750732,-8 C-2.9839999675750732,-8 -3.015000104904175,-10 -5.484000205993652,-10z">
                                        </path>
                                        <path stroke-linecap="butt" stroke-linejoin="miter" fill-opacity="0"
                                            stroke-miterlimit="4" stroke="rgb(255,255,255)" stroke-opacity="1"
                                            stroke-width="0"
                                            d=" M-5.484000205993652,-10 C-7.953000068664551,-10 -8,-7.984000205993652 -8,-7.984000205993652 C-8,-7.984000205993652 -8.008000373840332,7.984000205993652 -8.008000373840332,7.984000205993652 C-8.008000373840332,7.984000205993652 -7.984000205993652,9.991999626159668 -5.5,9.991999626159668 C-3.0160000324249268,9.991999626159668 -3.003999948501587,7.995999813079834 -3.003999948501587,7.995999813079834 C-3.003999948501587,7.995999813079834 -2.9839999675750732,-8 -2.9839999675750732,-8 C-2.9839999675750732,-8 -3.015000104904175,-10 -5.484000205993652,-10z">
                                        </path>
                                    </g>
                                </g>
                                <g transform="matrix(1,0,0,1,4,14)" opacity="4.897315335483654e-9" style="display: block;">
                                    <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                        <path fill="rgb(255,255,255)" fill-opacity="1" d="M0 0"></path>
                                        <path stroke-linecap="butt" stroke-linejoin="miter" fill-opacity="0"
                                            stroke-miterlimit="4" stroke="rgb(255,255,255)" stroke-opacity="1"
                                            stroke-width="0" d="M0 0"></path>
                                    </g>
                                    <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                        <path fill="rgb(255,255,255)" fill-opacity="1"
                                            d=" M-7.031000137329102,-10.875 C-7.031000137329102,-10.875 -8.32800006866455,-11.25 -9.42199993133545,-10.468999862670898 C-10.109999656677246,-9.906999588012695 -10,-7.992000102996826 -10,-7.992000102996826 C-10,-7.992000102996826 -10,8.015999794006348 -10,8.015999794006348 C-10,8.015999794006348 -10.125,10.241999626159668 -9,10.991999626159668 C-7.875,11.741999626159668 -5,10.031000137329102 -5,10.031000137329102 C-5,10.031000137329102 7.968999862670898,1.875 7.968999862670898,1.875 C7.968999862670898,1.875 9,1.062000036239624 9,0 C9,-1.062000036239624 7.968999862670898,-1.937999963760376 7.968999862670898,-1.937999963760376 C7.968999862670898,-1.937999963760376 -7.031000137329102,-10.875 -7.031000137329102,-10.875z">
                                        </path>
                                        <path stroke-linecap="butt" stroke-linejoin="miter" fill-opacity="0"
                                            stroke-miterlimit="4" stroke="rgb(255,255,255)" stroke-opacity="1"
                                            stroke-width="0"
                                            d=" M-7.031000137329102,-10.875 C-7.031000137329102,-10.875 -8.32800006866455,-11.25 -9.42199993133545,-10.468999862670898 C-10.109999656677246,-9.906999588012695 -10,-7.992000102996826 -10,-7.992000102996826 C-10,-7.992000102996826 -10,8.015999794006348 -10,8.015999794006348 C-10,8.015999794006348 -10.125,10.241999626159668 -9,10.991999626159668 C-7.875,11.741999626159668 -5,10.031000137329102 -5,10.031000137329102 C-5,10.031000137329102 7.968999862670898,1.875 7.968999862670898,1.875 C7.968999862670898,1.875 9,1.062000036239624 9,0 C9,-1.062000036239624 7.968999862670898,-1.937999963760376 7.968999862670898,-1.937999963760376 C7.968999862670898,-1.937999963760376 -7.031000137329102,-10.875 -7.031000137329102,-10.875z">
                                        </path>
                                    </g>
                                </g>
                            </g>
                        </svg>
                        <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"
                            preserveAspectRatio="xMidYMid meet"
                            style="width: 100%; height: 100%; transform: translate3d(0px, 0px, 0px);">
                            <defs>
                                <clipPath id="__lottie_element_283">
                                    <rect width="28" height="28" x="0" y="0"></rect>
                                </clipPath>
                            </defs>
                            <g clip-path="url(#__lottie_element_283)">
                                <g transform="matrix(0,0,0,0,19.437999725341797,14.125)" opacity="4.809484863699254e-9"
                                    style="display: block;">
                                    <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                        <path fill="rgb(255,255,255)" fill-opacity="1"
                                            d=" M-5.484000205993652,-10 C-7.953000068664551,-10 -8,-7.984000205993652 -8,-7.984000205993652 C-8,-7.984000205993652 -8.008000373840332,7.984000205993652 -8.008000373840332,7.984000205993652 C-8.008000373840332,7.984000205993652 -7.984000205993652,9.991999626159668 -5.5,9.991999626159668 C-3.0160000324249268,9.991999626159668 -3.003999948501587,7.995999813079834 -3.003999948501587,7.995999813079834 C-3.003999948501587,7.995999813079834 -2.9839999675750732,-8 -2.9839999675750732,-8 C-2.9839999675750732,-8 -3.015000104904175,-10 -5.484000205993652,-10z">
                                        </path>
                                        <path stroke-linecap="butt" stroke-linejoin="miter" fill-opacity="0"
                                            stroke-miterlimit="4" stroke="rgb(255,255,255)" stroke-opacity="1"
                                            stroke-width="0"
                                            d=" M-5.484000205993652,-10 C-7.953000068664551,-10 -8,-7.984000205993652 -8,-7.984000205993652 C-8,-7.984000205993652 -8.008000373840332,7.984000205993652 -8.008000373840332,7.984000205993652 C-8.008000373840332,7.984000205993652 -7.984000205993652,9.991999626159668 -5.5,9.991999626159668 C-3.0160000324249268,9.991999626159668 -3.003999948501587,7.995999813079834 -3.003999948501587,7.995999813079834 C-3.003999948501587,7.995999813079834 -2.9839999675750732,-8 -2.9839999675750732,-8 C-2.9839999675750732,-8 -3.015000104904175,-10 -5.484000205993652,-10z">
                                        </path>
                                    </g>
                                </g>
                                <g transform="matrix(0.6600375175476074,0,0,0.6600375175476074,22.46451759338379,14)"
                                    opacity="0.010415983723311798" style="display: none;">
                                    <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                        <path fill="rgb(255,255,255)" fill-opacity="1"
                                            d=" M-5.484000205993652,-10 C-7.953000068664551,-10 -8,-7.984000205993652 -8,-7.984000205993652 C-8,-7.984000205993652 -8.008000373840332,7.984000205993652 -8.008000373840332,7.984000205993652 C-8.008000373840332,7.984000205993652 -7.984000205993652,9.991999626159668 -5.5,9.991999626159668 C-3.0160000324249268,9.991999626159668 -3.003999948501587,7.995999813079834 -3.003999948501587,7.995999813079834 C-3.003999948501587,7.995999813079834 -2.9839999675750732,-8 -2.9839999675750732,-8 C-2.9839999675750732,-8 -3.015000104904175,-10 -5.484000205993652,-10z">
                                        </path>
                                        <path stroke-linecap="butt" stroke-linejoin="miter" fill-opacity="0"
                                            stroke-miterlimit="4" stroke="rgb(255,255,255)" stroke-opacity="1"
                                            stroke-width="0"
                                            d=" M-5.484000205993652,-10 C-7.953000068664551,-10 -8,-7.984000205993652 -8,-7.984000205993652 C-8,-7.984000205993652 -8.008000373840332,7.984000205993652 -8.008000373840332,7.984000205993652 C-8.008000373840332,7.984000205993652 -7.984000205993652,9.991999626159668 -5.5,9.991999626159668 C-3.0160000324249268,9.991999626159668 -3.003999948501587,7.995999813079834 -3.003999948501587,7.995999813079834 C-3.003999948501587,7.995999813079834 -2.9839999675750732,-8 -2.9839999675750732,-8 C-2.9839999675750732,-8 -3.015000104904175,-10 -5.484000205993652,-10z">
                                        </path>
                                    </g>
                                </g>
                                <g style="display: block;" transform="matrix(1,0,0,1,14,14)" opacity="1">
                                    <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                        <path fill="rgb(255,255,255)" fill-opacity="1" d="M0 0"></path>
                                        <path stroke-linecap="butt" stroke-linejoin="miter" fill-opacity="0"
                                            stroke-miterlimit="4" stroke="rgb(255,255,255)" stroke-opacity="1"
                                            stroke-width="0" d="M0 0"></path>
                                    </g>
                                    <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                        <path fill="rgb(255,255,255)" fill-opacity="1"
                                            d=" M-7.031000137329102,-10.875 C-7.031000137329102,-10.875 -8.32800006866455,-11.25 -9.42199993133545,-10.468999862670898 C-10.109999656677246,-9.906999588012695 -10,-7.992000102996826 -10,-7.992000102996826 C-10,-7.992000102996826 -10,8.015999794006348 -10,8.015999794006348 C-10,8.015999794006348 -10.125,10.241999626159668 -9,10.991999626159668 C-7.875,11.741999626159668 -5,10.031000137329102 -5,10.031000137329102 C-5,10.031000137329102 7.968999862670898,1.875 7.968999862670898,1.875 C7.968999862670898,1.875 9,1.062000036239624 9,0 C9,-1.062000036239624 7.968999862670898,-1.937999963760376 7.968999862670898,-1.937999963760376 C7.968999862670898,-1.937999963760376 -7.031000137329102,-10.875 -7.031000137329102,-10.875z">
                                        </path>
                                        <path stroke-linecap="butt" stroke-linejoin="miter" fill-opacity="0"
                                            stroke-miterlimit="4" stroke="rgb(255,255,255)" stroke-opacity="1"
                                            stroke-width="0"
                                            d=" M-7.031000137329102,-10.875 C-7.031000137329102,-10.875 -8.32800006866455,-11.25 -9.42199993133545,-10.468999862670898 C-10.109999656677246,-9.906999588012695 -10,-7.992000102996826 -10,-7.992000102996826 C-10,-7.992000102996826 -10,8.015999794006348 -10,8.015999794006348 C-10,8.015999794006348 -10.125,10.241999626159668 -9,10.991999626159668 C-7.875,11.741999626159668 -5,10.031000137329102 -5,10.031000137329102 C-5,10.031000137329102 7.968999862670898,1.875 7.968999862670898,1.875 C7.968999862670898,1.875 9,1.062000036239624 9,0 C9,-1.062000036239624 7.968999862670898,-1.937999963760376 7.968999862670898,-1.937999963760376 C7.968999862670898,-1.937999963760376 -7.031000137329102,-10.875 -7.031000137329102,-10.875z">
                                        </path>
                                    </g>
                                </g>
                            </g>
                        </svg>
                    </div>
                    <span class="bpx-player-ctrl-time">{{ currentTimeChange }} / {{ durationChange }}</span>
                </div>
                <!-- <dmRoot v-show="isFull"></dmRoot> -->
                <div class="bpx-player-control-bottom-right">
                    <ctrlQuality></ctrlQuality>
                    <ctrlPlaybackrate></ctrlPlaybackrate>
                    <ctrlVolume></ctrlVolume>
                    <div class="bpx-player-ctrl-btn bpx-player-ctrl-web">
                        <span class="bpx-common-svg-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="bi bi-window-fullscreen" viewBox="0 0 16 16">
                                <path
                                    d="M3 3.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm1.5 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm1 .5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z" />
                                <path
                                    d="M.5 1a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 .5.5h15a.5.5 0 0 0 .5-.5v-13a.5.5 0 0 0-.5-.5H.5ZM1 5V2h14v3H1Zm0 1h14v8H1V6Z" />
                            </svg>
                        </span>
                    </div>
                    <ctrlFull :isFull="isFull"></ctrlFull>
                </div>
            </div>
        </div>
    </div>
</template>


<script setup>
import { computed,defineProps } from 'vue';
import moment from 'moment';
import 'moment-duration-format'; // Ensure this is imported if needed

import ctrlVolume from './ctrlVolume.vue';
import ctrlPlaybackrate from './ctrlPlaybackrate.vue';
import ctrlQuality from './ctrlQuality.vue';
import progressWrap from './progressWrap.vue';
import ctrlFull from './ctrlFull.vue';
// import dmRoot from './dmRoot.vue';

// Props
const props = defineProps({
  isPlay: Boolean,
  isFullWeb: Boolean,
  isFull: Boolean,
  duration: Number,
  currentTime: Number,
  bufferedTime: Number
});

// Computed properties
const durationChange = computed(() => formatTime(props.duration));
const currentTimeChange = computed(() => formatTime(props.currentTime));

// Methods
function formatTime(seconds) {
  const duration = moment.duration(seconds, 'seconds');
  let str;
  if (seconds >= 3600) {
    str = 'HH:mm:ss';
  } else {
    str = 'mm:ss';
  }
  return moment.utc(duration.asMilliseconds()).format(str);
}
</script>

<style>
.wrapper {
    height: 41px;
}

.bpx-player-control-wrap {
    bottom: 0;
    left: 0;
    position: absolute;
    width: 100%;
    z-index: 5;
}

.bpx-player-control-mask {
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAADGCAYAAAAT+OqFAAAAdklEQVQoz42QQQ7AIAgEF/T/D+kbq/RWAlnQyyazA4aoAB4FsBSA/bFjuF1EOL7VbrIrBuusmrt4ZZORfb6ehbWdnRHEIiITaEUKa5EJqUakRSaEYBJSCY2dEstQY7AuxahwXFrvZmWl2rh4JZ07z9dLtesfNj5q0FU3A5ObbwAAAABJRU5ErkJggg==) repeat-x bottom;
    bottom: 0;
    height: 100px;
    left: 0;
    pointer-events: none;
    position: absolute;
    width: 100%;
    z-index: -1;
}


.bpx-player-control-top {
    padding: 0 12px;
    bottom: 44px;
    left: 0;
    position: absolute;
    right: 0;
}


.bpx-player-control-bottom {
    fill: #fff;
    color: hsla(0, 0%, 100%, .8);
    display: flex;
    height: 35px;
    justify-content: space-between;
    line-height: 22px;
    margin: 20px 0 0;
    width: 100%;
    padding: 0 12px;
}

.bpx-player-control-bottom-left {
    display: inline-flex;
    /* flex:none; */
}

.bpx-player-control-bottom-right {
    display: flex;
    justify-content: flex-end;
    font-weight: 600;
}

.bpx-player-ctrl-btn-icon {
    height: 22px;
    width: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}

.bpx-player-ctrl-time {
    font-size: 12px;
    margin-right: 10px;
}

.bpx-player-ctrl-time:hover {
    color: #fff;
}

.bpx-player-ctrl-btn {
    font-size: 14px;
    height: 22px;
    line-height: 22px;
    position: relative;
    text-align: center;
    width: 36px;
    z-index: 2;
    cursor: pointer;
}

.bpx-player-ctrl-btn:hover {
    color: #fff;
}


.bpx-player-ctrl-quality {
    width: auto;
    margin-right: 10px;
}

.bpx-player-ctrl-playbackrate {
    width: 50px;
}

.bpx-player-ctrl-btn :hover svg {
    animation: move .8s;
}


@keyframes move {
    25% {
        transform: translate(2px, 2px);
    }

    50% {
        transform: translate(0px, 0px);
    }

    75% {
        transform: translate(2px, 2px);
    }
}

.bpx-common-svg-icon {
    display: inline-flex;
    height: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: .9;
}

.bpx-common-svg-icon svg {
    height: 100%;
    width: 100%;
}


.bpx-player-ctrl-web svg {
    height: 17px;
    width: 17px;
}

.bpx-state-active {
    color: #00a1d6;
}
</style>