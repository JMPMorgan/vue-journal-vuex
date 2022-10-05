<template>
  <NavBar />
  <div class="row justify-content-md-center" v-if="!isLoading">
    <div class="col-3 background-info text-center mt-5">
      Espere por favor...
      <h3 class="mt-2">
        <i class="fa fa-spin fa-sync"></i>
      </h3>
    </div>
  </div>
  <div class="d-flex" v-else>
    <div class="col-4">
      <EntryList />
    </div>
    <div class="col">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import { defineAsyncComponent } from '@vue/runtime-core'
import { mapActions, mapState } from 'vuex'

export default {
  components: {
    NavBar: defineAsyncComponent(() => import('../components/NavBar.vue')),
    EntryList: defineAsyncComponent(() => import('../components/EntryList.vue'))
  },
  computed: {
    ...mapState('journal', ['isLoading'])
  },
  methods: {
    ...mapActions('journal', ['loadEntries'])
  },
  created() {
    this.loadEntries()
  }
}
</script>