<template>

  <!-- <searchCo class="navigator-search" @searchSubmit="searchContent"></searchCo> -->
  <!-- <el-button type="primary" size="default" :icon='Plus'>新增</el-button> -->
  
  
   <!-- <biCard></biCard> -->
  
  <loginCo v-if="store.state.showLogView"></loginCo>
  <router-view></router-view>
   <!-- <button>11</button> -->
  </template>
  
  <script setup>
  
  import { useStore } from 'vuex';
  import {onBeforeMount} from 'vue'
  
  import loginCo from './views/homeCom/login.vue'
  const store = useStore();
  const getUser = function() {
        let userInfo = JSON.parse(localStorage.getItem('userInfo'))
        if (!userInfo) return
        store.commit('setUser', userInfo)
        // console.log(this.$store.state.userInfo);
      }
    
  onBeforeMount(() => {
         getUser()
      })
  </script>
  
  
  