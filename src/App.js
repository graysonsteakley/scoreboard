import React, {useState, useEffect} from 'react';
import styled from 'styled-components'
import 'bootstrap/dist/css/bootstrap.css';
import ScoreBoard from './components/ScoreBoard'

const Header = styled.h1`

  font-size: 20rem;
  color: rgb(210, 31, 84)!important;
  font-weight: bolder;
  letter-spacing: 2.5;
  text-align: center;
  font-family: 'Hanalei', cursive; 


`;

const AuthoredBy = styled.p`

  position: absolute;
  top: 85vh;
  right: 40vw;
  color: lightgrey;
  font-size: 2rem;
  letter-spacing: 2!important;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;


`;



function App() {

  const [HoverState, SetHoverState] = useState(false);

  const handleMouseOver = (e, ind)=>{
    SetHoverState(!HoverState);
  }
  
      
  const addText = (inputString)=>{
          

    const ScoreString = inputString.split(' ');
    const Scores = ScoreString.map((letter, ind) => {
        return (
            
            <p onMouseOver={(e, ind)=>handleMouseOver(e, ind) }
            onMouseLeave={(e, ind)=>handleMouseOver(e, ind) }
            className = {`${HoverState ? `light-text hover${ind}`: `hover${ind}`}`} style={{display: 'inline-block', cursor: 'pointer'}} key={ind} >
                {letter}&nbsp;
            </p >
           
        );
    });

    return Scores;

  }

  return (
    <>
      <div className ="background">

      </div>
      <div className="container-fluid">
        <a href="/">
        <Header>{addText('S C O R E S')}</Header>
        </a>
        <ScoreBoard/>
        <AuthoredBy>
          Hand-Crafted by Grayson Steakley
          <a className = "fancy-link" href="#"><span style={{fontSize: '2rem'}}>&nbsp;Github&nbsp;</span></a>
         
        </AuthoredBy>

      </div>
    </>
  );
}

export default App;
