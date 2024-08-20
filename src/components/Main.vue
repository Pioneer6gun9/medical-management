<template>
  <section class="main-content">
    <h1>使用情况</h1>
    <div class="content-area">
      <div class="chart" ref="chart1" style="height: 300px;"></div>
      <div class="chart" ref="chart2" style="height: 300px;"></div>
      <div class="chart" ref="chart3" style="height: 300px;"></div>
    </div>
  </section>
</template>

<script setup>
import * as echarts from 'echarts';
import { ref, onMounted } from 'vue';

const chart1 = ref(null);
const chart2 = ref(null);
const chart3 = ref(null);

const initCharts = () => {
  // 初始化第一个图表
  const myChart1 = echarts.init(chart1.value);
  myChart1.setOption({
    title: {
      text: '导诊次数'
    },
    tooltip: {},
    xAxis: {
      type: 'category',
      data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name: '导诊次数',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20, 30],
        itemStyle: {
          color: '#4874EE'
        }
      }
    ]
  });

  // 初始化第二个图表
  const myChart2 = echarts.init(chart2.value);
  myChart2.setOption({
    title: {
      text: '系统准确率'
    },
    tooltip: {
      trigger: 'item'
    },
    series: [
      {
        name: '准确率',
        type: 'pie',
        radius: '50%',
        data: [
          { value: 95, name: '准确率' },
          { value: 5, name: '误差率' }
        ],
        itemStyle: {
          color: '#4874EE'
        }
      }
    ]
  });

  // 初始化第三个图表
  const myChart3 = echarts.init(chart3.value);
  myChart3.setOption({
    title: {
      text: '用户数量变化'
    },
    tooltip: {},
    xAxis: {
      type: 'category',
      data: ['1月', '2月', '3月', '4月', '5月', '6月']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name: '用户数',
        type: 'line',
        data: [150, 230, 224, 218, 135, 147],
        itemStyle: {
          color: '#4874EE'
        }
      }
    ]
  });
};

onMounted(() => {
  initCharts();
});
</script>

<style scoped>
.main-content {
  flex: 1;
  padding: 20px;
  height: 100vh;
  width: 84vw;
  background-color: #f0f2f5;
  overflow-y: auto; /* 允许滚动以适应较多的图表 */
}

.content-area {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 20px;
}

.chart {
  flex: 1 1 calc(50% - 20px);
  background-color: white;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}
</style>
