import {useState, useEffect} from 'react'

const useForm = () => {
    const handleSubmit=(e)=>{
        e.preventDefault();
    }

    const [user,setUser]= useState({
        name:'',
        email:'',
        number: null,
        password:''
    })
    const [error,setError]= useState({})
    const handleInputChange=(e)=>{
        setUser({
            ...user,
            [e.target.name]:e.target.value
        })
    }
    return {handleSubmit, user, handleInputChange}
}

export default useForm
