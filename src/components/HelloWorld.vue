<template>
  <div class="container-fluid">
    <button type="button" class="btn btn-primary">
      primary
    </button>
    <button type="button" class="btn btn-secondary">
      secondary
    </button>
    <button type="button" class="btn btn-info">
      info
    </button>
    <button type="button" class="btn btn-warning">
      warning
    </button>
    <button type="button" class="btn btn-danger">
      danger
    </button>
  </div>

  <div class="fixed top-0 right-0 m-10 transform-effect">

    <div class="toaster mb-10 d-flex justify-center items-start flex-col">
        <div class="mb-5">
          This toast message notifies.
        </div>
        <div>
          Whatever that may be.
        </div>
    </div>

    <div class="toaster mb-10 d-flex justify-start items-center">
      <div class="bg-danger width-45 height-45 border-radius-circle d-flex justify-center items-center shadow-danger">
        <img :src="`/svg/error.svg`" class="width-25 height-25" alt="error">
      </div>
      <div class="ml-20">
        <div class="mb-5">
          This toast message notifies.
        </div>
        <div>
          Whatever that may be.
        </div>
      </div>
    </div>

    <div class="toaster mb-10 d-flex justify-start items-center">
      <div class="bg-success width-45 height-45 border-radius-circle d-flex justify-center items-center shadow-success">
        <img :src="`/svg/success.svg`" class="width-25 height-25" alt="error">
      </div>
      <div class="ml-20">
        <div class="mb-5">
          This toast message notifies.
        </div>
        <div>
          Whatever that may be.
        </div>
      </div>
    </div>

    <div class="toaster mb-10 d-flex justify-start items-center">
      <div class="bg-warning width-45 height-45 border-radius-circle d-flex justify-center items-center shadow-warning">
        <img :src="`/svg/warning.svg`" class="width-25 height-25" alt="error">
      </div>
      <div class="ml-20">
        <div class="mb-5">
          This toast message notifies.
        </div>
        <div>
          Whatever that may be.
        </div>
      </div>
    </div>

    <div class="toaster mb-10 d-flex justify-start items-center">
      <div>
        <img :src="`/svg/`" alt="">
      </div>
      <div>
        <div class="mb-5">
          This toast message notifies.
        </div>
        <div>
          Whatever that may be.
        </div>
      </div>
    </div>

  </div>

</template>

<script>
export default {
  name: 'HelloWorld',
  data(){
    return {
      toasterStatus: false,
    }
  },
  mounted() {  },
  methods: {
    /* Function to call toaster */

  }
}
</script>
