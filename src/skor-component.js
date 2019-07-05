import React, { Component } from 'react';
import { Segment, Header, Divider, Button } from 'semantic-ui-react';

class SkorComponent extends Component {
    render() {
        return (
            
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
            
        );
    }
}

export default SkorComponent;