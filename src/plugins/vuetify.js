// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify
import { createVuetify } from 'vuetify'

// Create a Vuetify instance with a custom theme
export default createVuetify({
  theme: {
    defaultTheme: 'light',  // or 'dark', to make dark mode default
    themes: {
          primary: '#1E88E5',  // Darker blue
          secondary: '#757575',  // Dark grey
          accent: '#FF4081',  // Pink accent
          black: '#000000',  // Dark background
          error: '#FF5252',
          info: '#2196F3',
          success: '#4CAF50',
          warning: '#FFC107',
          purple: '#6200EA',
          cyan: '#B2EBF2',
          grey: '#424242',
          'blue-grey': '',
    }
  }
})
