const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-100 bg-clip-padding backdrop-filter ">
        <h1 className="text-3xl p-1 font-semibold text-center text-gray-900 pb-3">
          Login
          <span className="text-blue-700"> Chat.App</span>
        </h1>

        <form>
          <div>
            <label className="lable">
              <span className="text-gray-900 text-base lable-text ">Username</span>
            </label>
            <input type="text" placeholder="Enter username" className="w-full input bg-gray-100 border border-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500 h-9" />
          </div>

          <div>
            <label className="lable">
              <span className="text-gray-900 text-base lable-text">Password</span>
            </label>
            <input type="password" placeholder="Enter Password" className="w-full input bg-gray-100 border border-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500 h-9" />
          </div>
          <a href="#" className="text-gray-900 text-sm hover:underline hover:text-blue-600 mt-2 inline-block">
            {"Don't"} have an account?
          </a>

          <div>
            <button className="text-gray-100 btn btn-block btn-sm mt-2 bg-blue-700 hover:bg-blue-800">Login</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login