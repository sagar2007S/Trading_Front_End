//import React, { useState } from "react";
//import { Eye, EyeOff, ChevronDown, ArrowLeft } from "lucide-react";
import { useLocation, Link } from "react-router-dom";


// export default function SignUp() {
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//     confirmPassword: "",
//     name: "",
//     lastName: "",
//     country: "India",
//     phone: "",
//   });
//   const location=useLocation();
//   const isLoginPage = location.pathname === "/login";

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = () => {
//     if (formData.password !== formData.confirmPassword) {
//       alert("Passwords do not match!");
//       return;
//     }
//     console.log("Form submitted:", formData);
//     alert("Registration successful!");
//   };

//   const hanleBack = () => {
//     console.log("BackHandled")
//   };

//   return (
    
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center p-4 py-8 relative overflow-hidden ">
//       {/* Decorative background elements */}
//       <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob "></div>
//       <div className="absolute top-0 right-0 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000 "></div>
//       <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000  "></div>
  
//       <div className="w-full max-w-md relative z-10 bg-white rounded-2xl shadow-2xl p-6 border border-gray-100 my-4">
//       {/* Header */}
//       <div
//       className="flex items-center justify-between mb-4 "
//       >
//       <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
//       <Link to="/login">
//       <ArrowLeft className="w-5 h-5 text-gray-700" />
//       </Link>
//       </button>
//       <div className="px-3 py-1.5 border border-gray-300 rounded-lg text-gray-700 text-sm font-medium hover:border-blue-500 transition-colors">
//       EN
//       </div>
//       </div>
      
//       {/* Title */}
//       <h1 className="text-2xl font-bold text-gray-800 text-center mb-5">
//       Registration
//       </h1>
      
//       {/* Form Fields */}
//       <div className="space-y-3">
//       {/* Email */}
//       <div>
//       <input
//       type="email"
//       name="email"
//       placeholder="Email"
//       value={formData.email}
//       onChange={handleChange}
//       className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:border-blue-500 transition-all text-gray-800 placeholder-gray-500"
//       />
//       </div>
      
//       {/* Password */}
//       <div className="relative">
//       <input
//       type={showPassword ? "text" : "password"}
//       name="password"
//       placeholder="Password"
//       value={formData.password}
//       onChange={handleChange}
//       className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:border-blue-500 transition-all text-gray-800 placeholder-gray-500"
//       />
//       <button
//       type="button"
//       onClick={() => setShowPassword(!showPassword)}
//       className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
//       >
//       {showPassword ? (
//         <EyeOff className="w-5 h-5" />
//       ) : (
//         <Eye className="w-5 h-5" />
//       )}
//       </button>
//       </div>
      
//       {/* Confirm Password */}
//       <div className="relative">
//       <input
//       type={showConfirmPassword ? "text" : "password"}
//       name="confirmPassword"
//       placeholder="Confirm password"
//       value={formData.confirmPassword}
//       onChange={handleChange}
//       className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:border-blue-500 transition-all text-gray-800 placeholder-gray-500"
//       />
//       <button
//       type="button"
//       onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//       className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
//       >
//       {showConfirmPassword ? (
//         <EyeOff className="w-5 h-5" />
//       ) : (
//         <Eye className="w-5 h-5" />
//       )}
//       </button>
//       </div>
      
//       {/* Name */}
//       <div>
//       <input
//       type="text"
//       name="name"
//       placeholder="Name"
//       value={formData.name}
//       onChange={handleChange}
//       className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:border-blue-500 transition-all text-gray-800 placeholder-gray-500"
//       />
//       </div>
      
//       {/* Last Name */}
//       <div>
//       <input
//       type="text"
//       name="lastName"
//       placeholder="Last name"
//       value={formData.lastName}
//       onChange={handleChange}
//       className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:border-blue-500 transition-all text-gray-800 placeholder-gray-500"
//       />
//       </div>
      
//       {/* Country */}
//       <div className="relative">
//       <select
//       name="country"
//       value={formData.country}
//       onChange={handleChange}
//       className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:border-blue-500 transition-all text-gray-800 appearance-none cursor-pointer"
//       >
//       <option value="India">India</option>
//       <option value="USA">USA</option>
//       <option value="UK">UK</option>
//       <option value="Canada">Canada</option>
//       <option value="Australia">Australia</option>
//       </select>
//       <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
//       </div>
      
//       {/* Phone */}
//       <div className="flex gap-2">
//       <div className="relative w-24">
//       <select className="w-full px-2 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:border-blue-500 transition-all text-gray-800 appearance-none cursor-pointer text-sm">
//       <option value="+91">🇮🇳 +91</option>
//       <option value="+1">🇺🇸 +1</option>
//       <option value="+44">🇬🇧 +44</option>
//       </select>
//       <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
//       </div>
//       <input
//       type="tel"
//       name="phone"
//       placeholder="Phone"
//       value={formData.phone}
//       onChange={handleChange}
//       className="flex-1 px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:border-blue-500 transition-all text-gray-800 placeholder-gray-500"
//       />
//       </div>
      
//       {/* Submit Button */}
//       <button
//       onClick={handleSubmit}
//       className="w-full py-2.5 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors mt-4 shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all"
//       >
//       Register
//       </button>
//       </div>
//       </div>

//       </div>
//     );
// }


import React, { useState } from "react";
import { Eye, EyeOff, ChevronDown, ArrowLeft } from "lucide-react";

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
    lastName: "",
    country: "India",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Form submitted:", formData);
    alert("Registration successful!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center p-4 py-8 relative overflow-hidden transition-colors duration-300">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-48 sm:w-72 h-48 sm:h-72 bg-blue-200 dark:bg-blue-900 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl opacity-30 dark:opacity-20 animate-blob"></div>
      <div className="absolute top-0 right-0 w-48 sm:w-72 h-48 sm:h-72 bg-indigo-200 dark:bg-indigo-900 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl opacity-30 dark:opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-48 sm:w-72 h-48 sm:h-72 bg-purple-200 dark:bg-purple-900 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl opacity-30 dark:opacity-20 animate-blob animation-delay-4000"></div>
  
      <div className="w-full max-w-md relative z-10 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-4 sm:p-6 border border-gray-100 dark:border-gray-700 my-4 transition-colors duration-300">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
         <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
       <Link to="/login">
       <ArrowLeft className="w-5 h-5 text-gray-700" />
      </Link>
      </button>
          
          <div className="px-3 py-1.5 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 text-sm font-medium hover:border-blue-500 dark:hover:border-blue-400 transition-colors">
            EN
          </div>
        </div>
      
        {/* Title */}
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white text-center mb-5">
          Registration
        </h1>
      
        {/* Form Fields */}
        <div className="space-y-3">
          {/* Email */}
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent hover:border-blue-500 dark:hover:border-blue-400 transition-all text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
            />
          </div>
      
          {/* Password */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent hover:border-blue-500 dark:hover:border-blue-400 transition-all text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300"
            >
              {showPassword ? (
                <EyeOff className="w-5 h-5" />
              ) : (
                <Eye className="w-5 h-5" />
              )}
            </button>
          </div>
      
          {/* Confirm Password */}
          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              placeholder="Confirm password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent hover:border-blue-500 dark:hover:border-blue-400 transition-all text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300"
            >
              {showConfirmPassword ? (
                <EyeOff className="w-5 h-5" />
              ) : (
                <Eye className="w-5 h-5" />
              )}
            </button>
          </div>
      
          {/* Name */}
          <div>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent hover:border-blue-500 dark:hover:border-blue-400 transition-all text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
            />
          </div>
      
          {/* Last Name */}
          <div>
            <input
              type="text"
              name="lastName"
              placeholder="Last name"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent hover:border-blue-500 dark:hover:border-blue-400 transition-all text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
            />
          </div>
      
          {/* Country */}
          <div className="relative">
            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent hover:border-blue-500 dark:hover:border-blue-400 transition-all text-gray-800 dark:text-white appearance-none cursor-pointer"
            >
              <option value="India">India</option>
              <option value="USA">USA</option>
              <option value="UK">UK</option>
              <option value="Canada">Canada</option>
              <option value="Australia">Australia</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-gray-500 pointer-events-none" />
          </div>
      
          {/* Phone */}
          <div className="flex gap-2">
            <div className="relative w-20 sm:w-24">
              <select className="w-full px-2 py-2.5 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent hover:border-blue-500 dark:hover:border-blue-400 transition-all text-gray-800 dark:text-white appearance-none cursor-pointer text-sm">
                <option value="+91">🇮🇳 +91</option>
                <option value="+1">🇺🇸 +1</option>
                <option value="+44">🇬🇧 +44</option>
              </select>
              <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 dark:text-gray-500 pointer-events-none" />
            </div>
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              className="flex-1 px-4 py-2.5 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent hover:border-blue-500 dark:hover:border-blue-400 transition-all text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
            />
          </div>
      
          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            className="w-full py-2.5 bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors mt-4 shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all"
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
}