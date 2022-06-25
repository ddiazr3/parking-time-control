<template>
  <v-app-bar
    id="default-app-bar"
    app
    absolute
    class="v-bar--underline"
    color="transparent"
    :clipped-left="$vuetify.rtl"
    :clipped-right="!$vuetify.rtl"
    height="50"
    style="left:0px !important"
    flat
  >
    <v-app-bar-nav-icon
      class="hidden-md-and-up"
      @click="drawerMinimizados"
    />

    <drawer-toggle class="hidden-sm-and-down"/>

    <v-toolbar-title
      class="font-weight-light text-h5"
      v-text="''"
    />

    <v-spacer/>

    <account/>
  </v-app-bar>
</template>

<script>
import { mapMutations } from 'vuex'
import DrawerToggle from './widgets/DrawerToggle'
import Account from './widgets/Account'

export default {
  components: {
    DrawerToggle,
    Account
  },

  computed: {},
  methods: {
    ...mapMutations('layout', ['drawerMinimizados'])
  }
}
</script>
