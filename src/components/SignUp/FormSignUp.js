import React from 'react';
import useForm from './useForm';
import validation from './FormValidation';

const FormSignUp = () => {
    const {handleSubmit, user, handleInputChange, error} =useForm(validation);
    
    return (
        <div className="container signup">
            <div className="row justify-content-center">
                <div className="col-lg-6">
                    <form className="form row" onSubmit={handleSubmit}>
                        <h4 style={{padding:'0 15px'}} className="mb-4">Login Form</h4>
                        <div className="form-group col-md-12">
                            <label htmlFor="name">Name</label>
							<input
								type="text"
								className="form-control"
                                name="name"
                                value={user.name}
                                onChange={handleInputChange}
								placeholder="Enter Your Name"
                            />
                            {error.name && <p className="error">{error.name}</p>}
                        </div>
                        <div className="form-group col-md-12">
                            <label htmlFor="Email">Email</label>
							<input
								type="email"
								className="form-control"
                                name="email"
                                value={user.email}
                                onChange={handleInputChange}
								placeholder="Email"
                            />
                            {error.email ? <p className="error">{error.email}</p>:''}
                        </div>
                        <div className="form-group col-md-12">
                            <label htmlFor="Phone Number">Phone Number</label>
							<input
								type="number"
								className="form-control"
                                name="number"
                                value={user.number}
                                onChange={handleInputChange}
								placeholder="Phone Number"
                            />
                            {error.number && <p className="error">{error.number}</p>}
                        </div>
                        <div className="form-group col-md-12">
                            <label htmlFor="Password">Password</label>
							<input
								type="password"
                                name="password"
                                value={user.password}
                                onChange={handleInputChange}
								className="form-control"
								placeholder="password"
                            />
                            {error.password && <p className="error">{error.password}</p>}
                        </div>
                        <button type="submit" className="btn btn-primary login">Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default FormSignUp
