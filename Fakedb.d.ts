declare module '@/Fakedb' {
    interface Content {
      title: string;
      description: string;
      images: string;
      id: number;
    }
  
    export const contents: Content[];
  }
  