import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';
import { loadFonts } from './plugins/webfontloader';

// Leaflet Imports
import { LMap, LTileLayer, LMarker } from '@vue-leaflet/vue-leaflet';
import 'leaflet/dist/leaflet.css';

// Load fonts
loadFonts();

// Create and configure app
const app = createApp(App);

// Register Leaflet components globally
app.component('l-map', LMap);
app.component('l-tile-layer', LTileLayer);
app.component('l-marker', LMarker);

// Use router and Vuetify
app.use(router).use(vuetify).mount('#app');
