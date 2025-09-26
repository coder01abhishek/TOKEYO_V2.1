import React from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
 
const HowItWorks = () => {
  return (
    <section className="py-20 bg-[#111111] relative overflow-hidden" id='work'>
      <div className="max-w-[1332px] mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-white mb-4">
            How It Works
          </h2>
        </div>
 
        <div className=" mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            <Step1 />
           
            
            <div className="flex flex-col gap-6">
              <Step2 />
              <Step3 />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
 
export default HowItWorks;
 