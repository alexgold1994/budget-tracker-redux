import firebase, {googleProvider} from '../firebase/firebase';
import { toast } from 'react-toastify';



export const login = (uid) => ({
    type: 'LOGIN',
    uid
});


export const startLogin = () => {
    return () =>
     {  
        return firebase.auth().signInWithPopup(googleProvider).catch((error)=>{
            toast(error.message);
        });
    };
};

export const startLogout = () => {
    return () => {
        return firebase.auth().signOut();

    };
};

export const logout = () => ({
    type: 'LOGOUT'
});