import { useState } from "react";
import { useMutation } from "@apollo/client";
import { Link } from "react-router-dom";
import { LOGIN } from "../../utils/mutations";
import AUTH from "../../utils/auth";

function Login () {
  const [formState, setFormState] = useState({ username: '', password: ' '})
  const [login, {error}] = useMutation(LOGIN)

  const handleFormSubmit = async(event) => {
    event.preventDefault();
    try {
    const mutation = await login({
      variables: {username: formState.username, password: formState.password},
    });

    const token = mutation.data.login.token;
    AUTH.login(token)
    } catch(e) {
      console.log(error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  }



  return (
  <div className="bg-black min-h-screen selection:bg-white/10">
  <header className="flex justify-center fixed top-0 z-20 w-full">
    <nav className="2lg:px-12 mx-auto max-w-7xl px-6 py-12 lg:px-12 xl:px-6 2xl:px-0">
      <div className="flex items-center justify-between">
        <div
            className="border-[--ui-light-border-color] relative border-[length:var(--border-width)] [--border-width:calc(var(--border)*1px)] [--border:1] [--glow:60] [--hue:179] [--lightness:55%] dark:[--lightness:14%] [--opacity:1] [--radius:24] [--saturation:78%] dark:[--saturation:97%] [--speed:2]">
            <div>
                <a href="/home" className="text-2xl tracking-widest text-white">Good Eats</a>
            </div>
            <span
                className="glow absolute inset-[calc(var(--border-width)*-1)] rounded-[--card-border-radius] border-[length:var(--border-width)] border-transparent ![mask-clip:padding-box,_border-box] ![mask-composite:intersect] [mask:linear-gradient(transparent,transparent),linear-gradient(white,white)]">
                <span
                    className="absolute inline-block aspect-square h-5 bg-[radial-gradient(circle_at_right,hsl(0_0%_0%/0),transparent_50%),radial-gradient(circle_at_right,hsl(var(--hue)_var(--saturation)_var(--lightness,50%)/1)_50%,transparent)] dark:bg-[radial-gradient(circle_at_right,hsl(0_0%_100%/0.75),transparent_50%),radial-gradient(circle_at_right,hsl(var(--hue)_var(--saturation)_var(--lightness,50%)/1)_50%,transparent)] opacity-[var(--opacity)] [animation:loop_3s_infinite_linear] [offset-anchor:calc(var(--anchor)*1%)_50%] [offset-path:rect(0_100%_100%_0_round_calc(var(--glow)*1px))]"></span>
            </span>
        </div>
            <div className="flex">
                <a href="/" className="ml-4 relative py-1.5 text-white before:absolute before:inset-0 before:origin-bottom before:scale-y-[.03] before:bg-white/60 before:transition before:duration-300 hover:before:scale-y-100 hover:before:scale-x-125 hover:before:bg-white/10">
                    <span className="relative">Temporary button</span>
                </a>
            </div>
      </div>
    </nav>
</header>
<main className="">
  <div className="flex flex-col justify-center items-center min-h-screen px-6 py-12 lg:px-8">
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">Login To Your Account</h2>
    </div>

    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form id="loginForm" className="space-y-6" onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="username" className="block text-sm font-medium leading-6 text-white">Username</label>
          <div className="mt-2">
            <input 
              id="username" 
              name="username" 
              type="username" 
              autoComplete="username" 
              required
              value={formState.username}
              onChange={handleChange} 
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></input>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">Password</label>
          </div>
          <div className="mt-2">
            <input 
              id="password" 
              name="password" 
              type="password" 
              autoComplete="current-password" 
              required
              value={formState.password}
              onChange={handleChange} 
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></input>
          </div>
        </div>

        <div>
          <button 
            type="submit" 
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Sign in
          </button>
        </div>
      </form>

      <p className="mt-10 text-center text-sm text-gray-500">
        Not a member?
        <Link to="/signup" className="font-semibold leading-6 text-white hover:text-indigo-600">Sign Up</Link>
      </p>
    </div>
  </div>
</main>
</div> )
}
export default Login