import React from 'react';
import { Container, Grid, Header, Segment, Button, Progress, ButtonGroup, GridRow, GridColumn} from 'semantic-ui-react'
import JumSoalForm from "./jum-soal-form";
import Waktu from './waktu-component';
import ActionComponent from './action-component';
import SkorComponent from './skor-component';
import KunciComponent from './kunci-component';
import ToggleKunci from './toggleKunci';

class Quiz extends React.Component {
  state = {
    jumSoalModal : false,
    jumSoal: 10  
  }  
  
  bukaJumSoal = () => this.setState({jumSoalModal: true});
  tutupJumSoal = () => this.setState({jumSoalModal: false});
  handleSubmitJumSoal = (value) => {    
    this.setState({jumSoal: value});
    this.tutupJumSoal();
  };
    render() {    
      return(
        <div>
        <Container id="allContainer">
          <Grid>
            <Grid.Column width={11}>
              <Segment.Group id="soal">                
                <Header as="h2" attached="top" textAlign='center'>Soal</Header>                
                <Segment attached id="soal-content">
                  <div>
                    <Header as="h3" textAlign='center'>2/{this.state.jumSoal}</Header>
                    <Button size='mini' primary id="rubahSoal" onClick={this.bukaJumSoal}>rubah jumlah soal</Button>
                  </div>
                  <Progress color="green" value='2' total={this.state.jumSoal} progress='ratio' label="Progress"></Progress>
                </Segment>
                <ButtonGroup attached>
                  <Button content='Sebelumnya' icon='left arrow' labelPosition='left' />
                  <Button content='Selanjutnya' icon='right arrow' labelPosition='right' />
                </ButtonGroup>
                <Segment.Group horizontal>
                  <Segment attached color="red" inverted>
                    <Header as="h3" textAlign="center">JUZZ 30</Header>
                  </Segment>
                  <Segment attached style={{width: '200%'}}>
                    <Header color='grey' textAlign='center'>564 Ayat</Header>
                  </Segment>
                </Segment.Group>
                <Segment attached>
                  <Grid stackable textAlign='center'>
                    <GridRow>
                      <GridColumn width={5}><p><b className='text'>Al-Mulk [67]</b></p></GridColumn>
                      <GridColumn width={3}><p>ayat <b className=" text">6</b></p></GridColumn>
                      <GridColumn width={5}><p>Jumlah Ayat <b className=" text">30</b></p></GridColumn>
                      <GridColumn width={3}><p><b className=" text">Makkiyah</b></p></GridColumn>
                    </GridRow>
                  </Grid>
                </Segment>
                <Segment>
                  <Grid verticalAlign='middle' columns={2}>
                    <GridRow>
                      <GridColumn width={5}><p className='huge text'><b>Pertanyaan</b></p></GridColumn>
                      <GridColumn width={11} className='borderLeft'>
                        <GridRow>
                          <GridColumn><p className='super text arabic'><b>وَأَنزَلۡنَا مِنَ ٱلۡمُعۡصِرَٰتِ مَآءٗ ثَجَّاجٗا</b></p></GridColumn>
                        </GridRow>
                        <GridRow>
                          <GridColumn><p className='text'>14.  dan Kami turunkan dari awan air yang banyak tercurah,</p></GridColumn>
                        </GridRow>
                      </GridColumn>
                    </GridRow>
                  </Grid>
                </Segment>
              </Segment.Group>
              <ToggleKunci />
              <KunciComponent />                
            </Grid.Column>
            <Grid.Column width={5}>
              <ActionComponent />
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