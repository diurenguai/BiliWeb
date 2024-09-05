<template>
    <div class="comment-container">
        <div class="reply-header">
            <span class="nav-title-text">评论</span>
            <span class="total-reply">{{ commentsChange }}</span>
        </div>
        <div class="reply-wrap">
            <div class="main-reply-box">
                <div class="reply-box-avatar">
                    <div v-if="!store.state.userInfo" class="bili-avatar" style="width: 40px;height: 40px;"></div>
                    <div v-else class="bili-user-avatar">
                        <img :src="globalProperties.$utils.url.load + store.state.userInfo.avatar" style="width: 40px;height: 40px;" alt="">
                    </div>
                </div>
                <div class="reply-box-wrap">
                    <textarea class="reply-box-textarea" placeholder="发一条友善的评论" v-model.trim="comment"></textarea>
                    <div class="no-login-mask" @click="store.commit('changeLogView')" v-if="!$store.state.userInfo">
                        <span class="no-login-span">请先</span>
                        <span class="no-login-btn">登录</span>
                        <span class="no-login-span">后发表评论 (・ω・)</span>
                    </div>
                </div>
                <div class="reply-box-send" @click="submitComment"
                    :class="[store.state.userInfo ? 'bg-blue change-color' : 'no-login-box-send']">
                    <div :class="[store.state.userInfo ? 'send-text' : 'no-login-send-text']">发布</div>
                </div>
            </div>
            <div class="reply-list">
                <div class="root-reply-item" v-for="item in commentList" :key="item.id">
                    <div class="root-reply-container">
                        <div class="root-reply-avatar" >
                            <div class="bili-avatar">
                                <img @click="globalProperties.$utils.goUser(item.user_id)" style="width: 40px;height: 40px;"
                                    :src="globalProperties.$utils.url.load + item.avatar" alt="">
                            </div>
                        </div>
                        <div class="content-wrap">
                            <div class="user-info">
                                <div class="user-name" @click="globalProperties.$utils.goUser(item.user_id)">{{ item.user_name }}
                                </div>
                            </div>
                            <div class="root-reply">{{ item.talk }}</div>
                            <div class="reply-info">{{ item.created_at }}</div>
                        </div>
                    </div>
                    <div class="bottom-line"></div>
                </div>
                <div class="reply-end">没有更多评论</div>
            </div>
        </div>
    </div>
</template>


<script setup>
import { ref, onMounted ,getCurrentInstance,} from 'vue';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router'; // 使用 vue-router 的功能
import moment from 'moment'; // 导入 moment.js


// Define props and other setup logic
const route = useRoute();
const store = useStore();

const commentList = ref([]);
const comment = ref('');
const commentsChange = ref(0);
const globalProperties = getCurrentInstance().appContext.config.globalProperties; // 获取全局挂载
const getComment = async () => {
    let res;
    // 获取评论数
    res = await globalProperties.$utils.get('video/getCommentByvideo/' + route.params.id);
    // console.log(  res.data.result.rows)
    if (res.code != 10000) return;
    commentsChange.value = globalProperties.$utils.numChange(res.data.result.count);
    // 获取评论
    commentList.value = res.data.result.rows;

    for (let ele of commentList.value) {
        ele.created_at = moment(ele.created_at).format('YYYY-MM-DD HH:mm');
        // console.log('video/getUsers/' + ele.user_id)
        res = await globalProperties.$utils.get('video/getUsers/' + ele.user_id);
        if (res.code != 10000) return;
        ele.user_name = res.data.nickname;
        ele.avatar = res.data.avatar;
    }
};

const submitComment = async () => {
    if (!comment.value) return;
    let res = await globalProperties.$utils.post('mix/addComment', { video_id: route.params.id, user_id: store.state.userInfo.id, talk: comment.value });
    comment.value = '';
    // token过期，重新登录
    if (res.code == 401) {
        store.commit('logout');
        store.commit('changeLogView');
        return;
    }
    if (res.code != 10000) return;
    getComment();
};

// Fetch comments when component is mounted
onMounted(() => {
    getComment();
});
</script>

<style scoped>
.reply-header {
    height: 30px;
    line-height: 30px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
}

.nav-title-text {
    font-weight: 500;
    font-size: 20px;
    color: black;
}

.total-reply {
    font-size: 13px;
    margin-left: 5px;
}

.main-reply-box {
    display: flex;
    height: 50px;
}

.reply-box-avatar {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 50px;
}

.bili-avatar {
    display: block;
    position: relative;
    background-image: url(data:image/gif;base64,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);
    background-size: cover;
    border-radius: 50%;
}

.bili-user-avatar {
    display: block;
    position: relative;
    background-size: cover;
    /* background-color: transparent; */
    border-radius: 50%;
    overflow: hidden;
    height: 40px;
    width: 40px;
}

.reply-box-wrap {
    position: relative;
    flex: 1;
}

.reply-box-textarea {
    width: 100%;
    height: 100%;
    padding: 5px 10px;
    border: 1px solid var(--Ga1);
    border-radius: 6px;
    background-color: rgb(241, 242, 243);
    font-family: inherit;
    line-height: 38px;
    color: black;
    resize: none;
    outline: none;
}


.no-login-mask {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    border-radius: 6px;
    font-size: 12px;
    background-color: rgb(241, 242, 243);
    cursor: pointer;
}

.no-login-span {
    padding-left: 5px;
    padding-right: 5px;
}


.no-login-btn {
    padding: 4px 9px;
    border-radius: 4px;
    color: white;
    background: rgb(0, 174, 236);
}

.no-login-btn:hover {
    background-color: rgb(64, 197, 241);
}

.reply-list {
    margin-top: 14px;
    padding-bottom: 100px;
}

.reply-end {
    margin-top: 20px;
    font-size: 13px;
    color: rgb(148, 153, 160);
    text-align: center;
    cursor: default;
}

.root-reply-container {
    padding: 22px 0 0 80px;
}

.root-reply-item {
    position: relative;
}

.root-reply-avatar {
    display: flex;
    justify-content: center;
    position: absolute;
    left: 0px;
    width: 80px;
    cursor: pointer;
}

.root-reply-avatar .bili-avatar {
    width: 40px;
    height: 40px;
    overflow: hidden;
}

.content-wrap {
    position: relative;
}

.user-info {
    display: flex;
    align-items: center;
    margin-bottom: 4px;
    font-size: 13px;
}

.user-name {
    font-weight: 500;
    margin-right: 5px;
    color: rgb(251, 114, 153);
    cursor: pointer;
}

.root-reply {
    font-size: 15px;
    line-height: 24px;
    padding: 2px 0;
    color: black;
}

.reply-info {
    margin-top: 2px;
    font-size: 13px;
    line-height: 24px;
    color: rgb(148, 153, 160)
}

.bottom-line {
    margin-left: 80px;
    border-bottom: 1px solid #ccc;
    margin-top: 14px;
}

.reply-box-send {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-basis: 70px;
    margin-left: 10px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
}

.send-text {
    color: #fff;
}

.no-login-box-send {
    background-color: #f1f2f3;
    cursor: not-allowed;
}

.no-login-send-text {
    color: rgb(148, 153, 160);
}
</style>

