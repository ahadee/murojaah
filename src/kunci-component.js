import React from 'react';
import { Segment, Header, Grid, GridRow, GridColumn } from 'semantic-ui-react';
import ModulContext from "./modul-context";


class KunciComponent extends React.Component {
    render() {
        const showKunci = this.context.showKunci;
        const kunciAyat = this.context.kunciAyat;
        const currentSoal = this.context.currentSoal;
        const context = this.context;
        //console.log(context);
        
        if((showKunci)&&(kunciAyat.length!==0)){
            return (
                <Segment.Group id='Kunci'>
                    <Segment>
                        <Header as='h2' textAlign='center'>Kunci</Header>
                    </Segment>
                    <Segment>
                        <Grid stackable textAlign='center'>
                            <GridRow>
                                <GridColumn width={5}><p><b className='text'>{kunciAyat[currentSoal-1].Nama} [{kunciAyat[currentSoal-1].noSurat}]</b></p></GridColumn>
                                <GridColumn width={3}><p>ayat <b className=" text">{kunciAyat[currentSoal-1].ayat}</b></p></GridColumn>
                                <GridColumn width={5}><p>Jumlah Ayat <b className=" text">{kunciAyat[currentSoal-1].jumAyat}</b></p></GridColumn>
                                <GridColumn width={3}><p><b className=" text">{kunciAyat[currentSoal-1].turun}</b></p></GridColumn>
                            </GridRow>
                        </Grid>
                    </Segment>
                    <Segment>
                        <Grid verticalAlign='middle' columns={2}>
                            <GridRow>
                                <GridColumn width={5}><p className='huge text'><b>Ayat Selanjutnya</b></p></GridColumn>
                                <GridColumn width={11} className='borderLeft'>
                                    <GridRow>
                                        <GridColumn><p className='super text arabic'><b>{kunciAyat[currentSoal-1].bacaan}</b></p></GridColumn>
                                    </GridRow>
                                    <GridRow>
                                        <GridColumn><p className='text'>{kunciAyat[currentSoal-1].tafsir}</p></GridColumn>
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

KunciComponent.contextType = ModulContext;

export default KunciComponent;