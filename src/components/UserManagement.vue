<template>
    <section class="main-content">
      <h2>用户管理</h2>
      <div class="content-area">
        <table class="user-table">
          <thead>
            <tr>
              <th>用户名</th>
              <th>联系方式</th>
              <th>导诊次数</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in users" :key="user.id">
              <td>{{ user.name }}</td>
              <td>{{ user.contact }}</td>
              <td>{{ user.triageCount }}</td>
              <td>
                <button @click="editUser(user)">编辑</button>
                <button @click="deleteUser(user)">删除</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const users = ref([
    { id: 1, name: '张三', contact: '123456789', triageCount: 5 },
    { id: 2, name: '李四', contact: '987654321', triageCount: 10 },
  ]);
  
  const editUser = (user) => {
    console.log('Edit user:', user);
  };
  
  const deleteUser = (user) => {
    console.log('Delete user:', user);
  };
  </script>
  
  <style scoped>
  .main-content {
    flex: 1;
    padding: 20px;
    width: 84vw;
    background-color: #f0f2f5;
    overflow-y: auto; /* 允许滚动 */
  }
  
  .content-area {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  
  .user-table {
    width: 100%;
    border-collapse: collapse;
    background-color: white;
    border-radius: 10px;
    margin-top: 20px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    overflow: hidden; /* 使得圆角效果不被边框遮挡 */
  }
  
  .user-table th, .user-table td {
    padding: 15px;
    border: 1px solid #ddd;
    text-align: left;
  }
  
  .user-table th {
    background-color: #4874EE;
    color: white;
  }
  
  .user-table td {
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
  