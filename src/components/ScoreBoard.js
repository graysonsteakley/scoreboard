import React, { Component } from 'react';
import styled from 'styled-components';
import ScoreItems from './ScoreItems';


const ScoreBoardContainer = styled.div`

    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;


`;


export default class ScoreBoard extends Component {


    constructor(props){
        super(props);
        
        this.state = {
            items: []
        };

        this.addItem = this.addItem.bind(this);
    }



    addItem(e){
        e.preventDefault();
        if(this._nameElement.value !== "" && this._scoreElement.value !== ""  && !isNaN(this._scoreElement.value)){
            var newItem = {
                name: this._nameElement.value,
                score: this._scoreElement.value,
                key: Date.now()
            };
            
            this.setState((prevState)=>{
                return{
                    items: prevState.items.concat(newItem).sort(
                        (a, b) => {
                            return b.score - a.score;
                        }
                    )
                };
            });
        }
        console.log(this.state.items);

        this._nameElement.value = "";
        this._scoreElement.value = "";

    }

    render() {
        return (
            <ScoreBoardContainer>
                <form onSubmit={this.addItem}>
                    <input 
                    ref={(a) => this._nameElement = a}
                    placeholder="Enter Name:"/>
                     <input 
                    className="mt-2"
                    ref={(a) => this._scoreElement = a}
                    placeholder="Enter Score:"/>
                    <button type="submit" style={{color:'lavender', fontSize: '3rem', background: 'red'}} className="btn">
                        Enter
                    </button>

                </form>
                <ScoreItems entries = {this.state.items}/>
            </ScoreBoardContainer>
        )
    }
}
