<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline">
        <span>alterlog.io</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
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
