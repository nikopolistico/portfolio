<template>
  <v-app id="contact">
    <v-container class="contact-container mt-5">
      <v-row>
        <!-- Contact Form Column -->
        <v-col cols="12" md="4">
          <h2 class="text-h4 text-purple text-center mb-4">Contact Me</h2>
          <transition name="fade">
            <v-form ref="form" v-model="valid" @submit.prevent="submitForm">
              <v-text-field
                v-model="name"
                :rules="[rules.required]"
                label="Name"
                required
                outlined
                class="white-text"
              />
              <v-text-field
                v-model="email"
                :rules="[rules.required, rules.email]"
                label="Email"
                required
                outlined
                class="white-text"
              />
              <v-text-field
                v-model="phone"
                label="Phone Number (Optional)"
                outlined
                class="white-text"
              />
              <v-textarea
                v-model="message"
                :rules="[rules.required]"
                label="Message"
                required
                outlined
                rows="4"
                class="white-text"
              />
              <v-btn type="submit" color="purple" class="mt-4">Send Message</v-btn>
            </v-form>
          </transition>
          <transition name="fade" mode="out-in">
            <div v-if="submitted" class="submitted-message">
              <p class="text-center text-h6 text-purple">Your message has been sent!</p>
            </div>
          </transition>
        </v-col>
        
        <!-- Leaflet Map Column -->
        <v-col cols="12" md="8">
          <!-- Location Search Input -->
          <v-row class="mb-3">
            <v-col cols="8">
              <v-text-field
                class="infield"
                v-model="location"
                label="Enter Location (e.g., London)"
                outlined
                dense
              />
            </v-col>
            <v-col cols="4">
              <v-btn @click="searchLocation" color="purple" class="full-width">Go to Location</v-btn>
            </v-col>
          </v-row>

          <!-- Leaflet Map -->
          <l-map :zoom="zoom" :center="center" style="height: 300px; width: 100%;">
            <l-tile-layer :url="'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'"></l-tile-layer>
            <l-marker :lat-lng="center"></l-marker>
          </l-map>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import axios from 'axios';
// Import components from @vue-leaflet/vue-leaflet (for Vue 3)
import { LMap, LTileLayer, LMarker } from '@vue-leaflet/vue-leaflet';
import 'leaflet/dist/leaflet.css';

export default {
  name: 'Contact',
  components: {
    LMap,
    LTileLayer,
    LMarker,
  },
  data() {
    return {
      valid: false,
      name: '',
      email: '',
      phone: '',
      message: '',
      submitted: false,
      location: '', // User's location input
      zoom: 13,
      center: [51.505, -0.09], // Default center for the map
      rules: {
        required: value => !!value || 'Required.',
        email: value => {
          const pattern = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
          return pattern.test(value) || 'Invalid e-mail.';
        },
      },
    };
  },
  methods: {
    submitForm() {
      if (this.$refs.form.validate()) {
        this.submitted = true;
        console.log(`Name: ${this.name}, Email: ${this.email}, Phone: ${this.phone}, Message: ${this.message}`);
        this.resetForm();
      }
    },
    resetForm() {
      this.name = '';
      this.email = '';
      this.phone = '';
      this.message = '';
      this.valid = false;
    },
    async searchLocation() {
      try {
        const response = await axios.get('https://api.opencagedata.com/geocode/v1/json', {
          params: {
            key: '4a1b6f5b71e546c2ae2ba9f4ab52a9cc', // replace with your API key
            q: this.location,
            limit: 1,
          },
        });

        // Extract latitude and longitude from the API response
        const { lat, lng } = response.data.results[0].geometry;
        this.center = [lat, lng]; // Update map center with new coordinates
      } catch (error) {
        alert("Location not found. Please enter a valid location.");
        console.error(error);
      }
    },
  },
};
</script>

<style scoped>
#contact {
  background-color: black;
  padding: 20px;
  box-shadow: 0 0 10px rgba(128, 0, 128, 0.5);
}

.contact-container {
  border-radius: 20px;
  padding: 20px;
}

.text-purple {
  color: purple;
}

.white-text, .infield {
  color: white !important;
}

.v-input__control {
  border: 1px solid purple !important;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter, 
.fade-leave-to {
  opacity: 0;
}

.submitted-message {
  margin-top: 20px;
  padding: 10px;
  border: 1px solid purple;
  border-radius: 5px;
  background-color: rgba(128, 0, 128, 0.1);
}
</style>
