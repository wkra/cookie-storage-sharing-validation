<template>
  <div class="container mt-5 mb-5">
    <div class="jumbotron">
      <app-header></app-header>
      <app-form
        :share-key="shareKey"
        :cookie-val="cookieVal"
        :local-storage-val="localStorageVal"
        @fetch-data="fetchData"
      ></app-form>
      <app-status
        :cookie-val="cookieVal"
        :local-storage-val="localStorageVal"
      ></app-status>
    </div>
  </div>
</template>

<script>
import AppHeader from "~/components/AppHeader.vue";
import AppForm from "~/components/AppForm.vue";
import AppStatus from "~/components/AppStatus.vue";

export default {
  components: {
    AppHeader,
    AppForm,
    AppStatus
  },
  data() {
    return {
      shareKey: "share-key",
      cookieVal: "",
      localStorageVal: ""
    };
  },
  methods: {
    fetchData() {
      this.setCookieVal();
      this.setLocalStorageVal();
    },
    setCookieVal() {
      this.cookieVal = this.getCookie();
    },
    setLocalStorageVal() {
      const localVal = localStorage.getItem(this.shareKey);
      this.localStorageVal = localVal === null ? "" : localVal;
    },
    getCookie() {
      const value = "; " + document.cookie;
      const parts = value.split("; " + this.shareKey + "=");
      if (parts.length == 2)
        return parts
          .pop()
          .split(";")
          .shift();
    }
  },
  mounted() {
    this.fetchData();
  }
};
</script>

<style></style>
