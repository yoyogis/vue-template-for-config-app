<template>
  <div>
    {{config.tag}}
    <component :is="config.tag" v-bind="props">
      {{config.text}}
      <template v-if="config.children">
        <container v-for="node in config.children" :config="node" :key="node.id"></container>
      </template>
      <template v-if="config.slots">
        <container v-for="(node, name) in config.slots" :config="node" :slot="name" :key="node.id"></container>
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