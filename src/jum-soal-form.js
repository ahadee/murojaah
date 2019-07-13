import React, { Component } from 'react';
import { Modal, Message, Form, Button } from "semantic-ui-react";

class JumSoalForm extends Component {
    constructor(props) {
        super(props)
        
        this.inputJumSoal = React.createRef();
        this.state = {
            errorClass: '',
        }
      }       
    tutupJumSoal = () => {
        this.props.onTutupModal();
    }
    submitJumSoal = () => {
        var value = this.inputJumSoal.current.value;

        if(value === ''){
            this.setState({errorClass:'error'});
            return false
        }
        this.setState({errorClass:''});
        this.props.onSubmitModal(value)
        
    };
    submitSemuaAyat = () => {
        const maxSoal=this.props.maxSoal;
        this.inputJumSoal.current.value = maxSoal;
        //this.setState({inputJumSoal.current.value:maxSoal})
        //this.state.inputJumSoal.current.value = maxSoal;
        //this.props.onSubmitModal(maxSoal);

    };

    render() {
        const jumSoalModal = this.props.jumSoalModal;
        let jumSoal= this.props.jumSoal;
        
        return (
            <div>
                <Modal open = {jumSoalModal} size="tiny"  onClose={this.tutupJumSoal}>          
                    <Modal.Header>Jumlah Soal</Modal.Header>
                    <Modal.Content>
                        <Form 
                            onSubmit={this.submitJumSoal}
                            className={this.state.errorClass} 
                        >
                            <Form.Field>
                                <label>Masukkan jumlah soal</label>
                                <input 
                                id="inputJumSoal" 
                                ref={this.inputJumSoal} 
                                name="inputJumSoal" 
                                placeholder="jumlah soal" 
                                defaultValue= {jumSoal}
                                type="number"
                                min='1'
                                max={this.props.maxSoal}
                                >                                
                                </input>                        
                            </Form.Field>                                        
                            <Message
                                error                
                                content='Masukkan jumlah soal dengan benar'
                            />
                        </Form>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button onClick={this.tutupJumSoal} negative>
                        Cancel
                        </Button>
                        <Button onClick={this.submitSemuaAyat}>Semua Ayat</Button>
                        <Button              
                        positive
                        labelPosition='right'
                        icon='checkmark'
                        content='Submit'
                        onClick={this.submitJumSoal}
                        />
                    </Modal.Actions>
                    </Modal>
            </div>
        );
    }
}

export default JumSoalForm;