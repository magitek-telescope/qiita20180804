export const state = () => ({
  isCalled: false
})

export const getters = {
  isCalled: (state) => state.isCalled
}

export const mutations = {
  setIsCalled(state) {
    state.isCalled = true
  }
}

export const actions = {
  nuxtClientInit({ commit }, context) {
    commit('setIsCalled')
  }
}
