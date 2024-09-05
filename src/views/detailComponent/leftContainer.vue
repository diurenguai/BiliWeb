<template>
    <div class="left-container">
        <viewboxReport></viewboxReport>
        <playerWrap></playerWrap>
        <toolbarContainer></toolbarContainer>
        <introductionContainer></introductionContainer>
        <commentContainer></commentContainer>
    </div>
</template>

<script>
import viewboxReport from './viewboxReport.vue';
import playerWrap from './playerWrap.vue';
import toolbarContainer from './toolbarContainer.vue'
import introductionContainer from './introductionContainer.vue'
import commentContainer from './commentContainer.vue'

export default {
    name: 'leftContainer',
    components: {
        viewboxReport,
        playerWrap,
        toolbarContainer,
        introductionContainer,
        commentContainer,
    },
}
</script>


<style scoped>
.left-container {
    width: 100%;
}
</style>