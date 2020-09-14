import React from 'react';
import styled from 'styled-components'
import 'bootstrap/dist/css/bootstrap.css';

const Header = styled.h1`

  font-size: 4rem;
  color: rgb(210, 31, 84)!important;
  font-weight: bolder;
  letter-spacing: 1.2;

`;



function App() {
  return (
    <div className="container-fluid">
      <Header>SCORES</Header>
    </div>
  );
}

export default App;
