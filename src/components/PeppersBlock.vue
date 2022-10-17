<template>
  <div class="peppers__container">
    <PepperCard v-for="pepper in peppers" :pepper="pepper" :key="pepper.id">
    </PepperCard>
  </div>
</template>

<script>
import PepperCard from "@/components/PepperCard.vue";
import peppers from "../assets/json/peppers.json";
export default {
  name: "PeppersBlock",
  components: PepperCard,
  computed: {
    peppers() {
      return peppers;
    },
  },
};
</script>

<style lang="less" scoped>
.peppers__container {
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
