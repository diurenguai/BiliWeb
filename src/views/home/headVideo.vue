!<template >
  <div class="navigator-videoContainer" >
      <video Id="navigator-video" ref="videoElement"
      loop  
      autoplay  
      muted>
      <source class="navigator-video-source" src= '/video/1.webm' type="video/webm">
    </video>
    </div>
</template>

<script setup>
import { ref,onMounted ,defineExpose} from "vue"
var time = 0;
var videoIndex = 0;
var videoSrc = ref('/video/1.webm');
const videoList = [
  '/video/1.webm',
  '/video/2.webm',
  '/video/3.webm',
  '/video/4.webm'
]
const next = function () {
  let video = document.getElementById("navigator-video");
  videoIndex = (videoIndex + 1) % 4;
  videoSrc.value = videoList[videoIndex];
  // console.log(videoSrc.value);
  // video.paly();
  video.src = videoSrc.value;
  // video.play();
}
const run = () => {
  setInterval(()=> {
    if (time == 20) {
      next();
      time = 0;
    }
    time++;
  },200)
}
run();

const videoElement = ref(null);
defineExpose({ videoElement }); // 公开 ref 给父组件


onMounted(() => {
  // 假设只有一个具有"navigator"类的元素  
    const vidContainer = document.getElementsByClassName("navigator-videoContainer")[0];  
    // 使用getElementById获取具有特定ID的元素
    const vid = document.getElementById("navigator-video");  
    vidContainer.addEventListener("mouseenter", function (e) {
      this.x = e.clientX;
      vid.style.transition = "none";
    });
    vidContainer.addEventListener("mousemove", function (e) {
      this._x = e.clientX;
      const disx = this._x - this.x;
      const move = 0 - disx / -30;
      vid.style.transform = "translate(" + move + "px, 0px)";
    });
    vidContainer.addEventListener("mouseleave", function () {
      vid.style.transition = ".3s ";
      vid.style.transform = "translate(0,0)";
    });
})
</script>

<style lang="scss" scoped>


.navigator-videoContainer{
  overflow: hidden;
}
</style>
