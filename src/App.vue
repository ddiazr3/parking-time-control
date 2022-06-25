<template>
  <v-fade-transition mode="out-in">
    <v-app>
      <v-container fluid>
        <v-main>
          <Header></Header>
          <Nav></Nav>
          <Content></Content>
        </v-main>
      </v-container>
    </v-app>
  </v-fade-transition>
</template>

<script>

import Header from '@/components/Layout/Header'
import Nav from '@/components/Layout/Nav'
import Content from '@/components/Layout/Content'

export default {
  name: 'App',
  components: {
    Content,
    Nav,
    Header
  },
  data: () => ({
    //
  })
}
</script>
