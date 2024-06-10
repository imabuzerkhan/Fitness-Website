import React, { useState } from 'react'

const Form = () => {

const [Formdata , Setformdata] = useState({
Firstname : "" ,
Lastname: "" ,
Phonenumber : "" ,
Address: "",
Email: "",
Message: "",


})

let calling = (event) => {
  Setformdata((currentdata) => {
    return { ...currentdata, [event.target.name]: event.target.value };
  });
};


function prevent(event) {
  event.preventDefault();
Setformdata({
  Firstname : "" ,
Lastname: "" ,
Phonenumber : "" ,
Address: "",
Email: "",
Message: "",
})
}


  return (
  <>
  
  
  <div className="main-form w-full max-w-[545px] bg-white shadow-custom rounded-xl h-auto py-5 px-6 mb-8 md:mb-0 ">
    <form action="" onSubmit={prevent} >
      <div className="form-container grid grid-cols-1 md:grid-cols-2  gap-3 mb-2 ">
        <label htmlFor="Firstname" 
       
        className='font-["Kanit"] font-[500] text-black text-xl ' >Firstname
        <input type="text" 
        value={Formdata.Firstname}
        onChange={calling}
         name = "Firstname"
        className='w-full mt-3 outline-none rounded-md border-[1px] border-gray-400 text-sm text-black px-2 px-2 py-2 '
        placeholder='Enter your first name'
        />
        </label>
        <label htmlFor="Lastname"
          
          className='font-["Kanit"] font-[500] text-black text-xl ' >Lastname
        <input type="text" name="Lastname" id="" 
         value={Formdata.Lastname}
         onChange={calling}
         className='w-full mt-3 outline-none rounded-md border-[1px] border-gray-400 text-sm text-black px-2 px-2 py-2 '
        /> </label>

<label htmlFor="Phonenumber"  className='font-["Kanit"] font-[500] text-black text-xl ' >Phone Number
      <input type="number" 
name='Phonenumber'
value={Formdata.Phonenumber}
onChange={calling}
className='w-full mt-3 outline-none rounded-md border-[1px] border-gray-400 text-sm text-black px-2 px-2 py-2 '
      />
      </label>
      <label htmlFor="Address"   className='font-["Kanit"] font-[500] text-black text-xl '>Address
      <input type="text" 
      name='Address'
      value={Formdata.Address}
      onChange={calling}
      className='w-full mt-3 outline-none rounded-md border-[1px] border-gray-400 text-sm text-black px-2 px-2 py-2 '
      />
      </label>

      </div>
      <label htmlFor="Email"   className='font-["Kanit"] font-[500] text-black text-xl  ' >Email 
      <input type="text" placeholder='Enter your mail' name='Email'
       value={Formdata.Email}
       onChange={calling}
       className='w-full mt-3 outline-none rounded-md border-[1px] border-gray-400 text-sm text-black mb-3  px-2 py-2 '
      />
      
      </label>

      <label htmlFor="Message us"   className='font-["Kanit"] font-[500] text-black text-xl '>Message us</label>
   <textarea name="Message" id="Message  " className='w-full h-24 mt-3 px-2  border-[1px] border-gray-400 py-1 outline-none rounded-md  text-black  '
    value={Formdata.Message}
    onChange={calling}
      placeholder='Write your message here'></textarea>
   
     <button  
     className='w-full py-2 px-4 text-center bg-yellow-800 text-white mt-2 rounded-full text-2xl'>Sumbit</button>
    
      
    </form>
    </div>
    </>
  )
}

export default Form
