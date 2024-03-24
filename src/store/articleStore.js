import agent from "@/api/agent";
// import {Story} from '@/models/Story';
// import { Comment } from "@/models/Comment";
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


// function processArticles(articles) {
//   const storiesMap = new Map();

//   articles.forEach(article => {

//     if (article._tags && article._tags.includes('comment')) {
      
     
//       const comment = new Comment(
//           article.objectID,
//           article.author,
//           article.comment_text,
//           article.created_at,
//           article.story_id
//         );

     
//       if (storiesMap.has(comment.story_id)) {
//         storiesMap.get(comment.story_id).addComment(comment);
//       } else {
        
  
//         const story = new Story(
//           article.story_id,
//           article.story_title ?? article.title,
//           article.story_url,
//         );
//         story.addComment(comment);
//         storiesMap.set(comment.story_id, story);

//       }
//     } else if (article._tags && article._tags.includes('story')) {
//       const story = new Story(article);
//       if (storiesMap.has(story.story_id)) {
//         storiesMap.get(story.story_id).update(article);
//       } else {
//         storiesMap.set(story.story_id, story);
//       }
//     }
//   });

//   return Array.from(storiesMap.values());
// }