import agent from "@/api/agent";
export default {
  namespaced: true,
  state: () => ({
    allArticles: [],
    articles: [],
    includeArticlesWithoutUrl: null,
    status: "idle",
  }),
  mutations: {
    setArticles(state, articles) {
      state.allArticles = articles;
      this.commit("articleStore/filterAndSortArticles");
      state.status = "success";
    },
    setFetchStatus(state, status) {
      state.status = status; // Mutation to update the fetch status
    },
    toggleIncludeArticlesWithoutUrl(state, value) {
      state.includeArticlesWithoutUrl = value;
      this.commit("articleStore/filterAndSortArticles");
    },
    filterAndSortArticles(state) {
      state.articles = state.allArticles
        .filter(
          (article) => state.includeArticlesWithoutUrl || article.story_url
        ) // Filter based on the flag
        .sort((a, b) => new Date(b.created_at) - new Date(a.created_at)); // Then sort
    },
  },
  actions: {
    fetchArticles({ commit }) {
      commit("setFetchStatus", "loading"); // Set status to loading before the request

      const params = {
        query: "coding",
      };

      agent.Articles.get_by_date(params)
        .then((articleResponse) => {
          commit("setArticles", articleResponse.hits);
        })
        .catch((error) => {
          console.log(error)
          commit("setFetchStatus", 'error');
        });
    },
  },
  getters: {
    getArticles: (state) => state.articles,
  },
};