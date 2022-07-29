<template>
  <span @click="switchTheme">
    <svg-icon :icon-class="isDark?'sun':'moon'" />
  </span>
</template>

<script>
export default {
  data() {
    return {
      isDark: false
    }
  },
  mounted() {
    const dark = localStorage.getItem('dark-theme')
    this.setTheme(dark === 'true')
  },
  methods: {
    switchTheme() {
      this.isDark = !this.isDark
      this.setTheme(this.isDark)
    },

    setTheme(isDark) {
      if (isDark) {
        document.getElementsByTagName('html')[0].className = 'dark'
      } else {
        document.getElementsByTagName('html')[0].className = ''
      }
      localStorage.setItem('dark-theme', isDark)
    }
  }
}
</script>

<style>

.dark {
  filter: invert(0.9) hue-rotate(180deg);
}

</style>
