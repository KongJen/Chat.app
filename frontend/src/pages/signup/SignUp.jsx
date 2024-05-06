import {useState} from 'react'
import GenderCheckbox from './GenderCheckbox'
import { Link } from 'react-router-dom'
import useSignup from '../../hooks/useSignup';

const SignUp = () => {

  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const {loading,signup}= useSignup()

  const handleCheckboxChange = (gender) => {
    setInputs({...inputs, gender});
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);
  }

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-100 bg-clip-padding backdrop-filter ">
        <h1 className="text-3xl p-1 font-semibold text-center text-gray-900 pb-3">
          Sign Up
          <span className="text-blue-700"> Chat.App</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className='label'>
              <span className='text-base label-text text-gray-900'>Full Name</span>
            </label>
            <input type="text" placeholder='John Doe' className='text-gray-900 w-full input input-bordered h-10 bg-gray-100 border border-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500'
              value={inputs.fullName}
              onChange={(e) => setInputs({...inputs, fullName: e.target.value})}
            />
          </div>

          <div>
            <label className='label'>
              <span className='text-base label-text text-gray-900'>Username</span>
            </label>
            <input type="text" placeholder='johndoe' className='text-gray-900 w-full input input-bordered h-10 bg-gray-100 border border-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500'
              value={inputs.username}
              onChange={(e) => setInputs({...inputs, username: e.target.value})}
            />
          </div>

          <div>
            <label className='label'>
              <span className='text-base label-text text-gray-900'>Password</span>
            </label>
            <input type="password" placeholder='Enter Password' className='text-gray-900 w-full input input-bordered h-10 bg-gray-100 border border-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500'
              value={inputs.password}
              onChange={(e) => setInputs({...inputs, password: e.target.value})}
            />
          </div>

          <div>
            <label className='label'>
              <span className='text-base label-text text-gray-900'>Confirm Password</span>
            </label>
            <input type="password" placeholder='Confirm Password' className='text-gray-900 w-full input input-bordered h-10 bg-gray-100 border border-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500'
              value={inputs.confirmPassword}
              onChange={(e) => setInputs({...inputs, confirmPassword: e.target.value})}
            />
          </div>

          <GenderCheckbox onCheckboxChange = {handleCheckboxChange} selectedGender={inputs.gender}/>
          
          <Link to="/login" className='text-gray-900 text-sm underline hover:text-blue-600 mt-2 inline-block'>
            Already have an account?
          </Link>

          <div>
            <button className="text-gray-100 btn btn-block btn-sm mt-2 bg-blue-700 hover:bg-blue-800" disabled={loading}>
              {loading ? <span className='loading loading-spinner'></span> : "Sign Up"}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignUp