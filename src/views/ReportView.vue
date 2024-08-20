<template>
    <div class="dashboard">
        <SideBar />
        <ReportsAndAnalytics />
    </div>
  </template>
  
  <script setup>
  import SideBar from '../components/SideBar.vue';
  import ReportsAndAnalytics from '@/components/ReportsAndAnalytics.vue';
  </script>
  
  <style scoped>
  .dashboard {
    display: flex;
    height: 100vh;
  }
  </style>
  