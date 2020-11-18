import React, { useEffect } from 'react';
import styled from 'styled-components';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

import * as config from '../config';

// import aboutHero from '../images/about_hero.png';
import aboutHero from '../images/undraw_dev_productivity.png';
import Range from '../components/Range';
import SubHeader from '../components/SubHeader';

interface Props {
   className?: string,
}

function About(props: Props) {
   const { className } = props;

   return (
      <ABOUT id="about" className={className}>
         <Aside></Aside>

         <Main>
            <MainDiv1 className="about__maindiv1">
                  <HeroFrame></HeroFrame>
                  <HeroFrame2></HeroFrame2>
                  <Hero src={aboutHero} alt="about_hero" />
            </MainDiv1>

            <MainDiv2 className="about__maindiv2">
                  <SubHeader name="About" caption="Why Should You Hire Me?"/>

                  {/* <h3>
                     My skill set
                  </h3> */}
                  
                  <Range skill="JavaScript" value={80} />
                  <Range skill="ReactJS (with Redux...)" value={85} />
                  <Range skill="NodeJS (with Express...)" value={78} />
                  <Range skill="HTML5/CSS3" value={81} />
                  <Range skill="Web Hosting/Backend: Firebase, Heroku, Netlify, Github, Git" value={80} />
            </MainDiv2>
         </Main>

         <Aside></Aside>
      </ABOUT>
   )
}

const ABOUT = styled.div`
   display: flex;
   background: ${config.white};
   min-height: 100vh;
`;

const Main = styled.main`
   flex-basis: 90%;
   display: flex;
`;

const MainDiv1 = styled.div`
   flex-basis: 70%;
   position: relative;
   top: 0;
`;
const HeroFrame = styled.div`
   position: absolute;
   bottom: 26%;
   border: 14px solid ${config.navyblueDark};
   border-top: none;
   width: 350px;
   height: 380px;
`;
const HeroFrame2 = styled(HeroFrame)`
   height: 412px;
   width: 360px;
   border: none;
   border-top: 14px solid ${config.navyblueDark};
   border-left: 14px solid ${config.navyblueDark};
   transform: skewY(10deg);
`;
const Hero = styled.img`
   margin: 70px 0 0 30px;
   width: 300px;
   height: 370px;
`;

const MainDiv2 = styled.div`
   flex-basis: 30%;

   p { 
      color: ${config.navyblueLight}
   }
`;

const Aside = styled.aside`
   flex-basis: 10%;
`;

export default About
