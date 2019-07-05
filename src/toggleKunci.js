import React, { Component } from 'react';
import { Grid, GridRow, GridColumn, Radio } from 'semantic-ui-react';

class ToggleKunci extends Component {
    toggle = () => {
        this.props.onClick();
    };
    render() {
        const showKunci = this.props.showKunci;
        return (            
                <Grid>
                    <GridRow>
                        <GridColumn width={6} floated="right" textAlign="right">
                            <Radio toggle label="Tampilkan Kunci" checked={showKunci} onChange={this.toggle}></Radio>
                        </GridColumn>
                    </GridRow>
                </Grid>                
        );
    }
}

export default ToggleKunci;