export default {
  namespaced: true,
  state: () => ({
    articles: [],
  }),
  mutations: {
    setArticles(state, articles) {
      state.articles = articles;
    },
  },
  actions: {
    fetchArticles({ commit }) {
      // Here, you would fetch your articles from an API
      // For demonstration, we'll use dummy data
      const articles = [
        {
          id: 1,
          title: "Vue.js is awesome!",
          content: "Here is why Vue.js is awesome...",
        },
        // More articles
      ];
      commit("setArticles", articles);
    },
  },
  getters: {
    getArticleById: (state) => (id) => {
      return state.articles.find((article) => article.id === id);
    },
    getArticles: (state) => {
      return state.articles; // Returns all articles
    },
  },
};
