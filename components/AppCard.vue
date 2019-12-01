<template>
  <div class="card">
    <div class="card-header">
      <h5>{{ header }}</h5>
    </div>
    <div class="card-body">
      <h6 class="card-title">{{ content }}</h6>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    header: {
      type: String,
      default: ""
    },
    content: {
      type: String,
      default: ""
    }
  }
};
</script>
