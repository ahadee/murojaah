import React from 'react';
import { Container, Grid, Header} from 'semantic-ui-react'
import JumSoalForm from "./jum-soal-form";
import Waktu from './waktu-component';
import ActionComponent from './action-component';
import SkorComponent from './skor-component';
import KunciComponent from './kunci-component';
import ToggleKunci from './toggleKunci';
import SoalComponent from './soal-component';
import ModulContext from "./modul-context";

class Modul30Utuh extends React.Component {
  state = {
    theAyats: this.props.theAyats,
    currentSoal: 1,
    packSoal: [],
    packKunci:[],
    jumSoalModal : false,
    jumSoal: 10,
    showKunci: false,    
  } 
  createPackSoal = (murojaahUrut=false) => {  
    let tempKeySoal =[];
    let tempPackSoal = [];
    let tempPackKunci = [];
    for(let i=0; i < this.state.theAyats.length; i++){
      tempKeySoal[i]=i;
    } 
    if(!murojaahUrut){
      tempKeySoal = this.shuffle(tempKeySoal);
    }    
    tempKeySoal = tempKeySoal.slice(0, this.state.jumSoal);
    for(let i=0; i<tempKeySoal.length; i++){
      tempPackSoal.push(this.state.theAyats[tempKeySoal[i]]);
      if(i===this.state.theAyats.length-1){
        tempPackKunci.push(this.state.theAyats[tempKeySoal[i]]);              
      }else{
        tempPackKunci.push(this.state.theAyats[tempKeySoal[i]+1]);      
      }
      
    }

    this.setState({
      packSoal:tempPackSoal, 
      packKunci:tempPackKunci,
      currentSoal: 1
    });
  } 
  shuffle = (array) => {
    let currentIndex = array.length;
    let temporaryValue;
    let randomIndex;
    
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }
  createSingleSoal = () => {
    const noAyat = this.handleAcak()-1;
    const currentindex = this.state.currentSoal-1;
    const tempPackSoal = this.state.packSoal;
    const tempPackKunci = this.state.packKunci;
    
    tempPackSoal[currentindex] = this.state.theAyats[noAyat];
    if(noAyat===this.state.theAyats.length-1){
      tempPackKunci[currentindex] = this.state.theAyats[noAyat];
    }else{
      tempPackKunci[currentindex] = this.state.theAyats[noAyat+1];
    } 
    

    this.setState({
      packSoal: tempPackSoal,
      packKunci: tempPackKunci
    })   
  }

  handleAcak = () => {
    const jumAyat = this.state.theAyats.length;
    const hasilAcak = Math.floor(Math.random() * (jumAyat));
    return hasilAcak;     
  };

  resetSoal = () => {
    let tempPackSoal = this.state.packSoal;
    for(let i=0; i<tempPackSoal.length; i++){
      tempPackSoal[i].skor=null;
    }
    this.setState({
      currentSoal:1,
      packSoal: tempPackSoal
    });
  };

  handleMurojaahUrut = () => {
    const jumSoal = this.state.theAyats.length;
    this.setState({jumSoal:jumSoal}, () => this.createPackSoal(true));   
  }

  bukaJumSoal = () => this.setState({jumSoalModal: true});

  tutupJumSoal = () => this.setState({jumSoalModal: false});

  handleSubmitJumSoal = (value) => {    
    this.setState({jumSoal: value, currentSoal: 1}, () =>{
      this.createPackSoal();
    });
    this.tutupJumSoal();
  }; 

  handleToggleKunci = () => {
    const nextKunci = !this.state.showKunci;
    this.setState({showKunci: nextKunci});
  }

  handleNextSoal = () => {
    if(this.state.currentSoal < this.state.jumSoal){
      this.setState({currentSoal: this.state.currentSoal+1});
    }else{
      alert("Soal Habis");
      return
    }    
  }

  handlePrevSoal = () => {
    if(this.state.currentSoal > 1){
      this.setState({currentSoal: this.state.currentSoal-1});
    }else{
      return
    }    
  }

  handleClickSkor = (value=true) => {
    const currentSoal = this.state.currentSoal;
    let theAyats = this.state.packSoal;

    theAyats[currentSoal-1].skor=value;
    
    this.setState({packSoal:theAyats});

    this.handleNextSoal();
  }

  componentDidMount() {
    //this.handleAcak();
    this.createPackSoal();
  }

    render() {
      const matchPath = this.props.matchPath;
      let judul = 'Juz 30 Utuh';
      if(matchPath === '/29utuh'){
        judul = 'Juz 29 Utuh'
      }
      return(
        <div>
        <Container id="allContainer">  
          <Header as="h1" textAlign="center">{judul}</Header>
          <Grid>
            <Grid.Column width={9}>
              <SoalComponent 
                currentSoal ={this.state.currentSoal}
                jumSoal = {this.state.jumSoal}              
                bukaJumSoal ={this.bukaJumSoal}
                soalAyat={this.state.packSoal}
                nextSoal={this.handleNextSoal}
                prevSoal={this.handlePrevSoal}
                matchPath={matchPath}
                maxSoal={this.state.theAyats.length}
              />
              <ToggleKunci 
                showKunci={this.state.showKunci}
                onClick={this.handleToggleKunci}
              />
              <ModulContext.Provider
                value={{
                  showKunci: this.state.showKunci,
                  currentSoal: this.state.currentSoal,
                  kunciAyat: this.state.packKunci
                }}
              >
              <KunciComponent />            
              </ModulContext.Provider>    
            </Grid.Column>
            <Grid.Column width={7}>
              <ActionComponent 
                onMurojaahUrut={this.handleMurojaahUrut}
                onAcakSingle={this.createSingleSoal}
                onAcakAll={this.createPackSoal}
                onResetSoal={this.resetSoal}
              />
              <Waktu />
              <SkorComponent                 
                onClickSkor ={this.handleClickSkor}
                jumSoal = {this.state.jumSoal}
                packSoal = {this.state.packSoal}
              />
            </Grid.Column>
          </Grid>
        </Container>
        <JumSoalForm 
          jumSoalModal={this.state.jumSoalModal}
          jumSoal={this.state.jumSoal} 
          onTutupModal={this.tutupJumSoal}
          onSubmitModal={this.handleSubmitJumSoal}
          maxSoal={this.state.theAyats.length}          
        />
        </div>
      );
    };
}
export default Modul30Utuh;