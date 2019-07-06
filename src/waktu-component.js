import React, { Component } from 'react';
import { Segment, Header, Grid, GridRow, GridColumn, Button } from 'semantic-ui-react';


class Waktu extends Component {
    state={
        runningSince: null,
        elapsed: 0
    }
    componentDidMount() {
        this.forceUpdateInterval = setInterval(() => this.forceUpdate(), 50);
    }

    componentWillUnmount() {
        clearInterval(this.forceUpdateInterval);
    }
    startTimer = () => {
        const now = Date.now();
        this.setState({runningSince: now});
        
    }
    stopTimer = () => {
        const now = Date.now();
        let lastElapsed = 0;
        if(this.state.runningSince!=null){
            lastElapsed = now-this.state.runningSince;
            //console.log("lagi jalan");            
        }             
        this.setState({
            runningSince: null,
            elapsed: this.state.elapsed + lastElapsed
        });
    }
    resetTimer = () => {
        this.setState({
            runningSince: null,
            elapsed: 0            
        });
    }
    render() {
        function renderElapsedString(elapsed, runningSince) {
            let totalElapsed = elapsed;
            if (runningSince) {
              totalElapsed += Date.now() - runningSince;
            }
            return millisecondsToHuman(totalElapsed);
        }
        function millisecondsToHuman(ms) {
            const seconds = Math.floor((ms / 1000) % 60);
            const minutes = Math.floor((ms / 1000 / 60) % 60);
            const hours = Math.floor(ms / 1000 / 60 / 60);
        
            const humanized = [
              pad(hours.toString(), 2),
              pad(minutes.toString(), 2),
              pad(seconds.toString(), 2),
            ].join(':');
        
            return humanized;
        }
        function pad(numberString, size) {
            let padded = numberString;
            while (padded.length < size) padded = `0${padded}`;
            return padded;
        }
        let elapsedString
        if(this.state.runningSince!== null){
            elapsedString = renderElapsedString(this.state.elapsed, this.state.runningSince);
        } else {
            elapsedString = millisecondsToHuman(this.state.elapsed);
        }
        
        return (
            
                <Segment.Group id='waktu'>
                    <Header as='h3' attached='top' textAlign='center'>Waktu</Header>
                    <Segment color='green' inverted attached textAlign='center'>
                        <Header as='h2'>{elapsedString}</Header>
                    </Segment>
                    <Segment attached>
                        <Grid stackable textAlign='center'>
                            <GridRow>
                                <GridColumn width={8}><Button onClick={this.startTimer}>Mulai</Button></GridColumn>
                                <GridColumn width={8}><Button onClick={this.stopTimer}>Stop</Button></GridColumn>
                            </GridRow>
                            <GridRow>
                                <GridColumn><Button onClick={this.resetTimer}>Reset Waktu</Button></GridColumn>
                            </GridRow>
                        </Grid>
                    </Segment>
                </Segment.Group>                
            
        );
    }
}

export default Waktu;