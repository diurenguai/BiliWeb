<template>
    <div class="tipCo">{{props.tipItem.tip}}
      <span class="tipCo-mess">{{ props.tipItem.tipMes }}</span>
    </div>
</template>

<script>
import { defineComponent } from "vue"
export default defineComponent({
    name: 'tipCo',
    props : {
    tipItem: Array,
    },
    setup(props) {
        return {
            props
        }
    }
})

</script>
<style lang="scss" scoped>
.tipCo{
    position:relative;
    display: inline-block;
    margin: 50px;
    cursor: pointer;
    &-mess{
        position: absolute;
        background-color: black;
        color:white;
        width: 100px;
        top:150%;
        left:-100%;
        border-radius: 8px;
        
        padding: 8px 0;
        text-align: center;
     
       opacity: 0;
       transition: opacity 0.3s;
    }
}
.tipCo:hover .tipCo-mess{

    opacity:1;
}
.tipCo-mess::after{
    content: "";
    position: absolute;
    bottom: 100%;
    left: 45%;
    border-width: 5px;
    border-style: solid;
    border-color:  transparent  transparent black transparent;
}
</style>
