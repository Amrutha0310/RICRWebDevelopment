import React,{useState} from 'react'
import { useAuth } from '../../context/AuthContent'
import EditProfileModal from './modals/EditProfileModal';

const UserProfile = () => {
  const {user} = useAuth();
  const[isEditProfileModalOpen,setIsEditProfileModalOpen] = useState(false);
  

  return (
    <>
    <div>
       <div className='flex gap-10'>
      <span>Name:</span> <span>{user.fullName}</span>
    </div>
    <div>
      <span>Email:</span> <span>{user.email}</span>
    </div>
    <div>
      <span>Phone:</span> <span>{user.mobileNumber}</span>
      <button className='border px-5 py-2 bg-amber-200' onClick={()=>setIsEditProfileModalOpen(true)}>Edit Profile</button>
    </div>
    </div>

    </>
  );
};
   {isEditProfileModalOpen && (<EditProfileModal  onClose ={( => setIsEditProfileModalOpen/>) }

export default UserProfile;