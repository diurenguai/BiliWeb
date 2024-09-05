<template>
  <div class="btn" :style="size ? { height: size + 'px', width: size * 3 + 'px', fontSize: size + 'px', lineHeight: size + 'px' } : {} " >
    <span> {{ props.content }}</span>
  </div>
</template>

<script >

import { defineComponent } from 'vue'
// 定义 props  
export default defineComponent({
  name: 'btnCo',
  props: {
    content: {
      type: String,
      default:'按钮',
    },
    size: {
      type: Number,
      default:20,
    },
    color: {
      type: String,
      
    }
  },
  setup(props) {
    return {
      props
    }
  }
})

</script>
<style lang="scss" scoped>
.btn{
    color: white;
    border-radius: 10%;
    background-color:#FB7299 ;
    padding: 1%;
    text-align: center;
    cursor: pointer;
    span{
        display: block;
    }
}
.btn:hover{
    background-color:#FFB4C8
}
</style>
