import React from 'react';
import { Container, Header, Segment, Form, Select} from 'semantic-ui-react';
import data30 from "./juz30.json";
import data29 from "./juz29.json";
import surat from "./tableSurat.json"
import ModulQuiz from "./modul-quiz"

class MainApp extends React.Component {
  constructor ()
  {
    super();
    this.state={
      surat: surat,
      data30: data30,
      data29: data29,
      theAyats: [],
      pilihanSurat: [],
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
            awalayat: theSurat[i].awalAyat,
            jumayat: theSurat[i].jumAyat,
            text: '[ '+theSurat[i].noSurat+' ] '+theSurat[i].Nama,
          })
        }
      }else{
        if(theSurat[i].Juz===30){
          temppilihanSurat.push(theSurat[i])  
          pilihanSurat.push({
            key: theSurat[i].noSurat, 
            value: i, 
            awalayat: theSurat[i].awalAyat,
            jumayat: theSurat[i].jumAyat,
            text: '[ '+theSurat[i].noSurat+' ] '+theSurat[i].Nama,
          })          
        }
      }

    }  
    
    return pilihanSurat
  }
  
  handleSuratChange = (value) => {    
    const suratInfo = this.state.surat[value];
    const matchPath = this.props.match.path;  
    let testAyats = [];
    testAyats = this.gabungDataSurat(matchPath, suratInfo.awalAyat-1,suratInfo.akhirAyat);
    this.setState({
      theAyats: testAyats
    })
    
    
    
    //this.gabungDataSurat(this.props.match.path, pilihanSurat[0].awalayat-1,pilihanSurat[0].jumayat);    
  }
  updateMatchPath = () => {
    const matchPath = this.props.match.path;  
    const pilihanSurat = this.pickSurat(matchPath);      
    if(this.state.theAyats.length===0){
      let testAyats = [];
      testAyats = this.gabungDataSurat(matchPath, pilihanSurat[0].awalayat-1,pilihanSurat[0].jumayat);
      this.setState({
        theAyats: testAyats,
        pilihanSurat: pilihanSurat,
      })
    }

  }
  componentDidUpdate(prevProps){
    // Typical usage (don't forget to compare props):
    if (this.props.match.path !== prevProps.match.path) {
      console.log('ganti matchPath')
      this.updateMatchPath();
      
    }
  }
  componentDidMount() {  
    this.updateMatchPath();
  }

  render() { 
    const matchPath = this.props.match.path;  
    const pilihanSurat = this.pickSurat(matchPath);    
    
    let judul = 'Juz 30 Surat';
    if(matchPath === '/29surat'){
      judul = 'Juz 29 Surat'
    }   
    return(
      <div className="App">        
          <Container id="allContainer">
            <Header as="h1" textAlign="center">{judul}</Header>   
            <PilihSurat 
              pilihanSurat={pilihanSurat}
              handleSuratChange={this.handleSuratChange}
            />       
            <ModulQuiz              
              theAyats={this.state.theAyats}
              matchPath={matchPath}
            />
          </Container> 
        </div>
    );
    
    
  }
}

class PilihSurat extends React.Component {
  state = {
    suratTerpilih: this.props.pilihanSurat[0]
  }
  handleChange = (e, { value }) => {
    this.setState({
      suratTerpilih: this.props.pilihanSurat[value]
    })
    this.props.handleSuratChange(value);
    
  }
  componentDidUpdate(prevProps){
    // Typical usage (don't forget to compare props):
    if (this.props.pilihanSurat !== prevProps.pilihanSurat) {
      console.log("updated");
      
    }
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
              options={this.props.pilihanSurat}                             
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

