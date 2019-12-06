<template>
  <div>
    {{config.tag}}
    <component :is="config.tag" v-bind="props">
      {{config.text}}
      <template v-if="config.children">
        <template v-for="node in config.children">
          <container v-if="node.slot" :config="node" :slot="node.slot" :key="node.id"></container>
          <container v-else :config="node" :key="node.id"></container>  
        </template>
      </template>
    </component>
  </div>
</template>
<script>
import util from "./util";
export default {
  name: "container",
  props: ["config"],
  data() {
    return {
      props: {}
    };
  },
  created() {
    let props = this.config.props;
    if (props) {
      for (let i = 0; i < props.length; i++) {
        const p = props[i];
        util.valueFuncPromise(this.props, p.name, p.value);
      }
    }
  }
};
</script>