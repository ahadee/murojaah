import React, { Component } from 'react';
import { Segment, Header, Grid, GridRow, GridColumn, Button } from 'semantic-ui-react';


class Waktu extends Component {
    render() {
        return (
            
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
            
        );
    }
}

export default Waktu;