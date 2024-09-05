<template>
    <div class="up-info">
        <div class="u-face">
            <img style="width: 48px;height: 48px;" @click="$util.goUser(detailList.up)"
                :src="globalProperties.$utils.url.load + detailList.avatar">
        </div>
        <div class="up-info-right">
            <div class="name">
                <span @click="globalProperties.$utils.goUser(detailList.up)">{{ detailList.nickname }}</span>
                <div class="up-info-right-message">
                    <div class=" icon-horizontal hover-blue change-color">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class="bi bi-envelope " viewBox="0 0 16 16">
                            <path
                                d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                        </svg>
                        <span>发消息</span>
                    </div>
                </div>
            </div>
            <div class="desc">{{ detailList.upinrtoduction }}</div>
            <div class="btn-panel">
                <button class="charge change-color">
                    <img :src="globalProperties.$utils.url.load + 'https://i0.hdslb.com/bfs/garb/item/33e2e72d9a0c855f036b4cb55448f44af67a0635.png@.png'"
                        alt="">
                    <span>为TA充电</span>
                </button>
                <button class="follow change-color">+ 关注 {{ detailList.followsChange }}</button>
            </div>
        </div>
    </div>
</template>

<script>

import {getCurrentInstance,inject} from 'vue'
export default {
    name: 'upInfo',
   
    setup() {
        const detailList =inject("detailList")
        const globalProperties = getCurrentInstance().appContext.config.globalProperties; // 获取全局挂载
        return {
            globalProperties,detailList
        };
    }
}
</script>

<style scoped>
.up-info {
    padding-top: 20px;
    min-height: 58px;
    width: 100%;
    margin: 0 0 18px 0;
    display: flex;
    align-items: center;
}

.u-face {
    align-self: flex-start;
    width: 48px;
    height: 48px;
    position: relative;
    border-radius: 50%;
    overflow: hidden;
    cursor: pointer;
}

.up-info-right {
    margin-left: 12px;
    flex: 1;
    overflow: auto;
}

.name {
    color: #FB7299;
    height: 22px;
    line-height: 22px;
    font-size: 15px;
    display: flex;
    align-items: center;
    font-weight: 500;
    cursor: pointer;
}

.up-info-right-message {
    margin-left: 10px;
    font-size: 13px;
    color: #61666d;
}


.desc {
    margin: 3px 0 10px 0;
    font-size: 13px;
    line-height: 16px;
    height: 16px;
    color: #9499A0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.btn-panel {
    display: flex;
}

.charge {
    margin-right: 12px;
    width: 109px;
    color: #FF6699;
    border: 1px solid #FF6699;
    position: relative;
    border-radius: 6px;
    background-color: transparent;
    font-size: 14px;
    height: 30px;
    display: flex;
    align-items: center;
}

.charge img {
    width: 20px;
    height: 20px;
    margin-right: 4px;
}

.charge:hover {
    background-color: rgb(255, 236, 241);
}

.follow {
    flex: 1;
    width: 150px;
    height: 30px;
    background: rgb(0, 174, 236);
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    border: none;
    color: #fff;
    font-size: 14px;
}

.follow:hover {
    background-color: rgb(0, 184, 246);
}
</style>