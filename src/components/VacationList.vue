<style lang="sass" scoped>
table
  border-collapse: collapse
  margin: 0 auto
  td
    text-align: left
    table 
    border: 1px solid
    
</style>

<template>
<div>
  <div v-if="isEmpty">
  <p>Keine Rservierungen vorhanden</p>
  </div>
  <table class="table">
    <thead>
      <tr>
        <th>Lernpartner</th>
        <br>
        <th>Von</th>
        <th>Bis</th>
        <br>
      </tr>
    </thead>
    <tbody>
      <tr v-for="vacation in vacations" :key="vacation.ID" :data-id="vacation.ID">
        <td>{{ vacation.Fullname }}</td>
        <td>{{ vacation.VacationType }}</td>
        <td>{{ vacation.FromDate }}</td>
        <td>{{ vacation.toDate }}</td>
      </tr>
      
    </tbody>
  </table>
  </div>
</template>


<script>
// @ is an alias to /src
import { store } from '@/store';

export default {
  name: 'VacationList',
  data() {
    return {
      vacations: [],
      store
    };
  },
  created() {
  this.getvacations();
  },
  computed: {
    isEmpty() {
      return this.vacations.length == 0;
    },
  },
  methods: {
    async getvacations() {
      let url;
      if(store.lernpartner_id !== "0") {
        url = "https://projects.sbw.media/vacationview?StudentID=" + store.lernpartner_id;
      } else {
        url = "https://projects.sbw.media/vacationview";
      }
      const response = await fetch(url);
      if(response.ok) {
        this.vacations = await response.json();
      } else {
        this.vacations = [];
      }
    },
  }
}
</script>

