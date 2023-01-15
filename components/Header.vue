<template>
  <header class="header">
    <div class="wrapper">
      <NuxtLink to="/" class="header__logo"/>

      <nav class="header__nav">
        <NuxtLink
          :to="navigationLinks.scientific_base.link"
          class="header__nav-link tab"
          active-class="tab_active"
        >
          <span class="header__link-icon"/>

          {{ navigationLinks.scientific_base.name }}
        </NuxtLink>

        <NuxtLink
          :to="navigationLinks.products.link"
          class="header__nav-link tab"
          active-class="tab_active"
        >
          {{ navigationLinks.products.name }}
        </NuxtLink>

        <NuxtLink
          :to="navigationLinks.events.link"
          class="header__nav-link tab"
          active-class="tab_active"
        >
          {{ navigationLinks.events.name }}
        </NuxtLink>
      </nav>

      <button type="button" class="header__menu-button" aria-label="открыть меню"><span/></button>
    </div>
  </header>
</template>

<script>
import {navigationLinks} from "~/utils/constants/navigationLinks";

export default {
  name: "Header",

  computed: {
    navigationLinks() {
      return navigationLinks;
    }
  }
}
</script>

<style lang="scss">
.header {
  padding: 24px 0;
  box-shadow: 0 0 6px rgba(0, 0, 0, .1);

  &__logo {
    display: flex;
    width: 199px;
    height: 44px;
    mask: url("~/assets/images/logo/loreal_logo.svg") center / cover no-repeat;
    -webkit-mask: url("~/assets/images/logo/loreal_logo.svg") center / cover no-repeat;
    background-color: #000;
  }

  &__nav {
    display: flex;
    gap: 32px;
  }

  &__nav-link {
    display: flex;
    align-items: center;
    gap: 12px;
    font-weight: 700;
    font-size: 16px;
    line-height: 1.5;
  }

  &__link-icon {
    display: flex;
    width: 16px;
    height: 20px;
    mask: url("~/assets/images/icons/scientific_base_icon.svg") center / cover no-repeat;
    -webkit-mask: url("~/assets/images/icons/scientific_base_icon.svg") center / cover no-repeat;
    background-color: $secondary-gray-color;
    transition: background-color .3s;
  }

  &__nav-link:hover &__link-icon {
    background-color: $dark-text-color;
  }

  &__nav-link.tab_active &__link-icon {
    background-color: $primary-color;
  }

  &__menu-button {
    width: 30px;
    height: 18px;
    border-top: 2px solid #000;
    border-bottom: 2px solid #000;
    box-sizing: border-box;
    transition: border-color .3s;

    &:hover, &:hover span {
      border-color: $primary-color;
    }

    & span {
      display: block;
      width: 100%;
      border-top: 2px solid #000;
      transition: border-color .3s;
    }
  }
}
</style>