import router from '../router/index.js'
import axios from 'axios'

const url = {
    load: 'https://images.weserv.nl/?url=',
    server: 'http://localhost:3001/',
}
// 防抖函数
const debounce = function debounce(func, wait, immediate) {
    //console.log('防抖');
    let timeout; // 定义一个计时器变量，用于延迟执行函数
    return function (...args) { // 返回一个包装后的函数
        const context = this; // 保存函数执行上下文对象
        const later = function () { // 定义延迟执行的函数
            timeout = null; // 清空计时器变量
            if (!immediate) func.apply(context, args); // 若非立即执行，则调用待防抖函数
        };
        const callNow = immediate && !timeout; // 是否立即调用函数的条件
        clearTimeout(timeout); // 清空计时器
        timeout = setTimeout(later, wait); // 创建新的计时器，延迟执行函数
        if (callNow) func.apply(context, args); // 如果满足立即调用条件，则立即执行函数
    };
}
  // 节流函数
const throttle =function(func, wait) {
    let timeout; // 定义一个计时器变量，用于限制函数调用频率
    return function (...args) { // 返回一个包装后的函数
        const context = this; // 保存函数执行上下文对象
        if (!timeout) { // 如果计时器不存在
            func.apply(context, args); // 执行函数
            timeout = setTimeout(() => {
                timeout = null; // 清空计时器变量
            }, wait); // 创建计时器，在指定时间后重置计时器变量
        }
    };
  }
const goHome = function(){
    const url = "Home";
    const routeData = router.resolve({ path: url });
    window.open(routeData.href, 'Home')
}
function goBlank(id) {
    const url = '/blank/' + id
    const routeData = router.resolve({ path: url })
    window.open(routeData.href, '_blank')
}

function goDetail(id) {
    const url = '/video/' + id
    const routeData = router.resolve({ path: url })
    window.open(routeData.href, 'video')
}
//封装异步请求数据
const apiAxios = async (method, urlPath, data = null) => {
    // 初始化请求头
    const headers = { 'Content-Type': 'application/json' };

    // 从 localStorage 获取 token 并添加到请求头
    const userInfo = localStorage.getItem('userInfo');
    // console.log(userInfo);
    // console.log(localStorage)
    if (userInfo) {
        const { token } = JSON.parse(userInfo);
        headers['Authorization'] = `Bearer ${token}`;
    }
    try {
        // 发起请求
        const response = await axios({
            method,
            url: `${url.server}${urlPath}`,
            headers,
            data: method === 'POST' ? data : null,
            params: method === 'GET' ? data : null,
        });
        return response.data;
    } catch (error) {
        // 处理错误
        console.error('API request failed:', error);
        throw error; // 可选择抛出错误或返回特定错误信息
    }
};
//get请求
const get = async (url, params) => {
    return await apiAxios('GET', url, params)
}
//post请求
const post = async (url, params) => {
    
    return await apiAxios('POST', url, params)
}

const numChange = function(num) {
    if (num >= 10000) {
        var n1 = Math.floor(num / 10000)
        var n2 = Math.floor((num % 10000) / 1000)
        if (n2 == 0) {
            return n1 + '万'
        } else {
            return n1 + '.' + n2 + '万'
        }
    } else {
        return num
    }
}

export default {
    url,
    goHome,
    get,
    post,
    numChange,
    goBlank,
    goDetail,
    debounce,
    throttle
}