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
    currentSoal: 1,
    jumSoalModal : false,
    jumSoal: 10,
    showKunci: false  
  }  
  
  bukaJumSoal = () => this.setState({jumSoalModal: true});
  tutupJumSoal = () => this.setState({jumSoalModal: false});
  handleSubmitJumSoal = (value) => {    
    this.setState({jumSoal: value});
    this.tutupJumSoal();
  };
  handleToggleKunci = () => {
    const nextKunci = !this.state.showKunci;
    this.setState({showKunci: nextKunci});
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
                soalAyat={this.props.soalAyat}
              />
              <ToggleKunci 
                showKunci={this.state.showKunci}
                onClick={this.handleToggleKunci}
              />
              <KunciComponent 
                showKunci={this.state.showKunci}
                kunciAyat={this.props.kunciAyat}
              />                
            </Grid.Column>
            <Grid.Column width={5}>
              <ActionComponent 
                onAcak={this.props.onAcak}
              />
              <Waktu />
              <SkorComponent />
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