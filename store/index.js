export const state = () => ({
    theme: 'system'
})
export const getters = {
    theme(state) {
        return state.theme
    }
}
export const mutations = {
    changeTheme(state, payload) {
        state.theme = payload.theme
    }
}