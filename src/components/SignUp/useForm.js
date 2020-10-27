import {useState} from 'react'
import { useHistory, useLocation } from 'react-router-dom';
import { loginInfo } from '../../redux/actions';
import { useDispatch } from 'react-redux';

const useForm = (validation) => {
    const dispatch=useDispatch()
    const history =useHistory()
    const location=useLocation()
    let { from } = location.state || { from: { pathname: "/" } };
    const [user,setUser]= useState({
        name:'',
        email:'',
        number: '',
        password:''
    })

    const [error,setError]= useState({})
    const handleInputChange=(e)=>{
        setUser({
            ...user,
            [e.target.name]:e.target.value
        })
        dispatch(loginInfo(user))
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        setError(validation(user))
        if(!validation(user).name && !validation(user).email && !validation(user).number && !validation(user).password){
            history.replace(from)
        }
    }

    return {handleSubmit, user, error, handleInputChange}
}

export default useForm
