<template>
  <div class="fld-container">
    <span class="label">{{ label }}</span>

    <component
      :is="fieldComponent"
      :id="id"
      :initialValue="initialValue"
      @change="onFldChange"
      @click="onFldClick"
    />

    <button
      v-if="showSubmit"
      type="button"
      @click="onBtnClick"
    >Conferma</button>
  </div>
</template>

<script>
import InputText from "./fields/InputText.vue";
import NotImplemented from "./fields/NotImplemented.vue";

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

    label: {
      type: String
    },

    type: {
      type: String,
      required: true
    },

    initialValue: {
      type: String
    },

    showSubmit: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    fieldComponent() {
      switch (this.type) {
        case "Itx":
          return InputText;

        default:
          return NotImplemented;
      }
    }
  },

  methods: {
    onBtnClick() {
      this.$emit("click", this.value);
    },

    onFldChange(newValue) {
      this.value = newValue;
      this.$emit("change", this.value);
    },

    onFldClick(newValue) {
      this.value = newValue;
      this.onBtnClick();
    }
  }
};
</script>

<style scoped>
.fld-container {
  display: flex;
}

span.label {
  margin-right: 5px;
}

button {
  margin-left: 5px;
}
</style>
