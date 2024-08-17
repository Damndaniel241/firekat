// declare module '@/Fakedb' {
    interface Content {
      title: string;
      description: string;
      images: string;
      id: string;
    }
  
    export const contents: Content[];
    export type {Content};
//   }
