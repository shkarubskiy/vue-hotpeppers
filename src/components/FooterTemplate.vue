<template>
  <footer class="footer">
    <div class="footer__container sticky">
      <nav class="footer__nav nav">
        <router-link
          class="nav__item"
          :class="{ active: currentRouteName == 'home' }"
          to="/"
          @click="this.scrollToTop"
        >
          <img src="../assets/footer/home.svg" alt="Home" class="nav__image" />
        </router-link>
        <router-link
          class="nav__item"
          :class="{ active: currentRouteName == 'sauces' }"
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
          :class="{ active: currentRouteName == 'peppers' }"
          to="/peppers"
          @click="this.scrollToTop"
        >
          <img
            src="../assets/footer/peppers.svg"
            alt="Peppers"
            class="nav__image"
          />
        </router-link>
      </nav>
    </div>
    <div class="footer__pattern"></div>
  </footer>
</template>

<script>
export default {
  name: "FooterTemplate",
  computed: {
    currentRouteName() {
      return this.$route.name;
    },
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
};

window.onscroll = () => {
  let footerContainer = document.querySelector(".footer__container");
  let footerPattern = document.querySelector(".footer__pattern");
  let scrollHeight = Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.offsetHeight,
    document.body.clientHeight,
    document.documentElement.clientHeight
  );

  if (
    window.pageYOffset <=
    scrollHeight - window.innerHeight - footerPattern.offsetHeight
  ) {
    footerContainer.classList.add("sticky");
  } else {
    footerContainer.classList.remove("sticky");
  }
};
</script>

<style lang="less" scoped>
.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  &__container {
    height: 70px;
    width: 100%;
    padding: 15px;
    display: flex;
    justify-content: center;
    background: #ffffff;
  }

  &__nav {
    width: 320px;
    display: flex;
    justify-content: space-around;
  }

  &__pattern {
    width: 100%;
    height: 200px;
    background-image: url(../assets/pattern.svg);
    background-size: contain;
    border-top: solid 2px #f2c94c;
  }
}

.nav__item {
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  border: solid 4px #bdbdbd;
}

.active {
  border: solid 4px #eb5757;
}

.sticky {
  position: fixed;
  bottom: 0;
  z-index: 100;
}
</style>
