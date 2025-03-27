'use client'

import { auth } from '@/configs/firebaseConfig'
import { onAuthStateChanged } from 'firebase/auth'
import {ThemeProvider as NextThemesProvider} from 'next-themes'
import React, {useEffect, useState, useContext} from 'react'
import { AuthContext } from './_context/AuthContext';
import {  useMutation } from "convex/react";
import { api } from '@/convex/_generated/api'

function Provider({children}) {

const [user,setUser] = useState();
const CreateUser=useMutation(api.users.CreateNewUser)

    useEffect(()=>{
      const unsubscribe = onAuthStateChanged(auth, async(user) => {
        console.log(user);
        setUser(user);
        if(user){
          const result=await CreateUser({
            name:user?.displayName,
            email:user?.email,
            pictureURL:user?.photoURL
          });
  
          console.log(result);
        }
        
      })
        return () => unsubscribe();
  
    },[CreateUser])


  return (
    <>
    <AuthContext.Provider value={{user}}>
      <NextThemesProvider
    attribute="class"
    defaultTheme='dark'
    enableSystem
    disableTransitionOnChange
    >
    {children}
      </NextThemesProvider>
    </AuthContext.Provider>
    </>
  )
}
export const useAuthContext=()=> {
  const context = useContext(AuthContext);
  return context;
}

export default Provider