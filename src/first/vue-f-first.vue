<template>
    <span>
      vue-first.hello
    </span>
</template>
<script>
export default {
  data() {
    return {
      localStartVal: this.startVal,

      printVal: null,
      paused: false,
      localDuration: this.duration,
      startTime: null,
      timestamp: null,
      remaining: null,
      rAF: null
    };
  },
  computed: {
 
  },
  watch: {

  },
  mounted() {
 
  },
  methods: {

  },
  destroyed() {

  }
};
</script>
