import React, { useState , useEffect } from 'react';
import { FcGoogle } from "react-icons/fc";
import {CiFacebook} from 'react-icons/ci';
import {
    GoogleAuthProvider,
    signInWithPopup,
    signInWithRedirect,
} from "firebase/auth";
import './singup.css';
import { auth } from '../Firebase/firebase';
import { UseAuthContext } from '../Firebase/firebaseContext';
import {useNavigate} from 'react-router-dom';

const SingUp = () => {

    const { googleSingIn, userCurrent } = UseAuthContext();
    const navigate = useNavigate();
    
    const handleSingInGoole = async () => {
        try {
          await  googleSingIn();
        } catch(error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if(userCurrent !== null){
            navigate('/');
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[userCurrent]);

    return (
        <div className="container">
            <div className="inner-singup">
                <h1 className="title">Đăng ký</h1>
                <div className="group-medium">
                    <button onClick={(e) => handleSingInGoole(e)}>
                        <FcGoogle /> Google
                    </button>
                </div>
                <div className="group-medium">
                    <button>
                        <CiFacebook /> Faccebook
                    </button>
                </div>
            </div>
        </div>
    );
}

export default SingUp


//  const [email,SetValueEmail] = useState("");
//   const [password, SetValuePassword] = useState("");
//    const [passwordConfirm, SetValuePasswordConfirm] = useState("");
//    const [error, SetError] = useState(false);


//   const validatePassword = () => {
//      let isValid = true;
//      if(password !== '' && passwordConfirm !== ''){
//         if(password !== passwordConfirm){
//              isValid = false;
//              SetError("your password not comfirm");
//         }
//      }
//      SetError(false);
//      return isValid;
//   }

//   let handleClickSubmit = e => {
//     e.preventDefault();
//     let verify = validatePassword();

//     if(verify) {
//     createUserWithEmailAndPassword(auth, email, password)
//     .then((cred) => {
//         console.log("user created:", cred.user);
//     })
//     .catch((e) => {
//         console.log(e.message);
//     });

//     }
//   }
//   return (
//       <div>
//           <form
//               type="submit"
//               onClick={(e) => handleClickSubmit(e)}
//           >
//               <input
//                   name="email"
//                   onChange={(e) => SetValueEmail(e.target.value)}
//                   value={email}
//                   placeholder="your email"
//               ></input>
//               <input
//                   name="password"
//                   value={password}
//                   onChange={(e) => SetValuePassword(e.target.value)}
//                   placeholder="your password"
//               ></input>
//               <input
//                   name="password confirm"
//                   value={passwordConfirm}
//                   onChange={(e) => SetValuePasswordConfirm(e.target.value)}
//                   placeholder="your password confirm"
//               ></input>
//               <button>submit</button>
//               {error && <p>your password not comfirm</p>}
//           </form>
//       </div>