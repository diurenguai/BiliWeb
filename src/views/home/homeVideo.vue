<template>
    <div class="homeVideo" >
        <div class="homeVideo-CarouselItemCo">
        <CarouselItemCo class="homeVideo-CarouselItemCo-width"
            :carouselItems="carouselList"
            ></CarouselItemCo>
            </div>
        <rollBtn @click="getFirstVideo"></rollBtn>
   
        <!-- 加载首屏的推荐视频 -->
        <div class="video-card" v-for="item, index in firstList" :key="index">
            <biCard 
                :id="item.id" :title="item.title" :img="item.img" :nickname="item.nickname"
                :viewsChange="item.viewsChange" :danmakuCount="item.danmakuCount">
         </biCard>
        </div>
         <div class="video-card" v-for="item, index in recommendList" :key="index">
            <biCard v-if="item.done"
                :id="item.id" :title="item.title" :img="item.img" :nickname="item.nickname"
                :viewsChange="item.viewsChange" :danmakuCount="item.danmakuCount">
         </biCard>
         </div>
    </div>
</template>
<script setup>
import { ref, onMounted, onBeforeUnmount,getCurrentInstance } from 'vue';
import CarouselItemCo from '../homeCom/carousel.vue'
import biCard from '../homeCom/biCard.vue'
import rollBtn from '../homeCom/rollBtn.vue'
const firstList = ref([]);
const recommendList = ref([]);
const isDone = ref(true);
const isSmall = ref(false);
const loadMore = ref(0);
const carouselList = ref([]);

// const carouselItems = ref([
//   { imgArr:'/static/carousel/one.png', summary:'第一张'},
//   {imgArr: '/static/carousel/two.png', summary: '第二张' }]
// )
const globalProperties = getCurrentInstance().appContext.config.globalProperties; // 获取全局挂载

// Define the async function to fetch carousel data
const getCarousel = async () => {
  try {
    const res = await globalProperties.$utils.get('video/getCarousel');
    if (res.code === 10000) {
      carouselList.value = res.data.list;
    }
  } catch (err) {
    console.error(err);
    }
   
};
const getVideo = async (limit, isFirst = false) => {
    const recommendListLen = recommendList.value.length;
   
    const firstListLen = firstList.value.length;
    let offset = recommendListLen + firstListLen + loadMore.value;
    if (!isFirst) {
        offset -= limit;
    }

    try {
        let res = await globalProperties.$utils.get('video/getVideo', { offset, limit });
       
        if (res.code !== 10000) return;
        if (res.data.length < limit) {
            // 没有视频数据，取消监听
            console.log('取消监听');
            window.removeEventListener('scroll', throttledLazyLoading);
            window.removeEventListener('resize', throttledChangeSmall);
            return;
        }
        if (isFirst) {
            firstList.value = res.data;
        } else {
            recommendList.value.splice(recommendListLen - limit, limit, ...res.data);
            for (let i = recommendListLen - 1; i >= recommendListLen - limit; i--) {
                recommendList.value[i].done = true;
            }
            isDone.value = true;
        }
    } catch (err) {
        console.log(err);
    }
};

const changeSmall = () => {
    const screenWidth = window.outerWidth;
    isSmall.value = screenWidth < 1400;
};

const getFirstVideo = (moreload = false) => {
    if (moreload) {
        loadMore.value += isSmall.value ? 8 : 11;
    }
    getVideo(isSmall.value ? 8 : 11, true);
};

const lazyLoading = () => {
    if (!isDone.value) return;

    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const clientHeight = document.documentElement.clientHeight;
    const scrollHeight = document.documentElement.scrollHeight;
    const videoAll = document.querySelectorAll('.video-card');
    if (videoAll.length <= 7) return;

    const chaHeight = videoAll[6].offsetHeight * 2;
    if (scrollTop + clientHeight >= scrollHeight - chaHeight) {
        isDone.value = false;
        let queryNum;
        const videoNum = videoAll.length;
        if (isSmall.value) {
            const remainder = videoNum % 4;
            queryNum = remainder === 0 ? 12 : 12 - remainder;
        } else {
            const remainder = (videoNum - 6) % 5;
            queryNum = remainder === 0 ? 15 : 20 - remainder;
        }
        recommendList.value = [...recommendList.value, ...new Array(queryNum).fill({ done: false })];
        getVideo(queryNum);
    }
};

const throttledLazyLoading = globalProperties.$utils.throttle(lazyLoading, 500);
const throttledChangeSmall = globalProperties.$utils.throttle(changeSmall, 500);

onMounted(() => {
    changeSmall();
    getFirstVideo();
    getCarousel();
    window.addEventListener('scroll', throttledLazyLoading);
    window.addEventListener('resize', throttledChangeSmall);
});

onBeforeUnmount(() => {
    window.removeEventListener('scroll', throttledLazyLoading);
    window.removeEventListener('resize', throttledChangeSmall);
});

</script>

<style>
.homeVideo {
    /* height: auto; */
    display: grid;
    /* grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); */
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-template-rows: auto;
     /* grid-template-rows: repeat(auto-fill, minmax(150px, 150px)); */
    gap: 10px;
    padding: 16px;
    max-width: 1800px;
    margin: 0 70px;
}
.homeVideo-CarouselItemCo{
        grid-column: span 2;
        grid-row: span 2;
        
    }

.video-card {
    /* position: relative; */
    grid-column: span 1;
    grid-row: span 1;
}
</style>


