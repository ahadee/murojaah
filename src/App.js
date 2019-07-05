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
      noAyat: '',
      noKunci: '',
      showKunci: false,
      jumlahSoal: 10
    }
    
    
  }  
  gabungData = (value) => {
    let theObjet = {};
    for(let i=0; i < this.state.surat.length; i++){
      if(this.state.surat[i].noSurat === this.state.data[value].noSurat){
        theObjet = Object.assign(this.state.data[value], this.state.surat[i])
        return theObjet;        
      }      
    }
  }
  handleAcak = () => {
    //console.log("acak");
    const jumAyat = this.state.data.length;
    const noAyat = Math.floor(Math.random() * (jumAyat-1));
    const noKunci = noAyat +1

    
    this.setState({
      noAyat: noAyat,
      noKunci: noKunci,
    });
    
    
    
  };
  componentDidMount() {
    //console.log(this.state.data);
    //console.log(this.state.surat);
    
    this.handleAcak();
    //console.log(this.gabungData(1));
  }
  render() {  
    let soalAyat={}; 
    let kunciAyat={};
    if(this.state.noAyat!==''){
      soalAyat = this.gabungData(this.state.noAyat);
      kunciAyat = this.gabungData(this.state.noKunci);
      
    }else{
      //console.log('belum ada');
      
    }
    return (
      <div className="App">        
        <div>          
          <Layout
            soalAyat = {soalAyat}            
            kunciAyat = {kunciAyat}
            onAcak={this.handleAcak}
          />                      
        </div>
      </div>
    );
  }
}

export default App;

