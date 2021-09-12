<template>
  <Panel> Hello world </Panel>
</template>

<script>
import Panel from "primevue/panel";

export default {
  name: "App",
  components: {
    Panel,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.p-panel p {
  line-height: 1.5;
  margin: 0;
}
</style>
