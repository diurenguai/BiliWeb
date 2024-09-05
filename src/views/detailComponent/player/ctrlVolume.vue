<template>
    <div class="bpx-player-ctrl-btn bpx-player-ctrl-volume" ref="volumeCtrlRef">
      <span
        ref="volumeSpanRef"
        class="bpx-common-svg-icon"
        @mousedown="changeMuted"
        @mouseenter="showMenu"
      >
        <svg v-if="$store.state.videoInfo.isMuted" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-volume-mute-fill" viewBox="0 0 16 16">
          <path d="M6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06zm7.137 2.096a.5.5 0 0 1 0 .708L12.207 8l1.647 1.646a.5.5 0 0 1-.708.708L11.5 8.707l-1.646 1.647a.5.5 0 0 1-.708-.708L10.793 8 9.146 6.354a.5.5 0 1 1 .708-.708L11.5 7.293l1.646-1.647a.5.5 0 0 1 .708 0z" />
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-volume-up-fill" viewBox="0 0 16 16">
          <path d="M11.536 14.01A8.473 8.473 0 0 0 14.026 8a8.473 8.473 0 0 0-2.49-6.01l-.708.707A7.476 7.476 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303l.708.707z" />
          <path d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.483 5.483 0 0 1 11.025 8a5.483 5.483 0 0 1-1.61 3.89l.706.706z" />
          <path d="M8.707 11.182A4.486 4.486 0 0 0 10.025 8a4.486 4.486 0 0 0-1.318-3.182L8 5.525A3.489 3.489 0 0 1 9.025 8 3.49 3.49 0 0 1 8 10.475l.707.707zM6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06z" />
        </svg>
      </span>
      <div class="bpx-player-ctrl-volume-wrapper" @mouseleave="hideMenu" v-show="data.isShow">
        <div class="bpx-player-ctrl-volume-box" ref="volumeBoxRef" @click="volChanging">
          <div class="bpx-player-ctrl-volume-number">{{ data.currentVol }}</div>
          <div class="bpx-player-ctrl-volume-progress">
            <div class="bui-area">
              <div class="bui-track">
                <div class="bui-bar-wrap" ref="volBarRef"></div>
                <div class="bui-thumb" ref="volBtnRef" @mousedown="volChangeBegin"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="wrapper"></div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref, reactive, onMounted, } from 'vue';
  import { useStore } from 'vuex';
  
  export default {
    name: 'CtrlVolume',
    setup(props, { emit }) {
      const data = reactive({
        currentVol: 0,
        isShow: false,
        isMuted: false,
        defaultVol: 100,
        volBtnHeight: 0,
        volBarHeight: 0,
        barLength: 0,
      });
      
      const volumeCtrlRef = ref(null);
      const volumeBoxRef = ref(null);
      const volBarRef = ref(null);
      const volBtnRef = ref(null);
      const volumeSpanRef = ref(null);
  
      const store = useStore();
      
      const getVolBtnY = () => {
        return volBtnRef.value.getBoundingClientRect().top + window.pageYOffset;
      };
  
      const volChanging = (e) => {
        let value = data.currentVol * (data.barLength / 100) + getVolBtnY() + (data.volBtnHeight / 2) - e.pageY;
        if (value <= 0) {
          value = 0;
          if (!data.isMuted) {
            store.commit('changeMuted');
            data.isMuted = true;
          }
        } else {
          if (value > data.barLength) {
            value = data.barLength;
          }
          if (data.isMuted) {
            store.commit('changeMuted');
            data.isMuted = false;
          }
        }
        data.currentVol = Math.floor(value / (data.barLength / 100));
        store.commit('setCurrentVol', data.currentVol);
        emit('changeVol', data.currentVol / 100);
        volBtnRef.value.style.transform = `translateY(-${value}px)`;
      };
  
      const volChangeBegin = () => {
        document.addEventListener('mousemove', volChanging);
        document.addEventListener('mouseup', volChangeEnd);
      };
  
      const volChangeEnd = () => {
        document.removeEventListener('mousemove', volChanging);
        document.removeEventListener('mouseup', volChangeEnd);
      };
  
      const changeMuted = () => {
        data.isMuted = !data.isMuted;
        store.commit('changeMuted');
        data.currentVol = data.isMuted ? 0 : data.defaultVol;
        const transformNum = data.isMuted ? 0 : data.defaultVol * (data.barLength / 100);
        store.commit('setCurrentVol', data.currentVol);
        emit('changeVol', data.currentVol / 100);
        volBtnRef.value.style.transform = `translateY(-${transformNum}px)`;
      };
  
      const volumeBoxChange = (isHidden) => {
        if (isHidden) {
          volumeBoxRef.value.style.visibility = 'hidden';
        } else {
          volumeBoxRef.value.style.visibility = 'visible';
        }
      };
  
      const init = () => {
        data.volBtnHeight = volBtnRef.value.getBoundingClientRect().height;
        data.volBarHeight = volBarRef.value.getBoundingClientRect().height;
        data.barLength = data.volBarHeight - data.volBtnHeight;
        data.currentVol = store.state.videoInfo.currentVol;
        data.isMuted = store.state.videoInfo.isMuted;
        data.defaultVol = store.state.videoInfo.defaultVol;
        emit('changeVol', data.currentVol / 100);
      };
  
      const showMenu = () => {
        data.isShow = true;
      };
  
      const hideMenu = () => {
        data.isShow = false;
      };
  
      onMounted(() => {
        init();
      });
  
      return {
        data,
        volumeCtrlRef,
        volumeBoxRef,
        volBarRef,
        volBtnRef,
        volumeSpanRef,
        volChangeBegin,
        changeMuted,
        volumeBoxChange,
        showMenu,
        hideMenu
      };
    }
  };
  </script>
  
  <style scoped>
  /* Your existing styles here */
  </style>
  