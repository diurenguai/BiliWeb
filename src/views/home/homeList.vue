!<template>
  <div class="content">
    <div class="content-text">
      <btnLeft></btnLeft>
    </div>
    <div class="content-but">
    <butListUp
    :butListItem="data.btnListUp" v-for="item in data.btnListUp" :key="item.id" 
    :title="item.name"></butListUp>
    <butList
    :butListItem="data.btnListDown" v-for="item in data.btnListDown" :key="item.id"
    :title="item.name"></butList>
    </div>
    <div class="content-line"></div>
    <div class="content-text2">
      <btnRight></btnRight>
    </div>
  </div>
</template>

<script setup>
import {  reactive  } from "vue"
import btnLeft from '../btn/btnLeft.vue'
import butListUp from '../btn/btnListUp.vue'
import butList from '../btn/btnList.vue'
import btnRight from '../btn/btnRight.vue'
const data = reactive({
  btnListUp: 
    [{
          id: 'fanju',
          name: '番剧'
      },
      {
          id: 'guochuang',
          name: '国创'
      },
      {
          id: 'variety',
          name: '综艺'
      },
      {
          id: 'animate',
          name: '动画'
      },
      {
          id: 'kichiku',
          name: '鬼畜'
      },
      {
          id: 'dance',
          name: '舞蹈'
      },
      {
          id: 'amusement',
          name: '娱乐'
      },
      {
          id: 'technology',
          name: '科技'
      },
      {
          id: 'food',
          name: '美食'
      },
      {
          id: 'car',
          name: '汽车'
      },
      {
          id: 'sport',
          name: '运动'
      },
      ],
  btnListDown: [
      {
          id: 'movie',
          name: '电影'
      },
      {
          id: 'TVplays',
          name: '电视'
      },
      {
          id: 'documentary',
          name: '纪录'
      },
      {
          id: 'game',
          name: '游戏'
      },
      {
          id: 'music',
          name: '音乐'
      },
      {
          id: 'television',
          name: '影视'
      },
      {
          id: 'knowledge',
          name: '知识'
      },
      {
          id: 'inquire',
          name: '咨讯'
      },
      {
          id: 'live',
          name: '生活'
      },
      {
          id: 'fashion',
          name: '时尚'
      },
      {
          id: 'more',
          name: '更多'
      }
  ]
})
// console.log(data.btnListUp[0])
// // 响应式状态
// const isSmallScreen = ref(window.innerWidth < 1200);
// console.log(isSmallScreen.value)
// // 监听窗口大小变化
// const mediaQuery = window.matchMedia('(max-width: 1200px)');
// // console.log(mediaQuery)
// watchEffect(() => {
//   isSmallScreen.value = mediaQuery.matches;
// });

// // 计算属性，根据视口宽度决定显示哪些数据
// const visibleBtnListUp = computed(() => {
//   return isSmallScreen.value
//     ? data.btnListUp.slice(0, -2) // 去掉最后四个
//     : data.btnListUp;
// });
// console.log(visibleBtnListUp.value[0]);
// const visibleBtnListDown = computed(() => {
//   return isSmallScreen.value
//     ? data.btnListDown.slice(-1, -2) // 去掉最后四个
//     : data.btnListDown;
// });

// const butListItem = ref(
//   {but: '番剧',list:['国漫','日漫']}
// )
// const navigateItem = ref(
//   [
//     { link: '#', title: '首页' },
//     { link: '#', title: '直播' },
//     { link: '#', title: '番剧' },
//     { link: '#', title: '游戏中心' },
//     { link: '#', title: '会员购' },
//     { link: '#', title: '漫画' },
//     { link: '#', title: '赛事' },
//     { link: '#', title: '新世代' }
//   ] 
// )
// const navigateItem2 = ref(
//   [
//     { link: '#', title: '大会员' },
//     { link: '#', title: '消息' },
//     { link: '#', title: '动态' },
//     { link: '#', title: '收藏' },
//     { link: '#', title: '历史' },
//     { link: '#', title: '创作中心' }
//   ] 
// )

</script>

<style lang="scss" >
.content{
    height: 100px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: 13px;
    margin: 0 70px;
    &-but {
        display: grid;
        // grid-template-columns: repeat(11, minmax(110px, 1fr));
        grid-template-columns: repeat(11, minmax(50px, 1fr));
        grid-template-rows: repeat(2, minmax(20px, 1fr));
        gap: 5px;
        padding: 15px 0;
        // max-width: 1360px;
        width:70%;
        // margin: auto;
    }

    &-line{
        background:#E7E7E7;
        width:0.6px;/*设置宽高*/
        height:120px;
        float:left;/*让此div与前面的并排显示*/
   }
}

</style>
