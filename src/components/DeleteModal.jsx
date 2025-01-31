import React from 'react'
import CustomModal from './CustomModal'

const DeleteModal = ({isOpen, setIsOpen, userId, onClick}) => {
  return (
    <CustomModal isOpen={isOpen} setIsOpen={setIsOpen} title={"Delete User"} body={"Are you sure you want to delete this user"} actionButton={"Delete"} onClick={onClick}/>
  )
}

export default DeleteModal