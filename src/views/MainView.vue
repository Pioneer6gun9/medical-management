<template>
    <div class="dashboard">
      <SideBar />
      <Main />
    </div>
  </template>
  
  <script setup>
  import SideBar from '../components/SideBar.vue';
  import Main from '../components/Main.vue';
  </script>
  
  <style scoped>
  .dashboard {
    display: flex;
    height: 100vh;
  }
  </style>
  