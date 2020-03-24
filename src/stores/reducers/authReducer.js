const initialState={
authError:null
}
const authReducer=(state=initialState,action)=>{
    switch(action.type){
        case "LOGIN_FAILED":
            console.log("login error");
            return{
                ...state,
                authError:'LogIn Failed'
            }
            case "LOGIN_SUCCESSFUL":
            console.log("login SUCCESSFUL");
            return{
                ...state,
                authError:null
            }
            case "LOGOUT_SUCCESSFUL":
            console.log("logOUT SUCCESSFUL");
            return state;
            case "SIGNUP_SUCCESSFUL":
                console.log("Sign SUCCESSFUL");
                return{
                    ...state,
                    authError:null
                }
            case "SIGNUP_ERROR":
                    console.log("SignUp Error");
                    return{
                        ...state,
                        authError:action.error.message
                    }
            default:
                return state;
            
    }
}
export default authReducer;