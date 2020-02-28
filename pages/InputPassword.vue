<template>
  <div class="container mx-auto px-4 py-5">
    <p class="mb-3">
      Input the password
    </p>
    <input ref="passwordInput" class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block appearance-none leading-normal mb-3" type="text">
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click="logIn()">
      Log in
    </button>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'PasswordInput',
  computed: {
    ...mapState(['caseStudyPassword'])
  },
  mounted () {
    console.log(this.$router)
  },
  methods: {
    validatePassword: (string) => {
      return string === process.env.caseStudyPassword
    },
    addCookie: () => {
      window.localStorage.setItem('cfPasswordProvided', process.env.caseStudyPassword)
    },
    logIn () {
      if (!this.validatePassword(this.$refs.passwordInput.value)) {
        return alert('Password input was incorrect')
      }
      this.addCookie()
      return this.$router.go(-1)
    }
  }
}
</script>
