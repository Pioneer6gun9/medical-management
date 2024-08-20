<template>
    <section class="main-content">
      <h2>系统设置</h2>
      <div class="content-area">
        <div class="setting-item">
          <label>
            <span>导诊算法选择：</span>
            <select v-model="algorithm">
              <option value="算法1">算法1</option>
              <option value="算法2">算法2</option>
            </select>
          </label>
        </div>
        <div class="setting-item">
          <label>
            <span>通知设置：</span>
            <input type="checkbox" v-model="notificationsEnabled" />
            启用通知
          </label>
        </div>
        <button @click="saveSettings">保存设置</button>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const algorithm = ref('算法1');
  const notificationsEnabled = ref(true);
  
  const saveSettings = () => {
    console.log('Settings saved:', {
      algorithm: algorithm.value,
      notificationsEnabled: notificationsEnabled.value,
    });
  };
  </script>
  
  <style scoped>
  .main-content {
    flex: 1;
    padding: 20px;
    height: 100vh;
    width: 84vw;
    background-color: #f0f2f5;
    overflow-y: auto;
  }
  
  .content-area {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
  }
  
  .setting-item {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  
  button {
    background-color: #4874EE;
    color: white;
    padding: 10px;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    margin-top: 20px;
  }
  
  button:hover {
    background-color: #365dab;
  }
  </style>
  