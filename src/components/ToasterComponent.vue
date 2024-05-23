<template>
  <div>
    <div :class="`fixed` + ` ` + positionTop + ` ` + positionBottom + ` ` + positionLeft + ` ` + positionRight + ` ` + `p-10`" id="toaster" v-if="Status">
      <div>
        <div class="transform-effect">
          <div class="toaster mb-10 d-flex justify-start items-center">
            <div
                :class="iconBackground + ' ' + ' ' + shadowType + ' ' + `width-30 height-30 border-radius-circle d-flex justify-center items-center`">
              <img :src="icon" class="width-18 height-18" alt="error">
            </div>
            <div class="ml-20">
              <div :class=" textColor + `` + `mb-5 head`">
                {{ text }}
              </div>
              <div class="paragraph">
                {{ subText }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ToasterComponent',
  props: [
    'btnBackgroundColor',
    'type',
    'iconBackground',
    'shadowType',
    'icon',
    'textColor',
    'positionTop',
    'positionBottom',
    'positionLeft',
    'positionRight',
    'text',
    'subText',
    'Status'
  ],
  data() {
    return {}
  },
  mounted() {
  },
  methods: {
    toaster() {

    }
  },
}
</script>