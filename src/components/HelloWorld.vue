<template>

  <div class="container-fluid">

    <div>

      <button type="button" class="btn btn-dark" @click="topLeftSuccessToaster()">
        Button
      </button>

    </div>

    <div>

      <button type="button" class="btn btn-dark" @click="topRightSuccessToaster()">
        Button
      </button>

    </div>

    <div>

      <button type="button" class="btn btn-dark" @click="bottomLeftSuccessToaster()">
        Button
      </button>

    </div>

    <div>

      <button type="button" class="btn btn-dark" @click="bottomRightSuccessToaster()">
        Button
      </button>

    </div>

    <div>

      <button type="button" class="btn btn-dark" @click="topLeftWarningToaster()">
        Button
      </button>

    </div>

    <div>

      <button type="button" class="btn btn-dark" @click="topRightWarningToaster()">
        Button
      </button>

    </div>

    <div>

      <button type="button" class="btn btn-dark" @click="bottomLeftWarningToaster()">
        Button
      </button>

    </div>

    <div>

      <button type="button" class="btn btn-dark" @click="bottomRightWarningToaster()">
        Button
      </button>

    </div>

    <div>

      <button type="button" class="btn btn-dark" @click="topLeftDangerToaster()">
        Button
      </button>

    </div>

    <div>

      <button type="button" class="btn btn-dark" @click="topRightDangerToaster()">
        Button
      </button>

    </div>

    <div>

      <button type="button" class="btn btn-dark" @click="bottomLeftDangerToaster()">
        Button
      </button>

    </div>

    <div>

      <button type="button" class="btn btn-dark" @click="bottomRightDangerToaster()">
        Button
      </button>

    </div>

  </div>

  <div class="fixed p-10" id="toaster" :class="toastPosition"></div>

</template>

<script>

export default {
  name: 'HelloWorld',
  data() {
    return {
      toastPosition: 'top-right'
    }
  },
  mounted() {
  },
  methods: {

    /* Success toaster position attach */
    topLeftSuccessToaster() {
      this.success({
        position: `top-left`,
        text: `Add to Cart`,
        subText: `Add to cart successfully`,
        duration: 4000
      })
    },

    topRightSuccessToaster() {
      this.success({
        position: `top-right`,
        text: `Add to Cart`,
        subText: `Add to cart successfully`,
        duration: 4000,
      })
    },

    bottomLeftSuccessToaster() {
      this.success({
        position: `bottom-Left`,
        text: `Add to Cart`,
        subText: `Add to cart successfully`,
        duration: 4000,
      })
    },

    bottomRightSuccessToaster() {
      this.success({
        position: `bottom-right`,
        text: `Add to Cart`,
        subText: `Add to cart successfully`,
        duration: 4000,
      })
    },

    /* Warning toaster position attach */
    topLeftWarningToaster() {
      this.warning({
        position: `top-left`,
        text: `Remove From Cart`,
        subText: `Remove from cart successfully`,
        duration: 4000,
      })
    },

    topRightWarningToaster() {
      this.warning({
        position: `top-right`,
        text: `Remove From Cart`,
        subText: `Remove from cart successfully`,
        duration: 4000,
      })
    },

    bottomLeftWarningToaster() {
      this.warning({
        position: `bottom-Left`,
        text: `Remove From Cart`,
        subText: `Remove from cart successfully`,
        duration: 4000,
      })
    },

    bottomRightWarningToaster() {
      this.warning({
        position: `bottom-right`,
        text: `Remove From Cart`,
        subText: `Remove from cart successfully`,
        duration: 4000,
      })
    },

    /* Danger toaster position attach */
    topLeftDangerToaster() {
      this.danger({
        position: `top-left`,
        text: `Not available`,
        subText: `Sorry there have no cart item`,
        duration: 4000,
      })
    },

    topRightDangerToaster() {
      this.danger({
        position: `top-right`,
        text: `Not available`,
        subText: `Sorry there have no cart item`,
        duration: 4000,
      })
    },

    bottomLeftDangerToaster() {
      this.danger({
        position: `bottom-Left`,
        text: `Not available`,
        subText: `Sorry there have no cart item`,
        duration: 4000,
      })
    },

    bottomRightDangerToaster() {
      this.danger({
        position: `bottom-right`,
        text: `Not available`,
        subText: `Sorry there have no cart item`,
        duration: 4000,
      })
    },

    /* --- --- --- success toaster --- --- --- */
    success(options) {
      this.toastPosition = options.position;
      let toaster = document.getElementById('toaster');
      let htmlCode = `
        <div class="transform-effect">
          <div class="toaster mb-10 d-flex justify-start items-center">
            <div class="bg-success width-30 height-30 border-radius-circle d-flex justify-center items-center shadow-success">
              <img src="/svg/success.svg" class="width-18 height-18" alt="error">
            </div>
            <div class="ml-20">
              <div class="mb-5 text-success head">
                ` + options.text + `
              </div>
              <div class="paragraph">
                ` + options.subText + `
              </div>
            </div>
          </div>
        </div>
      `
      const div = document.createElement('div')
      div.innerHTML = htmlCode
      toaster.appendChild(div)
      setTimeout(() => {
        toaster.removeChild(div)
        if(div.length === 0) {
          this.toastPosition = ''
        }
      }, options.duration)
    },

    /* --- --- --- warning toaster --- --- --- */
    warning(options) {
      this.toastPosition = options.position;
      let toaster = document.getElementById('toaster');
      let htmlCode = `
        <div class="transform-effect">
          <div class="toaster mb-10 d-flex justify-start items-center">
            <div class="bg-warning width-30 height-30 border-radius-circle d-flex justify-center items-center shadow-warning">
                <img src="/svg/warning.svg" class="width-18 height-18" alt="error">
            </div>
            <div class="ml-20">
              <div class="mb-5 text-warning head">
                  ` + options.text + `
              </div>
              <div class="paragraph">
                  ` + options.subText + `
              </div>
            </div>
          </div>
        </div>
      `
      const div = document.createElement('div')
      div.innerHTML = htmlCode
      toaster.appendChild(div)
      setTimeout(() => {
        toaster.removeChild(div)
        if(div.length === 0) {
          this.toastPosition = ''
        }
      }, options.duration)
    },

    /* --- --- --- danger toaster --- --- --- */
    danger(options) {
      this.toastPosition = options.position;
      let toaster = document.getElementById('toaster');
      let htmlCode = `
        <div class="transform-effect">
          <div class="toaster mb-10 d-flex justify-start items-center">
            <div class="bg-danger width-30 height-30 border-radius-circle d-flex justify-center items-center shadow-danger">
              <img src="/svg/error.svg" class="width-18 height-18" alt="error">
            </div>
            <div class="ml-20">
              <div class="mb-5 text-danger head">
                ` + options.text + `
              </div>
              <div class="paragraph">
                  ` + options.subText + `
              </div>
            </div>
          </div>
        </div>
      `
      const div = document.createElement('div')
      div.innerHTML = htmlCode
      toaster.appendChild(div)
      setTimeout(() => {
        toaster.removeChild(div)
        if(div.length === 0) {
          this.toastPosition = ''
        }
      }, options.duration)
    },

  }
}
</script>
