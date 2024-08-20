<template>
    <div class="dashboard">
      <SideBar />
      <UserManagement />
    </div>
  </template>
  
  <script setup>
  import SideBar from '../components/SideBar.vue';
  import UserManagement from '../components/UserManagement.vue';
  </script>
  
  <style scoped>
  .dashboard {
    display: flex;
    height: 100vh;
  }
  </style>
  