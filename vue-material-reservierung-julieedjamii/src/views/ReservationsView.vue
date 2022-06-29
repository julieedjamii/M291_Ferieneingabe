<template>
  <div class="home">
    <reservation-list></reservation-list>
  </div>
</template>

<script>
// @ is an alias to /src
import ReservationList from '@/components/ReservationList.vue';

export default {
  name: 'ReservationsView',
  data() {
    return {
      reservations: [],
    };
  },
  components: {
    ReservationList
  },
  methods: {
  },
}
</script>