<template>
  <div class="container">
    <div class="container-carousel">
      <a-carousel
        :style="{
          width: '100%',
          height: '73vh',
        }"
        :auto-play="true"
        indicator-type="dot"
        show-arrow="hover"
      >
        <a-carousel-item v-for="(image, index) in [img1, img2]" :key="index">
          <img
            :src="image"
            :style="{
              objectFit: 'cover', // 保持图片的宽高比
              width: '100%', // 充满整个轮播容器。
              height: '100%',
            }"
          />
        </a-carousel-item>
      </a-carousel>
    </div>

    <div class="container-learn">
      <div class="container-learn-title">
        <h1>基础学习</h1>
      </div>

      <div class="container-learn-link">
        <a-link>more</a-link>
      </div>

      <div class="container-learn-context">
        <a-card hoverable class="container-learn-context-card">
          <!--  卡片1  -->
          <template #cover>
            <div
              :style="{
                height: '144px',
                overflow: 'hidden',
              }"
            >
              <img
                :style="{ width: '100%', transform: 'translateY(-1px)' }"
                alt="dessert"
                src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a20012a2d4d5b9db43dfc6a01fe508c0.png~tplv-uwbnlip3yd-webp.webp"
              />
            </div>
          </template>
          <a-card-meta title="算法与设计">
            <template #description>
              <div style="margin-top: 23px;">计算机大家都会用，但是如何利用计算机实现实际问题呢？</div>
              <div style="margin-top: 19px;">400人参加</div>
            </template>
          </a-card-meta>
        </a-card>

        <a-card hoverable class="container-learn-context-card">
          <!--  卡片  -->
          <template #cover>
            <div
              :style="{
                height: '144px',
                overflow: 'hidden',
              }"
            >
              <img
                :style="{ width: '100%', transform: 'translateY(-1px)' }"
                alt="dessert"
                src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a20012a2d4d5b9db43dfc6a01fe508c0.png~tplv-uwbnlip3yd-webp.webp"
              />
            </div>
          </template>
          <a-card-meta title="算法与设计">
            <template #description>
              <div style="margin-top: 23px;">计算机大家都会用，但是如何利用计算机实现实际问题呢？</div>
              <div style="margin-top: 19px;">400人参加</div>
            </template>
          </a-card-meta>
        </a-card>

        <a-card hoverable class="container-learn-context-card">
          <!--  卡片  -->
          <template #cover>
            <div
              :style="{
                height: '144px',
                overflow: 'hidden',
              }"
            >
              <img
                :style="{ width: '100%', transform: 'translateY(-1px)' }"
                alt="dessert"
                src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a20012a2d4d5b9db43dfc6a01fe508c0.png~tplv-uwbnlip3yd-webp.webp"
              />
            </div>
          </template>
          <a-card-meta title="算法与设计">
            <template #description>
              <div style="margin-top: 23px;">计算机大家都会用，但是如何利用计算机实现实际问题呢？</div>
              <div style="margin-top: 19px;">400人参加</div>
            </template>
          </a-card-meta>
        </a-card>

        <a-card hoverable class="container-learn-context-card">
          <!--  卡片  -->
          <template #cover>
            <div
              :style="{
                height: '144px',
                overflow: 'hidden',
              }"
            >
              <img
                :style="{ width: '100%', transform: 'translateY(-1px)' }"
                alt="dessert"
                src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a20012a2d4d5b9db43dfc6a01fe508c0.png~tplv-uwbnlip3yd-webp.webp"
              />
            </div>
          </template>
          <a-card-meta title="算法与设计">
            <template #description>
              <div style="margin-top: 23px;">计算机大家都会用，但是如何利用计算机实现实际问题呢？</div>
              <div style="margin-top: 19px;">400人参加</div>
            </template>
          </a-card-meta>
        </a-card>
      </div>
    </div>

    <div class="container-Advanced">
      <!--  卡片2  -->
      <div class="container-Advanced-title">
        <h1>进阶学习</h1>
      </div>

      <div class="container-Advanced-link">
        <a-link>more</a-link>
      </div>

      <div class="container-Advanced-context">
        <a-card hoverable class="container-Advanced-context-card">
          <template #cover>
            <div
              :style="{
                height: '144px',
                overflow: 'hidden',
              }"
            >
              <img
                :style="{ width: '100%', transform: 'translateY(-1px)' }"
                alt="dessert"
                src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a20012a2d4d5b9db43dfc6a01fe508c0.png~tplv-uwbnlip3yd-webp.webp"
              />
            </div>
          </template>
          <a-card-meta title="算法与设计">
            <template #description>
              <div style="margin-top: 23px;">计算机大家都会用，但是如何利用计算机实现实际问题呢？</div>
              <div style="margin-top: 19px;">400人参加</div>
            </template>
          </a-card-meta>
        </a-card>

        <a-card hoverable class="container-Advanced-context-card">
          <template #cover>
            <div
              :style="{
                height: '144px',
                overflow: 'hidden',
              }"
            >
              <img
                :style="{ width: '100%', transform: 'translateY(-1px)' }"
                alt="dessert"
                src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a20012a2d4d5b9db43dfc6a01fe508c0.png~tplv-uwbnlip3yd-webp.webp"
              />
            </div>
          </template>
          <a-card-meta title="算法与设计">
            <template #description>
              <div style="margin-top: 23px;">计算机大家都会用，但是如何利用计算机实现实际问题呢？</div>
              <div style="margin-top: 19px;">400人参加</div>
            </template>
          </a-card-meta>
        </a-card>

        <a-card hoverable class="container-Advanced-context-card">
          <template #cover>
            <div
              :style="{
                height: '144px',
                overflow: 'hidden',
              }"
            >
              <img
                :style="{ width: '100%', transform: 'translateY(-1px)' }"
                alt="dessert"
                src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a20012a2d4d5b9db43dfc6a01fe508c0.png~tplv-uwbnlip3yd-webp.webp"
              />
            </div>
          </template>
          <a-card-meta title="算法与设计">
            <template #description>
              <div style="margin-top: 23px;">计算机大家都会用，但是如何利用计算机实现实际问题呢？</div>
              <div style="margin-top: 19px;">400人参加</div>
            </template>
          </a-card-meta>
        </a-card>

        <a-card hoverable class="container-Advanced-context-card">
          <template #cover>
            <div
              :style="{
                height: '144px',
                overflow: 'hidden',
              }"
            >
              <img
                :style="{ width: '100%', transform: 'translateY(-1px)' }"
                alt="dessert"
                src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a20012a2d4d5b9db43dfc6a01fe508c0.png~tplv-uwbnlip3yd-webp.webp"
              />
            </div>
          </template>
          <a-card-meta title="算法与设计">
            <template #description>
              <div style="margin-top: 23px;">计算机大家都会用，但是如何利用计算机实现实际问题呢？</div>
              <div style="margin-top: 19px;">400人参加</div>
            </template>
          </a-card-meta>
        </a-card>
      </div>
    </div>

    <div class="container-products">
      <div class="container-products-title">
        <h1>部门精品</h1>
      </div>

      <div class="container-products-link">
        <a-link>more</a-link>
      </div>

      <div class="container-products-context">
        <a-card hoverable class="container-products-context-card">
          <template #cover>
            <div
              :style="{
                height: '144px',
                overflow: 'hidden',
              }"
            >
              <img
                :style="{ width: '100%', transform: 'translateY(-1px)' }"
                alt="dessert"
                src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a20012a2d4d5b9db43dfc6a01fe508c0.png~tplv-uwbnlip3yd-webp.webp"
              />
            </div>
          </template>
          <a-card-meta title="算法与设计">
            <template #description>
              <div style="margin-top: 23px;">计算机大家都会用，但是如何利用计算机实现实际问题呢？</div>
              <div style="margin-top: 19px;">400人参加</div>
            </template>
          </a-card-meta>
        </a-card>

        <a-card hoverable class="container-products-context-card">
          <template #cover>
            <div
              :style="{
                height: '144px',
                overflow: 'hidden',
              }"
            >
              <img
                :style="{ width: '100%', transform: 'translateY(-1px)' }"
                alt="dessert"
                src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a20012a2d4d5b9db43dfc6a01fe508c0.png~tplv-uwbnlip3yd-webp.webp"
              />
            </div>
          </template>
          <a-card-meta title="算法与设计">
            <template #description>
              <div style="margin-top: 23px;">计算机大家都会用，但是如何利用计算机实现实际问题呢？</div>
              <div style="margin-top: 19px;">400人参加</div>
            </template>
          </a-card-meta>
        </a-card>

        <a-card hoverable class="container-products-context-card">
          <template #cover>
            <div
              :style="{
                height: '144px',
                overflow: 'hidden',
              }"
            >
              <img
                :style="{ width: '100%', transform: 'translateY(-1px)' }"
                alt="dessert"
                src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a20012a2d4d5b9db43dfc6a01fe508c0.png~tplv-uwbnlip3yd-webp.webp"
              />
            </div>
          </template>
          <a-card-meta title="物资综合管理系统">
            <template #description>
              <div style="margin-top: 23px;">计算机大家都会用，但是如何利用计算机实现实际问题呢？</div>
              <div style="margin-top: 19px;">400人参加</div>
            </template>
          </a-card-meta>
        </a-card>

        <a-card hoverable class="container-products-context-card">
          <template #cover>
            <div
              :style="{
                height: '144px',
                overflow: 'hidden',
              }"
            >
              <img
                :style="{ width: '100%', transform: 'translateY(-1px)' }"
                alt="dessert"
                src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a20012a2d4d5b9db43dfc6a01fe508c0.png~tplv-uwbnlip3yd-webp.webp"
              />
            </div>
          </template>
          <a-card-meta title="操作规范与流程">
            <template #description>
              <div style="margin-top: 23px;">计算机大家都会用，但是如何利用计算机实现实际问题呢？</div>
              <div style="margin-top: 19px;">400人参加</div>
            </template>
          </a-card-meta>
        </a-card>
      </div>
    </div>

    <div class="container-image">
      <div class="container-image-title">
        <h1>企业形象</h1>
      </div>
      <div class="container-image-images"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import img1 from '@/assets/images/banner1.jpg';
  import img2 from '@/assets/images/banner2.jpg';
</script>

<style lang="less" scoped>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;

    &-carousel {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 63vh;
      flex-direction: column;
    }

    &-learn {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 80%;
      background: #ffffff;

      &-title {
        display: flex;
        flex-direction: row;
        width: 100%;
        margin-top: 40px;
        margin-left: 70px;
      }

      &-link {
        display: flex;
        flex-direction: row-reverse;
        flex-direction: column;
        align-items: center;
        align-self: flex-end;
        margin-right: 56px;
      }

      &-context {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
        padding: 1px 60px 60px 60px;

        &-card {
          width: calc(100% / 4 - 20px);
        }
      }
    }

    &-Advanced {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 80%;
      background: #eceff1;

      &-title {
        display: flex;
        flex-direction: row;
        width: 100%;
        margin-top: 40px;
        margin-left: 70px;
      }

      &-link {
        display: flex;
        flex-direction: row-reverse;
        flex-direction: column;
        align-items: center;
        align-self: flex-end;
        margin-right: 33px;
      }

      &-context {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
        padding: 0px 38px 38px 38px;

        &-card {
          width: calc(100% / 4 - 20px);
        }
      }
    }

    &-products {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 80%;
      background: #ffffff;

      &-title {
        display: flex;
        flex-direction: row;
        width: 100%;
        margin-top: 40px;
        margin-left: 70px;
      }

      &-link {
        display: flex;
        flex-direction: row-reverse;
        flex-direction: column;
        align-items: center;
        align-self: flex-end;
        margin-right: 33px;
      }

      &-context {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
        padding: 0px 38px 38px 38px;

        &-card {
          width: calc(100% / 4 - 20px);
        }
      }
    }

    &-image {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 80%;
      background: #ffffff;

      &-title {
        display: flex;
        flex-direction: row;
        width: 100%;
        margin-top: 40px;
        margin-left: 70px;
      }

      &-images {
        background-image: url('/src/assets/images/ animal.jpg');
        background-size: cover;
        background-position: center;
        width: 80vw;
        height: 696px;
      }
    }
  }
</style>
