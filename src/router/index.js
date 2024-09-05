import { createRouter, createWebHistory } from 'vue-router';
import homeView from '../views/homeView.vue';
import videoView from '../views/videoView.vue';

// 定义路由
const routes = [
    {
        path: '/',
        redirect: '/Home' // 这里设置了重定向
    },
    {
        path: '/Home',
        name: 'Home',
        component: homeView,
    },
    {
        path: '/video/:id',
        name: 'video',
        component: videoView,
    },
    {
        path: '/video/video/:id',
        redirect: to => {
            // Use the route parameters from `to` to redirect to the correct path
            return `/video/${to.params.id}`;
        }
    }
];

// 创建路由实例
const router = createRouter({
    history: createWebHistory(), // 使用 HTML5 History 模式
    routes
});

export default router;
