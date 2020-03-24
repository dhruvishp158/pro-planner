const initialState={
Projects:[
    {id:'1',title:'project title 1',content:'blah blah blah....'},
    {id:'2',title:'project title 2',content:'blah blah blah....'},
    {id:'3',title:'project title 3',content:'blah blah blah....'},
]
}
const projectReducer=(state=initialState,action)=>{
    switch(action.type){
    case 'CREATE_PROJECT':
        console.log('created project',action.project);
        return state;
        case 'CREATE_PROJECT_ERROR':
        console.log('created project error',action.error);
        return state;
        default:
            return state;
        }
}
export default projectReducer;