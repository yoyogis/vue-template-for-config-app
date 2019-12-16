<template>
  <div>
    {{config.tag}}
    <component ref="instance" :is="config.tag" v-bind="props" v-on="events">
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
import events from '../config/events'
export default {
  name: "container",
  props: ["config"],
  data() {
    return {
      props: {},
      events:{}
    };
  },
  created() {
    let me = this;
    me.$instances[this.config.id] = me;
    let props = this.config.props;
    if (props) {
      for (let i = 0; i < props.length; i++) {
        const p = props[i];
        util.valueFuncPromise(this.props, p.name, p.value);
      }
    }
    for (let i = 0; i < events.length; i++) {
      debugger
      const event = events[i];
      if(this.config.id===event.from){
        this.events[event.eventName] = function(){
          let targetData = me.$functions[event.transfomer](arguments);
          let componentInstance = me.$instances[event.to].$refs.instance;
          componentInstance[event.handler].call(componentInstance, targetData);
        }
      }
    }
  }
};
</script>