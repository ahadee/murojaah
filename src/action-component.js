import React, { Component } from 'react';
import { Segment, Grid, GridRow, GridColumn, Button } from 'semantic-ui-react';

class ActionComponent extends Component {
    render() {
        return (
            
                <Segment textAlign='center'>
                    <Button fluid className="header" onClick={this.props.onMurojaahUrut}>Muroja'ah Urut</Button>
                    <Button onClick={this.props.onAcakAll}>Acak Soal</Button>
                    <Button onClick={this.props.onAcakSingle}>Acak  1 Soal</Button>
                    <Button onClick={this.props.onResetSoal}>Reset Soal</Button>                    
                </Segment>    
            
        );
    }
}

export default ActionComponent;