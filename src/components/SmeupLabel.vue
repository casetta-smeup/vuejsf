<template>
  <div
    @click="onLabelClick"
    :style="{color: color, textAlign: align}"
  >{{ content }}</div>
</template>

<script>
export default {
  props: ["align", "color", "content"],

  methods: {
    onLabelClick() {
      this.$emit("click");
    }
  }
};
</script>
