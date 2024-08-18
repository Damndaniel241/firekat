// declare module '@/Fakedb' {
    interface Content {
      title: string;
      description: string;
      images: string;
      id: string;
    }

    interface Section{
      title:string;
      description:string;
      no:string;
    }
  
    export const contents: Content[];
    export const sections: Section[];
    export type {Content};
//   }
