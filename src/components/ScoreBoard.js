import React, { Component } from 'react';
import styled from 'styled-components';
import ScoreItems from './ScoreItems';


const ScoreBoardContainer = styled.div`

    width: 100%;
    height: 60vh;
    display: flex;
    justify-content: center;
    align-items: center;


    @media screen and (max-width: 800px) {
        flex-direction: column;
        justify-content: flex-start;
      }

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

        if(this._nameElement.value !== "" && this._scoreElement.value !== "" && this._nameElement.value.length < 20 && this._scoreElement.value.length < 10  && !isNaN(this._scoreElement.value)){

            var newItem = {
                name: this._nameElement.value,
                score: this._scoreElement.value,
                key: Date.now()
            };
            
            //ADDS THE NEW SCORE OBJECT AND SORTS THE NEW STATE
            this.setState((prevState)=>{
                if(this.state.items.length < 7){                
                    return{
                        items: prevState.items.concat(newItem).sort(
                            (a, b) => {
                                return b.score - a.score;
                            }
                        )
                    };
                }
                else{
                    
                    //REMOVES THE CURRENT LOWEST VALUE AND REPLACES WITH NEW ONE AFTER LIST GETS TO LARGE
                    const b = prevState.items;
                    b.pop();

                    return{
                           items: b.concat(newItem).sort(
                            (a, b) => {
                                return b.score - a.score;
                            }
                        )
                    }

                }

            });
        }

        //RESETS INPUT VALUES
        this._nameElement.value = "";
        this._scoreElement.value = "";

    }

    render() {
        return (
            <ScoreBoardContainer>
                <form onSubmit={this.addItem} className="ml-5">
                    <input 
                    ref={(a) => this._nameElement = a}
                    placeholder="Enter Name:"/>
                     <input 
                    className="mt-2"
                    ref={(a) => this._scoreElement = a}
                    placeholder="Enter Score:"/>
                    <button type="submit" style={{color:'lavender', fontSize: '3rem', background: 'red'}} className="btn-main">
                        Enter
                    </button>

                </form>
                <ScoreItems entries = {this.state.items}/>
            </ScoreBoardContainer>
        )
    }
}
