import React,{ useState } from "react";

export function useLogin() {
    const [login,setLogin] = useState(false)
    return [login,setLogin];
}