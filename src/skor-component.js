import React, { Component } from 'react';
import { Segment, Header, Divider, Button } from 'semantic-ui-react';

class SkorComponent extends Component {
    state = {
        skorBenar: 0,
        skorSalah: 0
    }
    onClickBenar = () => {
        this.props.onClickSkor(true);
    }
    onClickSalah = () => {
        this.props.onClickSkor(false);
    }
    render() {
        const jumSoal = this.props.jumSoal;
        let totalBenar = 0;
        let totalSalah = 0;        
        const packSoal = this.props.packSoal;
        for(let i=0; i<packSoal.length; i++){
            if(packSoal[i].hasOwnProperty('skor')){
                if(packSoal[i].skor===true){
                    totalBenar +=1;
                } else if(packSoal[i].skor===false){
                    totalSalah +=1;
                }
            }
        } 
        let nilaiSkor = (totalBenar/jumSoal*100).toFixed(2);     
        
        return (            
                <Segment.Group id='skor'>
                    <Segment.Group horizontal>
                        <Segment textAlign='center'>
                            <Header as='h3' color='violet'>Benar</Header>
                            <Divider fitted></Divider>
                            <Header as='h3' color='violet'>{totalBenar}</Header>
                            <Button color='violet' onClick={this.onClickBenar}>Benar</Button>
                        </Segment>
                        <Segment textAlign='center'>
                            <Header as='h3' color='red'>Salah</Header>
                            <Divider fitted></Divider>
                            <Header as='h3' color='red'>{totalSalah}</Header>
                            <Button color='red' onClick={this.onClickSalah}>Salah</Button>
                        </Segment>
                        <Segment clearing textAlign='center'>
                            <Header as='h3'>SKOR</Header>
                            <Divider fitted></Divider>
                            <Header as='h2'>{nilaiSkor}</Header>
                            <Button>Rekam Nilai</Button>
                            <p></p>
                            <Button>Daftar Nilai</Button>
                        </Segment>
                    </Segment.Group>
                    
                </Segment.Group>    
            
        );
    }
}

export default SkorComponent;