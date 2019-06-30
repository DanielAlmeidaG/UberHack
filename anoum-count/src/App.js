import React from 'react';
import './App.css';

function App() {
  var loadingProgress = 45;
  var loadingClasse = 1;
  switch (loadingProgress){
    default:
    case loadingProgress<33:
      loadingClasse = 1;
    case 33<loadingProgress<66:
      loadingClasse = 2;
    case loadingProgress>66:
      loadingClasse = 3;  
  }
  return (
    <div className="full-wrapper">
      <header className="title"> meu vagao :) 
      </header>
      <wrapper className="train-wrapper">       
        <wrapper className="wagon"> 
          <div className="box"><div className="loading" ></div></div>
          <div className="wagonDrawInicio"></div>
        </wrapper>

        <wrapper className="wagon">
          <div className="box"></div>
          <img className="wagonDrawMeio"></img>
        </wrapper>

        <wrapper className="wagon"> 
          <div className="box"></div>
          <img className="wagonDrawMeio"></img>
        </wrapper>

        <wrapper className="wagon"> 
          <div className="box"></div>
          <img className="wagonDrawMeio"></img>
        </wrapper>

        <wrapper className="wagon"> 
          <div className="box"></div>
          <img className="wagonDrawMeio"></img>
        </wrapper>

        <wrapper className="wagon"> 
          <div className="box"></div>
          <img className="wagonDrawFim"></img>
        </wrapper>

      </wrapper>

    </div>
  );
}

export default App;
