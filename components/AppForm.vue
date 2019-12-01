<template>
  <div>
    <div class="input-group mb-3">
      <input
        type="text"
        class="form-control"
        placeholder="Type..."
        aria-label="Type..."
        aria-describedby="basic-addon1"
        v-model="inputValue"
      />
    </div>
    <button
      type="button"
      class="btn btn-primary btn-lg"
      @click="initSubmit"
      :disabled="submitBtnDisabled"
    >
      Submit
    </button>
    <button
      type="button"
      class="btn btn-danger btn-lg"
      @click="clearData"
      :disabled="clearBtnDisabled"
    >
      Clear
    </button>
    <hr class="my-4" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      inputValue: ""
    };
  },
  props: {
    shareKey: {
      type: String
    },
    cookieVal: {
      type: String,
      default: ""
    },
    localStorageVal: {
      type: String,
      default: ""
    }
  },
  computed: {
    submitBtnDisabled() {
      return this.inputValue === "";
    },
    clearBtnDisabled() {
      return this.localStorageVal === "" && this.cookieVal === "";
    }
  },
  methods: {
    initSubmit() {
      this.setCookie(this.inputValue);
      this.setLocalStorage(this.inputValue);
      this.$emit("fetch-data");
      this.clearInput();
    },
    clearData() {
      console.log("clearData");
      this.deleteCookie();
      this.removeLocalStorage();
      this.$emit("fetch-data");
      this.clearInput();
    },
    setCookie(val) {
      const cookieDate = new Date();
      cookieDate.setFullYear(cookieDate.getFullYear() + 10);

      document.cookie =
        this.shareKey + "=" + val + "; expires=Fri, 31 Dec 9999 23:59:59 GMT;";
    },
    setLocalStorage(val) {
      localStorage.setItem(this.shareKey, val);
    },
    deleteCookie() {
      const cookieName = encodeURIComponent(this.shareKey);
      document.cookie =
        cookieName + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    },
    removeLocalStorage() {
      localStorage.removeItem(this.shareKey);
    },
    clearInput() {
      this.inputValue = "";
    }
  }
};
</script>
