import React from 'react';
import Featured_Videos from './Featuredvideos';
import SpecialsComponent from './SpecialsComponent';



const HorizontalLine = ({isNotFirst}) => {
    return (
     <div className={`w-full bg-white border border-gray-200 p-[10px] mb-1 ${isNotFirst && `mt-1`}`}>
</div> 
    );
  };

// Main RightSection component


const RightSection = () => {
  

  return (
    <div className="w-[33%]">
        <HorizontalLine />
        <div className='bg-white p-4'>
         <Featured_Videos/>
        </div>
        <HorizontalLine isNotFirst={true}/>
        <SpecialsComponent/>
        <HorizontalLine isNotFirst={true}/>
    </div>
  );
};

export default RightSection;
