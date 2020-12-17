export default {
  data() {
    return {
      timer: null,
      time: 60,
    }
  },
  methods: {
    timeout(defaultTime = 60) {
      return new Promise(resolve => {
        this.time = defaultTime
        this.timer = setInterval(() => {
          if (this.time === 1) {
            clearInterval(this.timer)
            resolve()
          } else {
            this.time--
          }
        }, 1000)
      })
    },
  },
  beforeDestroy() {
    clearInterval(this.timer)
  },
}
