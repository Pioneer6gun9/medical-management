<template>
    <aside class="sidebar">
      <div class="logo">
        <img src="../assets/alipay.png" alt="Logo" />
      </div>
      <ul>
        <li v-for="(item, index) in menuItems" :key="index">
          <router-link :to="item.route" class="menu-link">
            <font-awesome-icon :icon="item.icon" class="menu-icon" />
            {{ item.name }}
          </router-link>
        </li>
      </ul>
    </aside>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const menuItems = ref([
    { name: '首页', route: '/main', icon: 'home' },
    { name: '用户管理', route: '/User', icon: 'user' },
    { name: '预约管理', route: '/Appoint', icon: 'calendar-alt' },
    { name: '知识库管理', route: '/Knowledge', icon: 'book' },
    { name: '系统设置', route: '/System', icon: 'cog' },
    // { name: '报告与分析', route: '/Report', icon: 'chart-bar' }
  ]);
  </script>
  
  <style scoped>
  .sidebar {
    width: 16vw;
    background-color: #ffffff;
    color: rgb(0, 0, 0);
    padding: 20px;
    height: 100vh;
    display: flex;
    flex-direction: column;
  }
  
  .logo {
    text-align: center;
    margin-bottom: 10px;
  }
  
  .sidebar ul {
    list-style: none;
    padding: 0;
    flex-grow: 1;
  }
  
  .sidebar li {
    margin: 15px 0;
    cursor: pointer;
    padding: 10px;
    transition: background-color 0.3s, color 0.3s;
  }
  
  .sidebar li:hover {
    background-color: #E8F1FE;
    border-radius: 5px;
    color: #6999F8;
  }
  
  .menu-link {
    display: flex;
    align-items: center;
    color: black;
    text-decoration: none;
    position: relative;
    padding-bottom: 5px;
  }
  
  .menu-link:hover {
    color: #6999F8;
  }
  
  .menu-icon {
    margin-right: 10px;
  }
  
  .router-link-active {
    color: #4874EE;
    font-weight: bold;
  }
  
  .router-link-active::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 3px;
    background-color: #4874EE;
    border-radius: 2px;
  }
  </style>
  