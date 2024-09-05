<template>
    <div class="X_mark" :style="size ? { width: size + 'px',height: size + 'px'}:{}">
        <div class="X_mark-cent"></div>
    </div>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
    name: 'X_mark',
    props: {
        size: {
            type: Number,
            default: 20,
        }
    },
    setup() {

    },
})
</script>
<style lang="scss" scoped>
.X_mark{
    width: 20px;
    height:20px;
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
</style>