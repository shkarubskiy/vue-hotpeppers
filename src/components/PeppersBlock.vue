<template>
  <div class="peppers__container" v-if="peppers">
    <PepperCard v-for="pepper in peppers" :pepper="pepper" :key="pepper.id">
    </PepperCard>
  </div>
</template>

<script>
import PepperCard from "@/components/PepperCard.vue";
export default {
  name: "PeppersBlock",
  components: PepperCard,
  data() {
    return {
      peppers: null,
    };
  },
  created() {
    const urlPeppers = "https://dev.angels.kz/?q=peppers/list";

    fetch(urlPeppers, {
      method: "GET",
    })
      .then((response) => response.text())
      .then((text) => {
        this.peppers = JSON.parse(text).peppers;
      })
      .catch((err) => console.error(`JSON ERROR: ${err}`));
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
