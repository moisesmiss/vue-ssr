<template>
  <div id="app">
    <header class="header">
      <nav class="inner">
        <router-link to="/" exact>
          <img class="logo" src="@public/logo-48.png" alt="logo">
        </router-link>
        <router-link class="link" to="/hello">Hola</router-link>
        <router-link class="link" to="/about">About</router-link>
      </nav>
    </header>
    <router-view class="view"></router-view>
  </div>
</template>

<style>
body{
  font-family: sans-serif;
}
</style>

<style scoped lang="scss">
  .link{
    padding: 5px;
    display: inline-block;
    border: 1px solid black;
    text-decoration: none;
    margin: 0 5px;
    color: black;
  }
</style>
