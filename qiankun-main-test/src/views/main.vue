<template>
  <div>
    <h1>main</h1>
    <div>
      <el-input
        placeholder="Please input the value emitted to micro"
        v-model="input"
      >
        <el-button
          slot="append"
          icon="el-icon-s-promotion"
          @click="emitMain"
        ></el-button>
      </el-input>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: ""
    };
  },
  methods: {
    emitMain() {
      this.$store.commit("saveMain", this.input); // 向 store 中存入传递给微应用的值
    }
  }
};
</script>

<style scoped>
.el-input {
  width: 500px;
}
</style>
