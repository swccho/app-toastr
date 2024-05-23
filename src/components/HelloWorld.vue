<template>

  <div class="container-fluid">

    <div class="d-flex justify-start items-center flex-wrap gap-20">

      <button type="button" class="btn btn-warning" @click="warningToaster('top-0','bottom-0','left-0','right-0','Remove cart','Remove cart successfully',4000)">
        warning
      </button>
      <button type="button" class="btn btn-warning" @click="warningToaster('top-0','bottom-0','left-0','right-0','Remove cart','Remove cart successfully',4000)">
        warning
      </button>
      <button type="button" class="btn btn-warning" @click="warningToaster('top-0','bottom-0','left-0','right-0','Remove cart','Remove cart successfully',4000)">
        warning
      </button>

    </div>

    <div></div>
    <div></div>

  </div>

    <div class="fixed p-10" id="toaster">
      <ToasterComponent :type="'success'" :iconBackground="`bg-success`" :shadowType="`shadow-success`" :icon="`/svg/success.svg`" :textColor="`text-success`" :position-top="`top-0`" :position-left="`left-0`" :text="`this is successful content`" :sub-text="`this is subtext successful content`" :status="false"/>
    </div>

</template>

<script>
import ToasterComponent from "@/components/ToasterComponent.vue";

export default {
  name: 'HelloWorld',
  components: { ToasterComponent },
  data() {
    return {}
  },
  mounted() {
  },
  methods: {

    successToaster(positionTop, positionBottom, positionLeft, positionRight, text, subText, timeOut) {
      let toaster = document.getElementById('toaster');
      toaster.className = 'fixed p-10' + ' ' +positionTop + ' ' + positionBottom + ' ' + positionLeft + ' ' + positionRight;
      let htmlCode = `
        <div class="transform-effect">
          <div class="toaster mb-10 d-flex justify-start items-center">
            <div class="bg-success width-30 height-30 border-radius-circle d-flex justify-center items-center shadow-success">
              <img src="/svg/success.svg" class="width-18 height-18" alt="error">
            </div>
            <div class="ml-20">
              <div class="mb-5 text-success head">
                `+text+`
              </div>
              <div class="paragraph">
                `+subText+`
              </div>
            </div>
          </div>
        </div>
      `
      const div = document.createElement('div')
      div.innerHTML = htmlCode
      toaster.appendChild(div)
      setTimeout(()=> {
        toaster.removeChild(div)
        toaster.className = '';
      },timeOut)
    },

    warningToaster(positionTop, positionBottom, positionLeft, positionRight, text, subText, timeOut) {
      let toaster = document.getElementById('toaster');
      toaster.className = 'fixed p-10' + ' ' +positionTop + ' ' + positionBottom + ' ' + positionLeft + ' ' + positionRight;
      let htmlCode = `
        <div class="transform-effect">
          <div class="toaster mb-10 d-flex justify-start items-center">
            <div class="bg-warning width-30 height-30 border-radius-circle d-flex justify-center items-center shadow-warning">
                <img src="/svg/warning.svg" class="width-18 height-18" alt="error">
            </div>
            <div class="ml-20">
              <div class="mb-5 text-warning head">
                  `+text+`
              </div>
              <div class="paragraph">
                  `+subText+`
              </div>
            </div>
          </div>
        </div>
      `
      const div = document.createElement('div')
      div.innerHTML = htmlCode
      toaster.appendChild(div)
      setTimeout(()=> {
        toaster.removeChild(div)
        toaster.className = '';
      },timeOut)
    },

    dangerToaster(positionTop, positionBottom, positionLeft, positionRight, text, subText, timeOut) {
      let toaster = document.getElementById('toaster');
      toaster.className = 'fixed p-10' + ' ' +positionTop + ' ' + positionBottom + ' ' + positionLeft + ' ' + positionRight;
      let htmlCode = `
        <div class="transform-effect">
          <div class="toaster mb-10 d-flex justify-start items-center">
            <div class="bg-danger width-30 height-30 border-radius-circle d-flex justify-center items-center shadow-danger">
              <img src="/svg/error.svg" class="width-18 height-18" alt="error">
            </div>
            <div class="ml-20">
              <div class="mb-5 text-danger head">
                `+text+`
              </div>
              <div class="paragraph">
                  `+subText+`
              </div>
            </div>
          </div>
        </div>
      `
      const div = document.createElement('div')
      div.innerHTML = htmlCode
      toaster.appendChild(div)
      setTimeout(()=> {
        toaster.removeChild(div)
        toaster.className = '';
      },timeOut)
    },

  }
}
</script>
