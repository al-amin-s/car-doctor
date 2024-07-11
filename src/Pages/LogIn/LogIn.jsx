import { Link } from 'react-router-dom';
import logInImg from '../../../../../car-doctor-resources/assets/images/login/login.svg'

const LogIn = () => {
    const handleLogIn=event=>{
        event.preventDefault();

    }

    return (
        <div className="hero  min-h-screen">
            <div className="hero-content flex-col lg:flex-row w-full items-center ">
                <div className="w-1/2 lg:text-left">
                    <img src={logInImg} alt="" />
                </div>
                <div className="card  w-full max-w-sm flex shrink-0 ">
                    
                    <form onSubmit={handleLogIn} className="card-body border rounded-lg h-full py-16">

                    <div>
                        <h1 className='text-black text-center text-xl font-bold'>Log In</h1>
                    </div>
                        
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input name='password' type="password" placeholder="Confirm password" className="input input-bordered" required />
                            
                        </div>
                        <div className="form-control mt-6 ">
                            
                            <input  type="submit" value="Log In" className="btn text-white bg-[#FF3811]"/>
                        </div>

                        <div className='text-center'>
                            <p>
                                Or <Link to="/signUp"><span className='text-[#FF3811]'>Sign Up</span></Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LogIn;