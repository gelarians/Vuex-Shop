<template>
  <div style="height: 50vh">
      <div class="comtainer h-100 mt-5">
          <div class="row align-items-center h-100">
              <div class="col-5 mx-auto">
                  <div class="jumbotron text-center">
                      <h3>Willkommen in unserem Shop</h3>
                      <hr>
                      <p class="lead">
                          um sich unser sortiment anschauen zu können, müssen sie sich zunächst einloggen
                      </p>
                      <button
                        class="btn bg-vue px-5 mt-2"
                        @click="signin"
                        v-if="!loading"
                      >
                      <i class="fas fa-key mr-2"></i>Login
                      </button>
                                            <button
                        class="btn bg-vue px-5 mt-2"
                        v-if="loading"
                      >
                      <span class="spinner-border spinner-border-sm mr-3"></span>
                      <span>Bitte warten</span>
                      </button>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import { mapGetters} from "vuex";

export default {
    name: "Signin",
    computed: {
        ...mapGetters([
            "loading"
        ]),
    },
    methods: {
        signin(){
            this.$store.dispatch('signin')
                .then(() =>{
                    this.$router.push("/")
                })
        }
    }

}
</script>

<style scoped>

</style>