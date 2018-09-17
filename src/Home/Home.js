import axios from 'axios';
import React, { Component } from 'react';
import { Container, FieldSet, Panel, Button, TextField } from '@sencha/ext-modern';
import data from './data';
import { small, medium } from '../responsiveFormulas'

export default class Home extends Component {
      state = {
          userID: '',
          password: '',
          title: 'Hello',
      };

      onChange = (input) => {
          this.setState({ [input.name]: input._value });

          if (input.name === 'userID') {
              this.setState({ title: 'Hello ' + input._value });
          }
      };

      onClick = () => {
        axios.get('https://swapi.co/api/people/?search=' + this.state.userID)
            .then(({ data }) => {
    					if (data.count > 0) {
    							if (data.results[0].birth_year === this.state.password) {
    									alert('Welcome ' + this.state.userID);
    							} else {
    									alert('Invalid Password.');
    							}
    					} else {
    							alert('Invalid User Credentials.');
    					}
            })
            .catch(function (error) {
              console.log(error);
            });
      }

      render() {
        return (
            <Container>
                <Panel
                    shadow
                    title={this.state.title}
                    height={300}
                    width={600}
                    scrollable
                    layout={{
                  			type :'vbox',
                  			align: 'center',
                  			pack  : 'center',
                  	}}
                    style={{
                      left: '30%',
                      height: 300,
                      marginTop: '8%',
                      border: '1px solid #e9e9e9',
                    }}
                    bodyPadding={10}
                >
                  <TextField name="userID" label="User ID" value={this.state.userID} inputType="text" required onChange={this.onChange} style={{
                    padding: '0 30px 4px 30px',
                    width: '100%',
                  }}/>
                  <TextField name="password" label="Password" value={this.state.password} inputType="password" required onChange={this.onChange} style={{
                    padding: '0 30px 0 30px',
                    width: '100%',
                  }}/>
                  <Button ui="action" text="Submit" onTap={this.onClick} style={{
                    padding: '30px',
                    width: '300px',
                  }}>
                    Submit
                  </Button>
                </Panel>
            </Container>
        )
    }
}
