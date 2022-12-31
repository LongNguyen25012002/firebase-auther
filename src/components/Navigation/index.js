import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import * as routes from '../constants/routes.js';
import { UseAuthContext } from '../Firebase/firebaseContext.js';
import './navigation.css';

const Navigation = () => {
    const {userCurrent,logOut} = UseAuthContext();
    const handleLogout = async () => {
        await logOut();
    }

    // useEffect(() => {
    //     if(!userCurrent){

    //     }
    // })
    let image = "https://lh3.googleusercontent.com/a/AEdFTp4fthSiziFsVg-29EQ_njlA7k6QUVYNkvlTTuM3=s96-c"
  return (
      <div className="header">
          <ul>
              <li>
                  <Link to={routes.SING_IN}>Sing In</Link>
              </li>
              <li>
                  <Link to={routes.HOME}>Home</Link>
              </li>
              <li>
                  <Link to={routes.ACCOUNT}>Account</Link>
              </li>
              <li>
                  <Link to={routes.ADMIN}>Admin</Link>
              </li>
              <li>
                  <Link to={routes.SING_UP}>Sing up</Link>
              </li>
          </ul>
          {userCurrent ? (
              <div className="right-account-secssion">
                  {/* <img
                      url={userCurrent.photoURL || image}
                      alt={userCurrent.displayName}
                  ></img> */}
                  <p>{userCurrent.displayName}</p>
                  <button onClick={handleLogout}>logout</button>
              </div>
          ) : null}
      </div>
  );
}

export default Navigation

