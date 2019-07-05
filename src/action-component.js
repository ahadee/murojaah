import React, { Component } from 'react';
import { Segment, Grid, GridRow, GridColumn, Button } from 'semantic-ui-react';

class ActionComponent extends Component {
    render() {
        return (
            
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
            
        );
    }
}

export default ActionComponent;