<template>
    <div class="dashboard">
        <SideBar />
        <SystemSettings />
    </div>
  </template>
  
  <script setup>
  import SideBar from '../components/SideBar.vue';
  import SystemSettings from '@/components/SystemSettings.vue';
  </script>
  
  <style scoped>
  .dashboard {
    display: flex;
    height: 100vh;
  }
  </style>
  