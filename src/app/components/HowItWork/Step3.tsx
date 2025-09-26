
import React from 'react';
import Image from 'next/image';

const Step3 = () => {
    return (
        <div className="flex items-center bg-[#1D1D1D] rounded-2xl sm:flex-row flex-col justify-center">
            <div className=" p-6 flex justify-center items-center min-w-[276px]" style={{ minHeight: '300px' }}>
                
                <div className="relative max-w-[120px]">
                    <div className='max-w-[120px]'>
                        <div className="relative w-full max-w-sm mx-auto overflow-hidden">
                            <video
                                src={("/videos/step3.mp4")}
                                autoPlay
                                loop
                                muted
                                playsInline
                                controls={false}
                                className="w-full h-full object-cover rounded-lg rounded-sm"
                            />
                            
                        </div>
                    </div>
                
                </div>
            </div>

            <div className="text-center sm:text-left sm:px-none px-6 sm:pb-none pb-6">
                <div className="inline-flex items-center gap-2 border border-[#3B82F6] px-5 py-2 rounded-full">
                    <span className="w-3 h-3 rounded-full bg-[#3B82F6]"></span>
                    <span className="text-white font-semibold">Step 3</span>
                </div>
                <h3 className="text-[32px] text-white mb-3 mt-7">Talk</h3>
                <p className="text-[#A0A0A0] text-[20px]">Have real conversations that feel natural and alive.</p>
            </div>

        </div>
    );
};

export default Step3;
