<template>
  <div
    style="
      border: 1px solid #e2e2e2;
      text-align: center;
      padding-top: 20px;
      padding-bottom: 20px;
      margin: 20px;
    "
  >
    <p class="label">edit employees:</p>
    <h1 class="title">{{ localTracker }}</h1>
    <button class="button" v-on:click="localTracker++">up</button>
    <button class="button" v-on:click="localTracker--">down</button>
    <hr />
    <button class="button" v-on:click="submit">Submit</button>
  </div>
</template>

<script>
import services from "../services/CompanyService";

export default {
  name: "Inc",
  props: {
    num: {
      type: Number,
      default: null,
    },
  },
  data() {
    /* I need a different lifecycle method here that pops the url param into local state, but out of time */
    return {
      localTracker: null,
    };
  },

  watch: {
    num: {
      immediate: true,
      handler(val) {
        this.localTracker = val;
      },
    },
  },
  methods: {
    submit() {
      this.$emit("bump", this.localTracker);
    },
  },
};
</script>
