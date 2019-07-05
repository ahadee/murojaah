import React, { Component } from 'react';
import { Segment, Header, Grid, GridRow, GridColumn } from 'semantic-ui-react';

class KunciComponent extends Component {
    render() {
        const showKunci = this.props.showKunci;
        if(showKunci){
            return (            
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
            );
        } else {
            return (
                <div></div>
            );
        }
        
    }
}

export default KunciComponent;