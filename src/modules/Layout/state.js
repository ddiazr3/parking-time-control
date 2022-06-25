export default {
  namespaced: true,
  inicialOne: 'Parking',
  inicialTwo: 'Time',
  drawerImage: false,
  mini: false,
  dark: true,
  drawer: true,
  drawerApp: {
    image: 0,
    gradient: 0,
    mini: false
  },
  gradients: [
    'rgba(0, 0, 0, .7), rgba(0, 0, 0, .7)',
    'rgba(228, 226, 226, 1), rgba(255, 255, 255, 0.7)',
    'rgba(244, 67, 54, 0.8), rgba(244, 67, 54, 0.8)'
  ],
  rtl: false,
  items: [{
    title: 'Principal',
    icon: 'mdi-view-dashboard',
    to: '/'
  },{
    title: 'About',
    icon: 'mdi-view-dashboard',
    to: '/about'
  },

    // {
    //   title: 'Configuración',
    //   icon: 'mdi-cog-outline',
    //   items: [{
    //     title: 'Empresas',
    //     icon: 'mdi-align-vertical-bottom',
    //     to: '/configuracion/empresas'
    //   },
    //     {
    //       title: 'Roles',
    //       icon: 'mdi-key',
    //       to: '/configuracion/roles'
    //     },
    //     {
    //       title: 'Usuarios',
    //       icon: 'mdi-account',
    //       to: '/configuracion/usuarios'
    //     }
    //   ]
    // }
  ],

  permisovalue: { //para buscar por la ruta el nombre del botton si se muestra
    to: null,
    permiso: null
  }
}
