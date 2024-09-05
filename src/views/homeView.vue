<template >
 <meta name="viewport" content="width=device-width, initial-scale=1.0" style="overflow: hidden;" />
 <header>
    <div class="home-navigator">
      <headVideo ref="headVideoComponent"></headVideo>
      <homeNav :class="navClasses"></homeNav>
    </div>
 </header>
  <body  >
    <homeList></homeList>
       <homeVideo></homeVideo>
  </body>
  
</template>


<script setup>
import { ref, onMounted, onUnmounted,computed  } from 'vue'
// import btnCard from "./btnLog";
import homeVideo from "./home/homeVideo.vue";
import homeNav from "./home/homeNav.vue";
import headVideo from "./home/headVideo.vue";
import homeList from "./home/homeList.vue";

// 响应式变量
const isVideoInView = ref(false);
const headVideoComponent = ref(null);
// 处理 IntersectionObserver 回调
const handleIntersection = (entries) => {
  entries.forEach(entry => {
    console.log(entry.isIntersecting)
    if (entry.isIntersecting) {
      isVideoInView.value = true;
    } else {
      isVideoInView.value = false;
    }
  });
};
const navClasses = computed(() => ({
    'home-Nav': true,
  'homeNavRoll':!isVideoInView.value
}))

// 创建 IntersectionObserver 实例
let observer = null;

onMounted(() => {
  observer = new IntersectionObserver(handleIntersection, {
    threshold: 0.1 // 当至少 10% 的组件在视口内时触发回调
  });
  // 获取组件实例并开始观察
  // const headVideoComponent = document.querySelector('headVideo');
  if (headVideoComponent.value) {
    observer.observe(headVideoComponent.value.videoElement);
    
  }
});

onUnmounted(() => {
  // 组件卸载时，停止观察
  if (observer) {
    // const headVideoComponent = document.querySelector('headVideo');

    if (headVideoComponent.value) {
      observer.unobserve(headVideoComponent.value.videoElement);
    }
  }
});

</script>
<style lang="scss">
.home-navigator{
  position: relative;;
}
.home-Nav{
    position: fixed; /* 固定在视口顶部 */
    padding-top: 10px;
    z-index: 10;
    top: 0px;
    width:100%;
    display: flex;
    flex-direction: row;
    justify-content:space-between;
    flex-wrap:nowrap
    /* background-color: white; */
}

</style>

