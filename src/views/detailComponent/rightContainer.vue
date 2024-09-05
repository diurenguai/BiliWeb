<template>
    <div class="right-container">
        <upInfo></upInfo>
        <recList></recList>
    </div>
</template>

<script>
import upInfo from './upInfo.vue'
import recList from './recList.vue'

export default {
    name: 'rightContainer',
    components: {
        upInfo,
        recList
    }
}
</script>


<style scoped>
.right-container {
    width: 100%;
    margin-left: 30px;
    position: relative;
}
</style>