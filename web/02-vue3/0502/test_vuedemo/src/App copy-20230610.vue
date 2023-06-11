
<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <!-- 1.路由链接link -->
        <!-- <a href="/">主页</a> -->

        <!-- RouterLink会渲染出一个a标签,它的to属性，会被渲染为a标签的href属性 -->
        <!-- 好处：可以给to属性绑定变量，to的值等于路由配置中的path -->
        <RouterLink to="/">Home</RouterLink>
        <RouterLink :to="{name: 'about' , query:{a:'123',b:'456'}}">About</RouterLink>  
        <!-- query会在地址栏中显示：用？接第一个属性名=属性值，不同属性之间用&连接
        ?a=123&b=456 -->
      </nav>
    </div>
  </header>

  <!-- 2.路由占位符 -->
  <!-- 匹配到的路由组件，将显示在路由占位符中 -->
  <RouterView />
  <!-- <RouterView /> -->
</template>


<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>



<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
