import React from 'react';
import useForm from './useForm'

const FormSignUp = () => {
    const {handleSubmit, user, handleInputChange} =useForm()
    
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-6">
                    <form className="form row" onSubmit={handleSubmit}>
                        <h4>Create a new account</h4>
                        <div className="form-group col-md-10">
                            <label htmlFor="name">Name</label>
							<input
								type="text"
								className="form-control"
                                name="name"
                                value={user.name}
                                onChange={handleInputChange}
								placeholder="Enter Your Name"
								required
							/>
                        </div>
                        <div className="form-group col-md-10">
                            <label htmlFor="Email">Email</label>
							<input
								type="email"
								className="form-control"
                                name="email"
                                value={user.email}
                                onChange={handleInputChange}
								placeholder="Email"
								required
							/>
                        </div>
                        <div className="form-group col-md-10">
                            <label htmlFor="Phone Number">Phone Number</label>
							<input
								type="number"
								className="form-control"
                                name="number"
                                value={user.number}
                                onChange={handleInputChange}
								placeholder="Phone Number"
								required
							/>
                        </div>
                        <div className="form-group col-md-10">
                            <label htmlFor="Password">Password</label>
							<input
								type="password"
                                name="password"
                                value={user.password}
                                onChange={handleInputChange}
								className="form-control"
								placeholder="password"
								required
							/>
                        </div>
                        <button type="submit" className="btn btn-primary login col-9">Login</button>
                        <span>Already Have an Account? Login Here</span>
                    </form>
                </div>
            </div>
            
        </div>
    )
}

export default FormSignUp
