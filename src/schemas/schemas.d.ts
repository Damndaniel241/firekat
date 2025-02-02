export type Generalschema = [
  {
    name: string;
    description: string;
    faculty: number;
    id: number;
    topics_count:number;
  }
];

export type GeneralTopicSchema = [
  {
    id: number;
    title: string;
    slug: string;
    subject: null;
    comment_count: number;
    author: {
      email: string;
      id: number;
      username: string;
    };
    faculty: number;
    content: string;
    posted_at: string;
  }
];

export type TopicSchema = {
  id: number;
  title: string;
  slug: string;
  subject: number|null;
  comment_count: number;
  like_count:number;
  author: {
    email: string;
    id: number;
    username: string;
  };
  faculty: number|null;
  content: string|null;
  posted_at: string;
  image_1:string|null;
  image_2:string|null;
  image_3:string|null;
  image_4:string|null;
};

export type allTopicsSchema = [
  {
    id: number;
    title: string;
    slug: string;
    subject: number | null;
    comment_count: number;
    author: {
      email: string;
      id: number;
      username: string;
    };
    faculty: number;
    content: string;
    posted_at: string;
  }
];

export type ScienceSchema = [
  {
    name: string;
    description: string;
    faculty: number;
    id: number;
    topics_count:number;
  }
];

export type EntertainmentSchema = [
  {
    name: string;
    description: string;
    faculty: number;
    id: number;
    topics_count:number;
  }
];

export type userSchema = {
  id: number;
  username: string;
  email: string;
};

export type TopicscommentSchema = 
  {
    id: number;
    content: string;
    user: {
      id: number;
      username: string;
      email: string;
    };
    comment_like_status: boolean |null;
    comment_like_count:number;

    topic: TopicSchema;
    posted_at: string;
    quoted_comment: {
      content: string;
      id: number;
      posted_at: string;
      quoted_comment: number|null;
      quoted_topic: number|null;
      topic: TopicSchema;
      user: {
        id: number;
        username: string;
        email: string;
      };
    } | null;
    quoted_topic: string | null;
  }[];


export type CommentSchema = {
  content:string,
  id:number,
  posted_at:string,
  quoted_comment:number|null,
  quoted_topic:number|null,
  topic:number,
  user:
  {
  email:string,
  id:number,
  username:string
}
}


export type LikeStatusSchema = {
  status:string,
  like_status:Boolean
}|null