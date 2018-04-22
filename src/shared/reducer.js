export default function reducer(state={
    unloadlistener:false,
    ip:null,
    referrer:null,
    starttime:null,
    endtime:null,
    about:[],
    myworks:[],
    contact:[],
    projects:[],
    links:[]
},action){
    switch(action.type){
        case "ADD_LISTENER":{
            return {
                ...state,
                unloadlistener:true
            }
        }
        case "NEW_VISIT":{
            return {
                ...state,
                ip:action.payload.ip,
                referrer:action.payload.referrer,
                starttime:action.payload.time
            }
        }
        case "VISIT_ENDED":{
            return{
                ...state,
                endtime:action.payload.time
            }
        }
        case "VISIT_MYWORKS":{
            return{
                ...state,
                myworks:[...state.myworks,action.payload]
                
            }
        }
        case "VISIT_ABOUT":{
            return{
                ...state,
                about:[...state.about,action.payload]
                
            }
        }
        case "VISIT_CONTACT":{
            return{
                ...state,
                contact:[...state.contact,action.payload]
                
            }
        }
        case "VIEW_PROJECT":{
            return{
                ...state,
                projects:[...state.projects,action.payload]
                
            }
        }
        case "VIEW_LINK":{
            return{
                ...state,
                links:[...state.links,action.payload]
            }
        }
    }
    return state;
}