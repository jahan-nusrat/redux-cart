const FormValidation = (user)=>{
    let error={}

    //Username Validation
    const nameRegex = /^[A-Za-z]+$/;
    if(!user.name.trim()){
        error.name="Username Required"
    } else if(!nameRegex.test(user.name)){
        error.name="Please input alphabet characters only"
    }

    //Email Validation
    const emailRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if(!user.email){
        error.email="Email Required"
    } else if(!emailRegex.test(user.email)){
        error.email="You have entered an invalid email address!"
    }

    //Number Validation
    const numberRegex =/^(?:(?:\+|0{0,2})91(\s*[\ -]\s*)?|[0]?)?[789]\d{9}|(\d[ -]?){10}\d$/;
    if(!user.number){
        error.number= "Phone Number Required"
    } else if(!numberRegex.test(user.number)){
        error.number="Enter a valid number"
    }

    //Password Validation
    const passwordRegex =/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
    if(!user.password){
        error.password= "Password Required"
    } else if(!passwordRegex.test(user.password)){
        error.password="password need to be between 7 to 15 characters which contain at least one numeric digit and a special character"
    }

    return error;
}

export default FormValidation;