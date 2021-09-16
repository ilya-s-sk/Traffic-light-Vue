<template>
  <div id="app">
    <div id="nav">
        <router-link to="/red" class="link-red">Red</router-link>
        <router-link to="/yellow" class="link-yellow">Yellow</router-link>
        <router-link to="/green" class="link-green">Green</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  text-decoration: none;
  font-size: 2rem;
  color: #5b6467;
  margin-left: 30px;
}

#nav .link-red.router-link-exact-active {
  color: #FC5753;
}
#nav .link-yellow.router-link-exact-active {
  color: #FDBC40;
}
#nav .link-green.router-link-exact-active {
  color: #36C84B;
}
</style>
