<template>
    <section class="main-content">
      <h2>预约管理</h2>
      <div class="content-area">
        <table class="appointment-table">
          <thead>
            <tr>
              <th>用户</th>
              <th>科室</th>
              <th>预约时间</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="appointment in appointments" :key="appointment.id">
              <td>{{ appointment.user }}</td>
              <td>{{ appointment.department }}</td>
              <td>{{ appointment.time }}</td>
              <td>
                <button @click="cancelAppointment(appointment)">取消预约</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const appointments = ref([
    { id: 1, user: '张三', department: '内科', time: '2023-08-01 10:00' },
    { id: 2, user: '李四', department: '外科', time: '2023-08-01 11:00' },
  ]);
  
  const cancelAppointment = (appointment) => {
    console.log('Cancel appointment:', appointment);
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
  
  .appointment-table {
    width: 100%;
    border-collapse: collapse;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    overflow: hidden;
  }
  
  .appointment-table th, .appointment-table td {
    padding: 15px;
    border: 1px solid #ddd;
    text-align: left;
  }
  
  .appointment-table th {
    background-color: #4874EE;
    color: white;
  }
  
  .appointment-table td {
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
  