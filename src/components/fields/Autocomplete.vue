<template>
  <el-autocomplete
    class="inline-input"
    v-model="value"
    :fetch-suggestions="loadItemsFormServer"
    placeholder=""
    :trigger-on-focus="false"
    @select="handleSelect"
  />
</template>

<script>
export default {
  props: {
    disabled: {
      type: Boolean,
      default: false
    },

    id: {
      type: String,
      required: true
    },

    initialValue: {
      type: String
    },

    queryMethod: {
      type: Function,
      required: true
    }
  },

  data() {
    return {
      value: this.initialValue
    };
  },

  methods: {
    loadItemsFormServer(query, cb) {
      this.queryMethod(query).then(resp => cb(resp));
    },

    handleSelect(item) {
      console.log(item.value);
      console.log(item.label);
      // this.$emit("change", this.value);
    }
  }
};
</script>
