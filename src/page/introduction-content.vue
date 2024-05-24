<template>
  <div>

    <div id="introduction">
      <div class="mb-20 text-size-48 font-medium"> Introduction </div>

      <div class="mb-20 text-size- font-light text-size-22">
        The complete documentation reference of the Toaster, a JavaScript library made for displaying
        non-blockable toaster notifications.
      </div>
    </div>

    <div id="install">

      <div class="mb-10 text-size-24 font-medium">
        Install
      </div>

      <div class="mb-20 text-size-18 font-light">
        The quickest way to implement ToasterJS is to use the hosted version on cdnjs
      </div>

      <textarea name="" id="" cols="30" class="w-full h-full d-block outline-none p-20 resize-none" disabled rows="7">
        <!-- ToasterJS -->

        <script src="https://raw.githubusercontent.com/rosshatokay/toasterjs/main/src/toaster.js"></script>

        <link rel="stylesheet" href="https://raw.githubusercontent.com/rosshatokay/toasterjs/main/src/toaster.css"/>

      </textarea>

    </div>

    <div id="getting-started">

    <div class="mt-20 mb-10 text-size-24 font-medium">
      Getting started
    </div>

    <div class="mb-20 text-size-18">
      To generate a basic toast, i.e upon clicking a button, call a showToast()
    </div>

    <textarea name="" id="" cols="30" class="w-full h-full d-block outline-none p-20 resize-none" disabled rows="55">
      <template>
        <button type="button" @click="showToast()"> Show Toast </button>

        <div class="fixed p-10" id="toaster" :class="toastPosition" v-if="toastArray.length > 0">
          <template v-for="(each, index) in toastArray" :key="index">
            <ToasterComponent :type="each.type" :text="each.text" :sub-text="each.subText" @removeToaster="removeToaster(index)"></ToasterComponent>
          </template>
        </div>
      </>template>

      <script>
        import ToasterComponent from "@/components/ToasterComponent.vue";
        export default {
          components: {
            ToasterComponent
          },
          data() {
            return {
              toastPosition: 'top-right', /* use default position */
              toastArray: [], /* if change toastArray please change also also from template */
            }
          },
          methods: {

            /* Function to remove toaster */
            removeToaster(index) {
              this.toastArray.splice(index, 1);
            },

            /* Function to show toaster */
            showToaster(duration) {

              /* toaster change position */
              this.toastPosition = `top-right`; /* you just change from this `  ` part only */

              /* apply toastArray for apply type <- { success, warning, error }, text, subtext */
              this.toastArray.push(
                {
                  type: 'success',
                  text: `Add to Cart`,
                  subText: `Add to cart successfully`,
                }
              )
              /* use this basic for remove automatic toaster */
              setTimeout(() => {
                this.toastArray.splice(length - 1, 1);
              }, duration)
            },
          }
        }
      </script>

    </textarea>

    <div class="mt-20 mb-10">
      <button type="button" class="btn btn-dark" @click="showToaster()">
        Click me to toast!
      </button>
    </div>

    </div>

    <div id="position">

    <div class="mt-20 mb-10 text-size-24 font-medium">
      Position
    </div>

    <div class="mb-20 text-size-18">
      Changing the position of the toasts is done by setting the position property to one of the available position variable:
    </div>

    <div class="pl-20 mb-20">
      <ul>
        <li class="mb-10"> top-right </li>
        <li class="mb-10"> top-left </li>
        <li class="mb-10"> bottom-right </li>
        <li class="mb-10"> bottom-Left </li>
        <li class="mb-10"> top-center </li>
        <li class="mb-10"> bottom-center </li>
      </ul>
    </div>

    <textarea name="" id="" cols="30" class="w-full h-full d-block outline-none p-20 resize-none" disabled rows="25">
      <script>

        export default {

          data() {
            return {
              toastPosition: 'top-right', /* use default position */
            }
          },
          methods: {

            /* Function to show toaster */
            showToaster(duration) {

              /* toaster change position */
              this.toastPosition = `top-right`; /* there allow only => top-left, top-right, bottom-left, bottom-right, top-center, bottom-center */

            },
          }
        }
      </script>

    </textarea>

    </div>

    <div id="array-passing">

    <div class="mt-20 mb-10 text-size-24 font-medium">
      Array pass
    </div>

    <div class="mb-20 text-size-18">
      Changing the inner text or icon there have declare inside of data
    </div>

    <div class="pl-20 mb-20">
      <ul>
        <li class="mb-10"> icon -> there allow only => success, warning, error </li>
        <li class="mb-10"> text </li>
        <li class="mb-10"> subText </li>
      </ul>
    </div>

    <textarea name="" id="" cols="30" class="w-full h-full d-block outline-none p-20 resize-none" disabled rows="30">
      <script>

        export default {

          data() {
            return {
              toastArray: [], /* if change toastArray please change also also from template */
            }
          },
          methods: {

            /* Function to show toaster */
            showToaster(duration) {

              this.toastArray.push(
                {
                  type: 'success', /* there allow only => success, warning, error */
                  text: `Add to Cart`,
                  subText: `Add to cart successfully`,
                }
              )

            },
          }
        }
      </script>

    </textarea>

    </div>

    <div id="remove-toaster">

    <div class="mt-20 mb-10 text-size-24 font-medium">
      Remove toaster by own click
    </div>

    <div class="mb-20 text-size-18">
      top right corner icon show which is help you to close toaster
    </div>

    <textarea name="" id="" cols="30" class="w-full h-full d-block outline-none p-20 resize-none" disabled rows="19">
      <script>

        export default {

          methods: {

            /* Function to remove toaster */
            removeToaster(index) {
              this.toastArray.splice(index, 1);
            },

          }
        }
      </script>

    </textarea>

    </div>

    <div id="set-time-out">

    <div class="mt-20 mb-10 text-size-24 font-medium">
      SetTimeout as use only javascript
    </div>

    <div class="mb-20 text-size-18">
      custom use set time out as vanilla javascript to help none JQuery acitivites
    </div>

    <textarea name="" id="" cols="30" class="w-full h-full d-block outline-none p-20 resize-none" disabled rows="24">
      <script>

        export default {

          methods: {

            /* Function to show toaster */
            showToaster() {

              /* use this basic for remove automatic toaster */
              setTimeout(() => {
                this.toastArray.splice(length - 1, 1);
              }, 1000) /* you use your setTimeout here as own interest */

            },

          }
        }
      </script>

    </textarea>

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

  components: {
    ToasterComponent
  },

  data() {
    return {
      toastPosition: 'top-right',
      toastArray: [],
    }
  },

  mounted() {

  },
  methods: {

    /* Function to remove toaster */
    removeToaster(index) {
      this.toastArray.splice(index, 1);
    },

    showToaster() {
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
      }, 5000)
    },

  }
}

</script>