<template>
  <div>

    <div class="wrapper-header">

      <div class="d-flex justify-start">
        <button type="button" class="btn-icon sidebar-toggle mr-20" @click="sidebarToggle()">
          <img :src="`/svg/justify-left.svg`" class="width-30" alt="justify-left">
        </button>
        <a href="javascript:void(0)">
          <img :src="`/logo.png`" class="width-30" alt="logo">
        </a>
      </div>

      <a href="javascript:void(0)" class="link">
        View code on Github
      </a>

    </div>

    <div class="wrapper">

      <div class="wrapper-sidebar" :class="{'active' : sidebarIsActive}">
        <div class="sidebar-close d-flex justify-end">
          <button type="button" class="btn-icon" @click="sidebarToggle()">
            <img :src="`/svg/black-close.svg`" class="width-25 height-25" alt="black-close">
          </button>
        </div>
        <div> Overview </div>
        <a href="#introduction">
          Introduction
        </a>
        <a href="#install">
          Install
        </a>
        <div> Properties </div>
        <a href="#getting-started">
          Getting Started
        </a>
        <a href="#position">
          Position
        </a>
        <a href="#array-passing">
          Array Passing
        </a>
        <a href="#remove-toaster">
          Remove Toaster
        </a>
        <a href="#set-time-out">
          SetTimeout
        </a>
      </div>

      <div class="wrapper-content overflow-y">
        <router-view/>
      </div>

    </div>

  </div>
</template>

<script>

export default {
  data() {
    return {
      sidebarIsActive:false
    }
  },
  mounted() {

  },
  methods: {
    sidebarToggle() {
      this.sidebarIsActive = !this.sidebarIsActive
    }
  }
}

</script>