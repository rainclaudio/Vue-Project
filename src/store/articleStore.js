import agent from "@/api/agent";
// import {Story} from '@/models/Story';
// import { Comment } from "@/models/Comment";
export default {
  namespaced: true,
  state: () => ({
    allArticles: [], 
    articles: [],
    includeArticlesWithoutUrl: null,
  }),
  mutations: {
    setArticles(state, articles) {
      state.allArticles = articles;
      this.commit('articleStore/filterAndSortArticles');
    },
    toggleIncludeArticlesWithoutUrl(state, value) {
      state.includeArticlesWithoutUrl = value;
      this.commit('articleStore/filterAndSortArticles');
    },
    filterAndSortArticles(state) {
      state.articles = state.allArticles
        .filter(article => state.includeArticlesWithoutUrl || article.story_url) // Filter based on the flag
        .sort((a, b) => new Date(b.created_at) - new Date(a.created_at)); // Then sort
    },
  },
  actions: {
    fetchArticles({ commit }) {
      const params = {
        query: "coding", 
      };

      agent.Articles.get_by_date(params)
        .then((articleResponse) => {
          commit("setArticles", articleResponse.hits); 
        })
        .catch((error) => {
          console.error("Error fetching articles:", error);
        });
    },
  },
  getters: {
    getArticles: (state) => state.articles,
  },
};