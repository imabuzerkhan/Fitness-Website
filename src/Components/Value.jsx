import React from 'react';
import { FaHandsHelping } from "react-icons/fa";
import { value } from '../Data/Data';

const Value = () => {
  return (
    <div className="main-value flex items-center justify-around my-28 px-20">
      <div className="image">
        <img className='w-[370px] rounded-3xl bg-no-repeat' src="https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya291dHxlbnwwfHwwfHx8MA%3D%3D" alt="" />
      </div>
      <div className="right-text">
        <div className="headiing-text flex items-center justify-start gap-4">
          <FaHandsHelping className='text-yellow-800 bg-white shadow-custom text-5xl rounded-lg py-2' />
          <h2 className='text-4xl font-["Kanit"] font-bold'>Our values</h2>
        </div>
        <p className='text-md my-4 font-["Merriweather"]'>Lorem ipsum dolor sit amet, consectetur adipisicing <br /> elit. Itaque eveniet repudiandae a?</p>
        <div className="main-card grid grid-cols-2 gap-5 items-center">
          {value.map(({ title, description, icon: Icon }, index) => (
            <div key={index} className="card bg-yellow-800 py-6 px-4 w-[250px] rounded-tr-3xl rounded-bl-3xl">
              <div className="icon">
                <Icon className='block mx-auto text-3xl bg-white px-1 rounded-md  py-1'
                 />
              </div>
              <div className="heading-text text-white md:text-2xl mt-4 font-['Kanit']">
                <h1>{title}</h1>
              </div>
              <div className="des text-white mb-2 mt-3 font-['Merriweather'] ">
                <p>{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Value;
