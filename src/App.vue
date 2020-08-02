<template>
  <div id="app">
    <header class="header">
      <nav class="inner">
        <router-link to="/" exact>
          <img class="logo" src="~public/logo-48.png" alt="logo">
        </router-link>
        <router-link to="/hello">Hello</router-link>
        <router-link to="/about">About</router-link>
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
