<template>
  <v-app id="main">
    <v-container fluid class="container">
      <v-row class="fill-height">
        <!-- Main Content -->
        <v-col cols="12" md="6" class="text-center text-md-left">
          <div class="about-me-section">
            <h1 class="text-white glowing-text">
              I'm Niko Polistico
            </h1>
            <p class="text-white description-text" ref="typingText"></p>
            <h1 class="text-white glowing-text1">
              IT - 110
            </h1>
            <p class="text-white description-text" ref="typingText1"></p>
          </div>
        </v-col>

        <!-- Image Section -->
        <v-col cols="12" md="6" class="image-wrapper d-flex justify-center">
          <v-img
            src="../img/profilemain.png"
            alt="Profile image of Niko Polistico."
            class="image"
            contain
            height="80vh"
            max-width="400"
          ></v-img>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  mounted() {
    this.typingEffect(
      "I’m a passionate web developer focused on creating functional and visually appealing web applications.",
      'typingText'
    );
    this.typingEffect(
      "Midterm front-end Project",
      'typingText1'
    );
  },
  methods: {
    typingEffect(text, element) {
      const typingElement = this.$refs[element];
      let index = 0;
      function type() {
        if (index < text.length) {
          typingElement.innerHTML += text.charAt(index);
          index++;
          setTimeout(type, 50); // Adjust typing speed here
        }
      }
      type();
    },
  }
};
</script>

<style>
#main {
  background-color: rgb(5, 5, 5); /* Dark background */
  box-shadow: inset 0 0 15px 5px rgba(128, 0, 128, 0.5); /* Subtle inner purple glow */
  position: relative;
  animation: backgroundInnerGlow 3s infinite alternate;
  overflow: hidden; /* Prevent pseudo-elements from spilling outside */
}

/* Keyframes for the subtle pulsating inner glow */
@keyframes backgroundInnerGlow {
  0% {
    box-shadow: inset 0 0 10px 5px rgba(128, 0, 128, 0.4);
  }
  50% {
    box-shadow: inset 0 0 20px 10px rgba(128, 0, 128, 0.6);
  }
  100% {
    box-shadow: inset 0 0 15px 5px rgba(128, 0, 128, 0.5);
  }
}

/* Worms Crawling Effect */
#main::before,
#main::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  border: 2px solid transparent;
  border-radius: 15px;
  box-shadow: 0 0 10px 2px purple, 0 0 20px 5px rgba(128, 0, 128, 0.6);
  animation: wormCrawl 5s linear infinite alternate;
  pointer-events: none;
}

#main::before {
  top: -5px;
  left: -5px;
  animation-delay: 0s;
}

#main::after {
  bottom: -5px;
  right: -5px;
  animation-delay: 2.5s;
}

@keyframes wormCrawl {
  0% {
    transform: scale(1) rotate(0deg);
    opacity: 0.5;
  }
  50% {
    transform: scale(1.05) rotate(45deg);
    opacity: 1;
  }
  100% {
    transform: scale(1) rotate(90deg);
    opacity: 0.5;
  }
}

/* Fade-in Animation */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px); /* Slight slide-up effect */
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Apply fade-in effect */
.about-me-section {
  padding: 15px;
  border-radius: 10px;
  animation: fadeIn 1.5s ease forwards;
  opacity: 0; /* Initial state for fade-in */
}

/* Glowing Text Effect */
.glowing-text {
  font-size: 3rem; /* Increase text size for the name */
  text-shadow: 0 0 5px rgba(128, 0, 128, 1), 0 0 10px rgba(128, 0, 128, 0.8), 0 0 15px rgba(128, 0, 128, 0.6);
}

.glowing-text1 {
  font-size: 5rem; /* Increase text size for the name */
  text-shadow: 0 0 5px rgba(128, 0, 128, 1), 0 0 10px rgba(128, 0, 128, 0.8), 0 0 15px rgba(128, 0, 128, 0.6);
}

/* Description Text Style */
.description-text {
  font-size: 1.2rem; /* Smaller size for the description */
  opacity: 0; /* Initial state for fade-in */
  animation: fadeIn 1.5s ease forwards; /* Apply fade-in effect */
  animation-delay: 0.5s; /* Delay the description fade-in */
}

/* Image Fade-in Effect */
.image {
  animation: fadeIn 1.5s ease forwards;
  opacity: 0; /* Initial state for fade-in */
  animation-delay: 0.5s; /* Delay image fade-in slightly */
}

/* Profile Image Style */
.round-circle {
  border-radius: 50%;
  border: 5px solid purple;
  max-width: 100%;
  height: auto;
  box-shadow: 0 0 20px rgba(128, 0, 128, 0.6), 0 0 30px rgba(128, 0, 128, 0.5);
}

/* Glowing Border Effect */
.glowing-border {
  animation: glowing 2s infinite;
}

@keyframes glowing {
  0% {
    box-shadow: 0 0 5px purple, 0 0 10px purple;
  }
  50% {
    box-shadow: 0 0 15px purple, 0 0 30px purple;
  }
  100% {
    box-shadow: 0 0 5px purple, 0 0 10px purple;
  }
}

/* Typing Text Effect */
#typing-text {
  display: inline-block;
  border-right: 2px solid purple;
  white-space: nowrap;
  overflow: hidden;
  animation: blink-caret 0.75s step-end infinite;
}

/* Caret Blinking Effect */
@keyframes blink-caret {
  50% {
    border-color: transparent;
  }
}

/* Text Colors */
.text-purple {
  color: purple;
}

/* Media Queries for Responsiveness */
@media (max-width: 768px) {
  .glowing-text, .glowing-text1 {
    font-size: 2.5rem; /* Reduce font size on smaller screens */
  }

  .description-text {
    font-size: 1rem; /* Smaller description text */
  }
}
</style>
