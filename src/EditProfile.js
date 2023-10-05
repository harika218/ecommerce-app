import { useForm } from 'react-hook-form'
import { useEffect, useState } from 'react'
import axios from 'axios'


export default function EditProfile() {

    const user = {
        email: "training123@gmail.com",
        mobile: 8056585569,
        firstName: "Harika",
        lastName: "Venkata"
    }
    const [userInfo, setUserInfo] = useState(user)
    const { register, handleSubmit, formState: { errors } } = useForm();

    // useEffect(() => {
    //     const { token, userId } = JSON.parse(localStorage.getItem('user-session'));
    //     axios.get('http://localhost:3001/v1/users/' + userId, { headers: { Authorization: token } }).then(response => {

    //     }).catch(error => { })
    // }, [])

    const editProfile = (editUserInfo) => {
        setUserInfo(editUserInfo);
        console.log(editUserInfo)
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-6 mx-auto">
                    <h1 className="text-center">Edit Profile</h1>
                    <form onSubmit={handleSubmit(editProfile)}>
                        <div className="form-group my-3">
                            <label htmlFor="firstName">FirstName</label>
                            <input type="text" value={userInfo.firstName} className="form-control" id="firstName" {...register('firstName', { required: true })}></input>
                            {errors?.firstName?.type == 'required' && <p className='text-danger'>Required Field</p>}
                        </div>

                        <div className="form-group my-3">
                            <label htmlFor="lastName">LastName</label>
                            <input type="text" value={userInfo.lastName} className="form-control" id="lastName" {...register('lastName', { required: true })}></input>
                        </div>

                        <div className="form-group my-3">
                            <label htmlFor="mobileNumber">MobileNumber</label>
                            <input type="number" value={userInfo.mobile} className="form-control" id="mobileNumber" {...register('mobileNumber', { required: true })}></input>
                        </div>

                        <div className="form-group my-3">
                            <label htmlFor="email">Email</label>
                            <input type="text" className="form-control" value={userInfo.email} id="email"  {...register('email', { required: true })}></input>
                        </div>



                        <button className="btn btn-primary my-3" type='submit'>Edit</button>

                    </form>
                </div>
            </div>
        </div>
    )

}