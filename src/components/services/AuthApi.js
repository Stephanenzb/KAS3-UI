import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { getItem, addItem, removeItem } from './LocalStorage';


export function hasAuthenticated(){
    const token = getItem("kasApiToken");
    const result = token ? tokenIsValid(token) : false; 
    if (false === result){
        removeItem("kasApiToken")
    }

    return result;
}

export async function login(email, username, password){
    return axios.get ("https://kasapi-dot-kas2-365120.ey.r.appspot.com/check-connexion",
    {
        params:{
            email : email, 
            username : username, 
            password : password
        }
    }).then(response => console.log(response)).then(token =>
        {
            addItem('kasApiToken', token);
            return true;
        });
}    

export function logout() {
    removeItem('kasApiToken');
    }
        
function tokenIsValid(token) {
    const { exp: expiration } = jwtDecode(token);
        
            if (expiration * 1000 > new Date().getTime()) {
                return true;
            }
        
            return false;
        }
        
