<template>
  <v-app id="project">
    <v-main>
      <v-container>
        <v-row>
          <v-col cols="12">
            <v-card id="con">
              <v-card-title>
                <h2 class="text-h5 text--white">Projects</h2>
              </v-card-title>
              <v-card-text>
                <v-row>
                  <v-col
                    v-for="(project, index) in paginatedProjects"
                    :key="index"
                    cols="12"
                    md="4"
                  >
                    <v-card class="mb-3" id="con1">
                      <v-img
                        :src="project.image"
                        height="200px"
                        contain
                      ></v-img>
                      <v-card-title>{{ project.title }}</v-card-title>
                      <v-card-text>
                        {{ project.description }}
                      </v-card-text>
                      <v-card-actions>
                        <v-btn
                          :href="project.link"
                          target="_blank"
                          color="primary"
                        >
                          View Project
                        </v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-col>
                </v-row>
              </v-card-text>
              <v-pagination
                v-model="currentPage"
                :length="totalPages"
                color="blue"
              ></v-pagination>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "PortfolioPage",
  data() {
    return {
      projects: [
        {
          title: "Project 1",
          description:
            "This is a brief description of your first project. Highlight key features and technologies used.",
          image: require("../img/personalb.png"), // Replace with your project image URL
          link: "https://nikopolistico.github.io/BootstrapDeploy/", // Replace with your project link
        },
        {
          title: "Project 2",
          description:
            "This is a brief description of your second project. Highlight key features and technologies used.",
          image: require("../img/personal.png"), // Replace with your project image URL
          link: "https://nikopolistico.github.io/TailwindDeploy/", // Replace with your project link
        },
        {
          title: "Project 3",
          description:
            "This is a brief description of your third project. Highlight key features and technologies used.",
          image: require("../img/login.png"), // Replace with your project image URL
          link: "https://nikopolistico.github.io/LoginSignup/", // Replace with your project link
        },
        {
          title: "Project 4",
          description:
            "This is a brief description of your third project. Highlight key features and technologies used.",
          image: require("../img/todo.png"), // Replace with your project image URL
          link: "https://todolistvercelvue.vercel.app/#/", // Replace with your project link
        },
        {
          title: "Project 5",
          description:
            "This is a brief description of your third project. Highlight key features and technologies used.",
          image: require("../img/supabase.png"), // Replace with your project image URL
          link: "https://vue-supabase-act.vercel.app/", // Replace with your project link
        },
        {
          title: "Project 6",
          description:
            "This is a brief description of your third project. Highlight key features and technologies used.",
          image: require("../img/weather.png"), // Replace with your project image URL
          link: "https://weather-io-seven.vercel.app/", // Replace with your project link
        },
      ],
      currentPage: 1,
      itemsPerPage: 3, // Number of projects to display per page
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.projects.length / this.itemsPerPage);
    },
    paginatedProjects() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.projects.slice(startIndex, endIndex);
    },
  },
};
</script>

<style scoped>

#project{
  background-color: rgb(0, 0, 0);
  color:  white;
}
#con{
  background-color: transparent;
  color: white;
}
#con1{
  background-color: transparent;
  color: white;
  border: 2px solid purple;
  padding: 5px;
}
</style>