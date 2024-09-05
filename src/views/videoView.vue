<template>
  <div class="biliMainHeader">
    <detailNav class="homeNavRoll  videoNav"></detailNav>
  </div>
  <div class="video-container">
    <div class="video-container-left">
      <leftContainer ></leftContainer>
    </div>
    
    <div class="video-container-right">
      <rightContainer ></rightContainer>
    </div>
    
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted, computed,provide,getCurrentInstance } from 'vue';
import detailNav from './detailComponent/detailNav.vue';
import leftContainer from './detailComponent/leftContainer.vue';
import rightContainer from './detailComponent/rightContainer.vue';
import io from 'socket.io-client';
import { useRoute } from 'vue-router';
export default {
  name:"videoView",
  components: {
    detailNav,
    leftContainer,
    rightContainer
  },
  setup( ) {
    // Setup reactive state
    const detailList = ref([]);
    const numClients = ref(0);
    const isInit = ref(false);
    const socket = ref(null);
    const route = useRoute();
    const globalProperties = getCurrentInstance().appContext.config.globalProperties
    const getDetail = async () => {
      const res = await globalProperties.$utils.get('video/getDetail/' + route.params.id); // 假设你是这样做的
      const data = await res;
      if (data.code !== 10000) return;
      detailList.value = data.data;

      if (!isInit.value) {
        initSocket();
      }
    };

    const initSocket = () => {
      isInit.value = true;
      socket.value = io('http://localhost:3001');
      
      socket.value.on('connect', () => {
        console.log('Connected to server');
      });
      socket.value.on('disconnect', () => {
        console.log('Disconnected from server');
      });
      socket.value.emit('join room', detailList.value.id);
      window.addEventListener('beforeunload', () => {
        socket.value.emit('leave room', detailList.value.id);
      });
      socket.value.on('room info', (numClients) => {
        console.log('room info', numClients);
        numClients.value = numClients;
      });
    };

    onMounted(() => {
      getDetail();
    });

    onUnmounted(() => {
      if (socket.value) {
        socket.value.emit('leave room', detailList.value.id);
        socket.value.disconnect();
      }
    });

    // Provide computed properties for child components
    const provideData = {
      detailList: computed(() => detailList.value),
      numClients: computed(() => numClients.value)
      };
      provide('detailList', provideData.detailList);
    provide('numClients', provideData.numClients);
    provide('getDetail', getDetail);
    return provideData;
  }
};
</script>

<style lang="scss">
.biliMainHeader {
  height: 64px;
}
.videoNav{
  display: flex;
  justify-content: space-between;
  width: 100%;
  min-width: 1000px;

}
.video-container {
  width: 100%;
  min-width: 1080px;
  padding: 0 10px;
  display: flex;
  justify-content:center;
  position: relative;
  &-left{
    width: 60%;
  }
  &-right{
    width: 20%;
  }
}
</style>
  