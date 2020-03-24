export const forSignIn=(Credentials)=>{
    return(dispatch,getState,{getFirebase})=>{
        const firebase=getFirebase();
        firebase.auth().signInWithEmailAndPassword(
            Credentials.email,
            Credentials.password
        ).then(
            dispatch({type:'LOGIN_SUCCESSFUL'})
        ).catch((error)=>{
            dispatch({type:'LOGIN_FAILED'})
        }
        )
    }
}

export const forlogOut=()=>{
    return(dispatch,getState,{getFirebase})=>{
        const firebase=getFirebase();
        firebase.auth().signOut()
        .then(
            dispatch({type:'LOGOUT_SUCCESSFUL'}))
    }
}

export const forSignUp=(newUser)=>{
    return(dispatch,getState,{getFirebase,getFirestore})=>{
        const firebase=getFirebase();
        const firestore=getFirestore();

        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then((responce)=>{
            return firestore.collection('users').doc(responce.user.uid).set({
                firstName:newUser.firstName,
                lastName:newUser.lastName,
                initials:newUser.firstName[0]+newUser.lastName[0]
            })
        }).then(()=>{
            dispatch({type:'SIGNUP_SUCCESSFUL'})
        }).catch((error)=>{
            dispatch({
                type:'SIGNUP_ERROR',error
            })
        })
    }
}