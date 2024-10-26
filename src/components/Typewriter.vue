<template>
    <span class="typewriter">{{ displayedText }}</span>
</template>
  
  <script>
  export default {
    props: {
      text: {
        type: String,
        required: true,
      },
      typingSpeed: {
        type: Number,
        default: 100, // Speed in milliseconds
      },
    },
    data() {
      return {
        displayedText: "",
        index: 0,
      };
    },
    mounted() {
      this.typeText();
    },
    methods: {
      typeText() {
        if (this.index < this.text.length) {
          // Add a newline after every 20 characters
          if (this.index > 0 && this.index === 20) {
            this.displayedText += '\n';
          }
          this.displayedText += this.text.charAt(this.index);
          this.index++;
          setTimeout(this.typeText, this.typingSpeed);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .typewriter {
    white-space: pre-wrap; /* Allows handling newlines correctly */
  }
  </style>
  