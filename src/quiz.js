import React from 'react';
import { Container, Grid} from 'semantic-ui-react'
import JumSoalForm from "./jum-soal-form";
import Waktu from './waktu-component';
import ActionComponent from './action-component';
import SkorComponent from './skor-component';
import KunciComponent from './kunci-component';
import ToggleKunci from './toggleKunci';
import SoalComponent from './soal-component';

class Quiz extends React.Component {
  state = {
    theAyats: this.props.theAyats,
    currentSoal: 1,
    packSoal: [],
    packKunci:[],
    jumSoalModal : false,
    jumSoal: 10,
    showKunci: false,    
  } 
  createPackSoal = () => {
    console.log('createPackSoal');
    let tempPackSoal = [];
    let tempPackKunci = [];
    for(let i=0; i < this.state.jumSoal; i++){  
      const noAyat = this.handleAcak();
      const soalAyat = this.state.theAyats[noAyat];
      const kunciAyat = this.state.theAyats[noAyat+1];
      if(tempPackSoal.indexOf(soalAyat)>=0){              
        i--;
      }else{
        tempPackSoal.push(soalAyat);
        tempPackKunci.push(kunciAyat);
      }      
    }
    this.setState({
      packSoal:tempPackSoal, 
      packKunci:tempPackKunci,
      currentSoal: 1
    });    
  } 
  createSingleSoal = () => {
    const noAyat = this.handleAcak();
    const currentindex = this.state.currentSoal-1;
    const tempPackSoal = this.state.packSoal;
    const tempPackKunci = this.state.packKunci;
    
    tempPackSoal[currentindex] = this.state.theAyats[noAyat];
    tempPackKunci[currentindex] = this.state.theAyats[noAyat+1];

    this.setState({
      packSoal: tempPackSoal,
      packKunci: tempPackKunci
    })   
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

  handleAcak = () => {
    const jumAyat = this.state.theAyats.length;
    const hasilAcak = Math.floor(Math.random() * (jumAyat-1));
    return hasilAcak;     
  };

  handleNextSoal = () => {
    if(this.state.currentSoal < this.state.jumSoal){
      this.setState({currentSoal: this.state.currentSoal+1});
    }else{
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

  handleClickSkor = () => {
    this.handleNextSoal();
  }

  componentDidMount() {
    //this.handleAcak();
    this.createPackSoal();
  }

    render() {
      return(
        <div>
        <Container id="allContainer">          
          <Grid>
            <Grid.Column width={11}>
              <SoalComponent 
                currentSoal ={this.state.currentSoal}
                jumSoal = {this.state.jumSoal}              
                bukaJumSoal ={this.bukaJumSoal}
                soalAyat={this.state.packSoal}
                nextSoal={this.handleNextSoal}
                prevSoal={this.handlePrevSoal}
              />
              <ToggleKunci 
                showKunci={this.state.showKunci}
                onClick={this.handleToggleKunci}
              />
              <KunciComponent 
                showKunci={this.state.showKunci}
                currentSoal ={this.state.currentSoal}
                kunciAyat={this.state.packKunci}
              />                
            </Grid.Column>
            <Grid.Column width={5}>
              <ActionComponent 
                onAcak={this.createSingleSoal}
                onResetSoal={this.createPackSoal}
              />
              <Waktu />
              <SkorComponent 
                currentSoal ={this.state.currentSoal}
                onClickSkor ={this.handleClickSkor}
                jumSoal = {this.state.jumSoal}
              />
            </Grid.Column>
          </Grid>
        </Container>
        <JumSoalForm 
          jumSoalModal={this.state.jumSoalModal}
          jumSoal={this.state.jumSoal} 
          onTutupModal={this.tutupJumSoal}
          onSubmitModal={this.handleSubmitJumSoal}
        />
        </div>
      );
    };
}
export default Quiz;