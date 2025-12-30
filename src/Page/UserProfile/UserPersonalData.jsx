import { useState } from 'react';
import React from 'react'
import { Camera } from 'lucide-react';

const UserPersonalData = () => {


     const [formData, setFormData] = useState({
    lastName: 'Satkunam',
    name: 'Shanujan',
    gender: 'Not indicated',
    dateOfBirth: '01.01.1970',
    address: '',
    country: 'Sri Lanka',
    phone: '+940775499169',
    email: 'funkyshanu29@gmail.com'
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSave = () => {
    console.log('Saving profile:', formData);
    alert('Profile saved successfully!');
  };

  const handleCancel = () => {
    console.log('Cancelled');
  };
 

  return (
    <div>
       <div className="p-8">
          {/* Profile Image Upload */}
          <div className="flex items-start gap-6 mb-8">
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 flex flex-col items-center justify-center w-40 h-40">
              <Camera className="w-12 h-12 text-gray-400 mb-2" />
              <span className="text-sm text-gray-500 text-center">
                Upload profile image
              </span>
            </div>
            <div className="text-sm text-gray-400 mt-2">
              <p>Valid all image formats: gif, jpg, jpeg, png.</p>
              <p>Image size should not exceed 2 Mb.</p>
            </div>
          </div>

          {/* Form Fields */}
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm text-gray-600 mb-2">Last name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-gray-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm text-gray-600 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-gray-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm text-gray-600 mb-2">Gender</label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-gray-500 bg-white"
                >
                  <option>Not indicated</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm text-gray-600 mb-2">Date of Birth</label>
                <input
                  type="text"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  placeholder="DD.MM.YYYY"
                  className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-gray-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm text-gray-600 mb-2">Address</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-gray-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm text-gray-600 mb-2">Country</label>
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-gray-500 bg-white"
                >
                  <option>Sri Lanka</option>
                  <option>India</option>
                  <option>United States</option>
                  <option>United Kingdom</option>
                  <option>Canada</option>
                  <option>Australia</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm text-gray-600 mb-2">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-gray-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm text-gray-600 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-gray-500"
                />
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 mt-8">
            <button
              onClick={handleSave}
              className="px-8 py-2 bg-white border border-gray-300 text-black hover:bg-green-400 hover:text-white rounded-full  transition-all duration-300 ease-in-out"
            >
              SAVE
            </button>
            <button
              onClick={handleCancel}
              className="px-8 py-2 border border-gray-300 text-gray-700 rounded-full hover:bg-red-500 hover:text-white transition-all duration-300 ease-in-out "
            >
              CANCEL
            </button>
          </div>
        </div>
    </div>
  )
}

export default UserPersonalData
