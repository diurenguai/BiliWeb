<template>  
<div class="Carousel-item" ref="carouselRef">
    <!-- :style="width?{width:carousel.clientWidth + 'px'}:{}" -->

    <!-- <div class="Carousel-item-img"> -->
    <ul ref="listRef" class="Carousel-item-img-list"  >
         <!-- :style="width?{width:carousel.clientWidth + 'px'}:{}" -->
        <li  class="img" v-for="(value,picIndex) in modifiedCarouselItems" :key="picIndex" ref="liRef">
            <img class="img"  :src="value.img" alt="image" >
             <!-- :style="width?{width:carousel.clientWidth + 'px'}:{}" -->
        <p class="summary">{{ value.title }}</p>
    </li>
    </ul>
    <!-- </div> -->
    <ul ref="list_rowRef" class="list-row">
        <li ref="rowRef"  class="row" v-for="(value,picIndex) in props.carouselItems" :key="picIndex">
    </li>
    </ul>
    
    <div class="list-icon" size="40px"  @click="throttle_next(-1)">
        <ArrowLeftBold class="Carousel-item-button"></ArrowLeftBold>
    </div>
    <div class="list-icon" size="40px"  @click="throttle_next(1)" style="right: 2%;">
        <ArrowRightBold class="Carousel-item-button" style="right: 2%;"></ArrowRightBold>
    </div>

</div>
</template>

<script> 
import { computed, defineComponent, onMounted,ref ,getCurrentInstance,watch } from 'vue';

export default defineComponent( {
name: 'CarouselItemCo',
props: {
    //图片资源以及summary信息
    carouselItems: Array,
    selected: String,
    //宽度
    width: Number,
    fontType: String,
    fontSize: String,
    fontcolor: String,
},
    // ...  
    setup(props) {
        const listRef = ref(null);
        const list_rowRef = ref(null);
        const rowRef = ref(null);
        const liRef = ref(null);

        // const carousel = carouselRef.value;
        var imgIndex=0;
        var position = 0;
       //var timer;
        var time = 0;
        const globalProperties = getCurrentInstance().appContext.config.globalProperties
        const modifiedCarouselItems = computed(() => {
            const newArray = [...props.carouselItems]; // 正确复制数组  
            if (newArray.length > 0) {
                newArray.push(newArray[0]); // 添加第一个元素到末尾
            }
            return newArray;
        });
        const carouselWidth = computed(() => {
            console.log(listRef.value.clientWidth)
        return listRef.value.clientWidth
    })
        const next = (direction) => {
            // console.log(carouselWidth.value)
            const list = listRef.value;//获取list
            const rowLastKid = rowRef.value[imgIndex];//获取li
            //更换类css
            rowLastKid.setAttribute('class', 'li');
            //右滑
            if (direction > 0) {
                list.classList.add('scale-leave-active');
                position -= computedCarouselWidth.value;
                list.style.marginLeft = position + 'px';
                setTimeout(() => {
                    if (position == -(computedCarouselWidth.value * (list.children.length - 1))) {
                        list.classList.remove('scale-leave-active');
                        position = 0;
                        list.style.marginLeft = position + 'px';
                    }
                }, 500);
            } else if (direction < 0) {//左滑
                // 设置每个元素的 marginLeft 样式
                if (position == 0) {
                    list.classList.remove('scale-leave-active');
                    position = -(computedCarouselWidth.value * (list.children.length - 1));
                    list.style.marginLeft = position + 'px';
                }
                setTimeout(() => {
                    list.classList.add('scale-leave-active');
                    position +=computedCarouselWidth.value;
                    list.style.marginLeft = position + 'px';
                    // console.log(list.style.marginLeft);
                }, 1);
            }
            imgIndex = (imgIndex + direction + list.children.length - 1) % (list.children.length - 1);
            const rowNowKid = rowRef.value[imgIndex];//获取li
            //console.log(rowNowKid);
            rowNowKid.setAttribute('class', 'on');
            time = 0;
        }
        
    const throttle_next = globalProperties.$utils.throttle(next, 500);
        function run() {
            setInterval(() => {
                time++;
                if (time == 20) {
                    next(1);
                    time = 0;
                    //console.log(rowRef.value);
                }
            }, 100)
            
        }
        onMounted(() => {
            if (listRef.value) {
                // console.log(liRef.value.clientWidth)
                // console.log(liRef.value.clientWidth)
                run();
            }
            if (listRef.value) {
                // console.log(listRef.value.clientWidth)
                // console.log(listRef.value.children.clientWidth)
            }
                // 确保在 DOM 完全加载后再操作 ref
            if (rowRef.value && listRef.value) {
                console.log(listRef.value)
                    rowRef.value.forEach((element, index) => {
                        element.addEventListener('click', function() {
                            if (index != imgIndex) {
                                next(index - imgIndex);
                                time = 0;
                            }
                        });
                    });
                }
});
        // 监视 DOM 元素的大小变化
        watch(listRef, (newVal) => {
            if (newVal && newVal.clientWidth !== carouselWidth.value) {
                carouselWidth.value = newVal.clientWidth;
            }
            });

            // computed 属性来访问宽度
            const computedCarouselWidth = computed(() => {
            return carouselWidth.value;
            });
        return {
      props,modifiedCarouselItems,throttle_next,listRef,list_rowRef,rowRef,liRef
    }
        }
    })
</script>  
<style lang="scss">

.Carousel-item{
    // width:700px;
    width: 100%;
    height: 85%;
    // height: auto;
    padding-top: 56.25%; 
    // padding-top: 75%; 
    border-radius:8px;
    overflow: hidden;
    position: relative;
    padding: 0px;
    margin: 0px;
    &-img-list{
        
        display: flex;
        flex-direction: row; /* 根据需要设置方向，如果是水平滚动则保持为 row，否则可以更改为 column */  
        padding: 0; /* 移除内边距 */  
        margin: 0; /* 移除外边距 */
        list-style-type: none; /* 移除默认的列表样式 */
        width: 100%;
        height:85%;
        box-sizing: border-box;
        li{
            position: relative;
            box-sizing: border-box;
            width: 100%;
        height:auto;
            img{
                object-fit: contain; /* 保持图片的宽高比，同时填充容器 */
                height:auto;
            }
            }
            .summary{
                position: absolute;
                padding: 0 8px; /* 移除内边距 */  
                margin: 0; /* 移除外边距 */ 
                text-align: left;
                color:white;
                top:78%;
                left: 3%;
                font-size: 20px;
            }
        }
    
    .list-row{
        list-style-type: none; /* 移除默认的列表符号 */  
        position: absolute;
        padding: 0; /* 移除内边距 */
        margin: 0; /* 移除外边距 */ 
        left:3%;
        bottom: 8%; 
        vertical-align: middle;
        li{
            float: left;
            margin: 0 8px; 
            width: 8px;
            height: 8px;
            border-radius: 50%;
            border: 2px solid transparent;
            text-align: 30px;
            top: 80%;
            background-color: white;
            transition: all 0.3s;
            cursor: pointer;
        }
        li:hover{
            border: 2px solid #fff;
            background-color: #00a1d6;
        }
        li.on{
            border: 0;
            border-color: transparent;
            background-color: transparent;
            background-image: url(/public/static/carousel/pointer.png);
            background-size: 100% 100%;
            background-repeat: no-repeat;
            transform: scale(3);
        }
    }
    &-button {
        color: white;
        width:3%;
        position: absolute;
        background-color: rgb(194, 174, 163,0.5);
        padding: 1%;
        border-radius: 20%;
        top:85%;
        right: 8%;
        transition: all 0.2s;
        cursor: pointer;
    }
    &-button:hover{
        background-color:rgb(220, 210, 200,0.5)
    }
    .scale-enter-active, .scale-leave-active {  
        transition: margin-left 0.5s;
      } 
      /* 初始状态，假设图片完全在容器中 */  
    .slide-image-initial {
        margin-left: 0;
    }  
}


</style>