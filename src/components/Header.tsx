import React, { useState } from 'react';
import { motion, useCycle } from 'framer-motion';
import styled from 'styled-components';

import { MenuToggle } from './MenuToggle';
import Nav from './Nav';
import logo from '../logo.svg';
import Aside from '../components/Aside';

import { colors } from '../config';

interface Props {
   matches: boolean,
}

function Header(props: Props) {
   const { matches } = props;

   const [isOpen, toggleOpen] = useCycle(false, true);
   const [sticky, setSticky] = useState(false);

   window.addEventListener('scroll', () => {
      if (window.scrollY > 0) {
        if (sticky === false) {
           setSticky(true);
         }
      } else if (window.scrollY < 2) {
         setSticky(false);
      }
   });

   const logoVariants = {
      start: {
         scale: 0
      },
      stop: {
         scale: 1,
         transition: { duration: 1 }
      }
   }

   return (
      <HeaderComp layout transition={{ duration: 0.5 }}
         className={sticky ? 'header--sticky' : ''}
         initial={false}
         animate={!matches ? "keep" : isOpen ? "open" : "closed"}
         sticky={sticky}
         matches={matches}
      >

         <Aside></Aside>
         
         <Main>
            <Div>
               <Img variants={logoVariants} initial="start" animate="stop" src={logo} alt="logo" />
            </Div>

            <Nav sticky={sticky} />

            <MenuToggle toggle={() => toggleOpen() } />
         </Main>

         <Aside></Aside>
      
      </HeaderComp>
   )
}

const HeaderComp = styled(motion.header)<{ sticky: boolean, matches: boolean }>`
   position: ${props => props.sticky ? 'sticky' : 'absolute'};
   top: 0;
   display: flex;
   height: 47px;
   width: 100%;;
   z-index: 111;

   &.header--sticky {
      background: ${colors.coolGray};
   }
`;

const Div = styled.div`
   width: 150px;
`;

const Img = styled(motion.img)`
   padding-top: 15px;
`;

const Main = styled.main`
   flex-basis: 90%;
   display: flex;
   justify-content: space-between;
`;

export default Header;
