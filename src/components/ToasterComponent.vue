<template>
  <div>

    <div class="transform-effect">
      <div class="toaster mb-10 d-flex justify-start items-center relative">
        <div class="absolute top-right">
          <button type="button" class="btn-icon" @click="emitRemoveToaster()">
            <img :src="`/svg/close.svg`" class="width-20 height-20" alt="close">
          </button>
        </div>
        <div class="width-30 height-30 border-radius-circle d-flex justify-center items-center" :class="{ 'bg-success shadow-success' : type === 'success', 'bg-warning shadow-warning' : type === 'warning', 'bg-danger shadow-danger' : type === 'error' }">
          <img :src="`/svg/success.svg`" class="width-18 height-18" alt="success" v-if="type === 'success'">
          <img :src="`/svg/warning.svg`" class="width-18 height-18" alt="warning" v-if="type === 'warning'">
          <img :src="`/svg/error.svg`" class="width-18 height-18" alt="error" v-if="type === 'error'">
        </div>
        <div class="ml-20">
          <div class="mb-5 head" :class="{ 'text-success' : type === 'success', 'text-warning' : type === 'warning', 'text-danger' : type === 'error' }">
            {{ text }}
          </div>
          <div class="paragraph">
            {{ subText }}
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>

export default {

  name: 'ToasterComponent',

  props: [ `type`, `text`, `subText` ],

  data(){ return { } },

  mounted() { },

  methods: {

    /* Function remove toaster */
    emitRemoveToaster() {
      this.$emit('removeToaster');
    },

  }

}

</script>