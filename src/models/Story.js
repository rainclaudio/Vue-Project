export class Story {
  constructor(story_id,title, url, numComments, points) {
      this.story_id = story_id;
      this.title = title;
      this.url = url;
      this.numComments = numComments;
      this.points = points;
      this.comments = [];
  }

  addComment(comment) {
    this.comments.push(comment);

    this.numComments = 
      this.numComments ? this.numComments + 1 : 1;
   
    
  }

  update(data) {
    // Implement logic to update missing properties
    this.title = data.story_title || this.title;
    this.url = data.story_url || this.url;
    // Add other properties that might need updating...
  }
}