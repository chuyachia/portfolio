require('es6-promise').polyfill();
import axios from 'axios';

export function endNav(time){
    return function(dispatch){
        dispatch({
            type:"VISIT_ENDED",
            payload:{
                time:time
            }
        })
    }
}

export function visitPage(page,referrer,time){
    const message = function(page){switch(page){
        case "about":
            return "VISIT_ABOUT";
        case "myworks":
            return "VISIT_MYWORKS";
        case "contact":
            return "VISIT_CONTACT";
        default:
            return "UNKNOW_VISIT";
    }}(page);
    
    return function(dispatch){
        dispatch({
            type:message,
            payload:{
                referrer:referrer,
                time:time
            }
        })
    }
}

export function viewProject(name,time){
    return function(dispatch){
        dispatch({
            type:"VIEW_PROJECT",
            payload:{
                name:name,
                time:time
            }
        })
    }
}

export function viewLink(name,time){
    return function(dispatch){
        dispatch({
            type:"VIEW_LINK",
            payload:{
                name:name,
                time:time
            }
        })
    }
}

export function sendData(obj) {
        obj.endtime = Date.now();
        navigator.sendBeacon("/visit",JSON.stringify(obj))
    }

