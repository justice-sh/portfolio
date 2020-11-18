import React from 'react';
import styled from 'styled-components';
import * as config from '../config';

interface Props {
   name?: string,
   caption: string,
   center?: boolean,
   className?: string,
   color?: string,
}

function SubHeader(props: Props) {
   const { name, caption, center, color } = props

   return (
      <Div center={center} color={color}>
         <H3>{name}</H3>
         <H2 color={color}>{caption}</H2>
         <Span color={color}></Span>
      </Div>
   )
}

const Div = styled.div<{ center?: boolean }>`
   text-align: ${props => props.center ? 'center' : 'left'};
   margin-bottom: ${props => props.color ? '' : '60px'};
`;

const H2 = styled.h2`
   font-size: 35px;
   font-weight: 600;
   margin: 20px 0 10px 0;
   color: ${props => props.color || config.purple}
`;

const H3 = styled.h3`
   color: ${config.navyblueDark};
`;

const Span = styled.span`
   display: inline-block;
   border: 2px dashed ${props => props.color || config.navyblueDark};
   width: 70px;
`;

export default SubHeader
