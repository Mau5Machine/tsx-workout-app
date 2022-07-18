import React from 'react';
import styled from 'styled-components'
import { Col } from 'antd'

interface Props {
  children: React.ReactNode;
}

const SectionRow = styled.div`
  min-height: 200px;
  border: 1px solid black;
`

const Section = ({children}: Props) => {
  return (
    <SectionRow>
      {children}
    </SectionRow>
  );
};

export default Section;