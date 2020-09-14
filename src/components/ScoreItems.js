import React, { Component } from 'react';
import styled from 'styled-components';


const TextContainer = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;

`;

export default class ScoreItems extends Component {
    
    createNames(player){
    return (
        <li key={player.key}>
            <div style={{display:"inline-block", fontSize: "3rem"}} className="mr-5">{player.name}</div>
        </li>);
    }

    createScores(score){
        return(
            <li key={score.key}>
                <div style={{display:"inline-block", fontSize: "3rem"}} className="ml-5">{score.score}</div>
            </li>
        );
    }

    
    render() {

        var scoreEntries = this.props.entries;
        var nameItems = scoreEntries.map(this.createNames);
        var scoreItems = scoreEntries.map(this.createScores);

        return (
            <TextContainer>
            <ul className="the-List mr-4">
                <li><div className="mb-3 mr-5" style={{display:"inline-block", textAlign: 'center', fontSize: "5rem"}}>NAMES</div></li>
                {nameItems}
            </ul>
            <ul className="the-List mr-4">
            <li><div className="mb-3 ml-5" style={{display:"inline-block", textAlign: 'center', fontSize: "5rem"}}>SCORES</div></li>
                {scoreItems}
            </ul>
            </TextContainer>
        )
    }
}
