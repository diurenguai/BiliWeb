<template>
    <div class="bpx-player-ctrl-btn bpx-player-ctrl-playbackrate">
        <div class="bpx-player-ctrl-playbackrate-result" @mouseenter="showMenu">{{ rateText }}</div>
        <div class="bpx-player-ctrl-playbackrate-wrapper" @mouseleave="hideMenu" v-show="isShow">
            <ul class="bpx-player-ctrl-playbackrate-menu" @click="changeRate">
                <li class="bpx-player-ctrl-playbackrate-menu-item change-color" data-rate="2"
                    :class="currentRate == 2 ? 'bpx-state-active' : ''">2.0x
                </li>
                <li class="bpx-player-ctrl-playbackrate-menu-item change-color" data-rate="1.5"
                    :class="currentRate == 1.5 ? 'bpx-state-active' : ''">
                    1.5x</li>
                <li class="bpx-player-ctrl-playbackrate-menu-item change-color" data-rate="1.25"
                    :class="currentRate == 1.25 ? 'bpx-state-active' : ''">1.25x</li>
                <li class="bpx-player-ctrl-playbackrate-menu-item change-color" data-rate="1"
                    :class="currentRate == 1 ? 'bpx-state-active' : ''">1.0x
                </li>
                <li class="bpx-player-ctrl-playbackrate-menu-item change-color" data-rate="0.75"
                    :class="currentRate == 0.75 ? 'bpx-state-active' : ''">0.75x</li>
                <li class="bpx-player-ctrl-playbackrate-menu-item change-color" data-rate="0.5"
                    :class="currentRate == 0.5 ? 'bpx-state-active' : ''">
                    0.5x</li>
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
const currentRate = ref(null)
const isShow = ref(false)

// 计算属性
const rateText = computed(() => {
  let value
  switch (currentRate.value) {
    case 0.5:
      value = '0.5x'
      break
    case 0.75:
      value = '0.75x'
      break
    case 1:
      value = '1.0x'
      break
    case 1.25:
      value = '1.25x'
      break
    case 1.5:
      value = '1.5x'
      break
    case 2:
      value = '2.0x'
      break
    default:
      break
  }
  return value
})

// 选项数据
// const rateOptions = [
//   { value: 0.5, text: '0.5x' },
//   { value: 0.75, text: '0.75x' },
//   { value: 1, text: '1.0x' },
//   { value: 1.25, text: '1.25x' },
//   { value: 1.5, text: '1.5x' },
//   { value: 2, text: '2.0x' }
// ]
const changeRateP = inject('changeRateP');
// 方法
const changeRate = (e) => {
  const target = e.target
  if (target.nodeName !== 'LI') return
  currentRate.value = +target.dataset.rate
  store.commit('setRate', currentRate.value)

  // 访问父组件的方法
  changeRateP(currentRate.value)
  
}

const initRate = () => {
  currentRate.value = store.state.videoInfo.currentRate

  
    changeRateP(currentRate.value)

}

const showMenu = () => {
  isShow.value = true
}

const hideMenu = () => {
  isShow.value = false
}

// 初始化
onMounted(() => {
  initRate()
})
</script>

<style scoped>
.bpx-player-ctrl-playbackrate-wrapper {
    position: absolute;
    transform: translateX(-50%);
    width: 70px;
    font-size: 14px;
    font-weight: normal;
    bottom: 0;
    left: 50%;
}

.bpx-player-ctrl-playbackrate-menu {
    background-color: hsla(0, 0%, 8%, .9);
    border-radius: 2px;
    text-align: center;
}


.bpx-player-ctrl-playbackrate-menu-item {
    cursor: pointer;
    height: 36px;
    line-height: 36px;
    position: relative;
}

.bpx-player-ctrl-playbackrate-menu-item:hover {
    background-color: hsla(0, 0%, 100%, .1);
}
</style>

