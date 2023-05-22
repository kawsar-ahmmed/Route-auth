import { useEffect, useState } from "react"
import { GoogleAuthProvider, getAuth, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";


// Firabase 
// Firabase app
import app from "../../firebase.init";
//Firabase Auth and Provider
const auth = getAuth(app);
const provider = new GoogleAuthProvider();


const useFirebase = () => {
    const [user, setUser] = useState({});
    const signWithGoogl = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                const user = result.user;
                setUser(user);
                console.log(user)
            })
    }
    const handleDignOut = () => {
        signOut(auth)
        .then(() => {})
    }


    useEffect(() => {
        onAuthStateChanged(auth, user=> {
            setUser(user)
        })
    }, [])

    return {
        user,
        signWithGoogl,
        handleDignOut
    };
}
export default useFirebase;