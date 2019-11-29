<template>
  <div>
    <h1>{{config.name}}</h1>
    <container v-if="config.componentTree" :config="config.componentTree"></container>
  </div>
</template>
<script>
import container from './framework/container'
import config from './config'
export default {
  components:{container},
  data:function(){
    return {
      config:{}
    }
  },
  created(){
    this.config = config.pages.page1;
  }
}
</script>