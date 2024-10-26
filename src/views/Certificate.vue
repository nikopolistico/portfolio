<template>
    <v-app id="cer">
      <v-container fluid class="page-wrapper">
        <v-row class="content-wrapper" justify="center">
          <v-col cols="12" md="4" id="selected">
            <v-radio-group v-model="selected" column>
              <v-radio
                v-for="(certificate, index) in certificates"
                :key="index"
                :label="certificate.label"
                :value="certificate.value"
              ></v-radio>
            </v-radio-group>
          </v-col>
  
          <v-col cols="12" md="8">
            <transition name="fade" mode="out-in">
              <v-card v-if="selected" class="section page-wrapper" raised>
                <v-img
                  class="image-container mt-4"
                  :src="currentCertificate.image"
                  height="300px"
                ></v-img>
                <v-card-title class="info-container">
                  <h1>{{ currentCertificate.title }}</h1>
                </v-card-title>
                <v-card-text>
                  <p>{{ currentCertificate.description }}</p>
                </v-card-text>
                <v-card-actions>
                  <v-btn @click="nextCertificate" color="primary">Next</v-btn>
                </v-card-actions>
              </v-card>
            </transition>
          </v-col>
        </v-row>
      </v-container>
    </v-app>
  </template>
  
  <script>
  export default {
    data() {
      return {
        selected: 'toggle1', // Default selected radio button
        certificates: [
          {
            value: 'toggle1',
            label: '1st Certificate',
            title: 'Web Developer',
            image: require("../img/web.jpg"),
            description: 'Learn to build responsive websites and applications using modern web technologies.',
          },
          {
            value: 'toggle2',
            label: '2nd Certificate',
            title: 'Cloud Computing',
            image: require("../img/cloud.png"),
            description: 'Understand cloud infrastructure, services, and solutions for deploying applications in the cloud.',
          },
          {
            value: 'toggle3',
            label: '3rd Certificate',
            title: 'Machine Learning',
            image: require("../img/Machine.png"),
            description: 'Explore algorithms and techniques for creating intelligent systems that learn from data.',
          },
          {
            value: 'toggle4',
            label: '4th Certificate',
            title: 'Data Science',
            image: require("../img/data.png"),
            description: 'Gain insights from data using statistical analysis, data visualization, and predictive modeling.',
          },
          {
            value: 'toggle5',
            label: '5th Certificate',
            title: 'Cybersecurity',
            image: require("../img/cyber.png"),
            description: 'Learn to protect systems, networks, and programs from digital attacks and unauthorized access.',
          },
        ],
      };
    },
    computed: {
      currentCertificate() {
        return this.certificates.find(
          (certificate) => certificate.value === this.selected
        );
      },
    },
    methods: {
      nextCertificate() {
        const currentIndex = this.certificates.findIndex(
          (certificate) => certificate.value === this.selected
        );
        const nextIndex = (currentIndex + 1) % this.certificates.length; // Loop back to the start
        this.selected = this.certificates[nextIndex].value;
      },
    },
  };
  </script>
  
  <style>
  .page-wrapper {
    background-color: black; /* Background color for the entire page */
    min-height: 100vh; /* Ensure the page takes full height */
    color: white;
  }
  
  .content-wrapper {
    margin-top: 20px; /* Add margin for spacing */
  }
  
  .image-container {
    height: 200px; /* Set a height for the image container */
  }
  
  /* Transition styles */
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s ease;
  }
  
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
  </style>
  