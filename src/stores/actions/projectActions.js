export const createProject = (project) =>{
    return(dispath,getstate,{getFirebase,getFirestore})=>{
        const firestore=getFirestore();
        const profile=getstate().firebaseAuth.profile;
        const authorId=getstate().firebaseAuth.auth.uid;
        firestore.collection('Projects').add({
            ...project,
            authorFirstName:profile.firstName,
            authorLastName:profile.lastName,
            authorId:authorId,
            createdAt:new Date()
        }).then(()=>{
            dispath({ type:'CREATE_PROJECT',project})
        }).catch((error)=>{
            dispath('CREATE_PROJECT_ERROR',error);
        })     
    };
}