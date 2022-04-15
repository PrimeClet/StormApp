<template>
<ul class="scroll-spy-list">
    <li class="scroll-spy-elm" v-for="node in nodes" v-bind:key="node.id" >
        <a class="nav-link" :href="'#'+node.id">{{node.text}}</a>
        <ScrollSpyIndicator v-if="node.nodes && node.nodes.length" :nodes="node.nodes"/>
    </li>
</ul>
</template>

<script>

export default {
  name: "ScrollSpyIndicator",
  components: {
  },
  props: ['nodes'],
  data: function () {
    return {
    };
  },
};
</script>

<style scoped>

.scroll-spy-list{
    text-align: left;
}
.scroll-spy-elm{
    list-style: none;

}
.scroll-spy-elm .nav-link.nav-link{
    color: #212529;
    padding: 0.1rem 1rem;
}
.scroll-spy-elm .nav-link.nav-link.active{
    font-weight: bold;
    color: #1266f1;
    border-left: solid 0.2rem #1266f1;
    padding: 0.1rem 0.8rem;
}

.scroll-spy-elm .nav-link.nav-link.active{
    font-weight: bold;
    color: #dd5b0b;
    border-left: solid 0.2rem #1266f1;
    padding: 0.1rem 0.8rem;
}
</style>
