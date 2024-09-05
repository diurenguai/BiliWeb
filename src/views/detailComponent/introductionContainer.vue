<template>
    <div class="introduction-container">
        <div class="desc-info-text" :class="[showClose ? (isClose ? 'introduction-close' : 'introduction-open') : '']">
            <span ref="iContainer">{{ detailList.introduction }}</span>
        </div>
        <div v-show="showClose" class="toggle" style="cursor: pointer;" @click="changeClose">
            <span class="hover-blue change-color">{{ closeMsg }}</span>
        </div>
    </div>
    <div class="b-img" @click="$util.goBlank('advertisement')">
        <img width="668"
            src="https://images.weserv.nl/?url=//i0.hdslb.com/bfs/sycp/creative_img/202303/d8f5f24cc1bff5ed317cbae55361d23f.jpg@!web-video.webp"
            alt="">
    </div>
</template>

<script>
export default {
    name: 'introductionContainer',
    data() {
        return {
            isClose: true,
            closeMsg: '展开更多',
            showClose: false
        }
    },
    inject: [
        "detailList",
    ],
    methods: {
        changeClose() {
            this.isClose = !this.isClose
            if (this.isClose) {
                this.closeMsg = '展开更多'
            } else {
                this.closeMsg = '收起'
            }
        },
        valueClose() {
            const height = this.$refs.iContainer.offsetHeight
            if (height > 92) {
                this.showClose = true
            } else {
                this.showClose = false
            }
        }
    },
    updated() {
        this.valueClose()
    }
}
</script>

<style scoped>
.desc-info-text {
    white-space: pre-line;
    word-break: break-all;
    font-size: 15px;
    color: #18191C;
    letter-spacing: 0;
    line-height: 24px;
    padding-top: 20px;
    padding-bottom: 20px;
    font-size: 14px;
}

.introduction-container {
    border-bottom: 1px solid #E3E5E7;
    padding-bottom: 10px;
}

.introduction-close {
    height: 92px;
    overflow: hidden;
}

.introduction-open {
    height: none;
}

.toggle {
    font-size: 13px;
    color: #61666d;
}

.b-img {
    width: 100%;
    padding: 20px 0;
    cursor: pointer;
}
</style>