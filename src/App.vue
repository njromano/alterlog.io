<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline">
        <v-layout align-center>
          <img alt="alter life tracker" src="img/icons/android-chrome-512x512.png" height="40" class="mr-2">
          <span id="title">alter life tracker</span>
        </v-layout>
      </v-toolbar-title>
    </v-toolbar>

    <v-content class="mb-5">
      <router-view></router-view>
    </v-content>

    <v-bottom-nav
      fixed
      v-model="bottomNav">
      <v-btn to="/alters">
        <span>Alters</span>
        <v-icon>group</v-icon>
      </v-btn>
      <v-btn to="/">
        <span>Home</span>
        <v-icon>home</v-icon>
      </v-btn>
      <v-btn to="/about">
        <span>History</span>
        <v-icon>history</v-icon>
      </v-btn>
    </v-bottom-nav>
  </v-app>
</template>

<script>
import LogList from './components/LogList';

export default {
  name: 'App',
  components: {
    LogList,
  },
  data() {
    return {
      bottomNav: 'alters',
    };
  },
};
</script>

<style lang="stylus">
  #title
    font-family: 'Leckerli One', cursive;
</style>
