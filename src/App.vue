<template>
  <v-app>
    <!-- Fixed App Navbar -->
    <AppNavbar />
    <!-- Main Content Area -->
    <v-main class="main-content">
      <Appopening v-if="$route.path === '/'"/>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import AppNavbar from '@/components/AppNavbar.vue'

export default {
  name: 'App', 
  components: {
    AppNavbar,
  },
};
</script>

<style scoped>
/* Ensure the app uses full height */

html, body, #app {
  height: 100%;
  margin: 0;
  padding: 0;
}

.v-app {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

/* Fix the AppNavbar at the top */
.AppNavbar {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
}

/* Scrollable content in the main area */
.main-content {
  flex-grow: 1;
  overflow-y: auto;
  padding-top: 64px; /* Adjust based on AppNavbar height */
}
</style>
