import ApiCall from "../_utils/apiCall";

const state = {
  books: [],
  isLoading: false,
};

const getters = {
  books: (state) => {
    return state.books.items;
  },
  isLoading: (state) => {
    return state.isLoading;
  },
};

const mutations = {
  SET_BOOKS(state, payload) {
    state.books = payload;
  },
  SET_LOADING(state, payload) {
    state.isLoading = payload;
  },
};

const actions = {
  async loadBooks({ commit }, payload) {
    commit("SET_LOADING", true);
    let url = `${payload.url}?`;

    let no = 0;
    for (const property in payload.options) {
      no++;
      url += `${property}=${payload.options[property]}`;
      if (no < Object.keys(payload.options).length) url += "&";
    }
    return new Promise((resolve, reject) => {
      ApiCall.get(url)
        .then((res) => {
          resolve(res);
          commit("SET_LOADING", false);
          commit("SET_BOOKS", res.data);
        })
        .catch((err) => {
          commit("SET_LOADING", false);

          reject(err);
        });
    });
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
