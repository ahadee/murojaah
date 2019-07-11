import React from 'react';
import { Grid, GridRow, GridColumn, Radio } from 'semantic-ui-react';

const ToggleKunci = (props) => (
    <Grid>
        <GridRow>
            <GridColumn width={6} floated="right" textAlign="right">
                <Radio toggle label="Tampilkan Kunci" checked={props.showKunci} onChange={props.onClick}></Radio>
            </GridColumn>
        </GridRow>
    </Grid>    
) 

export default ToggleKunci;