<template>
    <div class="index">
        <mu-button v-for="(item,index) in linkGroup" :key="index" large fab :color=item.color  :to=item.router>{{item.tittle}}</mu-button>      
    </div>
</template>
<script>
import eventBus from "./eventBus.js";
export default {
  name: "index",
  data() {
    return {
      tittle: "首页",
      linkGroup: [
        {
          router: "/stateCode",
          tittle: "状态码",
          color: "pink"
        },
        {
          router: "/htmlText",
          tittle: "html面试题",
          color: "purple"
        }
      ]
    };
  },
  mounted() {
    eventBus.$emit("tittle", this.tittle);
  }
};
</script>
<style lang="less">
.index {
  text-align: center;
  margin-top: 1rem;
  .mu-button {
    margin: 10px;
    vertical-align: middle;
  }
  a.mu-button {
    text-decoration: none;
  }
}
</style>