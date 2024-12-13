import { defineStore } from '#q-app/wrappers'
import { createPinia } from 'pinia'
import { createPersistedState } from 'pinia-plugin-persistedstate'

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default defineStore((/* { ssrContext } */) => {
  const pinia = createPinia()
  const persistedState = createPersistedState()

  pinia.use(persistedState)

  return pinia
})