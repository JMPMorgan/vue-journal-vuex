<template>
  <div v-if="entry" class="entry-title d-flex justify-content-between p-2">
    <div>
      <span class="text-success fs fw-bold">{{ day }}</span>
      <span class="mx-1 fs-3">{{ month }}</span>
      <span class="mx-2 fs-4 fw-light">{{ year }}</span>
    </div>
    <div>
      <button
        v-if="entry.id"
        class="btn btn-danger mx-2"
        @click="onDeleteEntry"
      >
        Borrar
        <i class="fa fa-trash-alt"></i>
      </button>
      <button class="btn btn-primary">
        Subir Foto
        <i class="fa fa-upload"></i>
      </button>
    </div>
  </div>
  <hr />
  <div class="d-flex flex-column px-3 h-75">
    <textarea placeholder="Que sucedio hoy?" v-model="entry.text"></textarea>
  </div>
  <Fab icon="fa-save" @on:click="saveEntry" />
  <img
    src="https://uploads1.wikiart.org/00321/images/emile-friant/emile-friant-les-amoureux-mus-e-des-beaux-arts-de-nancy.jpg!Large.jpg"
    alt="entry-picture"
    class="img-thumbnail"
  />
</template>

<script>

import { defineAsyncComponent } from 'vue'
import { mapGetters, mapActions } from 'vuex'
import getMonthDayYear from '../helpers/getDayMonthYear'

export default {
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      entry: null
    }
  },
  components: {
    Fab: defineAsyncComponent(() => import('../components/Fab.vue'))
  },
  methods: {
    ...mapActions('journal', ['updateEntries', 'createEntries', 'deleteEntry']),
    loadEntry() {
      let obj;
      if (this.id === 'new') {
        obj = {
          text: '',
          date: new Date().getTime()
        }
      } else {
        obj = this.getEntriesByID(this.id);
        if (!obj) return this.$router.push({ name: 'no-entry' })
      }
      this.entry = obj
    },
    async saveEntry() {
      if (this.entry.id) {
        await this.updateEntries(this.entry);
      } else {
        const id = await this.createEntries(this.entry);
        this.$router.push({ name: 'entry', params: { id } })
        //this.props.id = id
      }
    },
    async onDeleteEntry() {
      await this.deleteEntry(this.entry.id)
      this.$router.push({ name: 'no-entry' })
    }
  },
  computed: {
    ...mapGetters('journal', ['getEntriesByID']),
    day() {
      const { day } = getMonthDayYear(this.entry.date)
      return day
    },
    month() {
      const { month } = getMonthDayYear(this.entry.date)
      return month
    },
    year() {
      const { yearDay } = getMonthDayYear(this.entry.date)
      return yearDay
    }
  },
  created() {
    this.loadEntry()
  },
  watch: {
    id() {
      this.loadEntry()
    }
  }
}

</script>

<style lang="scss" scoped>
textarea {
  font-size: 20px;
  border: none;
  height: 100%;
  resize: none;

  &:focus {
    outline: none;
  }
}
img {
  width: 200px;
  position: fixed;
  bottom: 150px;
  right: 20px;
  box-shadow: 0px 5px 10px rgba($color: #000000, $alpha: 0.2);
}
</style>