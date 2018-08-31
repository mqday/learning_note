<template>
  <div id="app">
    <mu-appbar style="width: 100%; padding-left:3%;" color="primary">
      <mu-button icon slot="left" :to="{name: 'index'}">
        <mu-icon value="home" size="56"></mu-icon>
      </mu-button>
      {{tittle}}
    </mu-appbar>
    <router-view/>
  </div>
</template>

<script>
import stateCode from "./components/stateCode";
import eventBus from "./components/eventBus.js";
export default {
  name: "App",
  data() {
    return {
      tittle: ""
    };
  },
  components: {
    stateCode
  },
  methods: {
    getTittle() {
      const that = this;
      eventBus.$on("tittle", function(val) {
        that.tittle = val;
      });
    }
  },
  mounted() {
    this.getTittle();
  }
};
</script>

<style>
@import "https://cdn.bootcss.com/material-design-icons/3.0.1/iconfont/material-icons.css";
body {
  background-color: #fff;
}
.mu-appbar {
  margin-bottom: 1rem;
}
.container {
  margin: 0 auto;
}
</style>
