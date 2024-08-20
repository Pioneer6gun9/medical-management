<template>
    <section class="main-content">
      <h2>知识库管理</h2>
      <div class="content-area">
        <table class="knowledge-table">
          <thead>
            <tr>
              <th>症状</th>
              <th>关联疾病</th>
              <th>推荐科室</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in knowledgeBase" :key="item.id">
              <td>{{ item.symptom }}</td>
              <td>{{ item.disease }}</td>
              <td>{{ item.department }}</td>
              <td>
                <button @click="editItem(item)">编辑</button>
                <button @click="deleteItem(item)">删除</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const knowledgeBase = ref([
    { id: 1, symptom: '头痛', disease: '偏头痛', department: '神经内科' },
    { id: 2, symptom: '腹痛', disease: '胃炎', department: '消化内科' },
  ]);
  
  const editItem = (item) => {
    console.log('Edit item:', item);
  };
  
  const deleteItem = (item) => {
    console.log('Delete item:', item);
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
    margin-top: 20px;
  }
  
  .knowledge-table {
    width: 100%;
    border-collapse: collapse;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    overflow: hidden;
  }
  
  .knowledge-table th, .knowledge-table td {
    padding: 15px;
    border: 1px solid #ddd;
    text-align: left;
  }
  
  .knowledge-table th {
    background-color: #4874EE;
    color: white;
  }
  
  .knowledge-table td {
    background-color: white;
    color: #333;
  }
  
  button {
    background-color: #4874EE;
    color: white;
    padding: 5px 10px;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    margin-right: 5px;
  }
  
  button:hover {
    background-color: #365dab;
  }
  </style>
  