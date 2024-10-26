<template>
  <v-app id="skills">
    <v-container-fluid class="flex-grow-1 d-flex flex-column">
      <v-container max-width="800px" class="mb-5">
        <h1 class="text-h4 font-weight-bold text-center mb-4">My Skills</h1>
        <v-list class="bglist">
          <v-card class="list">
            <v-list-item v-for="item in items" :key="item.label">
              <v-row>
                <v-col cols="1">
                  <v-img :src="item.icon" width="40" height="40" />
                </v-col>
                <v-col>
                  <v-slider
                    v-model="item.slider"
                    :color="item.color"
                    :min="0"
                    :max="100"
                    hide-details
                    class="skill-slider"
                    @change="onSliderChange(item)"
                  >
                    <template v-slot:label>
                      <span class="slider-label">{{ item.label }}</span>
                      <span class="slider-value">{{ Math.round(item.slider) }}%</span>
                    </template>
                  </v-slider>
                </v-col>
              </v-row>
            </v-list-item>
          </v-card>
        </v-list>
      </v-container>

      <v-container>
        <h2 class="text-h5 font-weight-medium text-center mb-4">My Expertise</h2>
        <v-row>
          <v-col
            v-for="item in items2"
            :key="item.title"
            cols="12"
            sm="6"
            md="4"
            lg="3"
            class="mb-4"
          >
            <v-card class="hoverable-card">
              <v-card-title class="font-weight-medium">
                {{ item.title }}
              </v-card-title>
              <v-card-text>
                <Typewriter
                  :text="item.text"
                  :typingSpeed="50"
                  class="text-body-1"
                />
              </v-card-text>
              <v-card-actions>
                <v-btn>{{ item.action }}</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>

      <v-container class="mt-5 mb-5" id="add">
        <h2 class="text-h5 font-weight-medium text-center mb-4">Additional Skills</h2>
        <v-row>
          <v-col
            v-for="item in items3"
            :key="item.skill"
            cols="12"
            sm="6"
            md="4"
            lg="3"
            class="mb-4"
          >
            <v-chip
              class="ma-1"
              :color="item.color"
              v-slot:default="{ props }"
            >
              <span v-bind="props">{{ item.skill }} {{ item.percentage }}%</span>
            </v-chip>
          </v-col>
        </v-row>
      </v-container>
    </v-container-fluid>
  </v-app>
</template>

<script>
import Typewriter from "@/components/Typewriter.vue"; // Adjust the import path based on your structure

export default {
  components: {
    Typewriter,
  },
  data() {
    return {
      items: [
        {
          icon: require("../imgIcon/php.png"),
          slider: 0,
          color: "orange",
          label: "PHP",
        },
        {
          icon: require("../imgIcon/javascript.png"),
          slider: 0,
          color: "green",
          label: "JavaScript",
        },
        {
          icon: require("../imgIcon/python.png"),
          slider: 0,
          color: "purple",
          label: "Python",
        },
        {
          icon: require("../imgIcon/java.png"),
          slider: 0,
          color: "cyan",
          label: "Java",
        },
      ],
      items2: [
        {
          title: "PHP",
          text: "A server-side language for creating dynamic web content.",
          action: "Learn More",
        },
        {
          title: "JavaScript",
          text: "A client-side language that adds interactivity to web applications.",
          action: "Learn More",
        },
        {
          title: "Python",
          text: "A readable, high-level language popular for web development.",
          action: "Learn More",
        },
        {
          title: "Java",
          text: "A versatile, object-oriented language used for large-scale applications.",
          action: "Learn More",
        },
      ],
      items3: [
        { skill: "HTML", color: "blue", percentage: 90 },
        { skill: "CSS", color: "pink", percentage: 85 },
        { skill: "Git", color: "green", percentage: 75 },
        { skill: "SQL", color: "cyan", percentage: 70 },
        { skill: "Vue.js", color: "purple", percentage: 80 },
        { skill: "React", color: "orange", percentage: 65 },
        { skill: "Node.js", color: "yellow", percentage: 60 },
        { skill: "AWS", color: "grey", percentage: 50 },
        { skill: "Agile", color: "light-blue", percentage: 55 },
        { skill: "UI/UX Design", color: "indigo", percentage: 70 },
        { skill: "Laravel", color: "red", percentage: 65 },
        { skill: "Django", color: "black", percentage: 60 },
      ],
    };
  },
  mounted() {
    this.animateSliders();
  },
  methods: {
    animateSliders() {
      // Set the final value of each slider with a slower animation
      setTimeout(() => {
        this.items.forEach((item, index) => {
          item.slider = [30, 50, 70, 80][index];
        });
      }, 2000);
    },
    onSliderChange(item) {
      const targetValue = item.slider;
      this.countSlider(item, 1, targetValue); // Start counting from 1 to the target value
    },
    countSlider(item, currentValue, targetValue) {
      const duration = 2000; // Animation duration in milliseconds (2 seconds)
      const incrementTime = duration / targetValue; // Time per increment

      const count = () => {
        if (currentValue <= targetValue) {
          item.slider = currentValue;
          currentValue++;
          setTimeout(count, incrementTime);
        }
      };

      count(); // Start the counting process
    },
  },
};
</script>

<style>
#skills {
  background-color: rgb(0, 0, 0);
  color: white;
}

.bglist,
.hoverable-card {
  background-color: transparent;
  border-radius: 20px;
  border: 2px solid purple;
  color: white;
  padding: 10px; /* Add padding for better content spacing */
  transition: background-color 0.3s ease, box-shadow 0.3s ease; /* Add transition for hover effects */
}

.bglist:hover,
.hoverable-card:hover {
  background-color: rgba(255, 255, 255, 0.1); /* Lighten background on hover */
  box-shadow: 0 4px 20px rgba(255, 255, 255, 0.2); /* Add shadow on hover */
}

.list {
  background-color: transparent;
  color: aliceblue;
}

.skill-slider {
  transition: all 0.5s ease;
}

.slider-label {
  font-size: 1.2em;
  color: white;
  margin-right: 5px;
}

.slider-value {
  font-size: 1.2em;
  color: white;
  margin-left: 10px;
}

.hoverable-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease; /* Added transition for smooth scaling and shadow */
}

.hoverable-card:hover {
  transform: translateY(-5px) scale(1.02); /* Scale slightly on hover for effect */
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* Add shadow on hover */
}

@media (max-width: 600px) {
  .hoverable-card {
    padding: 12px;
  }
}
</style>
