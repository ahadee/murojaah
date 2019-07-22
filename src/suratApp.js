import React from 'react';
import { Container, Header, Segment, Form, Label, Select} from 'semantic-ui-react';
import data30 from "./juz30.json";
import data29 from "./juz29.json";
import surat from "./tableSurat.json"
import Modul30Utuh from "./modul30utuh";

class MainApp extends React.Component {
  constructor ()
  {
    super();
    this.state={
      surat: surat,
      data30: data30,
      data29: data29,
    }    
    
    
  }
  gabungDataSurat = (matchPath, awalAyat, JumlahAyat) => {
    let theAyats = {}
    if(matchPath==='/29surat'){
      theAyats = JSON.parse(JSON.stringify(this.state.data29));

    } else {
      theAyats = JSON.parse(JSON.stringify(this.state.data30));
    }    
    let theSurat = JSON.parse(JSON.stringify(this.state.surat));
    for(let i=0; i < theAyats.length; i++){
      for(let j=0; j < theSurat.length; j++){
        if(theSurat[j].noSurat === theAyats[i].noSurat){
          Object.assign(theAyats[i], theSurat[j])
        }  
      }
    }    
    const ayatnya = theAyats.slice(awalAyat, JumlahAyat);
    
    return ayatnya;
    
    
  }
  pickSurat = (matchPath) => {
    let theSurat = JSON.parse(JSON.stringify(this.state.surat));
    let temppilihanSurat = [];
    let pilihanSurat = [];
    for(let i=0; i<theSurat.length; i++){
      if(matchPath === '/29surat'){
        if(theSurat[i].Juz===29){
          temppilihanSurat.push(theSurat[i])
          pilihanSurat.push({
            key: theSurat[i].noSurat, 
            value: i, 
            text: '[ '+theSurat[i].noSurat+' ] '+theSurat[i].Nama,
          })
        }
      }else{
        if(theSurat[i].Juz===30){
          temppilihanSurat.push(theSurat[i])  
          pilihanSurat.push({
            key: theSurat[i].noSurat, 
            value: i, 
            text: '[ '+theSurat[i].noSurat+' ] '+theSurat[i].Nama,
          })            
        }
      }

    }
    
    /*for(let i=0; i<temppilihanSurat.length; i++){      
      pilihanSurat.push({
        key: temppilihanSurat[i].noSurat, 
        value: temppilihanSurat[i].noSurat, 
        text: '[ '+temppilihanSurat[i].noSurat+' ] '+temppilihanSurat[i].Nama,
        awalayat: temppilihanSurat[i].awalAyat,
        akhirayat: temppilihanSurat[i].akhirAyat,
        jumayat: temppilihanSurat[i].jumAyat
      })
    } */   
    
    return pilihanSurat
  }
  
  handleSuratChange = (value) => {
    console.log(value);
    
    //this.gabungDataSurat(this.props.match.path, pilihanSurat[0].awalayat-1,pilihanSurat[0].jumayat);    
  }

  render() { 
    const matchPath = this.props.match.path;  
    const pilihanSurat = this.pickSurat(matchPath);
    console.log(pilihanSurat);
    
    let judul = 'Juz 30 Surat';
    if(matchPath === '/29surat'){
      judul = 'Juz 29 Surat'
    }    
    let theAyats =[];       
    if((theAyats.length===0)){
      theAyats = this.gabungDataSurat(matchPath, pilihanSurat[0].awalayat-1,pilihanSurat[0].jumayat);
      return (
        <div className="App">        
          <Container id="allContainer">
            <Header as="h1" textAlign="center">{judul}</Header>   
            <PilihSurat 
              pilihanSurat={pilihanSurat}
            />       
            <Modul30Utuh              
              theAyats={theAyats}
              matchPath={matchPath}
            />                      
          </Container> 
        </div>
      );
    }
    return(
      <div></div>
    );
    
    
  }
}

class PilihSurat extends React.Component {
  handleChange = (e, { value }) => {
    console.log(value);
    //this.props.handleChange(value);
  }
  render() {
    const pilihanSurat = this.props.pilihanSurat
    
    return (
      <Segment>
        <Form.Group inline>
          <Form.Field>
            <label className="text"><b>Pilih Surat</b></label>
            <Select 
              placeholder='Select your country' 
              options={pilihanSurat} 
              defaultValue={pilihanSurat[0].value}
              selectOnNavigation={false} 
              onChange={this.handleChange}
              />
          </Form.Field>
        </Form.Group>
      </Segment>
      
    );
  }
}

export default MainApp;

