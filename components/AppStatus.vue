<template>
  <div class="row">
    <div class="col-sm-6">
      <app-card :content="cookieVal" :header="'Cookie Value'"></app-card>
    </div>
    <div class="col-sm-6">
      <app-card
        :content="localStorageVal"
        :header="'Local Storage Value'"
      ></app-card>
    </div>
  </div>
</template>

<script>
import AppCard from "~/components/AppCard.vue";

export default {
  components: { AppCard },
  props: {
    cookieVal: {
      type: String,
      default: ""
    },
    localStorageVal: {
      type: String,
      default: ""
    }
  }
};
</script>
