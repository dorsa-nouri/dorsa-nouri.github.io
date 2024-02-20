<script setup>
  import { ref, computed } from "vue";
  import first from "../assets/doc/c1.jpg";
  import sec from "../assets/doc/c2.jpg";

  const mySkills = ref([
    "JavaScript(Es6+)",
    "Vue.js",
    "Nuxt.js",
    "React.js",
    "Vuetify",
    "Tailwind",
    "Pinia",
    "Vuex",
    "Vite",
    "Node.js",
    "npm",
    "learning new things",
  ]);

  const firstHalf = computed(() =>
    mySkills.value.slice(0, Math.ceil(mySkills.value.length / 2))
  );
  
  const secondHalf = computed(() =>
    mySkills.value.slice(Math.ceil(mySkills.value.length / 2))
  );

  const currentIndex = ref(1);

  const images = ref([
    {
      id: 1,
      img: first,
      credential:
        "https://www.coursera.org/account/accomplishments/verify/ZBQLXWSXD4NV",
    },
    {
      id: 2,
      img: sec,
      credential:
        "https://www.coursera.org/account/accomplishments/verify/6YG73A4WTWNU",
    },
  ]);

  const previous = () => {
    if (currentIndex.value > 1) {
      currentIndex.value -= 1;
    }
  };
  const forward = () => {
    if (currentIndex.value < images.value.length) {
      currentIndex.value += 1;
    }
  };

  const scrollToSW = (id) => {
    let el = document.getElementById(id);
    el.scrollIntoView({ behavior: "smooth" });
  };
</script>

<template>
  <img class="logo" src="../assets/img/favicon.ico" width="30" height="30" />
  <div class="mainContent">
    <h1 class="heading">Dorsa Nouri</h1>
    <h2 class="subHeading">I create web-based applications and products.</h2>
    <h3 style="font-size: 1.5rem">
      i like to craft solid and scalable Web products with great user
      experiences
    </h3>

    <button class="button" @click="scrollToSW('contact')">
      applying for a project
    </button>
  </div>

  <div>
    <div class="scroll-down-button">
      <i class="fa fa-angle-down" aria-hidden="true"></i>
      <div
        style="transform: rotate(0deg); margin-top: 5rem; margin-left: 5px"
        class="scroll-down-span"
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </div>

  <div class="mainContent" id="about">
    <div class="title">
      <img src="../assets/img/arrow.svg" width="30" height="30" />
      <h1>About Me</h1>
    </div>

    <div class="content">
      <section>
        I am a web developer with almost 4 years of experience in creating
        dynamic and responsive websites. I started my journey at client side web
        developing by seeing a lots of videos in [youtube] and reading [docs] of
        javaScript (+Es6) and also [Vue.js] . There I learned the basics of
        HTML, CSS, JavaScript, and other web technologies. There I built several
        projects using this framework, such as a online platform to select a
        suitable place for installing solar panels, sites for interducing others
        bussiness and games, and a e-commerce website. I also learned how to use
        tools like Git, Bootstrap , webpackes , module bundlers , node.js , npm,
        ...etc . I am passionate about web development and always eager to learn
        new things. I enjoy solving problems and creating user-friendly
        interfaces. I am proficient in Vue.js and Nuxt, but I also have
        experience with other libraries and frameworks such as React.js. I am
        looking for opportunities to work on challenging and exciting web
        projects that can make a positive impact on the world. If you are
        interested in working with me, please feel free to contact me. Thank you
        for reading my about me section.
        <br />
        Here are a few technologies I’ve been working with recently:
        <br />

        <div class="mt-5 mx-auto">
          <table class="overflow-visible whitespace-nowrap">
            <tr v-for="(item, index) in firstHalf" :key="index">
              <td>
                <img
                  style="display: inline-block; margin-right: 0.5rem"
                  src="../assets/img/arrow.svg"
                  width="17"
                  height="17"
                />{{ item }}
              </td>
              <td style="padding-left: 2rem">
                <img
                  style="display: inline-block; margin-right: 0.5rem"
                  src="../assets/img/arrow.svg"
                  width="17"
                  height="17"
                />{{ secondHalf[index] }}
              </td>
            </tr>
          </table>
        </div>
      </section>
    </div>
  </div>

  <div class="mainContent" id="work">
    <div class="title">
      <img src="../assets/img/arrow.svg" width="30" height="30" />
      <h1>Some things I’ve Built</h1>
    </div>

    <div class="content">
      <section>
        As a front-end developer, I have built and maintained several websites
        that are showcased on my LinkedIn profile. These websites demonstrate my
        expertise in creating visually appealing and user-friendly interfaces
        using web languages such as HTML, CSS, and JavaScript. I ensure that my
        LinkedIn profile is always updated with the latest projects I have
        worked on, highlighting my commitment to staying current in the field of
        front-end development. My portfolio includes websites that are
        well-crafted, functional, and optimized for various devices, reflecting
        my dedication to enhancing user experience and engagement. Additionally,
        I utilize tools and resources to create efficient and effective web
        solutions, further exemplifying my skills as a front-end developer
      </section>
    </div>

    <div class="text-center items-center justify-center flex flex-row">
      <img
        class="turned_img"
        src="../assets/img/cog_wheel.svg"
        width="50"
        height="50"
      />
      <span>the projects will be added soon...</span>
    </div>
  </div>

  <div class="mainContent" id="certificates">
    <div class="title">
      <img src="../assets/img/arrow.svg" width="30" height="30" />
      <h1>Certificates</h1>
    </div>

    <div class="content">
      <section>
        As a front-end developer, I have built and maintained several websites
        that are showcased on my LinkedIn profile. These websites demonstrate my
        expertise in creating visually appealing and user-friendly interfaces
        using web languages such as HTML, CSS, and JavaScript. I ensure that my
        LinkedIn profile is always updated with the latest projects I have
        worked on, highlighting my commitment to staying current in the field of
        front-end development. My portfolio includes websites that are
        well-crafted, functional, and optimized for various devices, reflecting
        my dedication to enhancing user experience and engagement. Additionally,
        I utilize tools and resources to create efficient and effective web
        solutions, further exemplifying my skills as a front-end developer
      </section>
    </div>

    <div class="relative items-center h-full md:w-2/3  justify-center">
      <div
        style="width: 65vw"
        class="flex flex-row mx-auto rounded-xl items-center justify-around bg-transparent p-2 sm:p-4"
      >
        <div
          @click="previous"
          style="transform: rotate(90deg)"
          class="carousel_D"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div class=" h-80 img1"  >
          <template v-for="(image, index) in images" :key="index">
            <div
              v-show="currentIndex == image.id"
              class="absolute justify-center items-center"
            >
              <img
                :src="image.img"
                alt="certificate"
                class="rounded-xl w-full"
              
              />
              <a
                class="mx-auto mt-3 items-center justify-center flex flex-row w-full"
                :href="image.credential"
                target="_blank"
                >See Credential</a
              >
            </div>
          </template>
        </div>
        <div
          @click="forward"
          style="transform: rotate(-90deg)"
          class="carousel_D"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
     
    </div>
    <div class="flex flex-row items-center justify-center mx-auto w-full mt-12">
        <span>New Certificates will be added soon...</span>
      </div>
  </div>

  <div class="mainContent" id="contact">
    <div class="title">
      <img src="../assets/img/arrow.svg" width="30" height="30" />
      <h1>get in touch !</h1>
    </div>

    <div class="content text-center">
      <section>
        I can help you with any questions or issues related to the website
        development or malfunctionings and any tech problems you may have. I
        have extensive experience and knowledge in technology and I’m happy to
        share it with you.
      </section>

      <div class="items-center mx-auto w-full">
        <!-- <div class="items-center mx-auto">
          <iframe
            class="rounded-lg mt-5 mx-auto"
            src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=Asia%2FTehran&src=ZG9yc2Eubm91cmkyM0BnbWFpbC5jb20&color=%237986CB"
            style="border-width: 0"
            width="100%"
            height="600"
            frameborder="0"
            scrolling="no"
          ></iframe>
        </div> -->

        <div class="items-center mx-auto w-full mt-5">
          <ul class="flex flex-row items-center justify-center mx-auto w-full">
            <li>
              <a href="https://github.com/dorsa-nouri" target="_blank">
                <img src="../assets/img/git-square.svg" height="70" width="70"
              /></a>
            </li>
            <li @click="sendMail()">
              <img src="../assets/img/mail.svg" height="80" width="80" />
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/dorsa-nouri/"
                target="_blank"
              >
                <img src="../assets/img/linkedin.svg" height="80" width="80"
              /></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
