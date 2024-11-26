import React, { useState } from 'react';

function Signup() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <section className="bg-[#232946] text-white py-12 min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto bg-[#2a325a] p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-center mb-8">Create Account</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded bg-[#121629] border border-[#4a5578] focus:outline-none focus:border-[#b8c1ec] transition-colors"
                  required
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded bg-[#121629] border border-[#4a5578] focus:outline-none focus:border-[#b8c1ec] transition-colors"
                  required
                />
              </div>
            </div>

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

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded bg-[#121629] border border-[#4a5578] focus:outline-none focus:border-[#b8c1ec] transition-colors"
                required
              />
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="terms"
                className="h-4 w-4 rounded border-gray-300"
                required
              />
              <label htmlFor="terms" className="ml-2 block text-sm">
                I agree to the{' '}
                <a href="#" className="text-[#b8c1ec] hover:text-[#eebbc3] transition-colors">
                  Terms and Conditions
                </a>
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-[#eebbc3] text-[#232946] py-2 px-4 rounded font-medium hover:bg-[#d4a7ae] transition-colors"
            >
              Sign Up
            </button>

            <p className="text-center text-sm">
              Already have an account?{' '}
              <a href="#" className="text-[#b8c1ec] hover:text-[#eebbc3] transition-colors">
                Sign in
              </a>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Signup;