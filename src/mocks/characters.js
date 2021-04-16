import React from 'react';
import Character from './character';
import styled from 'styled-components';
import '../App.css';


const Characters = props => {
    const { dataSet } = props;

    const CharacterList = styled.div`
        font-size: 1rem;
        font-family: 'Zen Dots', sans-serif;
        border: 2px solid white;
        width: 25%;
        background-color: black;
        opacity: 90%;
        padding: 1%;
        margin-top: 3%;
    `
  
  
    return (
        <CharacterList>
            {dataSet.map((character) => {
                return (
                    <Character key={character.name} characterObj={character}/>
                )
            })}
        </CharacterList>
    );
    };




export default Characters;