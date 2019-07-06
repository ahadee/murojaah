import React from 'react';
import './App.css';
import data from "./juz30.json";
import surat from "./tableSurat.json"
import Layout from "./quiz";

class App extends React.Component {
  constructor ()
  {
    super();
    this.state={
      surat: surat,
      data: data,

    }    
    
    
  }
  gabungData2 = () => {
    const theAyats = JSON.parse(JSON.stringify(this.state.data));
    let theSurat = JSON.parse(JSON.stringify(this.state.surat));
    //let count = 0;
    for(let i=0; i < theAyats.length; i++){
      for(let j=0; j < theSurat.length; j++){
        if(theSurat[j].noSurat === theAyats[i].noSurat){
          Object.assign(theAyats[i], theSurat[j])
        }  
      }
    }
    //console.log(theAyats);
    return theAyats;
    
    
  }
  /*handleAcak = () => {
    const jumAyat = this.state.data.length;
    const noAyat = Math.floor(Math.random() * (jumAyat-1));
    const noKunci = noAyat +1;    
    this.setState({
      noAyat: noAyat,
      noKunci: noKunci,
    });    
  };
  componentDidMount() {
    this.handleAcak();
  }*/
  render() {  
    //console.log(this.state.data);
    
    let theAyats =[];
    if((theAyats.length===0)){
      //console.log(this.state.data);
      theAyats = this.gabungData2();
      //console.log(this.state.data);
      //console.log(theAyats);
      return (
        <div className="App">        
          <div>          
            <Layout              
              theAyats={theAyats}
            />                      
          </div>
        </div>
      );
    }
    return(
      <div></div>
    );
    
    
  }
}

export default App;

