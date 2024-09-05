<template>
    <ul class="navigateUl">
        <li>
            <slot name="nav-item"></slot>
        </li>
        <li v-for="value in props.navigateItem" :key="value.id">
            <a href= value.link >
                <p  v-html="value.svg"></p>
                <span>{{ value.title }}</span></a>
        </li>
    </ul>
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'navigateCo',
    props: {
        navigateItem: {
            type: Array,
            default: () => [
                {
                svg: '',      // 默认值为字符串
                title: '导航', // 默认值为字符串
                id: ''        // 默认值为字符串
                }
            ]
        }
    },
    setup(props) {
        return {
            props
        }
    }
})
</script>

<style lang="scss">
.navigateUl{
    list-style-type: none;
    margin: 0;
    padding: 0;
    position: relative;
    display: flex;
    align-items: center;
    li{
        float:left;
        padding: 2px;
    }
    li > a{
        display: block;
        text-decoration: none;
        font-size: 18px;
        color: white;
        padding: 5px 2px;
        transition: all 0.3s;
        text-align: center;
    }
    li > a:hover{
        animation: bounce 0.3s ease 1;
    }
}
@keyframes bounce {  
    0%, 100% { transform: translateY(0); }  
    50% { transform: translateY(-10px); }  
  }  
</style>