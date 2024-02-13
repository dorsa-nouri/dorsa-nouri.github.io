<template>
  <nav class="border-line">
    <ul>
      <li @click="scrollToSW('about')">About</li>
      <li @click="scrollToSW('work')">Work</li>
      <li @click="scrollToSW('certificates')">Certificates</li>
      <li @click="scrollToSW('contact')">Contact</li>
      <li @click="dl">Resume</li>

      <div class="contact">
        <li>
          <a href="https://github.com/dorsa-nouri" target="_blank">
            <img src="../assets/img/git-square.svg" height="30" width="30"
          /></a>
        </li>
        <li @click="sendMail()">
          <img src="../assets/img/mail.svg" height="30" width="30" />
        </li>
        <li>
          <a href="https://www.linkedin.com/in/dorsa-nouri/" target="_blank">
            <img src="../assets/img/linkedin.svg" height="30" width="30"
          /></a>
        </li>
      </div>
    </ul>
  </nav>
</template>
<script setup>
  import resume from "../assets/doc/Dorsa_Nouri.pdf";
  const sendMail = () => {
    window.open("mailto:dorsa.nouri23@gmail.com");
  };
  const scrollToSW = (id) => {
    let el = document.getElementById(id);
    el.scrollIntoView({ behavior: "smooth" });
  };
  const dl = () => {
    var file = resume;
    var a = document.createElement("a");
    a.href = file;
    a.download = file.substr(file.lastIndexOf("/") + 1);
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };
</script>

<style>
  li {
    list-style-type: none;
    color: var(--color-text);
  }

  li:hover {
    padding-left: 25px;
    margin-right: .5rem;
    background: url("/src/assets/img/arrow.svg") no-repeat left center;
    background-size: 20px;
    color: var(--color-border);
  }
</style>
