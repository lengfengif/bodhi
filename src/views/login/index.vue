<template>
  <div class="view">
    <div class="login-container">
      <div class="form-wrapper">
        <div class="content">
          <div class="content-inner">
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Footer from '@/components/footer/index.vue';
import LoginForm from './components/login-form.vue';
</script>

<style lang="less" scoped>
@keyframes bgMove {
  from {
    background-position: 0 0;
  }

  to {
    background-position: 100% 100%;
  }
}

.view {
  background-image: url('/src/assets/images/aa.jpg');
  background-size: cover;
  background-position: center;
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  animation: bgMove 20s ease-in-out infinite;
  /* 动态背景效果 */
}

.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.content {
  position: relative;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  padding-bottom: 40px;
}

.form-wrapper {
  width: 400px;
  padding: 40px;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 46px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}
</style>

<style lang="less" scoped>
// responsive
@media (max-width: @screen-lg) {
  .container {
    .banner {
      width: 25%;
    }
  }
}
</style>
