import React from 'react';
import { Segment, Button } from 'semantic-ui-react';

const ActionComponent = (props) => (            
    <Segment textAlign='center'>
        <Button fluid className="header" onClick={props.onMurojaahUrut}>Muroja'ah Urut</Button>
        <Button onClick={props.onAcakAll}>Acak Soal</Button>
        <Button onClick={props.onAcakSingle}>Acak  1 Soal</Button>
        <Button onClick={props.onResetSoal}>Reset Soal</Button>                    
    </Segment>    
)

export default ActionComponent;