import { useState } from 'react';
import axios from 'axios';

export default function RegisterPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [profileImage, setProfileImage] = useState(null);

const handleRegister = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.post('http://localhost:5000/api/register', form);
    alert('Registration successful!');
    window.location.href = '/login';
  } catch (error) {
    console.error('Error registering:', error);
    alert(error.response?.data?.message || 'Something went wrong');
  }
};


  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-[#F4F2EE] px-4">
      <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
        <h1 className="text-4xl font-bold text-blue-700 mb-2">Make the most of your professional life</h1>
        <p className="text-gray-600">Join LinkedIn now – it's free!</p>
      </div>
      <form
        onSubmit={handleRegister}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-md space-y-4"
        encType="multipart/form-data"
      >
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Join LinkedIn</h2>
        <input
          type="text"
          placeholder="Full name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
          className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
          className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
        <input
          type="password"
          placeholder="Password (6+ characters)"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          required
          className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
      
        <button
          type="submit"
          className="w-full bg-blue-700 text-white py-3 rounded-md font-medium hover:bg-blue-800 transition"
        >
          Agree & Join
        </button>
        <p className="text-sm text-gray-600 text-center">
          Already a member?{' '}
          <a href="/login" className="text-blue-600 hover:underline">
            Sign in
          </a>
        </p>
      </form>
    </div>
  );
}
