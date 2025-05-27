import GenderCheckbox from "./GenderCheckBox";

const SignUp = () => {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen px-4"> 
        <div className="w-full max-w-md p-8 space-y-6 shadow-xl bg-gray-0 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0 border-1"> 
          <h1 className="text-4xl font-bold text-center text-gray-100">
            Enigma
          </h1>
  
          <form className="space-y-6"> 
		  <div>
              <label className="input input-bordered flex items-center gap-2 text-gray-300">
			  <svg
				className="h-5 w-5 opacity-70"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
				>
				<path d="M3 18V5l9-3 9 3v13M12 13V2"></path>
				</svg>
                <input
                  type="text"
                  required
                  placeholder="Full Name"
                  className="grow placeholder-gray-500" 
                  pattern="[A-Za-z][A-Za-z0-9\-]*"
                  minLength="3"
                  maxLength="30"
                  title="Please enter your First Name and Last Name"
                />
              </label>
              <p className="validator-hint text-xs text-gray-400 mt-1 px-1">
                3-30 characters. Letters, numbers, or dash only.
              </p>
            </div>

            <div>
              <label className="input input-bordered flex items-center gap-2 text-gray-300">
                <svg
                  className="h-5 w-5 opacity-70" 
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
                <input
                  type="text"
                  required
                  placeholder="Username"
                  className="grow placeholder-gray-500" 
                  pattern="[A-Za-z][A-Za-z0-9\-]*"
                  minLength="3"
                  maxLength="30"
                  title="Username must be 3 to 30 characters, starting with a letter, and contain only letters, numbers, or dashes."
                />
              </label>
              <p className="validator-hint text-xs text-gray-400 mt-1 px-1">
                3-30 characters. Letters, numbers, or dash only.
              </p>
            </div>
  
            <div>
              <label className="input input-bordered flex items-center gap-2 text-gray-300">
                <svg
                  className="h-5 w-5 opacity-70" // Slightly larger icon
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
                  <circle
                    cx="16.5"
                    cy="7.5"
                    r=".5"
                    fill="currentColor"
                  ></circle>
                </svg>
                <input
                  type="password"
                  required
                  placeholder="Password"
                  className="grow placeholder-gray-500" 
                  minLength="8"
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                  title="Password must be at least 8 characters, including a number, a lowercase letter, and an uppercase letter."
                />
              </label>
              <p className="validator-hint text-xs text-gray-400 mt-1 px-1 hidden"> 
                Min. 8 characters: 1 number, 1 lowercase, 1 uppercase.
              </p>
			  
              <label className="input input-bordered flex items-center gap-2 text-gray-300">
                <svg
                  className="h-5 w-5 opacity-70" // Slightly larger icon
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
                  <circle
                    cx="16.5"
                    cy="7.5"
                    r=".5"
                    fill="currentColor"
                  ></circle>
                </svg>
                <input
                  type="password"
                  required
                  placeholder="Re-enter Password"
                  className="grow placeholder-gray-500" 
                  minLength="8"
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                  title="Password must be at least 8 characters, including a number, a lowercase letter, and an uppercase letter."
                />
              </label>
			  
            </div>

			<GenderCheckbox/>
            <div className="text-center"> {/* Centering the link */}
              <a
                href="#" // Replace with your actual sign-up route
                className="text-sm text-gray-400 hover:underline hover:text-blue-400 inline-block"
              >
                Already have an account?
              </a>
            </div>
  
            <div>
              <button type="submit" className="btn btn-active w-full text-base" >
                SignUp
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };
  
  export default SignUp;