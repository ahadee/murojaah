import React, { Component } from 'react';
import { Segment, Header, Button, Progress, ButtonGroup, Grid, GridRow, GridColumn } from 'semantic-ui-react';

class SoalComponent extends Component {
    bukaJumSoal = () => {
        this.props.bukaJumSoal();
    };
    render() {
        const jumSoal = this.props.jumSoal;
        const currentSoal = this.props.currentSoal;
        const soalAyat=this.props.soalAyat;
        const maxSoal = this.props.maxSoal;
        const matchPath = this.props.matchPath;    
        let judul = 'JUZZ 30';
        if(matchPath === '/29utuh'){
            judul = 'JUZZ 29'
        }    
        if(soalAyat.length===0){
            return(<div></div>);
        }
        return (
            <Segment.Group id="soal">                
                <Header as="h2" attached="top" textAlign='center'>Soal</Header>                
                <Segment attached id="soal-content">
                    <div>
                        <Header as="h3" textAlign='center'>{currentSoal}/{jumSoal}</Header>
                        <Button size='mini' primary id="rubahSoal" onClick={this.bukaJumSoal}>rubah jumlah soal</Button>
                    </div>
                    <Progress color="green" value={currentSoal} total={jumSoal} progress='ratio' label="Progress"></Progress>
                </Segment>
                <ButtonGroup attached>
                    <Button 
                        content='Sebelumnya' 
                        icon='left arrow' 
                        labelPosition='left'  
                        onClick={this.props.prevSoal} 
                        disabled={currentSoal <= 1 ? true : false} 
                    />
                    <Button 
                        content='Selanjutnya' 
                        icon='right arrow' 
                        labelPosition='right' 
                        onClick={this.props.nextSoal} 
                        disabled={currentSoal >= jumSoal ? true : false} 
                    />
                </ButtonGroup>
                <Segment.Group horizontal>
                    <Segment attached color="red" inverted>
                        <Header as="h3" textAlign="center">{judul}</Header>
                    </Segment>
                    <Segment attached style={{width: '200%'}}>
                        <Header color='grey' textAlign='center'>{maxSoal} Ayat</Header>
                    </Segment>
                </Segment.Group>
                <Segment attached>
                    <Grid stackable textAlign='center'>
                        <GridRow>
                            <GridColumn width={5}><p><b className='text'>{soalAyat[currentSoal-1].Nama} [{soalAyat[currentSoal-1].noSurat}]</b></p></GridColumn>
                            <GridColumn width={3}><p>ayat <b className=" text">{soalAyat[currentSoal-1].ayat}</b></p></GridColumn>
                            <GridColumn width={5}><p>Jumlah Ayat <b className=" text">{soalAyat[currentSoal-1].jumAyat}</b></p></GridColumn>
                            <GridColumn width={3}><p><b className=" text">{soalAyat[currentSoal-1].turun}</b></p></GridColumn>
                        </GridRow>
                    </Grid>
                </Segment>
                <Segment>
                    <Grid verticalAlign='middle' columns={2}>
                        <GridRow>
                            <GridColumn width={5}><p className='huge text'><b>Pertanyaan</b></p></GridColumn>
                            <GridColumn width={11} className='borderLeft'>
                                <GridRow>
                                    <GridColumn><p className='super text arabic'><b>{soalAyat[currentSoal-1].bacaan}</b></p></GridColumn>
                                </GridRow>
                                <GridRow>
                                <   GridColumn><p className='text'>{soalAyat[currentSoal-1].tafsir}</p></GridColumn>
                                </GridRow>
                            </GridColumn>
                        </GridRow>
                    </Grid>
                </Segment>
            </Segment.Group>            
        );
    }
}

export default SoalComponent;