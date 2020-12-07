<template>
  <div class="card" :style="w">
    <slot>Hmmmm....looks like some content is missing</slot>
  </div>
</template>

<script>
export default {
  name: "SimpleCard",
  props: { widthStyle: String },
  data(props) {
    return { w: { width: props.widthStyle } };
  },
};
</script>

<style scoped lang="scss">
$card-spacer-x: 1.25rem;
$card-spacer-y: 0.75rem;
$card-border-width: 0.0625rem;
$card-border-color: #e5e5e5;
$card-cap-bg: #f5f5f5;

.card {
  margin: 0 auto;
  margin-top: 50px;
  padding: 20px;
  margin-bottom: $card-spacer-y;
  border: $card-border-width solid $card-border-color;
  -webkit-box-shadow: 6px 6px 28px 0px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 6px 6px 28px 0px rgba(0, 0, 0, 0.5);
  box-shadow: 6px 6px 28px 0px rgba(0, 0, 0, 0.5);
  background-color: white;
}

</style>
