<template>
  <div class="person">
    <div class="person-right">

      <div class="profile-header">
        <h2>个人信息</h2>
      </div>

      <div class="profile-details">
        <div class="detail-item">
          <span class="detail-label">姓名：</span>
        </div>
        <div class="detail-item">
          <span class="detail-label">学历：</span>
        </div>
        <div class="detail-item">
          <span class="detail-label">职业：</span>
        </div>
        <div class="detail-item">
          <span class="detail-label">部门：</span>
        </div>
        <div class="detail-item">
          <span class="detail-label">性别：</span>
        </div>
        <div class="detail-item">
          <span class="detail-label">年龄：</span>
        </div>
        <div class="detail-item">
          <span class="detail-label">地区：</span>
        </div>
      </div>

      <div class="profile-header">
        <h2>账号信息</h2>
      </div>

        <div class="account-info">
          <div class="detail-item">
            <span class="detail-label">ID：</span>
          </div>
          <div class="detail-item">
            <span class="detail-label">登陆邮箱：</span>
          </div>
          <div class="detail-item">
            <span class="detail-label">密码：</span>
          </div>
          <div class="detail-item">
            <span class="detail-label">手机号：</span>
          </div>
        </div>

    </div>
  </div>
</template>

<style lang="less" scoped>
.person {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.person-right {
  margin-left: 10vw;
  margin-top: 50px;
}

.profile-header {
  margin-bottom: 1em;
}

.profile-details {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background-color: rgba(177, 216, 245, 0.15);
  width: 756px;
  height: 301px;
  padding-left: 30px;
}

.detail-item {
  display: flex;
  align-items: center;
  font-size: 100%;
}

.account-info {
  display: grid;
  background-color: rgba(177, 216, 245, 0.15);
  height: 301px;
  padding-left: 30px;  
}
</style>