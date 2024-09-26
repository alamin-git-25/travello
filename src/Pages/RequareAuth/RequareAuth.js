import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase/Firebase.init';
import { Navigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';

const RequareAuth = ({children}) => {
   const [user]= useAuthState(auth);
   const location =useLocation();
   if(!user){
    toast.warning('Please Login Frist !');
   }
   if(!user){
    return <Navigate to='/login' state={{from:location}} replace></Navigate>
   }
   else{
      <Navigate to='/destination' state={{from:location}} replace></Navigate>
   }
   return children;
};

export default RequareAuth;