import React from 'react';
import LeftSection from './leftSections/LeftSection';
import CenterSection from './CenterSection/CenterSection';
import RightSection from './RightSection/RightSection';

const NewsLayout = () => {
  return (
    <div className="flex flex-row justify-between w-full py-2 mx-auto max-w-[1185px] space-x-1">
      <LeftSection />
      <CenterSection />
      <RightSection />
    </div>
  );
};

export default NewsLayout;
