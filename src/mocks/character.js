import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';



const Character = (props) => {
    const {characterObj} = props;
    const [world, setWorld] = useState('');

    useEffect(() => {
        axios.get(characterObj.homeworld)
             .then(res => {
                 setWorld(res.data.name);
             })
             .catch(err => {
                 console.log(err);
             })
    }, []);
    
    const Wrapper = styled.div`
        margin-bottom: 3%;
        &:hover {
            color:#c7fafa;
            text-shadow: 1px 1px 5px #f0f0f0;
            box-shadow: 1px 1px 5px #c7fafa;
        }
    `

    const Name = styled.h3`
        font-size: 1.5rem;
        margin-bottom: 8px;
        margin-top: 2px;
        text-shadow: 1px 1px 5px #d2fffd;
    `

    const WorldSpacer = styled.p`
        margin-top: 3px;
    `


    return (
        <Wrapper>
          <Name>{characterObj.name}</Name>
          <p>Born: {characterObj.birth_year} --- Height: {characterObj.height} cm.</p> 
          <WorldSpacer>Homeworld: {world}</WorldSpacer>
        </Wrapper>
    )
}

export default Character;