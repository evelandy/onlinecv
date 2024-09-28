import { FC } from 'react';
import { Link } from 'react-router-dom';
import { BitBucketLogo, XMLLogo, GithubLogo, AzureLogo, OxideLogo, ApacheLogo, AWSLogo, backArrowIcon, BootStrapLogo, CSSLogo, FlaskLogo, GCPLogo, GitLogo, HTMLLogo, JavaScriptLogo, MySQLLogo, NGINXLogo, PythonLogo, ReactLogo, ReactNativeLogo, SQLiteLogo, TailwindLogo, TypeScriptLogo, JALogo, WPLogo, ShopifyLogo, AngularLogo, GALogo, GTMLogo, LaravelLogo, PHPLogo, XCodeLogo, OptimizeLogo, MagentoLogo, ZapierLogo, ProductiveLogo, FormikLogo, SQLAlchemyLogo, RestAPILogo, KotlinLogo, AndroidStudioLogo, PostgresLogo, GraphQLLogo, ApolloLogo, NodeLogo, ReduxLogo, JsonLogo } from '../svg';
import '../components/styles/experienceSkills.css';

interface ISkillSet {
  company: string | undefined
}

  const SkillSet: FC<ISkillSet> = ({company}) => {
    const ascSkills = () => {
      return (
        <ul className={'grid grid-cols-2 w-full mx-auto mt-12 skills lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'}>
          <li>{JavaScriptLogo()}</li>
          <li>{HTMLLogo()}</li>
          <li>{CSSLogo()}</li>
          <li>{ReactLogo()}</li>
          <li>{NodeLogo()}</li>
          <li>{TailwindLogo()}</li>
          <li>{GraphQLLogo()}</li>
          <li>{ApolloLogo()}</li>
          <li>{RestAPILogo()}</li>
          <li>{TypeScriptLogo()}</li>
          <li>{ReduxLogo()}</li>
          <li>{PostgresLogo()}</li>
          <li>{JsonLogo()}</li>
          <li>{GitLogo()}</li>
          <li>{GithubLogo()}</li>
          <li>{AzureLogo()}</li>
          <li>{KotlinLogo()}</li>
          <li>{AndroidStudioLogo()}</li>
          <li className={'mt-3'} style={{color: '#dc2626', fontWeight: '900', letterSpacing: '.5px', fontSize: '12px', textTransform: 'uppercase'}}><Link className={''} to='/'>{backArrowIcon()}</Link>Back</li>
        </ul>
      );
    }

    const halSkills = () => {
      return (
        <ul className={'grid grid-cols-2 w-full mx-auto mt-12 skills lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'}>
          <li>{JavaScriptLogo()}</li>
          <li>{HTMLLogo()}</li>
          <li>{CSSLogo()}</li>
          <li>{TypeScriptLogo()}</li>
          <li>{JALogo()}</li>
          <li>{GitLogo()}</li>
          <li>{OxideLogo()}</li>
          <li>{GithubLogo()}</li>
          <li>{XMLLogo()}</li>
          <li>{AzureLogo()}</li>
          <li style={{backgroundColor: 'white', paddingTop: '1px', paddingLeft: '3px', paddingRight: '3px'}}>{MySQLLogo()}</li>
          <li className={'mt-3'} style={{color: '#dc2626', fontWeight: '900', letterSpacing: '.5px', fontSize: '12px', textTransform: 'uppercase'}}><Link className={''} to='/'>{backArrowIcon()}</Link>Back</li>
        </ul>
      );
    }

    const gxSkills = () => {
      return (
        <ul className={'grid grid-cols-2 w-full mx-auto mt-12 skills lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'}>
          <li>{PythonLogo()}</li>
          <li>{JavaScriptLogo()}</li>
          <li>{HTMLLogo()}</li>
          <li>{CSSLogo()}</li>
          <li>{ReactLogo()}</li>
          <li>{GALogo()}</li>
          <li>{GTMLogo()}</li>
          <li>{AngularLogo()}</li>
          <li>{FlaskLogo()}</li>
          <li>{RestAPILogo()}</li>
          <li>{PHPLogo()}</li>
          <li>{LaravelLogo()}</li>
          <li>{GitLogo()}</li>
          <li>{AzureLogo()}</li>
          <li>{GithubLogo()}</li>
          <li>{BitBucketLogo()}</li>
          <li style={{backgroundColor: 'white', paddingTop: '1px', paddingLeft: '3px', paddingRight: '3px'}}>{MySQLLogo()}</li>
          <li style={{backgroundColor: 'white', paddingTop: '1px', paddingLeft: '3px', paddingRight: '3px'}}>{AWSLogo()}</li>
          <li>{GCPLogo()}</li>
          <li>{NGINXLogo()}</li>
          <li>{ApacheLogo()}</li>
          <li>{WPLogo()}</li>
          <li>{ShopifyLogo()}</li>
          <li>{TailwindLogo()}</li>
          <li>{BootStrapLogo()}</li>
          <li>{OptimizeLogo()}</li>
          <li>{MagentoLogo()}</li>
          <li>{ZapierLogo()}</li>
          <li>{ProductiveLogo()}</li>
          <li className={'mt-3'} style={{color: '#dc2626', fontWeight: '900', letterSpacing: '.5px', fontSize: '12px', textTransform: 'uppercase'}}><Link className={''} to='/'>{backArrowIcon()}</Link>Back</li>
        </ul>
      );
    }

    const lflSkills = () => {
      return (
        <ul className={'grid grid-cols-2 w-full mx-auto mt-12 skills lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'}>
          <li>{JavaScriptLogo()}</li>
          <li>{HTMLLogo()}</li>
          <li>{CSSLogo()}</li>
          <li>{PHPLogo()}</li>
          <li>{ReactLogo()}</li>
          <li>{TypeScriptLogo()}</li>
          <li>{RestAPILogo()}</li>
          <li>{FormikLogo()}</li>
          <li>{LaravelLogo()}</li>
          <li>{GitLogo()}</li>
          <li>{BitBucketLogo()}</li>
          <li>{AzureLogo()}</li>
          <li style={{backgroundColor: 'white', paddingTop: '1px', paddingLeft: '3px', paddingRight: '3px'}}>{MySQLLogo()}</li>
          <li style={{backgroundColor: 'white', paddingTop: '1px', paddingLeft: '3px', paddingRight: '3px'}}>{AWSLogo()}</li>
          <li>{GCPLogo()}</li>
          <li>{NGINXLogo()}</li>
          <li>{WPLogo()}</li>
          <li>{TailwindLogo()}</li>
          <li className={'mt-3'} style={{color: '#dc2626', fontWeight: '900', letterSpacing: '.5px', fontSize: '12px', textTransform: 'uppercase'}}><Link className={''} to='/'>{backArrowIcon()}</Link>Back</li>
        </ul>
      );
    }

    const prtSkills = () => {
      return (
        <ul className={'grid grid-cols-2 w-full mx-auto mt-12 skills lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'}>
          <li>{JavaScriptLogo()}</li>
          <li>{HTMLLogo()}</li>
          <li>{CSSLogo()}</li>
          <li>{ReactLogo()}</li>
          <li>{PythonLogo()}</li>
          <li>{RestAPILogo()}</li>
          <li>{SQLAlchemyLogo()}</li>
          <li>{FlaskLogo()}</li>
          <li>{GitLogo()}</li>
          <li>{ReactNativeLogo()}</li>
          <li style={{backgroundColor: 'white', paddingTop: '1px', paddingLeft: '3px', paddingRight: '3px'}}>{SQLiteLogo()}</li>
          <li style={{backgroundColor: 'white', paddingTop: '1px', paddingLeft: '3px', paddingRight: '3px'}}>{MySQLLogo()}</li>
          <li>{NGINXLogo()}</li>
          <li>{BootStrapLogo()}</li>
          <li>{XCodeLogo()}</li>
          <li className={'mt-3'} style={{color: '#dc2626', fontWeight: '900', letterSpacing: '.5px', fontSize: '12px', textTransform: 'uppercase'}}><Link className={''} to='/'>{backArrowIcon()}</Link>Back</li>
        </ul>
      );
    }

    const amitySkills = () => {
      return (
        <ul className={'grid grid-cols-2 w-full mx-auto mt-12 skills lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'}>
          <li>{JavaScriptLogo()}</li>
          <li>{HTMLLogo()}</li>
          <li>{CSSLogo()}</li>
          <li>{ReactLogo()}</li>
          <li>{PythonLogo()}</li>
          <li>{RestAPILogo()}</li>
          <li>{SQLAlchemyLogo()}</li>
          <li>{FlaskLogo()}</li>
          <li>{GitLogo()}</li>
          <li>{ReactNativeLogo()}</li>
          <li style={{backgroundColor: 'white', paddingTop: '1px', paddingLeft: '3px', paddingRight: '3px'}}>{SQLiteLogo()}</li>
          <li style={{backgroundColor: 'white', paddingTop: '1px', paddingLeft: '3px', paddingRight: '3px'}}>{MySQLLogo()}</li>
          <li>{ApacheLogo()}</li>
          <li>{BootStrapLogo()}</li>
          <li>{XCodeLogo()}</li>
          <li className={'mt-3'} style={{color: '#dc2626', fontWeight: '900', letterSpacing: '.5px', fontSize: '12px', textTransform: 'uppercase'}}><Link className={''} to='/'>{backArrowIcon()}</Link>Back</li>
        </ul>
      );
    }

    const companySkill = (
      company === 'AscendSC' ? ascSkills() :
      company === 'Halliburton' ? halSkills() :
      company === 'Gretrix' ? gxSkills() :
      company === 'Look Far Labs' ? lflSkills() :
      company === 'PRT-Solutions' ? prtSkills() :
      company === 'Amity Social' ? amitySkills() :
      amitySkills()
    );
    
  return (
    <div className={'mt-24 2xl:mt-60'}>
      <h2 className={'text-4xl font-bold'}>My Tool Kit at {company}</h2>
      {/* <ul className={'grid grid-cols-3 w-full mx-auto mt-12 skills lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-8'}> */}

        {companySkill}

        {/* {halSkills()} */}

        {/* <li>{JavaScriptLogo()}</li>
        <li>{HTMLLogo()}</li>
        <li>{CSSLogo()}</li>
        <li>{ReactLogo()}</li>
        <li>{AngularLogo()}</li>
        <li>{TypeScriptLogo()}</li>
        <li>{PythonLogo()}</li>
        <li>{FlaskLogo()}</li>
        <li>{GitLogo()}</li>
        <li>{ReactNativeLogo()}</li>
        <li>{JALogo()}</li>
        <li style={{backgroundColor: 'white', paddingTop: '1px', paddingLeft: '3px', paddingRight: '3px'}}>{SQLiteLogo()}</li>
        <li style={{backgroundColor: 'white', paddingTop: '1px', paddingLeft: '3px', paddingRight: '3px'}}>{MySQLLogo()}</li>
        <li style={{backgroundColor: 'white', paddingTop: '1px', paddingLeft: '3px', paddingRight: '3px'}}>{AWSLogo()}</li>
        <li>{GCPLogo()}</li>
        <li>{NGINXLogo()}</li>
        <li>{ApacheLogo()}</li>
        <li>{WPLogo()}</li>
        <li>{ShopifyLogo()}</li>
        <li>{TailwindLogo()}</li>
        <li>{BootStrapLogo()}</li>
        <li>{GALogo()}</li>
        <li>{GTMLogo()}</li> */}

        {/* 

        ====================================
        ++++ Maybe change the AWS logo? ++++
        ====================================
        Amity
          OAuth
        */}

        {/* <li className={'mt-3'} style={{color: '#dc2626', fontWeight: '900', letterSpacing: '.5px', fontSize: '12px', textTransform: 'uppercase'}}><Link className={''} to='/'>{backArrowIcon()}</Link>Back</li> */}
      {/* </ul> */}
    </div>
  );
}

export default SkillSet;
