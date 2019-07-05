import React from 'react';
import './App.css';
import data from "./juz30.json";
import Layout from "./quiz";

class App extends React.Component {
  constructor ()
  {
    super();
    this.state={
      data: data,
      noAyat: '',
      noKunci: '',
      showKunci: false
    }
  }  
  handleAcak = () => {
    console.log("acak");
    const jumAyat = this.state.data.length;
    const noAyat = Math.floor(Math.random() * jumAyat);
    const noKunci = noAyat +1
    this.setState({
      noAyat: noAyat,
      noKunci: noKunci
    }, () => {
      console.log(this.state.noAyat, "state noAyat");
      console.log(this.state.noKunci, "state noKunci");
      
    });
    console.log(noAyat, "noAyat");
    
    
    
  };
  render() {
    console.log(this.state);
    
    return (
      <div className="App">        
        <div>          
          <Layout></Layout>
          <button onClick={this.handleAcak}>Acak</button>
          <div>bacaan disini
            <Soal 
              data = {this.state.data}
              noAyat = {this.state.noAyat}
            />
            <Kunci 
              data = {this.state.data}
              noKunci = {this.state.noKunci}
            />
          </div>          
            
          
        </div>
      </div>
    );
  }
}

class Soal extends React.Component {  
  render() {
    const noAyat = this.props.noAyat;
    const soalAyat = this.props.data[noAyat];
  
    console.log(soalAyat, "soal noayat");
    if(soalAyat){
      return(
        <div className="Soal">
          <div className="ayat">{soalAyat.bacaan}</div>
          <p>{soalAyat.tafsir}</p>
        </div>
      );
    }else{
      return(
        <div></div>
      );
    }
  }
};

class Kunci extends React.Component {
  render() {
    const noKunci = this.props.noKunci;
    const kunciAyat = this.props.data[noKunci];
    if(kunciAyat){
      return(
        <div className="Kunci">
          <div className="ayat">{kunciAyat.bacaan}</div>
          <p>{kunciAyat.tafsir}</p>
        </div>
      );
    } else {
      return(
        <div></div>
      );
    }
    
  }
}

export default App;

