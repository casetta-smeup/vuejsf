<template>
  <div id="app">
    <SmeupLabel
      content="Test"
      color="#CCCCCC"
      align="center"
      @click="onLabelClick"
    />

    <SmeupFld
      id="fld1"
      type="Itx"
      initialValue="asd"
      label="InputText"
      :showSubmit="true"
      @change="onFldChange"
      @click="onFldClick"
    />

    <SmeupFld
      id="fld2"
      type="Acp"
      initialValue=""
      label="Autocomplete"
      :showSubmit="true"
      :queryMethod="queryMethod"
      @change="onFldChange"
      @click="onFldClick"
    />

    <SmeupFld
      id="fldxx"
      type="Asd"
    />
  </div>
</template>

<script>
import SmeupFld from "./components/SmeupFld.vue";
import SmeupLabel from "./components/SmeupLabel.vue";
import InputText from "./components/fields/InputText.vue";

export default {
  name: "app",

  components: {
    SmeupFld,
    SmeupLabel,
    InputText
  },

  methods: {
    onFldChange(fld) {
      console.log("fld changed", fld);
    },

    onFldClick(fld) {
      console.log("fld clicked", fld);
    },

    onLabelClick(value) {
      console.log("value", value);
    },

    queryMethod(query) {
      console.log("lol", query);
    }
  }
};
</script>

<style>
</style>
