import React from 'react'
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';

const Head = () => {

   const dispatch = useDispatch();

   const toggleMenuHandler = () => {
       dispatch(toggleMenu());
   };


  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1 ">
        <img 
          onClick={() => toggleMenuHandler()}
           className="h-8 cursor-pointer"
           alt="menu"
           src="https://img.icons8.com/?size=50&id=3096&format=png"
        />
      <a href="/">
        <img 
           className="h-10 mx-2"
           alt="youtube-logo"
           src="https://t3.ftcdn.net/jpg/05/07/46/84/240_F_507468479_HfrpT7CIoYTBZSGRQi7RcWgo98wo3vb7.jpg"
        />
      </a>
      </div>

       <div className="col-span-10 px-10">
         <input className="w-1/2 border borde-gray-400 p-2 rounded-l-full" type="text"/>
         <button className=" border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100">⌕</button>
       </div>

       <div className='col-span-1'>
         <img
         className="h-20"
          alt="user-icon"
          src="https://cdn-icons-png.flaticon.com/128/666/666201.png"
          />
        </div>

    </div>
  )
}

export default Head;