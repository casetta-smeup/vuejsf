<template>
  <div
    :id="id"
    class="inputtext"
  >
    <input
      type="text"
      v-model="value"
      @change="onFieldChange"
      @keyup.enter.stop.prevent="onFieldSubmit"
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: this.initialValue
    };
  },

  props: {
    id: {
      type: String,
      required: true
    },

    initialValue: {
      type: String
    }
  },

  methods: {
    onFieldChange() {
      this.$emit("change", this.value);
    },

    onFieldSubmit() {
      this.$emit("click", this.value);
    }
  }
};
</script>
