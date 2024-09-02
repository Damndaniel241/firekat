export type Generalschema = [{
    name:string,
    description: string,
    faculty:number,
    id:number
  
  }]

export type GeneralTopicSchema = [{
  id:number,
  title:string,
  slug:string,
  subject:null,
  author:{
    email:string,
    id:number,
    username:string,
  },
  faculty:number,
  content:string,
  posted_at:string
}]

export type ScienceSchema = [{
    name:string,
    description: string,
    faculty:number,
    id:number
}]


export type EntertainmentSchema = [{
  name:string,
  description: string,
  faculty:number,
  id:number
}]