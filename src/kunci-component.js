import React, { Component } from 'react';
import { Segment, Header, Grid, GridRow, GridColumn } from 'semantic-ui-react';

class KunciComponent extends Component {
    render() {
        const showKunci = this.props.showKunci;
        const kunciAyat = this.props.kunciAyat;
        if(showKunci){
            return (            
                <Segment.Group id='Kunci'>
                    <Segment>
                        <Header as='h2' textAlign='center'>Kunci</Header>
                    </Segment>
                    <Segment>
                        <Grid stackable textAlign='center'>
                            <GridRow>
                                <GridColumn width={5}><p><b className='text'>{kunciAyat.Nama} [{kunciAyat.noSurat}]</b></p></GridColumn>
                                <GridColumn width={3}><p>ayat <b className=" text">{kunciAyat.ayat}</b></p></GridColumn>
                                <GridColumn width={5}><p>Jumlah Ayat <b className=" text">{kunciAyat.jumAyat}</b></p></GridColumn>
                                <GridColumn width={3}><p><b className=" text">{kunciAyat.turun}</b></p></GridColumn>
                            </GridRow>
                        </Grid>
                    </Segment>
                    <Segment>
                        <Grid verticalAlign='middle' columns={2}>
                            <GridRow>
                                <GridColumn width={5}><p className='huge text'><b>Ayat Selanjutnya</b></p></GridColumn>
                                <GridColumn width={11} className='borderLeft'>
                                    <GridRow>
                                        <GridColumn><p className='super text arabic'><b>{kunciAyat.bacaan}</b></p></GridColumn>
                                    </GridRow>
                                    <GridRow>
                                        <GridColumn><p className='text'>{kunciAyat.tafsir}</p></GridColumn>
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