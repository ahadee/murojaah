import React, { Component } from 'react';
import { Modal, Message, Form, Button } from "semantic-ui-react";

class JumSoalForm extends Component {
    state = {
        jumSoalModal: this.props.jumSoalModal,
        jumSoal: this.props.jumSoal,
        inputJumSoal: React.createRef(),
        tutupJumSoal: this.props.tutupJumSoal    
    };

    static getDerivedStateFromProps(nextProps) {
        return {jumSoalModal: nextProps.jumSoalModal}
    }
    //bukaJumSoal = () => this.setState({jumSoalModal: true});
    //tutupJumSoal = () => this.setState({jumSoalModal: false});
    submitJumSoal = () => {
        var value = this.state.inputJumSoal.current.value;
        console.log('is integer ' + Number(value));
        this.setState({jumSoal: value});
        this.props.onTutupmodal();
      };
    render() {
        return (
            <div>
                <Modal open = {this.state.jumSoalModal} size="mini"  onClose={this.state.tutupJumSoal}>          
                    <Modal.Header>Jumlah Soal</Modal.Header>
                    <Modal.Content>
                        <Form onSubmit={this.submitJumSoal}>
                        <Form.Field>
                            <label>Masukkan jumlah soal</label>
                            <input 
                            id="inputJumSoal" 
                            ref={this.state.inputJumSoal} 
                            name="inputJumSoal" 
                            placeholder="jumlah soal" 
                            defaultValue={this.state.jumSoal}
                            type="number"
                            min='1'
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
                        <Button onClick={this.state.tutupJumSoal} negative>
                        Cancel
                        </Button>
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