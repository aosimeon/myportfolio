<template>
  <div id="app">
    <div class="container">
      <main-header></main-header>
      <vue-typed-js
        :strings="[greeting]"
        :showCursor="false"
        :typeSpeed="70"
        :smartBackspace="true"
      >
        <h1 class="typing big-text"></h1>
      </vue-typed-js>
      <vue-typed-js :strings="[name]" :showCursor="false" :typeSpeed="70" @onComplete="showMain = true">
        <h2 class="typing medium-text"></h2>
      </vue-typed-js>
      <transition name="fade">
        <div v-if="showMain" v-html="main"></div>
      </transition>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
export default {
  name: "app",
  components: {
    "main-header": Header
  },
  data() {
    return {
      greeting: "Hello.",
      name:
        "<span class='medium-text'>^1000My name is Amoo&nbsp;Olusola Simeon.</span>",
      main: `
        <p>
          I employ my rare and precious mental facilities to tear the mask of data, staring at the face of bytes...haha, Dont be scared. I build <strong>full stack web apps</strong> with <strong>Vue</strong> on the frontend, and <strong>NodeJs</strong> on the backend. I also play with <strong>Rust</strong> / <strong>Solidity</strong> when building <strong>Decentralized Apps</strong> <i class="em em-nerd_face" aria-role="presentation" aria-label="NERD FACE"></i>. In my free time, I make music. I am based in <strong>Ibadan, Nigeria</strong>, a <strong>Yoruba</strong> boy to be precise.
        </p>
        <p>
          If you look at me, I will smile back <i class="em em-slightly_smiling_face" aria-role="presentation" aria-label="SLIGHTLY SMILING FACE"></i>. It's not my fault, I just love smiling a lot <i class="em em-grinning" aria-role="presentation" aria-label="GRINNING FACE"></i>. I currently write at <a href="https://isabicode.wordpress.com/" target="_blank">iSabiCode</a>.
        </p>
        <p>
          What computer languages do I speak?<br>
          <span class="language-tag">HTML</span>
          <span class="language-tag">CSS/SCSS</span>
          <span class="language-tag">JS/TS</span>
          <span class="language-tag">Rust</span>
          <span class="language-tag">Solidity</span>
          <span class="language-tag">Python</span>
        </p>
        <p>
          What frameworks do I vibe with?<br>
          <span class="framework-tag">Express (NodeJs)</span>
          <span class="framework-tag">Vue (JavaScript)</span>
        </p>
        <p>
          What tools do I use? <br>
          <span class="tool-tag">Figma</span>
          <span class="tool-tag">Inkscape</span>
          <span class="tool-tag">Gimp</span>
        </p>
        <p class="contact">
          You can reach me via
          <a href="https://twitter.com/aosimeon" target="_blank"><i class="fa fa-twitter-square" aria-hidden="true"></i>
</a>
          <a href="https://www.instagram.com/ao_simeon" target="_blank""><i class="fa fa-instagram" aria-hidden="true"></i>
</a>
          <a href="https://github.com/aosimeon" target="_blank"><i class="fa fa-github-square" aria-hidden="true"></i>
</a>
        </p>
        `,
      showMain: false
    };
  },
  methods: {}
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;500;600;700&display=swap");

body {
  background: #f7f7f7;
  font-size: calc(10px + 0.33vw);
}
#app {
  font-family: "Mulish", sans-serif;

  font-weight: 300;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000;
  margin-bottom: 2em;

  .container {
    width: 90%;
    margin: auto;

    p {
      max-width: 26em;
      font-size: 1.7em;
      margin: 15px 0;
      line-height: 1.4;

      i {
        font-size: 0.65em;
      }

      .language-tag {
        display: inline-block;
        padding: 0 1em;
        margin: 0.5em 0.1em;
        height: 30px;
        line-height: 30px;
        background: rgb(255,209,0);
        background: linear-gradient(90deg, rgba(255,209,0,1) 0%, rgba(255,215,34,1) 100%);
        font-weight: 500;
        font-size: 0.6em;
        font-style: italic;
        letter-spacing: 0.07em;
        border-radius: 50px;
      }

      .framework-tag {
        display: inline-block;
        padding: 0 1em;
        margin: 0.5em 0.1em;
        height: 30px;
        line-height: 30px;
        background: rgb(255,209,0);
        background: linear-gradient(90deg, rgba(255,209,0,1) 0%, rgba(255,215,34,1) 100%);
        font-weight: 500;
        font-size: 0.6em;
        font-style: italic;
        letter-spacing: 0.07em;
        border-radius: 50px;
      }

      .tool-tag {
        display: inline-block;
        padding: 0 20px;
        margin: 0.5em 0.1em;
        height: 30px;
        line-height: 30px;
        background: rgb(255,209,0);
        background: linear-gradient(90deg, rgba(255,209,0,1) 0%, rgba(255,215,34,1) 100%);
        font-weight: 500;
        font-size: 0.6em;
        font-style: italic;
        letter-spacing: 0.07em;
        border-radius: 20px;
        vertical-align: middle;
      }
    }
  }
}

h1,
h2 {
  font-family: 'Source Code Pro', monospace;
  font-weight: normal;
  font-size: 4em;
}

a {
  color: #d40;
  font-style: italic;
}

p.contact {
  a {
    text-decoration: none;
    color: #d40;
    font-size: 1.5em;
    padding: 5px;
  }

  i {
    font-size: 1.7rem !important;
  }
}

.big-text {
  font-size: 4em;
  font-weight: bold;
  margin: 5px 0;
}

.medium-text {
  font-size: 1.6em;
  line-height: 1.4;
  font-weight: bold;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1.2s;
  transition-delay: 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
