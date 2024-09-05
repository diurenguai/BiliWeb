<template>
  <div class="butListUp">
    <button class="butListUp-but">{{ props.title }}</button>
    <div class="butListUp-list">
        <a v-for="(value,index) in props.list" :key="index">
            {{ value }}
        </a>
    </div>
  </div>
</template>

<script>

import { defineComponent } from 'vue'
// 定义 props  
export default  defineComponent({
  name: 'butListUp',
  props:{
    title: {
      type: String,
      default:''
    },
    list: {
      type: Array,
      default:()=>[],
    }
  },
    setup(props) {
      return {
        props
      }
    }
})
</script>

<style lang="scss" >
.butListUp{
    position: relative;
    display: inline-block;
    &-but{
        background-color:  #F6F7F8;
        color:#7F8389;
        width: 95%;
        height: 26px;
        font-size: 15px;
        text-align: center;
        border-radius:6px;
        box-shadow: 0 6px 10px 0 rgba(95,101,105,0.15);
        border-style: none;
        transition: all 0.3s;
        margin: 5px 5px;
    }

    &-list{
        display: none;
        position: absolute;
        background-color:#F6F7F8;
        top:-145%;
        width:120%;
        border-radius:8px;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        transition: all 0.3s;
    }
    &-list a{
        font-size: 15px;
        padding: 5px;
        margin: 5px;
        color:black;
        display: block;
        cursor: pointer;
        
    }
    &-but:hover{
        background-color:#EDEDED;
    }
    &-list a:hover {
        background-color: #f1f1f1;
    }
}
.butListUp:hover .butListUp-list{
    display: block;
}
</style>