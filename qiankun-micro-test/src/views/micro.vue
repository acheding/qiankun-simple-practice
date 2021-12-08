<template>
  <div>
    <h1>micro</h1>
    <h1 v-if="mainData.length">来自主应用的值：{{ mainData }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mainData: ""
    };
  },
  mounted() {
    this.mainData = this.$store.state.mainData;
  }
};
</script>

<style scoped></style>
