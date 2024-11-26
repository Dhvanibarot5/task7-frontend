import React, { useState } from "react";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <section className="bg-[#232946] text-white py-12 min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto bg-[#2a325a] p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-center mb-8">Login</h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded bg-[#121629] border border-[#4a5578] focus:outline-none focus:border-[#b8c1ec] transition-colors"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded bg-[#121629] border border-[#4a5578] focus:outline-none focus:border-[#b8c1ec] transition-colors"
                required
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input type="checkbox" id="remember" className="h-4 w-4 rounded border-gray-300" />
                <label htmlFor="remember" className="ml-2 block text-sm">
                  Remember me
                </label>
              </div>
              <a href="#" className="text-sm text-[#b8c1ec] hover:text-[#eebbc3] transition-colors">
                Forgot password?
              </a>
            </div>

            <button type="submit" className="w-full bg-[#eebbc3] text-[#232946] py-2 px-4 rounded font-medium hover:bg-[#d4a7ae] transition-colors">
              LogIn
            </button>

            <p className="text-center text-sm">
              Don't have an account?{" "}
              <a href="#" className="text-[#b8c1ec] hover:text-[#eebbc3] transition-colors">
                Sign up
              </a>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Login;
