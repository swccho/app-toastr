<template>

  <div class="p-20 text-center text-size-35">
    Toaster (No JQuery Needed)
  </div>

  <div class="px-20 pt-20">
    <div class="mb-10">
      inside of template apply this code once.
    </div>
    <div class="bg-light border-radius-rounded shadow-box px-10 overflow-x">
      <pre> {{ preCode }} </pre>
    </div>
  </div>

  <div class="container-fluid">
    <div class="column">
      <div class="p-20">
        <div class="mb-10">
          Top left success toast <br>
          Apply this code in your methods function
        </div>
        <div class="mb-10"></div>
        <button type="button" class="btn btn-primary" @click="topLeftSuccessToaster()">
          Click Here
        </button>
        <div class="mb-10 bg-light border-radius-rounded shadow-box p-10 overflow-x">
        <pre>
          showToaster(duration) {
           this.toastPosition = `top-left`;
            this.toastArray.push(
             {
              type: 'success',
              text: `Add to Cart`,
              subText: `Add to cart successfully`,
             }
           )
           setTimeout(() => {
            this.toastArray.splice(length - 1, 1);
           }, duration)
          },
        </pre>
        </div>
      </div>
    </div>
    <div class="column">
      <div class="p-20">
        <div class="mb-10">
          Top right success toast <br>
          Apply this code in your methods function
        </div>
        <div class="mb-10"></div>
        <button type="button" class="btn btn-secondary" @click="topRightSuccessToaster(1200)">
          Click Here
        </button>
        <div class="mt-10 bg-light border-radius-rounded shadow-box p-10 overflow-x">
        <pre>
          showToaster(duration) {
           this.toastPosition = `top-right`;
            this.toastArray.push(
             {
              type: 'success',
              text: `Add to Cart`,
              subText: `Add to cart successfully`,
             }
           )
           setTimeout(() => {
            this.toastArray.splice(length - 1, 1);
           }, duration)
          },
        </pre>
        </div>
      </div>
    </div>
    <div class="column">
      <div class="p-20">
        <div class="mb-10">
          bottom left success toast <br>
          Apply this code in your methods function
        </div>
        <div class="mb-10"></div>
        <button type="button" class="btn btn-info" @click="bottomLeftSuccessToaster(1200)">
          Click Here
        </button>
        <div class="mt-10 bg-light border-radius-rounded shadow-box p-10 overflow-x">
        <pre>
          showToaster(duration) {
           this.toastPosition = `bottom-left`;
            this.toastArray.push(
             {
              type: 'success',
              text: `Add to Cart`,
              subText: `Add to cart successfully`,
             }
           )
           setTimeout(() => {
            this.toastArray.splice(length - 1, 1);
           }, duration)
          },
        </pre>
        </div>
      </div>
    </div>
    <div class="column">
      <div class="p-20">
        <div class="mb-10">
          bottom right success toast <br>
          Apply this code in your methods function
        </div>
        <div class="mb-10"></div>
        <button type="button" class="btn btn-danger" @click="bottomRightSuccessToaster(1200)">
          Click Here
        </button>
        <div class="mt-10 bg-light border-radius-rounded shadow-box p-10 overflow-x">
        <pre>
          showToaster(duration) {
           this.toastPosition = `bottom-right`;
            this.toastArray.push(
             {
              type: 'success',
              text: `Add to Cart`,
              subText: `Add to cart successfully`,
             }
           )
           setTimeout(() => {
            this.toastArray.splice(length - 1, 1);
           }, duration)
          },
        </pre>
        </div>
      </div>
    </div>
    <div class="column">
      <div class="p-20">
        <div class="mb-10">
          Top left warning toast <br>
          Apply this code in your methods function
        </div>
        <div class="mb-10"></div>
        <button type="button" class="btn btn-success" @click="topLeftWarningToaster(1200)">
          Click Here
        </button>
        <div class="mt-10 bg-light border-radius-rounded shadow-box p-10 overflow-x">
        <pre>
          showToaster(duration) {
            this.toastPosition = `top-left`;
            this.toastArray.push(
              {
                type: 'warning',
                text: `Remove from cart`,
                subText: `Remove from cart successfully`,
              }
            )
          setTimeout(() => {
          this.toastArray.splice(length - 1, 1);
            }, duration)
          },
        </pre>
        </div>
      </div>
    </div>
    <div class="column">
      <div class="p-20">
        <div class="mb-10">
          Top right warning toast <br>
          Apply this code in your methods function
        </div>
        <div class="mb-10"></div>
        <button type="button" class="btn btn-light" @click="topRightWarningToaster(1200)">
          Click Here
        </button>
        <div class="mt-10 bg-light border-radius-rounded shadow-box p-10 overflow-x">
        <pre>
          showToaster(duration) {
            this.toastPosition = `top-right`;
            this.toastArray.push(
              {
                type: 'warning',
                text: `Remove from cart`,
                subText: `Remove from cart successfully`,
              }
            )
          setTimeout(() => {
          this.toastArray.splice(length - 1, 1);
            }, duration)
          },
        </pre>
        </div>
      </div>
    </div>
    <div class="column">
      <div class="p-20">
        <div class="mb-10">
          bottom left warning toast <br>
          Apply this code in your methods function
        </div>
        <button type="button" class="btn btn-dark" @click="bottomLeftWarningToaster(1200)">
          Click Here
        </button>
        <div class="mt-10 bg-light border-radius-rounded shadow-box p-10 overflow-x">
        <pre>
          showToaster(duration) {
            this.toastPosition = `bottom-left`;
            this.toastArray.push(
              {
                type: 'warning',
                text: `Remove from cart`,
                subText: `Remove from cart successfully`,
              }
            )
          setTimeout(() => {
          this.toastArray.splice(length - 1, 1);
            }, duration)
          },
        </pre>
        </div>
      </div>
    </div>
    <div class="column">
      <div class="p-20">
        <div class="mb-10">
          bottom right warning toast <br>
          Apply this code in your methods function
        </div>
        <button type="button" class="btn btn-primary" @click="bottomRightWarningToaster(1200)">
          Click Here
        </button>
        <div class="mt-10 bg-light border-radius-rounded shadow-box p-10 overflow-x">
        <pre>
          showToaster(duration) {
            this.toastPosition = `bottom-right`;
            this.toastArray.push(
              {
                type: 'warning',
                text: `Remove from cart`,
                subText: `Remove from cart successfully`,
              }
            )
          setTimeout(() => {
          this.toastArray.splice(length - 1, 1);
            }, duration)
          },
        </pre>
        </div>
      </div>
    </div>
    <div class="column">
      <div class="p-20">
        <div class="mb-10">
          Top left error toast <br>
          Apply this code in your methods function
        </div>
        <button type="button" class="btn btn-secondary" @click="topLeftErrorToaster(1200)">
          Click Here
        </button>
        <div class="mt-10 bg-light border-radius-rounded shadow-box p-10 overflow-x">
        <pre>
          showToaster(duration) {
            this.toastPosition = `top-left`;
            this.toastArray.push(
              {
                type: 'error',
                text: `Server Error`,
                subText: `Please check your integrated api`,
              }
            )
            setTimeout(() => {
              this.toastArray.splice(length - 1, 1);
            }, duration)
          },
        </pre>
        </div>
      </div>
    </div>
    <div class="column">
      <div class="p-20">
        <div class="mb-10">
          Top right error toast <br>
          Apply this code in your methods function
        </div>
        <button type="button" class="btn btn-info" @click="topRightErrorToaster(1200)">
          Click Here
        </button>
        <div class="mt-10 bg-light border-radius-rounded shadow-box p-10 overflow-x">
        <pre>
          showToaster(duration) {
            this.toastPosition = `top-right`;
            this.toastArray.push(
              {
                type: 'error',
                text: `Server Error`,
                subText: `Please check your integrated api`,
              }
            )
            setTimeout(() => {
              this.toastArray.splice(length - 1, 1);
            }, duration)
          },
        </pre>
        </div>
      </div>
    </div>
    <div class="column">
      <div class="p-20">
        <div class="mb-10">
          bottom left error toast <br>
          Apply this code in your methods function
        </div>
        <button type="button" class="btn btn-danger" @click="bottomLeftErrorToaster(1200)">
          Click Here
        </button>
        <div class="mt-10 bg-light border-radius-rounded shadow-box p-10 overflow-x">
        <pre>
          showToaster(duration) {
            this.toastPosition = `bottom-left`;
            this.toastArray.push(
              {
                type: 'error',
                text: `Server Error`,
                subText: `Please check your integrated api`,
              }
            )
            setTimeout(() => {
              this.toastArray.splice(length - 1, 1);
            }, duration)
          },
        </pre>
        </div>
      </div>
    </div>
    <div class="column">
      <div class="p-20">
        <div class="mb-10">
          bottom right error toast <br>
          Apply this code in your methods function
        </div>
        <button type="button" class="btn btn-success" @click="bottomRightErrorToaster(1200)">
          Click Here
        </button>
        <div class="mt-10 bg-light border-radius-rounded shadow-box p-10 overflow-x">
        <pre>
          showToaster(duration) {
            this.toastPosition = `bottom-right`;
            this.toastArray.push(
              {
                type: 'error',
                text: `Server Error`,
                subText: `Please check your integrated api`,
              }
            )
            setTimeout(() => {
              this.toastArray.splice(length - 1, 1);
            }, duration)
          },
        </pre>
        </div>
      </div>
    </div>
  </div>

  <div class="fixed p-10" id="toaster" :class="toastPosition" v-if="toastArray.length > 0">
    <template v-for="(each, index) in toastArray" :key="index">
      <ToasterComponent :type="each.type" :text="each.text" :sub-text="each.subText" @removeToaster="removeToaster(index)"></ToasterComponent>
    </template>
  </div>

</template>

<script>

import ToasterComponent from "@/components/ToasterComponent.vue";

export default {

  name: 'HelloWorld',

  components: {
    ToasterComponent
  },

  data() {
    return {
      toastPosition: 'top-right',
      toastArray: [],
      preCode: `
        <div class="fixed p-10" id="toaster" :class="toastPosition" v-if="toastArray.length > 0">
          <template v-for="(each, index) in toastArray" :key="index">
            <ToasterComponent :type="each.type" :text="each.text" :sub-text="each.subText" @removeToaster="removeToaster(index)"></ToasterComponent>
          </template>
        </div>
      `,
    }
  },

  mounted() {  },

  methods: {

    /* Function to remove toaster */
    removeToaster(index) {
        this.toastArray.splice(index , 1);
    },

    /* Success toaster position attach */
    topLeftSuccessToaster() {
      this.toastPosition = `top-left`;
      this.toastArray.push(
          {
            type: 'success',
            text: `Add to Cart`,
            subText: `Add to cart successfully`,
          }
      )
      setTimeout(() => {
        this.toastArray.splice(length - 1, 1);
      }, 5000)
    },

    topRightSuccessToaster(duration) {
      this.toastPosition = `top-right`;
      this.toastArray.push(
          {
            type: 'success',
            text: `Add to Cart`,
            subText: `Add to cart successfully`,
          }
      )
      setTimeout(() => {
        this.toastArray.splice(length - 1, 1);
      }, duration)
    },

    bottomLeftSuccessToaster(duration) {
      this.toastPosition = `bottom-Left`;
      this.toastArray.push(
          {
            type: 'success',
            text: `Add to Cart`,
            subText: `Add to cart successfully`,
          }
      )
      setTimeout(() => {
        this.toastArray.splice(length - 1, 1);
      }, duration)
    },

    bottomRightSuccessToaster(duration) {
      this.toastPosition = `bottom-right`;
      this.toastArray.push(
          {
            type: 'success',
            text: `Add to Cart`,
            subText: `Add to cart successfully`,
          }
      )
      setTimeout(() => {
        this.toastArray.splice(length - 1, 1);
      }, duration)
    },

    /* Warning toaster position attach */
    topLeftWarningToaster(duration) {
      this.toastPosition = `top-left`;
      this.toastArray.push(
          {
            type: 'warning',
            text: `Remove from cart`,
            subText: `Remove from cart successfully`,
          }
      )
      setTimeout(() => {
        this.toastArray.splice(length - 1, 1);
      }, duration)
    },

    topRightWarningToaster(duration) {
      this.toastPosition = `top-right`;
      this.toastArray.push(
          {
            type: 'warning',
            text: `Remove from cart`,
            subText: `Remove from cart successfully`,
          }
      )
      setTimeout(() => {
        this.toastArray.splice(length - 1, 1);
      }, duration)
    },

    bottomLeftWarningToaster(duration) {
      this.toastPosition = `bottom-Left`;
      this.toastArray.push(
          {
            type: 'warning',
            text: `Remove from cart`,
            subText: `Remove from cart successfully`,
          }
      )
      setTimeout(() => {
        this.toastArray.splice(length - 1, 1);
      }, duration)
    },

    bottomRightWarningToaster(duration) {
      this.toastPosition = `bottom-right`;
      this.toastArray.push(
          {
            type: 'warning',
            text: `Remove from cart`,
            subText: `Remove from cart successfully`,
          }
      )
      setTimeout(() => {
        this.toastArray.splice(length - 1, 1);
      }, duration)
    },

    /* Error toaster position attach */
    topLeftErrorToaster(duration) {
      this.toastPosition = `top-left`;
      this.toastArray.push(
          {
            type: 'error',
            text: `Server Error`,
            subText: `Please check your integrated api`,
          }
      )
      setTimeout(() => {
        this.toastArray.splice(length - 1, 1);
      }, duration)
    },

    topRightErrorToaster(duration) {
      this.toastPosition = `top-right`;
      this.toastArray.push(
          {
            type: 'error',
            text: `Server Error`,
            subText: `Please check your integrated api`,
          }
      )
      setTimeout(() => {
        this.toastArray.splice(length - 1, 1);
      }, duration)
    },

    bottomLeftErrorToaster(duration) {
      this.toastPosition = `bottom-Left`;
      this.toastArray.push(
          {
            type: 'error',
            text: `Server Error`,
            subText: `Please check your integrated api`,
          }
      )
      setTimeout(() => {
        this.toastArray.splice(length - 1, 1);
      }, duration)
    },

    bottomRightErrorToaster(duration) {
      this.toastPosition = `bottom-right`;
      this.toastArray.push(
          {
            type: 'error',
            text: `Server Error`,
            subText: `Please check your integrated api`,
          }
      )
      setTimeout(() => {
        this.toastArray.splice(length - 1, 1);
      }, duration)
    },

  }
}
</script>
