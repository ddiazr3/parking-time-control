// Pathify
import { make } from 'vuex-pathify'

// Data
const state = {
  drawer: null,
  drawerImage: true,
  mini: false,
  items: [
    {
      title: 'Dashboard',
      icon: 'mdi-view-dashboard',
      to: '/',
    },
    {
      title: 'Ingreso Vehiculo',
      icon: 'mdi-car-back',
      to: '/',
    },
    {
      title: 'Reportes',
      icon: 'mdi-chart-bar',
      items: [
        {
          title: 'Vehiculos Activos',
          icon: 'mdi-car-back',
          to: '/configuracion/empresas',
        },
        {
          title: 'Tiempo',
          icon: 'mdi-clipboard-text-clock',
          to: '/configuracion/roles',
        },
      ],
    },
    {
      title: 'Configuración',
      icon: 'mdi-cog-outline',
      items: [
        {
          title: 'Empresas',
          icon: 'mdi-align-vertical-bottom',
          to: '/configuracion/empresas',
        },
        {
          title: 'Roles',
          icon: 'mdi-key',
          to: '/configuracion/roles',
        },
        {
          title: 'Usuarios',
          icon: 'mdi-account',
          to: '/configuracion/usuarios',
        },
      ],
    },
  ],
}

const mutations = make.mutations(state)

const actions = {
  ...make.actions(state),
  init: async ({ dispatch }) => {
    //
  },
}

const getters = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}
