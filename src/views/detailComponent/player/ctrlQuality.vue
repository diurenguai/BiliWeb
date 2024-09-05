<template>
    <div class="bpx-player-ctrl-btn bpx-player-ctrl-quality" ref="ctrlBtn">
        <div class="bpx-player-ctrl-quality-result" @mouseenter="showMenu">{{ qualityText }}</div>
        <div class="bpx-player-ctrl-quality-wrapper" @mouseleave="hideMenu" v-show="isShow">
            <ul class="bpx-player-ctrl-quality-menu" ref="menu" @click="changeQuality">
                <li class="bpx-player-ctrl-quality-menu-item change-color" data-quality="4"
                    :class="currentQuality == 4 ? 'bpx-state-active' : ''">1080P高码率
                </li>
                <li class="bpx-player-ctrl-quality-menu-item change-color" data-quality="3"
                    :class="currentQuality == 3 ? 'bpx-state-active' : ''">1080P高清
                </li>
                <li class="bpx-player-ctrl-quality-menu-item change-color" data-quality="2"
                    :class="currentQuality == 2 ? 'bpx-state-active' : ''">720P高清
                </li>
                <li class="bpx-player-ctrl-quality-menu-item change-color" data-quality="1"
                    :class="currentQuality == 1 ? 'bpx-state-active' : ''">480P清晰
                </li>
                <li class="bpx-player-ctrl-quality-menu-item change-color" data-quality="0"
                    :class="currentQuality == 0 ? 'bpx-state-active' : ''">360P流畅
                </li>
                <li class="bpx-player-ctrl-quality-menu-item change-color" data-quality="-1"
                    :class="currentQuality == -1 ? 'bpx-state-active' : ''">自动
                </li>
            </ul>
            <div class="wrapper"></div>
        </div>

    </div>
</template>

<script setup>
import { ref, computed, onMounted, inject } from 'vue'
import { useStore } from 'vuex'

// 使用 Vuex store
const store = useStore()

// 数据和方法
const currentQuality = ref(null)
const isShow = ref(false)

// 计算属性
const qualityText = computed(() => {
  let value
  switch (currentQuality.value) {
    case -1:
      value = '自动'
      break
    case 0:
      value = '360P流畅'
      break
    case 1:
      value = '480P清晰'
      break
    case 2:
      value = '720P高清'
      break
    case 3:
      value = '1080P高清'
      break
    case 4:
      value = '1080P高码率'
      break
    default:
      break
  }
  return value
})

// 选项数据
// const qualityOptions = [
//   { value: -1, text: '自动' },
//   { value: 0, text: '360P流畅' },
//   { value: 1, text: '480P清晰' },
//   { value: 2, text: '720P高清' },
//   { value: 3, text: '1080P高清' },
//   { value: 4, text: '1080P高码率' }
// ]
const changeQualityP = inject('changeQualityP')
// 方法
const changeQuality = (e) => {
  const target = e.target
  if (target.nodeName !== 'LI') return
  currentQuality.value = +target.dataset.quality
  store.commit('setQuality', currentQuality.value)
  changeQualityP(currentQuality.value);
  
}

const initQuality = () => {
  currentQuality.value = store.state.videoInfo.currentQuality
  changeQualityP(currentQuality.value)
  
}

const showMenu = () => {
  isShow.value = true
}

const hideMenu = () => {
  isShow.value = false
}

// 初始化
onMounted(() => {
  const initVideoP = inject('initVideoP')
  initVideoP()
  initQuality()
})
</script>

<style scoped>
.bpx-player-ctrl-quality-wrapper {
    transform: translateX(-50%);
    width: 145px;
    font-size: 14px;
    font-weight: normal;
    bottom: 0;
    left: 50%;
    position: absolute;
}

.bpx-player-ctrl-quality {
    flex: none;
    margin-right: 10px;
}


.bpx-player-ctrl-quality-menu {
    background-color: hsla(0, 0%, 8%, .9);
    border-radius: 2px;
    text-align: center;

}

.bpx-player-ctrl-quality-menu-item {
    cursor: pointer;
    height: 36px;
    line-height: 36px;
    position: relative;
}

.bpx-player-ctrl-quality-menu-item:hover {
    background-color: hsla(0, 0%, 100%, .1);
}

.bpx-state-active {
    color: #00a1d6;
}
</style>

