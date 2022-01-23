import axios from "axios";

export const GET_POSTS = "GET_POSTS";
export const ADD_POSTS = "ADD_POSTS";
export const EDIT_POSTS = "EDIT_POSTS";
export const DELETE_POSTS = "DELETE_POSTS";

export const getPosts =()=>{
    return(dispatch)=>{
        return  axios
                .get("http://localhost:3003/posts")
                .then(res => {
                    dispatch({
                        type:"GET_POSTS",
                        payload: res.data })
                })
                .catch(err=>console.log(err))
    }
}

export const addPosts=(data)=>{
    return(dispatch)=>{
        return axios
                 .post("http://localhost:3003/posts",
                 data)
                .then(res=> {
                    dispatch({
                        type:"ADD_POSTS",
                        payload: data
                    })
                })  
                .catch(err=>console.log(err))  
    }
}

export const editPosts=(editData,id)=>{
    return(dispatch)=>{
        return axios    
                .put("http://localhost:3003/posts/"+id,editData)
                .then(res=>{
                    dispatch({type:"EDIT_POSTS", payload:{...editData}})
                })
                .catch(err=>console.log(err))
    }
}

export const deletePosts=(id)=>{
    return(dispatch)=>{
        return axios
                .delete("http://localhost:3003/posts/"+id)
                .then(()=>{
                    dispatch({type:"DELETE_POSTS", payload: id})
                })
                .catch(err=>console.log(err))
    }
}