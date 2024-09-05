<template>
    <div class="avatar" ref="avatarRef">
      <img ref="imgRef" class="avatar-img"  :src= imgSrc alt="img">
      <div ref="testRef" class="avatar-box">
        <div class="avatar-info">
          <span id="name">{{ Name }}</span>
          <div class="avatar-level">
            <span style="text-align: center;display:block;" id="coin">硬币: {{coin}}   B币:{{ B_coin }}</span>
            <div class="avatar-level-level">
              <span>lv{{ currentLv }}</span>
              <div class="avatar-level-container">
                <div ref="barRef" class="avatar-level-bar" ></div>
              </div>
              <span>lv{{ nextLv }}</span><br>
            </div>
            <span style="text-align: center;display:block;color: #E1E6F3;">当前成长为{{ currentExp }},还需要{{ leftExp }}成长值,升级到lv{{ nextLv }}</span>
          </div>
          <div class="avatar-person">
            <div class="avatar-focus">
              <a >{{ focus }}</a>
              <a style="color: black; ">关注</a>
            </div>
            <div class="avatar-follower">
              <a >{{ follower }}</a>
              <a style="color: black; ">粉丝</a>
            </div>
            <div class="avatar-spaceMess">
              <a >{{spaceMess}}</a>
              <a style="color: black; ">动态</a>
            </div>
          </div>
        </div>
      <div class="avatar-advertise">
        <slot></slot>
      </div>
      <div class="avatar-button">
        <a >个人中心<ArrowRightBold style="width:18px;"></ArrowRightBold></a>
        <a >投稿服务<ArrowRightBold style="width:18px;"></ArrowRightBold></a>
        <a >推荐设置<ArrowRightBold style="width:18px;"></ArrowRightBold></a>
        <div class="avatar-line"></div>
        <a class="logout" ref="logoutRef">退出登录</a>
      </div>
      
    </div>
  </div>
  <!-- </li> -->
  
</template>
<script>
import { onMounted, ref, defineComponent,computed,getCurrentInstance } from 'vue';  

import { useStore } from 'vuex';
export default defineComponent({
  name: 'avatarCo',
  props: {
    imgSrc: {
      type: String,
      default:"/img/pictureo.png",
    },
    //昵称
    Name: {
      type: String,
      default:'匿名',
    },
    //当前成长值
    currentExp: {
      type: Number,
      default:5000,
    },
    //还需成长值
    leftExp: {
      type: Number,
      default:10000,
    },
    //硬币数量
    coin: {
      type: Number,
      default: 10,
    },
    //b币数量
    B_coin: {
      type: Number,
      default: 0,
    },
    //关注数量
    focus: {
      type: Number,
      default: 0,
    },
    //被关注数量
    follower: {
      type: Number,
      default: 0,
    },
    //动态数量
    spaceMess: {
      type: Number,
      default: 0,
    },
    //当前等级
    currentLv: {
      type: Number,
      default: 1,
    },
    //下一等级
    nextLv: {
      type: Number,
      default: 2,
    }
  },
  setup(props) {
  // 使用 ref 来跟踪 DOM 元素的引用（可选，但有助于响应式）  
    const imgRef = ref(null); 
    const testRef = ref(null);
    const avatarRef = ref(null);
    const barRef = ref(null);
    const logoutRef = ref(null);
    const store = useStore();
    const globalProperties = getCurrentInstance().appContext.config.globalProperties
    const throttle_add = globalProperties.$utils.throttle(function () {
      const img = imgRef.value;
      const test = testRef.value;
      img.classList.add('avatar-hover');
      test.classList.add('box-hover');
    }, 600)
    const addEvent = function () {
      // 确保在 mounted 后访问 DOM 元素  
      const img = imgRef.value;
      const test = testRef.value;
      const avatar = avatarRef.value;
      if (img && test&&avatar) {
        // 当鼠标进入图像时
        img.addEventListener('mouseenter', throttle_add);  
        //鼠标离开这个类 
        avatar.addEventListener('mouseleave', function () {  
          img.classList.remove('avatar-hover');
          test.classList.remove('box-hover');
    });
      }
      if (logoutRef.value) {
        logoutRef.value.addEventListener('click', () => {
        store.commit('logout');
      })
      }
      
    }
    //computed属性更具有响应式
    const percent = computed(() => {
      return props.currentExp / (props.currentExp + props.leftExp) * 100;
    });
    const calculatePercent = function () {
      const bar = barRef.value;
      bar.style.width = percent.value + '%';
    }
 
onMounted(() => {
  addEvent();
  calculatePercent();
});  
    return {
      imgRef,testRef,avatarRef,barRef,props,logoutRef
}
}
})

</script>
<style lang="scss" scoped>
.avatar{
    position: relative;
    display: inline-block;
    cursor: pointer;
    //justify-content: center;
    &-img{
        object-fit: cover;
        position: absolute;
        display: block;
        width: 55px;
        height: 55px;
        border-radius: 100%;
        z-index: 3;
        transition: all 0.5s;
    }
    &-box{
        z-index: 2;
        position: absolute;
        display: none;
        width: 350px;
        //height: 600px;
        top:55px;
        right:-175px;
        background-color: white;
        border-radius: 8px;
        box-shadow: 0 6px 10px 0 rgba(95,101,105,0.15);
        transition: all 0.1s;
    }
    &-box a{
        width: 80%;
        margin: 10px;
        background-color: white;
        color: #6A6C70;
        font-size: 20px;
        text-align: center;
        display: block;
    }
    &-info{
        margin-top: 20%;
        width: 100%;
    }
    #name{
        color: black;
        font-size: 25px;
        padding-left: 30%;
    }
    /*经验条*/
    &-level{/*先竖着flex*/
        width: 100%;
        color: #6A6C70;
        font-size: 15px;
        display: flex; 
        flex-direction: column;
        margin: 3% 0;
        &-level{/*经验条*/
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            margin-bottom: 3%;
        }
        &-container{
            height: 10px;
            width: 60%;
             //background-image: linear-gradient(to right, #4CAF50, #4CAF50);
             background-color: #6A6C70;
        }
        &-bar{
            height: 10px;
             //background-image: linear-gradient(to right, #4CAF50, #4CAF50);
             background-color: #4CAF50;
        }
    }
    &-person{
        display: flex;
        flex-direction: row;
        justify-content: center;
        text-align: center;
        div{
            margin: 0 5%;
        }
        div:hover a{
            color: #00A1D6;
        }
    }
    &-button{
        a{
            width: 70%;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            text-align: center;
            padding: 3% 9% 3% 15%;
            font-size: 18px;
            border-radius: 10px;
        }
        a:hover{
            background-color: #f1f1f1;
        }
    }
    &-line{
        background:#E7E7E7;
        width:300px;/*设置宽高*/
        height:1px;
        margin: 0 25px;
   }

}
/*伪类配合js实现hover*/
.avatar-hover{
    transform: scale(1.5) translateX(-20px) translateY(20px);
}
.box-hover{
    display: block;
}


</style>


