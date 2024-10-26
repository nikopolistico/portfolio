<template>
    <v-app id="main">
      <v-container>
        <v-row>
          <v-col cols="12" md="8" offset-md="2">
            <v-card class="pa-4" outlined color="black" border-color="purple">
              <v-row class="mb-4">
                <v-col cols="12" md="4">
                  <v-img
                    src="../img/profile.png"
                    alt="Your Name"
                    width="150"
                    height="150"
                    rounded="circle"
                  ></v-img>
                </v-col>
                <v-col cols="12" md="8">
                  <h2 class="text-h4 font-weight-bold mb-1 text-white">Niko R. Polistico</h2>
                  <p class="text-subtitle-1 text-white"> Web Developer | Tech</p>
                  <p class="text-subtitle-2 text-white"> niko.polistico@carsu.edu.ph | 09676595166</p>
                  <p class="text-subtitle-2 text-white">https://github.com/nikopolistico</p>
                </v-col>
              </v-row>
  
              <h3 class="text-h5 font-weight-bold mb-3 text-white">Summary</h3>
              <p class="text-body-1 text-white">
                A highly motivated and results-oriented software engineer with a strong foundation in [mention key technologies, e.g., React, Node.js, Python]. Proven ability to design, develop, and deploy high-quality applications, collaborating effectively in agile environments.
              </p>
  
              <h3 class="text-h5 font-weight-bold mb-3 text-white">Experience</h3>
              <v-list id="main">
                <v-list-item
                  v-for="(job, index) in jobs"
                  :key="index"
                  class="mb-2"
                >
                  <v-list-item-title class="font-weight-bold text-white">
                    {{ job.title }} | {{ job.company }}
                  </v-list-item-title>
                  <v-list-item-subtitle class="text-white">
                    {{ job.dates }} | {{ job.location }}
                  </v-list-item-subtitle>
                  <v-list-item-content>
                    <ul>
                      <li v-for="(responsibility, index) in job.responsibilities" :key="index" class="text-white">
                        {{ responsibility }}
                      </li>
                    </ul>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
  
              <h3 class="text-h5 font-weight-bold mb-3 text-white">Education</h3>
              <v-list id="skills">
                <v-list-item
                  v-for="(education, index) in educations"
                  :key="index"
                  class="mb-2"
                >
                  <v-list-item-title class="font-weight-bold text-white">
                    {{ education.degree }} | {{ education.major }}
                  </v-list-item-title>
                  <v-list-item-subtitle class="text-white">
                    {{ education.institution }} | {{ education.dates }}
                  </v-list-item-subtitle>
                </v-list-item>
              </v-list>
  
              <h3 class="text-h5 font-weight-bold mb-3 text-white">Skills</h3>
              <v-chip-group column>
                <v-chip
                  v-for="(skill, index) in skills"
                  :key="index"
                  small
                  class="mb-1 text-white"
                  color="purple"
                >
                  {{ skill }}
                </v-chip>
              </v-chip-group>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-app>
  </template>
  
  <script>
  export default {
    data() {
      return {
        jobs: [
          {
            title: "Software Engineer",
            company: "SoftTechnDevelop",
            dates: "Jan 2023 - Present",
            location: "Your City, State",
            responsibilities: [
              "Developed and maintained web applications using React and Node.js.",
              "Collaborated with designers and product managers to implement user interfaces.",
              "Wrote unit tests and conducted code reviews.",
            ],
          },
          {
            title: "Web Developer",
            company: "WeLoperDev",
            dates: "Aug 2020 - Dec 2022",
            location: "Previous City, State",
            responsibilities: [
              "Designed and developed responsive websites using HTML, CSS, and JavaScript.",
              "Implemented front-end features using JavaScript libraries like jQuery.",
              "Collaborated with designers to ensure visual consistency.",
            ],
          },
        ],
        educations: [
          {
            degree: "Master of Science in Computer Science",
            major: "Software Engineering",
            institution: "Your University",
            dates: "May 2022",
          },
          {
            degree: "Bachelor of Science in Computer Science",
            major: "Computer Science",
            institution: "Your University",
            dates: "May 2020",
          },
        ],
        skills: [
          "React",
          "Node.js",
          "JavaScript",
          "HTML",
          "CSS",
          "SQL",
          "Git",
          "Agile",
          "Problem Solving",
          "Communication",
        ],
      };
    },
  };
  </script>