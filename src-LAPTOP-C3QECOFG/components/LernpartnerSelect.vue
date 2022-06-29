<template>
  <label for="lernpartner">Lernpartner</label>

  <select id="lernpartner" v-model="store.lernpartner_id">
    <option value="0">{{ start }}</option>
    <option v-for="lp in lernpartner" :value="lp.ID" :key="lp.ID">
      {{ lp.Fullname }}
    </option>
  </select>
</template>

<script>
export default {
  name: "LernpartnerSelect",
  props: { 
    start: {
      type: String,
      default: 'Bitte wählen',
    },
  },
  data() {
    return {
      lernpartner: []
    };
  },
  created() {
    this.getLernpartner();
  },
  methods: {
    async getLernpartner() {
      const response = await fetch("https://projects.sbw.media/student");
      this.lernpartner = await response.json();
    },
  },
};
</script>

<style>
</style>

<script setup>
import { store } from "@/store";
</script>