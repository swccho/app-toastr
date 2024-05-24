<template>
  <div>

    <div class="fixed p-10" id="toaster" :class="toastPosition"></div>

  </div>
</template>

<script>

export default {
  name: 'ToasterComponent',
  data() {
    return {
      toastPosition: 'top-right'
    }
  },
  mounted() {  },
  methods: {

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