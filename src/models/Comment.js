export class Comment {
  constructor(objectID, author, comment_text, created_at,story_id) {
      this.comment_id = objectID
      this.author = author; 
      this.comment_text = comment_text;
      this.created_at = created_at;  // ISO 8601 format
      this.story_id = story_id;  // ISO 8601 format
  }
}