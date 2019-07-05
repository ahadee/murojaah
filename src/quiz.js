import React from 'react';
import { Container, Grid, Header, Segment, Button, Progress, ButtonGroup, GridRow, GridColumn, Radio, Modal, Form, Message, Divider } from 'semantic-ui-react'

class Quiz extends React.Component {
  state = {
    jumSoalModal : false,
    jumSoal: 10,
    inputJumSoal: React.createRef()    
  }  
  
  bukaJumSoal = () => this.setState({jumSoalModal: true});
  tutupJumSoal = () => this.setState({jumSoalModal: false});
  submitJumSoal = () => {
    var value = this.state.inputJumSoal.current.value;
    console.log('is integer ' + Number(value));
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
              <Grid>
                <GridRow>
                  <GridColumn width={6} floated="right" textAlign="right">
                    <Radio toggle label="Tampilkan Kunci"></Radio>
                  </GridColumn>
                </GridRow>
              </Grid>
              <Segment.Group id='Kunci'>
                <Segment>
                  <Header as='h2' textAlign='center'>Kunci</Header>
                </Segment>
                <Segment>
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
                      <GridColumn width={5}><p className='huge text'><b>Ayat Selanjutnya</b></p></GridColumn>
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
            </Grid.Column>
            <Grid.Column width={5}>
              <Segment textAlign='center'>
                <Grid stackable>
                  <GridRow>
                    <GridColumn>
                      <Button>MUROJA'AH<br />URUT</Button>
                    </GridColumn>
                  </GridRow>
                  <GridRow>
                    <GridColumn width={8}><Button>Acak Soal</Button></GridColumn>
                    <GridColumn width={8}><Button>Reset Soal</Button></GridColumn>
                  </GridRow>
                </Grid>
              </Segment>
              <Segment.Group id='waktu'>
                <Header as='h3' attached='top' textAlign='center'>Waktu</Header>
                <Segment color='green' inverted attached textAlign='center'>
                  <Header as='h2'>00.00.00</Header>
                </Segment>
                <Segment attached>
                  <Grid stackable textAlign='center'>
                    <GridRow>
                      <GridColumn width={8}><Button>Mulai</Button></GridColumn>
                      <GridColumn width={8}><Button>Stop</Button></GridColumn>
                    </GridRow>
                    <GridRow>
                      <GridColumn><Button>Reset Waktu</Button></GridColumn>
                    </GridRow>
                  </Grid>
                </Segment>
              </Segment.Group>
              <Segment.Group id='skor'>
                <Segment.Group horizontal>
                  <Segment textAlign='center'>
                    <Header as='h3' color='violet'>Benar</Header>
                    <Divider fitted></Divider>
                    <Header as='h3' color='violet'>0</Header>
                    <Button color='violet'>Benar</Button>
                  </Segment>
                  <Segment textAlign='center'>
                    <Header as='h3' color='red'>Salah</Header>
                    <Divider fitted></Divider>
                    <Header as='h3' color='red'>0</Header>
                    <Button color='red'>Salah</Button>
                  </Segment>
                </Segment.Group>
                <Segment clearing textAlign='center'>
                  <Header as='h3'>SKOR</Header>
                  <Divider fitted></Divider>
                  <Header as='h2'>0.00</Header>
                  <Button floated='left'>Daftar Nilai</Button>
                  <Button floated='right'>Daftar Nilai</Button>
                </Segment>
              </Segment.Group>
            </Grid.Column>
          </Grid>
        </Container>
        <Modal open = {this.state.jumSoalModal} size="mini"  onClose={this.tutupJumSoal}>          
          <Modal.Header>Jumlah Soal</Modal.Header>
          <Modal.Content>
            <Form onSubmit={this.submitJumSoal}>
              <Form.Field>
                <label>Masukkan jumlah soal</label>
                <input 
                  id="inputJumSoal" 
                  ref={this.state.inputJumSoal} 
                  name="inputJumSoal" 
                  placeholder="jumlah soal" 
                  defaultValue={this.state.jumSoal}
                  type="number"
                  min='1'
                >
                  
                </input>
              
              </Form.Field>
                            
              <Message
                error                
                content='Masukkan jumlah soal dengan benar'
              />
            </Form>
          </Modal.Content>
          <Modal.Actions>
            <Button onClick={this.tutupJumSoal} negative>
              Cancel
            </Button>
            <Button              
              positive
              labelPosition='right'
              icon='checkmark'
              content='Submit'
              onClick={this.submitJumSoal}
            />
          </Modal.Actions>
        </Modal>
        </div>
      );
    };
}
export default Quiz;