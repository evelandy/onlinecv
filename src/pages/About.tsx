import React, { FC, useEffect, Suspense, useState } from 'react';
import IPage from '../interfaces/page';
import '../components/styles/blinker.css';
import '../components/styles/about.css';
import '../components/styles/darkMode.css';
import { Route } from 'react-router-dom';
// import { Canvas } from '@react-three/fiber';
// import Sphere from '../components/three/Sphere';
// import GhBox from '../components/three/GhBox';
// import EmailBox from '../components/three/EmailBox';
// import LinkedInBox from '../components/three/LinkedInBox';

const HomePage: FC<IPage> = ({name, globalTheme}) => {
  const githubIcon = () => {
    return (
      <svg height="52" viewBox="0 0 1792 1792" width="52" xmlns="http://www.w3.org/2000/svg">
        <path d="M522 1352q-8 9-20-3-13-11-4-19 8-9 20 3 12 11 4 19zm-42-61q9 12 0 19-8 6-17-7t0-18q9-7 17 6zm-61-60q-5 7-13 2-10-5-7-12 3-5 13-2 10 5 7 12zm31 34q-6 7-16-3-9-11-2-16 6-6 16 3 9 11 2 16zm129 112q-4 12-19 6-17-4-13-15t19-7q16 5 13 16zm63 5q0 11-16 11-17 2-17-11 0-11 16-11 17-2 17 11zm58-10q2 10-14 14t-18-8 14-15q16-2 18 9zm964-956v960q0 119-84.5 203.5t-203.5 84.5h-224q-16 0-24.5-1t-19.5-5-16-14.5-5-27.5v-239q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-121-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-86-13.5q-44 113-7 204-79 85-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-40 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 103t.5 68q0 22-11 33.5t-22 13-33 1.5h-224q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960q119 0 203.5 84.5t84.5 203.5z"/>
      </svg>  
    );
  };

  const linkedinIcon = () => {
    return (
      <svg height="57" width="56" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 490 490">
        <path d="M417.2 64H96.8C79.3 64 64 76.6 64 93.9V415c0 17.4 15.3 32.9 32.8 32.9h320.3c17.6 0 30.8-15.6 30.8-32.9V93.9C448 76.6 434.7 64 417.2 64zM183 384h-55V213h55v171zm-25.6-197h-.4c-17.6 0-29-13.1-29-29.5 0-16.7 11.7-29.5 29.7-29.5s29 12.7 29.4 29.5c0 16.4-11.4 29.5-29.7 29.5zM384 384h-55v-93.5c0-22.4-8-37.7-27.9-37.7-15.2 0-24.2 10.3-28.2 20.3-1.5 3.6-1.9 8.5-1.9 13.5V384h-55V213h55v23.8c8-11.4 20.5-27.8 49.6-27.8 36.1 0 63.4 23.8 63.4 75.1V384z"/>
      </svg>
    );
  };

  const emailIcon = () => {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 25 25">
        <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/>
      </svg>
    );
  };

  useEffect(() => {

  }, []);
  
  return (
    <div className={'lg:pt-10 text-center'}>
      <div className={'flex flex-column justify-center mt-40'}>
        <h1 className={'lg:text-7xl text-6xl font-semibold text text-center md:whitespace-nowrap'}>Hi, I'm <span className={"text-red-600 md:text-black dm-name-header"}>William<span className={"md:hidden"}>.</span></span><span className={'text-red-600 hidden md:inline'}> Griffin.</span></h1>
      </div>
      <span className={'flex flex-column justify-center mt-6'}>
      <h5 className={'text-xl mb-6'}>I am a full-stack developer who loves front and back-end development with a passion for creating apps in Python, JavaScript, React JS, React Native, and Three.JS</h5>
      </span>
      {/* <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Sphere />
      </Canvas> */}
      <div className="flex flex-row justify-center cursor-pointer home-contact-icons">
        {/* <Canvas onClick={()=> window.open("https://github.com/evelandy", "_blank")}>
          <Suspense fallback={null}>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <GhBox />
          </Suspense>
        </Canvas>
        <Canvas onClick={()=> window.open("mailto:william.griffin@wrgcv.com?subject=Contact from portfolio", "_blank")}>
          <Suspense fallback={null}>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <EmailBox />
          </Suspense>
        </Canvas>
        <Canvas onClick={()=> setTimeout(() => {window.open("https://www.linkedin.com/in/william-griffin-4a4392b9/", "_blank")}, 2000)}>
          <Suspense fallback={null}>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <LinkedInBox />
          </Suspense>
        </Canvas> */}
        <span onClick={()=> window.open("https://github.com/evelandy", "_blank")} className={'mx-8 mt-8 transform hover:scale-110 social-link'}>{githubIcon()}</span>
        <span onClick={()=> window.open("mailto:william.griffin@wrgcv.com?subject=Contact from portfolio", "_blank")} className={'mx-9 mt-7 transform hover:scale-110 social-link'}>{emailIcon()}</span>
        <span onClick={()=> window.open("https://www.linkedin.com/in/william-griffin-4a4392b9/", "_blank")} className={'mx-8 mt-7 transform hover:scale-110 social-link'}>{linkedinIcon()}</span>
      </div>
    </div>
  );
}

export default HomePage;
