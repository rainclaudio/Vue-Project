import agent from "@/api/agent";

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
      const params = {
        query: "coding", 
      };

      agent.Articles.get_by_date(params)
        .then((articleResponse) => {
          console.log(articleResponse)
          commit("setArticles", articleResponse.hits); 
        })
        .catch((error) => {
          console.error("Error fetching articles:", error);
        });
    },
  },
  getters: {
    getArticles: (state) => {
      return state.articles;
    },
  },
};
