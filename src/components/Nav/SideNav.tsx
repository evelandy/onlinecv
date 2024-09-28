import { useState, useEffect } from 'react';
import '../styles/activeNav.css';
import $ from 'jquery';

// TODO:
// 1. Fix the below TypeScript interface type "any" for [ {selectedCompany}:any ] to use the correct interface type
// 2. Come back to fix the sizes for icons in 'toolkit' section for each screen size.



export interface ISideNavProps {}

const SideNav = ({selectedCompany}:any) => {
  // const [active, setActive] = useState<boolean>(true);
  const [selected, setSelected] = useState<string>('AscendSC');
  useEffect(() => {
    handleActive()
  }, [])
  const handleActive = () => {
    $(document).on('click', 'ul li', function() {
      $(this).addClass('active').siblings().removeClass('active')
    });
  }

  useEffect(() => {
    selectedCompany(selected)
  }, [selectedCompany, selected])

  return (
    <div className={'flex flex-row mt-24'}>
      <ul className={'flex flex-col text-left sideNav text-lg lg:mr-24 lg:text-2xl'}>
        <li onClick={(e) => setSelected((e.target as Element).innerHTML)} className={'active tracking-wider hover:bg-red-alert hover:text-white-primary font-semibold'}>AscendSC</li>
        <li onClick={(e) => setSelected((e.target as Element).innerHTML)} className={'tracking-wider hover:bg-red-alert hover:text-white-primary font-semibold'}>Gretrix</li>
        <li onClick={(e) => setSelected((e.target as Element).innerHTML)} className={'tracking-wider hover:bg-red-alert hover:text-white-primary font-semibold'}>Halliburton</li>
        <li onClick={(e) => setSelected((e.target as Element).innerHTML)} className={'tracking-wider hover:bg-red-alert hover:text-white-primary font-semibold'}>Look Far Labs</li>
        {/* <li onClick={(e) => setSelected((e.target as Element).innerHTML)} className={'tracking-wider hover:bg-red-alert hover:text-white-primary font-semibold'}>GrDev</li> */}
        <li onClick={(e) => setSelected((e.target as Element).innerHTML)} className={'tracking-wider hover:bg-red-alert hover:text-white-primary font-semibold'}>PRT-Solutions</li>
        <li onClick={(e) => setSelected((e.target as Element).innerHTML)} className={'tracking-wider hover:bg-red-alert hover:text-white-primary font-semibold'}>Amity Social</li>
      </ul>
      <ul className={`ml-8 ${selected === 'AscendSC' ? 'inline' : 'hidden'} lg:text-lg`}>
      <li><h3 className={'font-bold text-xl mr-4 lg:text-2xl'}>Full-Stack Software Developer <span className={'text-red-alert'}>@ AscendSC</span></h3></li>
      <li><p className={'text-sm text-left my-2 font-medium tracking-wider ml-3'}>September 2023 - Current</p></li>
      <ul className={'text-left ml-5 tracking-wider text-md description'}>
        <li className={''}>Created a mill packing list upload feature for the web application, supporting a mill-agnostic data assimilation system that improved data integrity, reduced manual handling, and accelerated decision-making processes.</li>
        <li><p>Developed a new asset upload form for the web application, enabling users to upload .xls, .xlsx, and .csv files, which significantly improved data ingestion processes and contributed to enhanced supply chain efficiency.</p></li>
        <li><p>Implemented a bulk deletion feature for the mobile app's "task landing page," streamlining asset management and improving user experience for field operators.</p></li>
      </ul>
    </ul>
    <ul className={`ml-8 ${selected === 'Halliburton' ? 'inline' : 'hidden'} lg:text-lg`}>
      <li><h3 className={'font-bold text-xl mr-4 lg:text-2xl'}>Application Developer <span className={'text-red-alert'}>@ Halliburton</span></h3></li>
      <li><p className={'text-sm text-left my-2 font-medium tracking-wider ml-3'}>April 2022 - October 2022</p></li>
      <ul className={'text-left ml-5 tracking-wider text-md description'}>
        <li className={''}>Working closely with Product Owners, Senior Developers, QA Engineers, and Other Developers on the team, I converted legacy codebase solving bugs, creating new features, and migrating data.</li>
        <li><p>Created scripts to migrate jobs, large scale data, and other tables across infrastructure.</p></li>
        <li><p>Utilization of current standards and practices to push new features, migrations, and bug fixes to ensure scalable high quality code to maximize app performance.</p></li>
      </ul>
    </ul>
    <ul className={`ml-8 ${selected === 'Gretrix' ? 'inline' : 'hidden'} lg:text-lg`}>
      <li><h3 className={'font-bold text-xl mr-4 lg:text-2xl'}>Full Stack Web Developer <span className={'text-red-alert'}>@ Gretrix</span></h3></li>
      <li><p className={'text-sm text-left my-2 font-medium tracking-wider ml-3'}>June 2021 - May 2022 | September 2022 - September 2023</p></li>
      <ul className={'text-left ml-5 tracking-wider text-md description'}>
        <li className={''}>Worked closely with multiple clients to solve advanced issues regarding data analytics, web development and other software related issues.</li>
        <li><p>Created and Utilized custom A/B tests through Google Optimize I was able to help our client convert an extra 1% annual revenue.</p></li>
        <li><p>Created custom code to automate tasks on client’s server to reduce down-time and keep data flowing from the client’s database to their custom front end.</p></li>
      </ul>
    </ul>
    <ul className={`ml-8 ${selected === 'Look Far Labs' ? 'inline' : 'hidden'} lg:text-lg`}>
      <li><h3 className={'font-bold text-xl mr-4 lg:text-2xl'}>React Developer <span className={'text-red-alert'}>@ Look Far Labs</span></h3></li>
      <li><p className={'text-sm text-left my-2 font-medium tracking-wider ml-3'}>Sept. 2021 - May 2022</p></li>
      <ul className={'text-left ml-5 tracking-wider text-md description'}>
        <li className={''}>Working closely with project managers, designers, and back-end developers I was able to create custom features following strict guidelines to keep the project running with no issues.</li>
        <li><p>Utilizing TypeScript, React.JS, Formik and Tailwind I was able to create fast, functional, reliable features for the app, creating fully functional interactive tables for the client’s custom CMS.</p></li>
        <li><p>Develop fully responsive web applications from the ground up using ‘mobile first’ approach, media queries, and other up to date industry standard technologies.</p></li>
      </ul>
    </ul>
    <ul className={`ml-8 ${selected === 'GrDev' ? 'inline' : 'hidden'} lg:text-lg`}>
      <li><h3 className={'font-bold text-xl mr-4 lg:text-2xl'}>Full Stack Software Engineer <span className={'text-red-alert'}>@ GrDev</span></h3></li>
      <li><p className={'text-sm text-left my-2 font-medium tracking-wider ml-2'}>March. 2018 - Current</p></li>
      <ul className={'text-left ml-5 tracking-wider text-md description'}>
        <li className={''}> </li>
        <li><p> </p></li>
      </ul>
    </ul>
    <ul className={`ml-8 ${selected === 'PRT-Solutions' ? 'inline' : 'hidden'} lg:text-lg`}>
      <li><h3 className={'font-bold text-xl mr-4 lg:text-2xl'}>Full Stack Developer <span className={'text-red-alert'}>@ PRT-Solutions</span></h3></li>
      <li><p className={'text-sm text-left my-2 font-medium tracking-wider ml-1'}>Sept. 2020 - June 2021</p></li>
      <ul className={'text-left ml-5 tracking-wider text-md description'}>
        <li className={''}>Utilizing React Native, SQL and Python I was able to create a highly functional scalable mobile app in both iOS and Android.</li>
        <li><p>Creating RESTful API endpoints, I was able to keep this app flexible and lightweight.</p></li>
      </ul>
    </ul>
    <ul className={`ml-8 ${selected === 'Amity Social' ? 'inline' : 'hidden'} lg:text-lg`}>
      <li><h3 className={'font-bold text-xl mr-4 lg:text-2xl'}>Full Stack Developer <span className={'text-red-alert'}>@ Amity Social</span></h3></li>
      <li><p className={'text-sm text-left my-2 font-medium tracking-wider ml-1'}>May 2019 - Sept. 2020</p></li>
      <ul className={'text-left ml-5 tracking-wider text-md description'}>
        <li className={''}>Starting with the design files for the app I was able to create an MVP of the app to display to potential investors for the client.</li>
        <li><p>Created a SPA web page to funnel users toward the beta version of the app.</p></li>
        <li><p>Created a fully functional chat feature leveraging socket.io allowing users to communicate in real time.</p></li>
      </ul>
    </ul>
    </div>
  );
}

export default SideNav;
