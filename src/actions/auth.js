import firebase, {googleProvider} from '../firebase/firebase';



export const login = (uid) => ({
    type: 'LOGIN',
    uid
})


export const startLogin = () => {
    return (dispatch) =>
     {  
        return firebase.auth().signInWithPopup(googleProvider);
        
    }
}

export const startLogout = () => {
    return (dispatch) => {
        return firebase.auth().signOut();

    }
}

export const logout = (uid) => ({
    type: 'LOGOUT'
})