
import React from 'react';
import { Navigate } from 'react-router-dom';
import { UseAuthContext } from '../Firebase/firebaseContext';
import * as router from '../constants/routes';

export const PrivateRouter = ({children}) => {
    const {userCurrent} = UseAuthContext();
    if(!userCurrent){
        return <Navigate to={router.LANGDING} ></Navigate>
    }
  return children;
}
