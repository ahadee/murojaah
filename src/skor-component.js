import React, { Component } from 'react';
import { Segment, Header, Divider, Button } from 'semantic-ui-react';

class SkorComponent extends Component {
    state = {
        skorBenar: 0,
        skorSalah: 0
    }
    onClickBenar = () => {
        const currentSoal = this.props.currentSoal;
        const jumSoal = this.props.jumSoal;        
        if(currentSoal<jumSoal){
            this.setState({
                skorBenar: this.state.skorBenar+1
            }, () => this.props.onClickSkor());
        }else if(currentSoal===jumSoal){
            this.setState({
                skorBenar: jumSoal-this.state.skorSalah
            })
        }
    }
    onClickSalah = () => {
        const currentSoal = this.props.currentSoal;
        const jumSoal = this.props.jumSoal;
        if(currentSoal<jumSoal){
            this.setState({
                skorSalah: this.state.skorSalah+1
            }, () => this.props.onClickSkor());
        }else if(currentSoal===jumSoal){
            this.setState({
                skorSalah: jumSoal-this.state.skorBenar
            })
        }
    }
    render() {
        const currentSoal = this.props.currentSoal;
        const jumSoal = this.props.jumSoal
        return (            
                <Segment.Group id='skor'>
                    <Segment.Group horizontal>
                        <Segment textAlign='center'>
                            <Header as='h3' color='violet'>Benar</Header>
                            <Divider fitted></Divider>
                            <Header as='h3' color='violet'>{this.state.skorBenar}</Header>
                            <Button color='violet' onClick={this.onClickBenar}>Benar</Button>
                        </Segment>
                        <Segment textAlign='center'>
                            <Header as='h3' color='red'>Salah</Header>
                            <Divider fitted></Divider>
                            <Header as='h3' color='red'>{this.state.skorSalah}</Header>
                            <Button color='red' onClick={this.onClickSalah}>Salah</Button>
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
            
        );
    }
}

export default SkorComponent;