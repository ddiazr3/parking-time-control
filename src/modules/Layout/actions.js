export async function fetch ({ commit }) {
  const local = localStorage.getItem('vuetify@user') || '{}'
  const user = JSON.parse(local)

  for (const key in user) {
    commit(key, user[key])
  }

  if (user.dark === undefined) {
    commit('dark', window.matchMedia('(prefers-color-scheme: dark)'))
  }
}
