// import React, { useState } from 'react';
// import { Eye, EyeOff, Check } from 'lucide-react';
// import { Link } from 'react-router-dom';

// export default function LoginPage() {
//   const [showPassword, setShowPassword] = useState(false);
//   const [remember, setRemember] = useState(true);
//   const [formData, setFormData] = useState({
//     email: '',
//     password: ''
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSignIn = () => {
//     console.log('Sign in:', formData, 'Remember:', remember);
//     alert('Sign in submitted!');
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center p-4 py-8 relative overflow-hidden ">
//       {/* Decorative background elements */}
//       <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
//       <div className="absolute top-0 right-0 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
//       <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>

//       <div className="w-full max-w-md relative z-10 bg-white rounded-2xl shadow-2xl p-6 border border-gray-100 my-4">
//         {/* Header with Logo and Language */}
//         <div className="flex items-center justify-between mb-6">
//           <img 
//             src="https://crystalpng.com/wp-content/uploads/2025/03/tradingview-logo-768x768.png" 
//             alt="Logo" 
//             className="h-10 w-auto"
//           />
//           <div className="px-3 py-1.5 border border-gray-300 rounded-lg text-gray-700 text-sm font-medium hover:border-blue-500 transition-colors">
//             EN
//           </div>
//         </div>

//         {/* Title */}
//         <h1 className="text-2xl font-bold text-gray-800 text-center mb-5">
//           Sign in
//         </h1>

//         {/* Form Fields */}
//         <div className="space-y-3">
//           {/* Email */}
//           <div>
//             <input
//               type="email"
//               name="email"
//               placeholder="Email"
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:border-blue-500 transition-all text-gray-800 placeholder-gray-500"
//             />
//           </div>

//           {/* Password */}
//           <div className="relative">
//             <input
//               type={showPassword ? "text" : "password"}
//               name="password"
//               placeholder="Password"
//               value={formData.password}
//               onChange={handleChange}
//               className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:border-blue-500 transition-all text-gray-800 placeholder-gray-500"
//             />
//             <button
//               type="button"
//               onClick={() => setShowPassword(!showPassword)}
//               className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
//             >
//               {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
//             </button>
//           </div>

//           {/* Remember Me and Forgot Password */}
//           <div className="flex items-center justify-between pt-1">
//             <button
//               onClick={() => setRemember(!remember)}
//               className="flex items-center gap-2 text-gray-700 hover:text-gray-900"
//             >
//               <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
//                 remember ? 'bg-blue-600 border-blue-600' : 'border-gray-400'
//               }`}>
//                 {remember && <Check className="w-3 h-3 text-white" />}
//               </div>
//               <span className="text-sm">Remember</span>
//             </button>
//             <button className="text-blue-500 hover:text-blue-600 text-sm font-medium">
//               Forgot password?
//             </button>
//           </div>

//           {/* Sign In Button */}
//           <button
//             onClick={handleSignIn}
//             className="w-full py-2.5 bg-green-400 hover:bg-green-500 text-white font-semibold rounded-lg transition-colors mt-4 shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all"
//           >
//             Sign in
//           </button>

//           {/* Register Link */}
//           <div className="text-center mt-3">
//             <span className="text-gray-600 text-sm">No account? </span>
//             <Link to="/signup" className="text-blue-500 hover:text-blue-600 text-sm font-medium">
//               Register
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



import React, { useState } from 'react';
import { Eye, EyeOff, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSignIn = () => {
    console.log('Sign in:', formData, 'Remember:', remember);
    alert('Sign in submitted!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center p-4 py-8 relative overflow-hidden transition-colors duration-300">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-48 sm:w-72 h-48 sm:h-72 bg-blue-200 dark:bg-blue-900 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl opacity-30 dark:opacity-20 animate-blob"></div>
      <div className="absolute top-0 right-0 w-48 sm:w-72 h-48 sm:h-72 bg-indigo-200 dark:bg-indigo-900 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl opacity-30 dark:opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-48 sm:w-72 h-48 sm:h-72 bg-purple-200 dark:bg-purple-900 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl opacity-30 dark:opacity-20 animate-blob animation-delay-4000"></div>

      <div className="w-full max-w-md relative z-10 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-4 sm:p-6 border border-gray-100 dark:border-gray-700 my-4 transition-colors duration-300">
        {/* Header with Logo and Language */}
        <div className="flex items-center justify-between mb-6">
          <Link to="/">
          <img 
            src="https://crystalpng.com/wp-content/uploads/2025/03/tradingview-logo-768x768.png" 
            alt="Logo" 
            className="h-10 w-auto"
          />
          </Link>
          <div className="px-3 py-1.5 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 text-sm font-medium hover:border-blue-500 dark:hover:border-blue-400 transition-colors">
            EN
          </div>
        </div>

        {/* Title */}
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white text-center mb-5">
          Sign in
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
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>

          {/* Remember Me and Forgot Password */}
          <div className="flex items-center justify-between pt-1">
            <button
              onClick={() => setRemember(!remember)}
              className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
                remember ? 'bg-blue-600 border-blue-600 dark:bg-blue-500 dark:border-blue-500' : 'border-gray-400 dark:border-gray-500'
              }`}>
                {remember && <Check className="w-3 h-3 text-white" />}
              </div>
              <span className="text-sm">Remember</span>
            </button>
            <button className="text-blue-500 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300 text-sm font-medium">
              Forgot password?
            </button>
          </div>

          {/* Sign In Button */}
          <button
            onClick={handleSignIn}
            className="w-full py-2.5 bg-green-400 hover:bg-green-500 dark:bg-green-500 dark:hover:bg-green-600 text-white font-semibold rounded-lg transition-colors mt-4 shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all"
          >
            Sign in
          </button>

          {/* Register Link */}
          <div className="text-center mt-3">
            <span className="text-gray-600 dark:text-gray-400 text-sm">No account? </span>
            <Link to="/signup" className="text-blue-500 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300 text-sm font-medium">
              Register
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}