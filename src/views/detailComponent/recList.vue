<template>
    <div class="rec-list" v-for="item in recommendList" :key="item.id">
        <biCard :id="item.id" :title="item.title" :img="item.img" :up="item.up" :nickname="item.nickname"
            :viewsChange="item.viewsChange" :commentCount="item.commentCount"></biCard>
    </div>
</template>

<script>
import { ref, onMounted,getCurrentInstance } from 'vue';
import { useRoute } from 'vue-router'; // 假设你在使用 vue-router
import biCard from '../homeCom/biCard.vue'
export default {
    components: {
        biCard
    },
    setup() {
        const recommendList = ref([]);
        const route = useRoute();
        const globalProperties = getCurrentInstance().appContext.config.globalProperties
        const getRecommend = async () => {
            try {
                // 替换 this.$util.get 为实际的 API 调用方法
                const res = await globalProperties.$utils.get('video/getVideo',{ limit: 10 }); // 示例 API 调用
                const data = await res;

                if (data.code !== 10000) return;
                recommendList.value = data.data;

                // 从推荐列表中删除当前视频
                const currentVideoId = route.params.id;
                const index = recommendList.value.findIndex(item => item.id === currentVideoId);
                if (index !== -1) {
                    recommendList.value.splice(index, 1);
                }
            } catch (error) {
                console.error('获取推荐视频失败:', error);
            }
        };

        onMounted(() => {
            getRecommend();
        });

        return {
            recommendList
        };
    }
};

</script>

<style scoped>
.rec-list {
    margin-top: 18px;
    width: 100%;
    min-width: 150px;
}
</style>
