<template>
  <header>
    <span class="logo">aosimeon</span>
  </header>
</template>

<script>
export default {
  name: "main-header",
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
  $gold-color: #ffd100;
  @import url("https://fonts.googleapis.com/css2?family=Euphoria+Script&display=swap");

  header {
    font-size: calc(10px + 0.11vw);
    .logo {
      font-family: "Euphoria Script", cursive;
      font-size: 4em;
    }

    span {
      position: relative;

      &:after {
        content: "";
        position: absolute;
        z-index: -1;
        top: 60%;
        left: -0.1em;
        right: -0.1em;
        bottom: 20%;
        background: rgb(255,209,0);
        background: linear-gradient(90deg, rgba(255,209,0,1) 0%, rgba(255,215,34,1) 100%);
        border-radius: 1px;
      }
    }
  }
</style>
