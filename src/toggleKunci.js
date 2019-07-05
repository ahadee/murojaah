import React, { Component } from 'react';
import { Grid, GridRow, GridColumn, Radio } from 'semantic-ui-react';

class ToggleKunci extends Component {
    render() {
        return (
            
                <Grid>
                    <GridRow>
                        <GridColumn width={6} floated="right" textAlign="right">
                            <Radio toggle label="Tampilkan Kunci"></Radio>
                        </GridColumn>
                    </GridRow>
                </Grid>    
            
        );
    }
}

export default ToggleKunci;