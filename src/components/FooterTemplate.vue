<template>
  <footer class="footer">
    <div class="footer__container sticky">
      <nav class="footer__nav nav">
        <a class="nav__item" href="">
          <img src="" alt="" class="nav__image" />
        </a>
      </nav>
    </div>
    <div class="footer__pattern"></div>
  </footer>
</template>

<script>
export default {
  name: "FooterTemplate",
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
  &__container {
    height: 70px;
    padding: 15px;
    background: #ffffff;
  }

  &__nav {
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
  border-radius: 20px;
  border: solid 4px #bdbdbd;
}

.sticky {
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 100;
}
</style>
