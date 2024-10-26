<template>
  <v-card>
    <!-- App Bar -->
    <v-app-bar color="black" prominent>
      <v-app-bar-nav-icon @click.stop="goToHome" color="white"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <template v-if="$vuetify.display.mdAndUp">
        <v-btn icon="mdi-github" class="white--text"></v-btn>
        <v-btn icon="mdi-facebook" class="white--text"></v-btn>
      </template>
      <v-btn icon="mdi-dots-vertical" class="white--text"></v-btn>
    </v-app-bar>

    <!-- Navigation Drawer -->
    <v-navigation-drawer
      v-model="drawer"
      permanent
      width="100"
      class="navi"
      color="black"
    >
      <!-- Profile Image and About Me -->
      <v-list-item @click="goToHome">
        <template v-slot:prepend>
          <v-img src="../img/profile.png" alt="Niko Polistico" class="avatar"></v-img>
        </template>
        <v-list-item-title class="ml-2"></v-list-item-title>
      </v-list-item>

      <v-divider></v-divider>

      <!-- Links -->
      <v-list density="compact" nav>
        <v-list-item
          v-for="item in links"
          :key="item.text"
          :to="item.to"
          :style="hoverLinks(item.text)"
          @mouseover="hoveredItem = item.text"
          @mouseleave="hoveredItem = ''"
        >
          <v-icon style="margin-right: 8px;">{{ item.icon }}</v-icon>
          <v-list-item-title class="v-list-item-title">{{ item.text }}</v-list-item-title>
        </v-list-item>
      </v-list>

      <!-- Settings Icon at the Bottom -->
      <v-list-item class="settings-item">
        <v-icon class="mr-2">mdi-cog</v-icon>
      </v-list-item>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      drawer: true,
      hoveredItem: "",
      links: [
        { icon: "mdi-folder-account", text: "Projects", to: "/projects" },
        { icon: "mdi-code-tags", text: "Skills", to: "/skills" },
        { icon: "mdi-card-account-mail", text: "Contact", to: "/contact" },
        { icon: "mdi-file-document-outline", text: "Resume", to: "/resume" }, 
        { icon: "mdi-certificate", text: "Certificates", to: "/certificates" }, // Added Certificates link
      ],
    };
  },
  methods: {
    hoverLinks(linkText) {
      return {
        border: this.hoveredItem === linkText ? "2px solid purple" : "none",
        borderRadius: "20px",
        transition: "border 0.2s ease, background-color 0.2s ease",
        backgroundColor: this.hoveredItem === linkText ? "rgba(255, 255, 255, 0.1)" : "transparent",
        color: this.hoveredItem === linkText ? "purple" : "white",
      };
    },
    goToHome() {
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.navi {
  background-color: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  position: relative;
}

.v-list-item-title {
  color: white;
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid white;
}

.v-list-item {
  transition: background-color 0.2s ease;
}

.v-list-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

/* Positioning the Settings item at the absolute bottom */
.settings-item {
  position: absolute;
  justify-items: center;
  bottom: 0;
  width: 100%;
  color: white;
  padding: 10px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
}
</style>