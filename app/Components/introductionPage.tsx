import React, { useEffect } from 'react';
import Image from 'next/image';
import uniskyLogo from '@/public/unisky-logo.svg';
import loading from '@/public/loading.gif';

interface IntroPageProps {
  onAllowLocation: () => void;
}

const IntroPage: React.FC<IntroPageProps> = ({ onAllowLocation }) => {
  useEffect(() => {
    const handleAllowLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            console.log("Location:", position.coords.latitude, position.coords.longitude);
            onAllowLocation();
          },
          (error) => {
            console.error("Error getting location:", error);
          }
        );
      } else {
        console.error("Geolocation is not supported by this browser.");
      }
    };

    handleAllowLocation();
  }, [onAllowLocation]);

  return (
    <div className='flex flex-col justify-center items-center h-screen w-full bg-[#81ACDA]'>
      <div className='ml-2'>
        <Image src={uniskyLogo} alt='Humidity Image' />
      </div>
      <div className='w-[40px] h-auto'>
        <Image src={loading} alt='Loading Image' unoptimized />
      </div>
    </div>
  );
};

export default IntroPage;
