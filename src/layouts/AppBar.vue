<template>
  <v-layout>

    <v-app-bar>
      <v-app-bar-nav-icon variant="text" @click="sidebarbtn"></v-app-bar-nav-icon>

      <p>{{ currentRouteName }}</p>

      <v-spacer></v-spacer>

      <v-btn variant="text" icon="mdi-magnify"></v-btn>

      <v-btn variant="text" icon="mdi-filter"></v-btn>

      <v-btn variant="text" icon="mdi-dots-vertical"></v-btn>
    </v-app-bar>

    <v-main>
      <div class="d-flex justify-center">
        <router-view />
      </div>
    </v-main>
  </v-layout>
</template>
<script>
export default {
  props: {
    'sidebarbtn': Function,
  },
  computed: {
    currentRouteName() {
      return this.$route.name;
    }
  }
}
</script>
