import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Characters from './mocks/characters';
import styled from 'styled-components';


const App = () => {
  const [dataSet, setDataSet] = useState([]);
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios.get(`https://swapi.dev/api/people/`)
          .then(res => {
            setDataSet(res.data);
          })
          .catch(err => {
            console.log(err);
          })
  }, []);

// STYLES
  const BodyStyle = styled.div`
    height: 100vh;
    width: 100%;
    background-image: url('https://i.imgur.com/0qQnv2v.jpg');
    background-position: center;
    background-size: cover;
    color: white;
    text-align: center;
  `
  const Wrapper = styled.div`
    display: flex;
    flex-flow: nowrap column;
    justify-content: center;
    align-items: center;
  `

  const Title = styled.div`
    font-size: 2.5rem;
    font-family: 'Codystar', sans-serif;
    border: 2px solid white;
    width: 50%;
    background-color: black;
    opacity: 90%;
    padding: 1%;
    margin-top: 1%;
    font-weight: bold;
    color: #c7fafa
  `


  return (
    <BodyStyle className="App">
      <Wrapper>
        <Title className="Header">A long time ago in a galaxy far, far array....</Title>
        <Characters dataSet={dataSet}/>
      </Wrapper>
    </BodyStyle>
  );
}

export default App;
