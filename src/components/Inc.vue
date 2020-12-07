<template>
  <div>
    <hr />
    edit employees: {{ localTracker }}
    <button v-on:click="localTracker++">UP</button>
    <button v-on:click="localTracker--">Down</button>
    <hr />
    <button v-on:click="submitX">Submit</button>
    <br />
    <br />
    <br />
  </div>
</template>

<script>
import services from "../services/CompanyService";

export default {
  name: "Inc",
  props: ["num", "callback"],
  data() {
    /* I need a different lifecycle method here that pops the url param into local state, but out of time */
    return {
      localTracker: this.$props.num,
    };
  },
  created() {},
  methods: {
    submitX() {
      this.$emit("bump", this.localTracker);
    },
  },
};
</script>
