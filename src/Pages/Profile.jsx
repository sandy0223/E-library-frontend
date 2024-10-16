import React, { useState } from 'react';

const Profile = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
  const [isEditingEmail, setIsEditingEmail] = useState(false);
  const [isEditingPassword, setIsEditingPassword] = useState(false);
  const [newEmail, setNewEmail] = useState(user.email);
  const [newPassword, setNewPassword] = useState('');
  const [profilePicture, setProfilePicture] = useState(user.profilePicture || "https://static-00.iconduck.com/assets.00/profile-default-icon-2048x2045-u3j7s5nj.png");

  const handleEmailChange = () => {
    const updatedUser = { ...user, email: newEmail };
    setUser(updatedUser);
    localStorage.setItem('user', JSON.stringify(updatedUser));
    setIsEditingEmail(false);
  };

  const handlePasswordChange = () => {
    // Here, you would typically validate and update the password with an API call
    console.log('New password:', newPassword);
    setIsEditingPassword(false);
  };

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePicture(reader.result);
        const updatedUser = { ...user, profilePicture: reader.result };
        setUser(updatedUser);
        localStorage.setItem('user', JSON.stringify(updatedUser));
      };
      reader.readAsDataURL(file);
    }
  };

  if (!user) {
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        <h2 className="text-3xl font-bold">No user logged in</h2>
      </div>
    );
  }

  return (
    <div className="w-full max-w-5xl mx-auto mt-20 p-8 bg-white h-screen shadow-xl rounded-lg">
      <div className="flex items-center space-x-6">
        {/* Profile Picture Section */}
        <div className="relative">
          <img
            src={profilePicture}
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover shadow-md"
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleProfilePictureChange}
            className="absolute bottom-0 right-0 p-1"
          />
        </div>

        {/* User Info Section */}
        <div>
          <h1 className="text-4xl font-semibold text-gray-800">{user.name}</h1>
          <p className="text-lg text-gray-600">{user.email}</p>
          <p className="mt-2 text-sm text-gray-500">Member since: {user.memberSince || '2024'}</p>
        </div>
      </div>
          </div>
       

   
    
  );
};

export default Profile;
