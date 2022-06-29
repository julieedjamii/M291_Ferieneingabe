<template>
<span>
  <img alt=" logo" src="../assets/logo.png"></span>

<span><h1>Ferienreservation</h1></span>

</template>

<script>
// @ is an alias to /src
export default {
  name: 'HomeView',
  data() {
  },
  components: {
  },
  methods: {
  },
}
</script>

<style lang=sass scoped>
  .form
    width: 80%
    display: grid
    grid-template-columns: 0.4fr 0.5fr
    gap: 1em

    


</style>

<style>
@keyframes scale {
  100% {
    transform: scale(1);
  }
}

span {
  opacity: 0;
  filter: blur(4px);
}

span:nth-child(1) {
  animation: fade-in 0.8s 0.1s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(2) {
  animation: fade-in 0.8s 0.2s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(3) {
  animation: fade-in 0.8s 0.3s forwards cubic-bezier(0.11, 0, 0.5, 0);
}


@keyframes fade-in {
  100% {
    opacity: 1;
    filter: blur(0);
  }
}

</style>
