<template>
  <div>
    <h1>{{pageConfig.name}}</h1>
    <container v-if="pageConfig.componentTree" :config="pageConfig.componentTree"></container>
  </div>
</template>
<script>
import container from "./framework/container";
import config from "./config";
import qs from "qs";
export default {
  components: { container },
  data: function() {
    return {
      pageConfig: {}
    };
  },
  created() {
    let pageId = this.getPageId();
    this.changePage(pageId);
  },

  methods: {
    changePage(pageId) {
      this.pageConfig = config.pages[pageId];
    },

    getPageId() {
      let result = "";
      let paras = qs.parse(location.search, { ignoreQueryPrefix: true });
      if (paras && paras.page) {
        result = paras.page;
      } else {
        result = Object.keys(config.pages)[0];
        if (paras) {
          paras.page = result;
          location.search = qs.stringify(paras);
        }
      }
      return result;
    }
  }
};
</script>