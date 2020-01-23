<template>
  <div id="app">
      <NavigationBar class="block-margin-bottom"/>
      <router-view></router-view>
      <FooterBar/>
  </div>
</template>

<script>
  import NavigationBar from "./components/elements/NavigationBar";
  import FooterBar from "./components/elements/FooterBar";

  export default {
    name: 'app',
    components: {
        FooterBar,
      NavigationBar,
    }
  }

</script>

<style>
  @import "css/global.css";

  #app {
    font-family: -apple-system, BlinkMacSystemFont, sans-serif, 'Avenir', Helvetica, sans-serif;
  }
    .block-margin-bottom{
        margin-bottom: 43px;
    }

</style>
