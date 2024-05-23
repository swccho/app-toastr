<template>

  <div class="container-fluid">

    <div class="d-flex justify-start items-center gap-20">

      <button type="button" class="btn btn-warning" @click="warningToaster">
        warning
      </button>

      <button type="button" class="btn btn-success" @click="successToaster">
        success
      </button>

      <button type="button" class="btn btn-danger" @click="dangerToaster">
        danger
      </button>

    </div>

    <div></div>
    <div></div>

  </div>

  <div class="fixed top-0 right-0 m-10">

    <div class="transform-effect" v-if="toasterWarning"> <!-- warning -->
      <div class="toaster mb-10 d-flex justify-start items-center">
        <div class="bg-warning width-30 height-30 border-radius-circle d-flex justify-center items-center shadow-warning">
          <img :src="`/svg/warning.svg`" class="width-18 height-18" alt="error">
        </div>
        <div class="ml-20">
          <div class="mb-5 text-warning head">
            This toast message notifies.
          </div>
          <div class="paragraph">
            Whatever that may be.
          </div>
        </div>
      </div>
    </div>

    <div class="transform-effect" v-if="toasterSuccess"> <!-- success -->
      <div class="toaster mb-10 d-flex justify-start items-center">
        <div class="bg-success width-30 height-30 border-radius-circle d-flex justify-center items-center shadow-success">
          <img :src="`/svg/success.svg`" class="width-18 height-18" alt="error">
        </div>
        <div class="ml-20">
          <div class="mb-5 text-success head">
            This toast message notifies.
          </div>
          <div class="paragraph">
            Whatever that may be.
          </div>
        </div>
      </div>
    </div>

    <div class="transform-effect" v-if="toasterDanger"> <!-- error -->
      <div class="toaster mb-10 d-flex justify-start items-center">
        <div class="bg-danger width-30 height-30 border-radius-circle d-flex justify-center items-center shadow-danger">
          <img :src="`/svg/error.svg`" class="width-18 height-18" alt="error">
        </div>
        <div class="ml-20">
          <div class="mb-5 text-danger head">
            This toast message notifies.
          </div>
          <div class="paragraph">
            Whatever that may be.
          </div>
        </div>
      </div>
    </div>

  </div>

</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      toasterSuccess: false,
      toasterWarning: false,
      toasterDanger: false,
    }
  },
  mounted() {
  },
  methods: {

    successToaster() {
      this.toasterSuccess = true;
      setTimeout( () => {
        this.toasterSuccess = false;
      }, 2000 )
    },

    warningToaster() {
      this.toasterWarning = true;
      setTimeout( () => {
        this.toasterWarning = false;
      }, 2000 )
    },

    dangerToaster() {
      this.toasterDanger = true;
      setTimeout( () => {
        this.toasterDanger = false;
      }, 2000 )
    },

  }
}
</script>
