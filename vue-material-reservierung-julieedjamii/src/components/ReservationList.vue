<template>
<div>
  <div v-if="isEmpty">
  <p>Keine Rservierungen vorhanden</p>
  </div>
  <table v-else>
    <thead>
      <tr>
        <th>Lernpartner</th>
        <th>Von</th>
        <th>Bis</th>
        <br>
      </tr>
    </thead>
    <tbody>
      <tr v-for="reservation in reservations" :key="reservation.ID" :data-id="reservation.ID">
        <td>{{ reservation.Fullname }}</td>
        <td>{{ reservation.Start }}</td>
        <td>{{ reservation.End }}</td>
      </tr>
      
    </tbody>
  </table>
  </div>
</template>


<script>
// @ is an alias to /src
import { store } from '@/store';

export default {
  name: 'ReservationsView',
  data() {
    return {
      reservations: [],
      store
    };
  },
  created() {
  this.getReservations();
  },
  computed: {
    isEmpty() {
      return this.reservations.length == 0;
    },
  },
  methods: {
    async getReservations() {
      let url;
      if(store.lernpartner_id !== 0) {
        url = "https://projects.sbw.media/reservationview?StudentID=" + store.lernpartner_id;
      } else {
        url = "https://projects.sbw.media/reservationview";
      }
      const response = await fetch(url);
      if(response.ok) {
        this.reservations = await response.json();
      } else {
        this.reservations = [];
      }
    },
  }
}
</script>

<style lang="sass" scoped>
table
  border-collapse: collapse
  margin: 0 auto
  td
    text-align: left
</style>
