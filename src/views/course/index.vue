<template>
    <div class="course">
        <div class="course-container">
            <img src="@/assets/images/flutter.jpg" alt="Flutter Image"
                style="width: 100%; height: auto; margin: 0 auto;" />
        </div>
        <h2 class="course-title">介绍</h2>
        <div class="course-description">
            <p>Flutter 是一个由谷歌开发的开源跨平台应用软件工具包，用于为 Android、iOS、Windows、MacOS、Linux Desktop、Google Fuchsia
                开发应用。优点包括：1、性能强大，流畅；2、路由设计优秀；3、单例模式；4、优秀的动画设计；5、UI跨平台稳定；6、可选静态的语言，语言特性优秀。</p>
        </div>

        <div class="course-card">
            <div :style="{ display: 'flex' }">
                <a-card :style="{ width: '360px' }">
                    <a-avatar>
                        <img
                          alt="avatar"
                          src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"
                          />
                      </a-avatar>
                    ByteDance's core product, Toutiao ("Headlines"), is a content platform in
                    China and around the world. Toutiao started out as a news recommendation
                    engine and gradually evolved into a platform delivering content in various
                    formats.
                </a-card>
            </div>
        </div>
    </div>
</template>

<style lang="less" scoped>
.course {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
}

.course-title {
    margin-left: 60px;
    /* 根据需要调整右边距的大小 */
}

.course-description {
    margin-left: 60px;
    color: #333;
    /* 文字颜色 */
    font-size: 16px;
    /* 字体大小 */
}
</style>
