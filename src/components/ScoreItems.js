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
                {nameItems}
            </ul>
            <ul className="the-List mr-4">
                {scoreItems}
            </ul>
            </TextContainer>
        )
    }
}
