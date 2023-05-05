export interface PostTypes {
  type_of: string;
  id: number;
  title: string;
  description: string;
  cover_image: string;
  published: boolean;
  published_at: string;
  tag_list: any[];
  slug: string;
  path: string;
  url: string;
  canonical_url: string;
  comments_count: number;
  positive_reactions_count: number;
  public_reactions_count: number;
  page_views_count: number;
  published_timestamp: string;
  body_markdown: string;
  user: {
    user_id: 0;
    name: string;
    username: string;
    twitter_username: string;
    github_username: string;
    website_url: string;
    profile_image: string;
    profile_image_90: string;
  };
  reading_time_minutes: number;
}
