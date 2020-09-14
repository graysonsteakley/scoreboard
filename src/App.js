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
  font-family: 'Hanalei', cursive!important; 


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
            
            <span onMouseOver={(e, ind)=>handleMouseOver(e, ind) }
            onMouseLeave={(e, ind)=>handleMouseOver(e, ind) }
            className = {`${HoverState ? `main-text hover${ind}`: `light-text text-up-anim2 hover${ind}`}`} style={{display: 'inline', cursor: 'pointer'}} key={ind} >
                {letter}&nbsp;
            </span >
           
        );
    });

    return Scores;

  }

  return (
    <>
      <div className ="background">

      </div>
      <div className="container-fluid">
        <Header>{addText('S C O R E S')}</Header>
        <ScoreBoard/>

      </div>
    </>
  );
}

export default App;
