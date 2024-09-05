<template>
    <ul class="right-entry">
        <li class="avatar-wrap">
            <!-- 未登录  !store.state.userInfo-->
            <div v-if="!store.state.userInfo" class="go-login-btn">
                <div class="login-entry" @click="toggleLogView">登录</div>
                <btnCard class="login-panel hide"></btnCard>
            </div>
            <!-- 已登录 -->
            <avatarCo class="avatar-Co" v-else :Name="store.state.userInfo.nickname" 
                :focus="store.state.userInfo.follows" :follower="store.state.userInfo.fans"
                :id="store.state.userInfo.id"
                :B_coin="store.state.userInfo.coin"></avatarCo>
        </li>
    </ul>
</template>

<script>
import {  reactive,computed, defineComponent } from 'vue'
import { useStore } from 'vuex';
import btnCard from './btnCard/mainView.vue'
import avatarCo  from '../homeCom/avatrCo.vue';
export default defineComponent({
    name: 'btnLog',
    components: {
        btnCard,avatarCo
    },
    setup(){
        const store = useStore();
        const changeBig = computed(() => store.state.changeBig);
        const toggleLogView = () => {
        store.commit('changeLogView');
        };
        const data = reactive( {
        
            baseUrl: '/blank/',
            homeUrl: '/user/' + store.state.id,
            changeBig: null,
        })
        return {
        data,changeBig,toggleLogView,store
        }
       
    }

})

   

</script>
<style lang="scss">
.right-entry li {
    position: relative;
}

.avatar-wrap {
    width: 55px;
    height: 55px;
    cursor: pointer;
}

.go-login-btn {
    height: 36px;
    width: 36px;
    margin: 6px auto;
    border-radius: 50%;
    overflow: hidden;
}
.avatar-Co{
    position: absolute;
    top: -15px;
    left: -5px;
}
.login-entry {
    background: #00AEEC;
    height: 100%;
    width: 100%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
}

.go-login-btn:hover .login-panel {
    visibility: visible;
}




</style>