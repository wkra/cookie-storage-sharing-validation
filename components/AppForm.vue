<template>
  <div>
    <div class="form-group">
      <label for="save-input">
        <strong>Save value in web browser cookies and local storage:</strong>
      </label>
      <input
        id="save-input"
        type="text"
        class="form-control"
        placeholder=""
        aria-label=""
        aria-describedby="basic-addon1"
        v-model="inputValue"
      />
    </div>
    <button
      type="button"
      class="btn btn-primary btn-lg mb-2"
      @click="initSubmit"
    >
      Save in cookies and local storage
    </button>
    <button
      type="button"
      class="btn btn-danger btn-lg mb-2"
      @click="clearData"
      :disabled="clearBtnDisabled"
    >
      Clear cookies and local storage
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
    clearBtnDisabled() {
      return this.localStorageVal === "" && this.cookieVal === "";
    }
  },
  methods: {
    initSubmit() {
      if (this.inputValue !== "") {
        this.setCookie(this.inputValue);
        this.setLocalStorage(this.inputValue);
        this.$emit("fetch-data");
        this.clearInput();
      }
    },
    clearData() {
      console.log("clearData");
      this.deleteCookie();
      this.removeLocalStorage();
      this.$emit("fetch-data");
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
