<template>
  <div>
    <DashboardComponent msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import DashboardComponent from "@/components/Dashboard/DashboardComponent.vue";

export default {
  name: "Dashboard",
  components: {
    DashboardComponent
  }
};
</script>
