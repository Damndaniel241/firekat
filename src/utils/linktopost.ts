
import { useRouter } from "vue-router";
import { Router } from "vue-router";

export function goToNewPost(router:Router,facultyId:number|null,subjectId:number|null){
    
// const router = useRouter();
    router.push({ 
      // path: '/-/makecomment', 
      name:'PostTopic',
      query:{faculty:facultyId,subject:subjectId},
    
    });
  }