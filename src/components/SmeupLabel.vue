<template>
  <div
    @click="onLabelClick"
    :style="{color: color, textAlign: align}"
  >{{ content }}</div>
</template>

<script>
export default {
  props: {
    align: {
      type: String
    },

    color: {
      type: String
    },

    content: {
      type: String
    }
  },

  methods: {
    onLabelClick() {
      this.$emit("click");
    }
  }
};
</script>
