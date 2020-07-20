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
      background-color: #ffd100;
      border-radius: 1px;
    }
  }
}
</style>
