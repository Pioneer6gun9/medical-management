<template>
    <div class="dashboard">
        <SideBar />
        <KnowledgeBaseManagement />
    </div>
  </template>
  
  <script setup>
  import SideBar from '../components/SideBar.vue';
  import KnowledgeBaseManagement from '@/components/KnowledgeBaseManagement.vue';
  </script>
  
  <style scoped>
  .dashboard {
    display: flex;
    height: 100vh;
  }
  </style>
  