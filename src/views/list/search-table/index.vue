<template>
  <div class="Achievement">
    <div class="Achievement-left">
      <div class="Avatar-container">
        <a-space size="large">
          <a-avatar :size="74">
            <img alt="avatar"
              src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp" />
          </a-avatar>
        </a-space>

        <div class="Achievement-left-editName">编辑昵称</div>
      </div>

      <div class="buttons-container">
        <div class="Achievement-left-button">
          <a-space>
            <img src="@/assets/images/myAchievement/personage.png" alt="个人图标"
              style="width: 24px; height: 24px; margin-right: -10px; margin-top: -5px;">
            <a-button type="text" @click="$router.push('personalData')">个人资料</a-button>
          </a-space>
        </div>

        <div class="Achievement-left-button">
          <a-space>
            <img src="@/assets/images/myAchievement/course.png" alt="个人图标"
              style="width: 24px; height: 24px; margin-right: -10px; margin-top: -5px;">
            <a-button type="text" @click="$router.push('/course/learn')">我的课程</a-button>
          </a-space>
        </div>

        <div class="Achievement-left-button">
          <a-space>
            <img src="@/assets/images/myAchievement/honor.png" alt="个人图标"
              style="width: 24px; height: 24px; margin-right: -10px; margin-top: -5px;">
              <a-button type="text" @click="$router.push('myAchievement')">我的成就</a-button>
          </a-space>
        </div>

        <div class="Achievement-left-button">
          <a-space>
            <img src="@/assets/images/myAchievement/exam1.png" alt="个人图标"
              style="width: 24px; height: 24px; margin-right: -10px; margin-top: -5px;">
            <a-button type="text" @click="$router.push('myExam')">我的考试</a-button>
          </a-space>
        </div>
      </div>
    </div>

    <div class="Achievement-right">
      <RouterView />
    </div>

    <!-- <div class="Achievement-container">
      <div class="Achievement-right">
        <div class="course-item">
          <div class="course-text">课程</div>
          <img src="@/assets/images/pic.png" alt="课程图片 1" class="course-image">
        </div>
        <div class="course-item">
          <div class="course-text">时间</div>
          <img src="@/assets/images/pic.png" alt="课程图片 2" class="course-image">
        </div>
        <div class="course-item">
          <div class="course-text">总分</div>
          <img src="@/assets/images/pic.png" alt="课程图片 2" class="course-image">
        </div>
      </div>

      <div class="Achievement-card">
        <div class="Achievement-card1">
          <div :style="{
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
            padding: '10px',
            backgroundColor: 'var(--color-fill-2)',
          }">
            <a-card :style="{ width: '446px', height: '90px' }" :bordered="false">
              <div :style="{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start' }">
                <img src="@/assets/images/visualization.image/flutter.png" alt="Flutter Image"
                  :style="{ width: '75px', marginRight: '10px', marginTop: '-30px' }" />
                <div
                  :style="{ display: 'flex', flexDirection: 'column', width: 'calc(100% - 90px)', alignItems: 'flex-start' }">
                  <a-typography-text>Flutter 跨平台开发</a-typography-text>
                  <a-progress :percent="0.2" :style="{ width: '74%', marginTop: '10px' }" />
                </div>
              </div>
              <a-progress type="circle" :percent="percent"
                style="position: absolute; right: 10px; top: 10px; /* 或者根据需要调整 */" />
            </a-card>

            <a-card :style="{ width: '446px', marginLeft: '24px', height: '90px' }" bordered="false">
              <div :style="{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start' }">
                <img src="@/assets/images/visualization.image/eggjs.png" alt="Egg JS Image"
                  :style="{ width: '90px', marginRight: '10px', marginTop: '-40px' }" />
                <div
                  :style="{ display: 'flex', flexDirection: 'column', width: 'calc(100% - 90px)', alignItems: 'flex-start' }">
                  <a-typography-text>Egg JS 入门到精通</a-typography-text>
                  <a-progress :percent="0.2" :style="{ width: '74%', marginTop: '10px' }" />
                </div>
              </div>
              <a-progress type="circle" :percent="percent" style="position: absolute; right: 10px; top: 10px;" />
            </a-card>
          </div>
        </div>

        <div class="Achievement-card2">
          <div :style="{
            display: 'flex',
            width: '100%',
            boxSizing: 'border-box',
            padding: '20px',
            backgroundColor: 'var(--color-fill-2)',
            position: 'relative', 
          }">
            <a-card :style="{ width: '446px', height: '90px' }" :bordered="false">
              <div :style="{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start' }">
                <img src="@/assets/images/visualization.image/react.png" alt="React Image"
                  :style="{ width: '90px', marginRight: '10px', marginTop: '-40px' }" />
                <div
                  :style="{ display: 'flex', flexDirection: 'column', width: 'calc(100% - 90px)', alignItems: 'flex-start' }">
                  <a-typography-text>React 前端实战</a-typography-text>
                  <a-progress :percent="0.2" :style="{ width: '74%', marginTop: '10px' }" />
                </div>
              </div>
              <a-progress type="circle" :percent="percent"
                style="position: absolute; right: 10px; top: 10px; /* 或者根据需要调整 */" />
            </a-card>

            <a-card :style="{ width: '446px', marginLeft: '24px', height: '90px' }" bordered="false">
              <div :style="{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start' }">
                <img src="@/assets/images/visualization.image/prom.png" alt="Prometheus Image"
                  :style="{ width: '80px', marginRight: '10px', marginTop: '-40px' }" />
                <div
                  :style="{ display: 'flex', flexDirection: 'column', width: 'calc(100% - 90px)', alignItems: 'flex-start' }">
                  <a-typography-text>Prometheus 应用详情</a-typography-text>
                  <a-progress :percent="0.2" :style="{ width: '74%', marginTop: '10px' }" />
                </div>
              </div>
              <a-progress type="circle" :percent="percent" style="position: absolute; right: 10px; top: 10px;" />
            </a-card>
          </div>
        </div>

        <div class="Achievement-card3">
          <div :style="{
            display: 'flex',
            width: '100%',
            boxSizing: 'border-box',
            padding: '20px',
            backgroundColor: 'var(--color-fill-2)',
            position: 'relative', 
          }">
            <a-card :style="{ width: '446px', height: '90px' }" :bordered="false">
              <div :style="{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start' }">
                <img src="@/assets/images/visualization.image/k8s.png" alt="K8s Image"
                  :style="{ width: '80px', marginRight: '10px', marginTop: '-40px' }" />
                <div
                  :style="{ display: 'flex', flexDirection: 'column', width: 'calc(100% - 90px)', alignItems: 'flex-start' }">
                  <a-typography-text>K8s 内容搭建</a-typography-text>
                  <a-progress :percent="0.2" :style="{ width: '74%', marginTop: '10px' }" />
                </div>
              </div>
              <a-progress type="circle" :percent="percent"
                style="position: absolute; right: 10px; top: 10px; /* 或者根据需要调整 */" />
            </a-card>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const percent = ref(0.2);

    return {
      percent
    }
  },
}
</script>

<style lang="less" scoped>
.Achievement {
  display: flex;
  flex-direction: row;
  height: 800px;
  width: 100%;
}

.Achievement-left {
  width: 20vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1vw;
  background-color: rgba(255, 255, 255);
}

.Achievement-right {
  width: 80vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1vw;
  background-color: rgb(255, 255, 255)
}

.Avatar-container {
  margin-bottom: 20px;
  margin-top: 70px;
}

.Achievement-left-editName {
  margin-top: 10px;
  color: #333;
  text-align: center;
}

.buttons-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.Achievement-left-button {
  margin-top: 20px;
  font-size: 14px;
  color: black;
  text-align: center;
}

.Achievement-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
}

.course-item {
  display: flex;
  align-items: center;
  margin-right: 30px;
}

.course-text {
  margin-bottom: 5px;
}

.course-image {
  width: 161px;
  height: 124px;
}

.Achievement-card {
  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;
  margin-bottom: 1%;
  background-color: rgba(255,255,255,1);;
}

</style>
