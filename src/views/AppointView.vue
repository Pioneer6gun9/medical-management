<template>
    <div class="dashboard">
        <SideBar />
        <AppointmentManagement />
    </div>
  </template>
  
  <script setup>
  import SideBar from '../components/SideBar.vue';
  import AppointmentManagement from '@/components/AppointmentManagement.vue';
  </script>
  
  <style scoped>
  .dashboard {
    display: flex;
    height: 100vh;
  }
  </style>
  