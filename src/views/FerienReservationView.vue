<template>
  <span>
    <img alt=" logo" src="../assets/logo.png">
  </span>
  <span>
    <div class="form">
      <lernpartner-select></lernpartner-select>
      <label for="from">Von:</label>
      <input if="from" type="date" v-model="fromDate" />
      <label fro="to">Bis:</label>
      <input it="to" type="date" v-model="toDate" />
    </div>
    <div>
      {{status}}
    </div>
  </span>

    <button class="btn btn-primary" @click="doReserve">Reserve</button>

</template>

<script>
// @ is an alias to /src
import LernpartnerSelect from '@/components/LernpartnerSelect.vue'
import { store } from '@/store'
export default {
  name: 'HomeView',
  data() {
    return {
      store,
      fromDate: null,
      toDate: null,
      status: ""
    };
  },
  components: {
    LernpartnerSelect,
  },
  methods: {
    async doReserve() {
      const payload = {
        StudentID: store.lernpartner_id,
        VacationTypeID: 1,
        FromDate: "2022-07-03 10:21:37",
        toDate: "2022-07-07 10:21:37",
      };
      console.log(payload);
      const response = await fetch('https://projects.sbw.media/vacation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      });
      const result = await response.json();
      this.status = result.result;
    }
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
