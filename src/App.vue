<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline">
        <v-layout align-center>
          <img src="img/icons/android-chrome-512x512.png" height="40" class="mr-2">
          <span id="title">alter life tracker</span>
        </v-layout>
      </v-toolbar-title>
    </v-toolbar>

    <v-content>
      <LogList/>
    </v-content>
  </v-app>
</template>

<script>
import LogList from './components/LogList'

export default {
  name: 'App',
  components: {
    LogList
  },
  data () {
    return {
      //
    }
  }
}
</script>

<stlyle lang="stylus">
  #title
    font-family: 'Leckerli One', cursive;

</stlyle>
