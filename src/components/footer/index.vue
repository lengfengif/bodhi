<template>
  <!-- <a-layout-footer class="footer">Arco Pro</a-layout-footer> -->

  <div class="container-button">  
    <div class="container-button-content">  
      <div class="left-content">  
        <div class="logo-container">  
          <img src="/src/assets/images/tree.jpg" alt="Bodhi Education Logo" class="logo" />  
          <span class="title">Bodhi Education</span>  
        </div>  
      </div>  
      <div class="right-content">  
        <div class="link-group">  
          <a href="link1">企业官网</a>  
          <a href="link2">相关链接</a>  
          <a href="link3">相关链接</a>  
        </div>  
        <div class="link-second">   
          <a href="link4">相关链接</a>  
          <a href="link5">相关链接</a>  
        </div>  
        <div class="link-third">   
          <a href="link6">相关链接</a>  
          <a href="link7">相关链接</a>  
        </div> 
      </div>  
    </div>  
  </div>
</template>

<script lang="ts" setup></script>

<style lang="less" scoped>
.container-button {  
  display: flex;  
  flex-direction: column; 
  width: 100%;
  height: 250px;  
  background-color: black;
  padding: 20px; /* 调整内边距以包含更多空间 */  
  justify-content: center;
  box-sizing: border-box; /* 确保内边距不会增加总宽度 */ 
}  
  
.container-button-content {
  background: black;  
  display: flex;  
  width: 100%;  
  margin: auto; 
  align-items: flex-start; 
  flex-wrap: wrap;  
}  
  
.left-content {  
  flex: 0 0 20%; 
  display: flex;  
  flex-direction: column;  
  justify-content: center;
  align-items: center; 
  text-align: center; 
} 

.logo-container {
  margin-top: 2px; 
}

  
.logo {  
  width: 60px;
  position: relative;
  top: 20px; 
}  

.title {  
  font-size: 20px;  
  color: white;  
  margin-top: -30px; 
}  

.right-content {  
  flex: 1;  
  display: flex;  
  flex-direction: column;  
  justify-content: flex-start; 
  align-items: flex-start; 
  gap: 40px; 
  margin-left: 130px;
  margin-top: 47px;
}  

.link-group, .link-second, .link-third {  
  display: flex;  
  gap: 90px;
  margin-bottom: 10px; 
  color: white;  
  align-items: center; 
}  
  
.link-second, .link-third {  
  display: flex;  
  gap: 90px;  
  margin-bottom: 10px;  
  color: white;  
  align-items: center;  
  padding-left: 155px; /* 向右移动 */  
}

.link-group a, .link-second a, .link-third a {  
  color: white;  
  text-decoration: none;  
  font-size: 16px; 
}
</style>
