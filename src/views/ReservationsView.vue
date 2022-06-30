<template>
  <div class="home">
    <Vacation-list></Vacation-list>
  </div>
</template>

<script>
// @ is an alias to /src
import VacationList from '@/components/VacationList.vue';

export default {
  name: 'VacationsView',
  data() {
    return {
    };
  },
  components: {
    VacationList
  },
  methods: {
  },
}
</script>