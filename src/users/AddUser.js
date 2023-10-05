import { useForm } from 'react-hook-form'
import { useContext } from 'react';
import { UserContext } from './UserContext';
function AddUser() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { addUser } = useContext(UserContext);
    const adduser = (userInfo) => {
        addUser(userInfo);
    }
    return (
        <div className="col-sm">
            <h1> AddUser</h1>
            <form onSubmit={handleSubmit(adduser)}>
                <div className="form-group my-3">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" id="name" placeholder="Enter name" {...register("name", { required: true })} />
                </div>
                <div className="form-group my-3">
                    <label htmlFor="email">Email</label>
                    <input type="text" className="form-control" id="email" placeholder="Enter email" {...register("email", { required: true })} />
                </div>
                <div className="form-group my-3">
                    <label htmlFor="mobileno">MobileNumber</label>
                    <input type="text" className="form-control" id="mobileno" placeholder="Enter mobileno" {...register("phone", { required: true })} />
                </div>
                <div className="form-group my-3">
                    <label htmlFor="company">Company</label>
                    <input type="text" className="form-control" id="company" placeholder="Enter mobileno" {...register("company", { required: true })} />
                </div>
                <button type="submit" className="btn btn-primary"> AddUser </button>
            </form>
        </div>
    )
}

export default AddUser;