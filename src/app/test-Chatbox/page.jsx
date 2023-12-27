'use client'
import React, { useState } from 'react'
import Chatbox from '@/components/Chatbox/Chatbox'
import AddChannelModal from '@/components/modals/AddChannelModal'
import AddPeopleModal from '@/components/modals/AddPeopleModal'
import AddSubChannelModal from '@/components/modals/AddSubChannelModal'

const Page = () => {
  const [showChannelModal,setShowChannelModal] = useState(false);
  const [showPeopleModal,setShowPeopleModal] = useState(false);
  const [showSubChannelModal,setShowSubChannelModal] = useState(false);
  return (
    <>
   <Chatbox/>
   <button className='bg-primary text-white px-2 py-1 rounded-md mx-5' onClick={()=>setShowChannelModal(true)}>Click to open create channel modal</button>
   <button className='bg-primary text-white px-2 py-1 rounded-md mx-5' onClick={()=>setShowPeopleModal(true)}>Click to open add people modal</button>
   <button className='bg-primary text-white px-2 py-1 rounded-md mx-5' onClick={()=>setShowSubChannelModal(true)}>Click to open add sub channel modal</button>
   {showSubChannelModal && <AddSubChannelModal setShowModal={setShowSubChannelModal}/> }
   {showChannelModal && <AddChannelModal setShowModal={setShowChannelModal}/> }
   {showPeopleModal && <AddPeopleModal setShowModal={setShowPeopleModal} /> }
   </>
  )
}


export default Page;