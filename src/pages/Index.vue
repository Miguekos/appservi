<template>
  <q-page class="flex flex-center">
    <TablaListado />
  </q-page>
</template>

<style></style>

<script>
export default {
  name: "PageIndex",
  mounted() {
    console.log("Todo esta ok");
  },
  components: {
    TablaListado: () => import("./cotiza/TablaListado")
  }
};
</script>
