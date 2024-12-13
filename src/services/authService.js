import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";
import baseUrl from "../api/instance";


export const login= createAsyncThunk("auth/login",async (user)=>{
    const response= await baseUrl.post("auth/login",user);
   
    Cookies.set("token",JSON.stringify(response.data.accessToken));
    return response.data;
  })

  export const regiter= createAsyncThunk("auth/register",async (user)=>{
    const response= await baseUrl.post("auth/register",user);
    return response.data;
  })
