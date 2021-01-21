import ApiCall from "../_utils/apiCall";

const state = {
  books: [],
};

const getters = {
  books: (state) => {
    return state.books;
  },
};

const mutations = {
  SET_BOOKS(state, payload) {
    state.books = payload;
  },
};

const actions = {
  async loadBooks({ commit }, payload) {
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
          commit("SET_BOOKS", res.data);
        })
        .catch((err) => {
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
