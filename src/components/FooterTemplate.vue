<template>
  <footer class="footer">
    <div class="footer__container sticky"></div>
    <div class="footer__pattern"></div>
  </footer>
</template>

<script>
export default {
  name: "FooterTemplate",
};

window.onload = function () {
  let footerContainer = document.querySelector(".footer__container");
  let footerPattern = document.querySelector(".footer__pattern");
  window.onscroll = () => {
    if (window.pageYOffset - footerPattern.offsetHeight <= 0) {
      footerContainer.classList.add("sticky");
    } else {
      footerContainer.classList.remove("sticky");
    }
  };
};
</script>

<style lang="less" scoped>
.footer {
  &__container {
    height: 70px;
    background: #ffffff;
  }
  &__pattern {
    width: 100%;
    height: 200px;
    background-image: url(../assets/pattern.png);
    background-size: contain;
    border-top: solid 2px #f2c94c;
  }
}
.sticky {
  position: fixed;
  bottom: 0;
  width: 100%;
}
</style>
