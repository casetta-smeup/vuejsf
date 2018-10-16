<template>
  <el-select
    v-model="value"
    filterable
    remote
    :remote-method="loadItemsFormServer"
    :loading="loading"
    placeholder="Please enter a keyword"
    @change="onChange"
  >
    <el-option
      v-for="item in items"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    ></el-option>
  ></el-select>
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
      value: this.initialValue,
      items: [],
      loading: false
    };
  },

  methods: {
    loadItemsFormServer(query) {
      this.loading = true;

      // simulo un'attesa...
      var _this = this;
      setTimeout(function() {
        _this.items = _this.queryMethod(query);
        _this.loading = false;
      }, 500);
    },

    onChange() {
      this.$emit("change", this.value);
    }
  }
};
</script>
