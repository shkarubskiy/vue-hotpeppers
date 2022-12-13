<template>
  <nav class="nav">
    <div class="nav__container">
      <router-link
        class="nav__item"
        :class="{ active: this.$route.name == 'home' }"
        to="/"
        @click="this.scrollToTop"
      >
        <img src="../assets/footer/home.svg" alt="Home" class="nav__image" />
      </router-link>
      <router-link
        class="nav__item"
        :class="{ active: this.$route.name == 'sauces' }"
        to="/sauces"
        @click="this.scrollToTop"
      >
        <img
          src="../assets/footer/sauces.svg"
          alt="Sauces"
          class="nav__image"
        />
      </router-link>
      <router-link
        class="nav__item"
        :class="{ active: this.$route.name == 'peppers' }"
        to="/peppers"
        @click="this.scrollToTop"
      >
        <img
          src="../assets/footer/peppers.svg"
          alt="Peppers"
          class="nav__image"
        />
      </router-link>
      <a class="nav__item" href="tel:+7-707-222-01-11">
        <img
          src="../assets/footer/phone.svg"
          alt="Peppers"
          class="nav__image"
        />
      </a>
      <a
        class="nav__item"
        href="https://wa.me/77072220111?text=Здравствуйте%2C+хочу+окунуться+в+тонкий+мир+палящего+вкуса"
      >
        <img
          src="../assets/footer/whatsapp.svg"
          alt="Peppers"
          class="nav__image"
        />
      </a>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavbarTemplate",
  // computed: {
  //   currentRouteName() {
  //     return this.$route.name;
  //   },
  // },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
};
</script>

<style lang="less" scoped>
.nav {
  position: -webkit-sticky;
  position: sticky;
  bottom: 0;
  height: 70px;
  width: 100%;
  padding: 15px;
  display: flex;
  justify-content: center;
  background: #ffffff;
  &__container {
    width: 320px;
    display: flex;
    justify-content: space-around;
  }
  &__item {
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    border: solid 4px #bdbdbd;
  }
}

.active {
  border: solid 4px #eb5757;
}
</style>
