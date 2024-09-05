<template>
    <div ref="historyCtRef" class="historyCt">
        <div class="historyCt-content">
            <a class="historyCt-content-but">{{ content }}</a>
        </div>
        <div ref="XRef" class="historyCt-X">
            <div class="historyCt-X-X_mark">
            <div class="historyCt-X-X_mark-cent"></div>
            </div>
        </div>
    </div>
  </template>
<script>
import { defineComponent,onMounted,ref } from 'vue'
export default defineComponent({
    name: 'historyCt',
    props: {
        content: String,
    },
    setup(props) {
        const XRef = ref(null);
        const historyCtRef = ref(null);
        const deleteEl = function(){
            const XMark = XRef.value;
            const historyCt = historyCtRef.value;
            //console.log(XMark);
            if (XMark instanceof HTMLElement) { // 检查 XMark 是否是 DOM 元素
            XMark.addEventListener('click', function () {
                historyCt.parentNode.removeChild(historyCt);
            });
        } else {
            console.error('XMark is not a valid DOM element');
            }
            //props.content = '';
        
        };
        onMounted(() => {
            deleteEl();
        });
        return {
            XRef,props,historyCtRef,
        }
    }
  })
</script>
<style lang="scss" scoped>
.historyCt{
    position: relative;
    display: inline-block;
    padding: 5px;
    cursor: pointer;
    &-content{
        //width: 100px;
        height: 30px;
        background-color:rgb(173, 177, 182,0.5);
        display: flex;
        justify-content: center;
        border-radius:6px;
        &-but{
            color:black;
            font-size: 14px;
            text-align: center;
            transition: all 0.2s;
            margin: 7px 14px;
        }
    }
    &-content:hover &-content-but{
        color:#00a1d6;
    }
    &-X{
        position: absolute;
        right:1%;
        top:1%;
        &-X_mark{
            width: 13px;
            height:13px;
            border-radius: 50%;
            position: relative;
            &-cent{
                position: absolute;
                width:100%;
                height: 100%;
                border: 1px solid white;
                border-radius: 50%;
                background-color:rgb(173, 177, 182);
            }
            &-cent::before,&-cent::after {
                position: absolute;
                content: '';
                width: 0px;
                height: 65%;
                border:1px solid white;
                left:48%;
                top: 14%;
            }
            &-cent::before {
                transform: rotate(45deg);
            }
            &-cent::after {
                transform: rotate(-45deg);
            }
        }
    }
   
}
</style>

  
  