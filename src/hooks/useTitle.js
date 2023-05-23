import { useEffect } from "react"

const useTitle = title =>{
    useEffect(()=>{
         document.title = `Funtopia | ${title}`;
    }, [title])
}

export default useTitle;