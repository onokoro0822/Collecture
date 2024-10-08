import React from "react";
import { GoogleAuthProvider,signInWithRedirect } from "firebase/auth/web-extension"
import {auth} from "../common/firebases";

const GoogleLoginButton: React.FC = () => {
    const handleGoogleSignIn = async () => {
        const provider = new GoogleAuthProvider();
        try {
            await signInWithRedirect(auth, provider);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <button onClick={handleGoogleSignIn}>Googleでログイン</button>
    );
}


export default GoogleLoginButton;