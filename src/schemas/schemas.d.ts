export type Generalschema = [
  {
    name: string;
    description: string;
    faculty: number;
    id: number;
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
};

export type allTopicsSchema = [{
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
}];


export type ScienceSchema = [
  {
    name: string;
    description: string;
    faculty: number;
    id: number;
  }
];

export type EntertainmentSchema = [
  {
    name: string;
    description: string;
    faculty: number;
    id: number;
  }
];

export type userSchema = {
  id: number;
  username: string;
  email: string;
};

export type TopicscommentSchema = [
  {
    id: number;
    content: string;
    user: {
      id: number;
      username: string;
      email: string;
    };
    topic: number;
    posted_at:string;
    quoted_comment: string | null;
    quoted_topic: string | null;
  }
];
