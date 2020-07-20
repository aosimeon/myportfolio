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
      <vue-typed-js :strings="[name]" :showCursor="false" @onComplete="showMain = true">
        <p class="typing medium-text"></p>
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
        "<span class='medium-text'>^1000My name is Amoo&nbsp;Olusola&nbsp;Simeon</span>",
      main: `
        <p>
          I build apps that work on the web by day and tinker with blockchain technology by night. In my free time, I recuperate. I am based in Ibadan, Nigeria, a Yoruba boy to be precise.
        </p>
        <p>
          I love smiling a lot :). People say I swim like a fish, but I strongly disagree...lol.
        </p>
        <p>
          What computer languages do I speak?<br>
          <span class="language-tag">HTML</span>
          <span class="language-tag">CSS/SCSS</span>
          <span class="language-tag">JavaScript</span>
          <span class="language-tag">Python</span>
          <span class="language-tag">GoLang</span>
          <span class="language-tag">PHP</span>
        </p>
        <p>
          What frameworks do I vibe with?<br>
          <span class="framework-tag">Express(NodeJs)</span>
          <span class="framework-tag">Vue(JavaScript)</span>
          <span class="framework-tag">Flask(Python)</span>
          <span class="framework-tag">Laravel(PHP)</span>
        </p>
        <p>
          What tools do I use? <br>
          <span class="tool-tag">Figma</span>
          <span class="tool-tag">Inkscape</span>
          <span class="tool-tag">Gimp</span>
        </p>
        <p>
          You can reach me via
          <a href="https://twitter.com/aosimeon" target="_blank">twitter</a>
          <a href="https://www.instagram.com/ao_simeon" target="_blank"">instagram</a>
          <a href="https://github.com/aosimeon" target="_blank">github</a>
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
  background: rgb(255, 252, 238);
  background: linear-gradient(
    207deg,
    rgba(255, 252, 238, 1) 20%,
    rgba(255, 255, 255, 1) 90%
  );
}
#app {
  font-family: "Mulish", sans-serif;
  font-size: calc(10px + 0.2vw);
  font-weight: 300;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000;
  margin-bottom: 3em;

  .container {
    width: 85%;
    margin: auto;

    p {
      max-width: 40em;
      font-size: 1.8em;
      margin: 15px 0;
      line-height: 1.5em;

      .language-tag {
        display: inline-block;
        padding: 0 1em;
        margin: 0.5em 0.1em;
        height: 35px;
        line-height: 35px;
        background: rgb(255, 218, 51);
        background: linear-gradient(
          207deg,
          rgba(255, 218, 51, 1) 4%,
          rgba(255, 209, 0, 1) 100%
        );
        font-weight: 500;
        font-size: 0.65em;
        font-style: italic;
        letter-spacing: 0.07em;
        border-radius: 50px;
      }

      .framework-tag {
        display: inline-block;
        padding: 0 1em;
        margin: 0.5em 0.1em;
        height: 35px;
        line-height: 35px;
        background: rgb(255, 218, 51);
        background: linear-gradient(
          207deg,
          rgba(255, 218, 51, 1) 4%,
          rgba(255, 209, 0, 1) 100%
        );
        font-weight: 500;
        font-size: 0.65em;
        font-style: italic;
        letter-spacing: 0.07em;
        border-radius: 50px;
      }

      .tool-tag {
        display: inline-block;
        padding: 0 20px;
        margin: 0.5em 0.1em;
        height: 35px;
        line-height: 35px;
        background: rgb(255, 218, 51);
        background: linear-gradient(
          207deg,
          rgba(255, 218, 51, 1) 4%,
          rgba(255, 209, 0, 1) 100%
        );
        font-weight: 500;
        font-size: 0.65em;
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
  font-weight: normal;
  font-size: 3em;
}

a {
  color: #667eeb;
  font-style: italic;
}

.big-text {
  font-size: 5em;
  font-weight: bold;
  margin: 20px 0;
}

.medium-text {
  font-size: calc(1.6em + 0.1vw);
  line-height: 1.5em;
  font-weight: bold;
  position: relative;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1.2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
