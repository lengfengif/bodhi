<template>
    <div class="Achievement">
        <div class="container">
            <div class="Achievement-icon">
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
                        width: '100%',
                        padding: '20px',
                        position: 'relative',
                    }">
                    <a-card :style="{ width: '446px', height: '90px' }" bordered="false">
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
                            <a-progress type="circle" :percent="percent"
                                style="position: absolute; right: 10px; top: 10px;" />
                        </a-card>
                    </div>
                </div>

                <div class="Achievement-card2">
                    <div :style="{
                        display: 'flex',
                        width: '100%',
                        padding: '20px',
                        position: 'relative',
                    }">
                        <a-card :style="{ width: '446px', height: '90px' }" bordered="false">
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
                            <a-progress type="circle" :percent="percent"
                                style="position: absolute; right: 10px; top: 10px;" />
                        </a-card>
                    </div>
                </div>

                <div class="Achievement-card3">
                    <div :style="{
                        display: 'flex',
                        width: '100%',
                        padding: '20px',
                        position: 'relative',
                    }">
                        <a-card :style="{ width: '446px', height: '90px' }" bordered="false">
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
        </div>
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

.container {
    position: relative;
    margin-top: 70px;
}

.Achievement-icon {
    width: 80vw;
    display: flex;
    justify-content: center;
}

.course-item {
    display: flex;
    align-items: center;
    margin-right: 120px;  /* image 之间的间距 */
}

.course-text {
    margin-bottom: 5px;
}

.course-image {
    width: 161px;
    height: 124px;
}

.Achievement-card {
    margin-top: 40px;
    margin-left: 60px;
}
</style>