import React, { Component } from 'react';

import { View, Button, Text, TextInput } from 'react-native'; 

export default class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            value : ""
        }
    }

    


    updateValue = (e) => {
        // console.warn(e);
        this.setState({
            value: e
        })
    }

    render(){
        return (
            <View>
                <TextInput

                    onChangeText = { (text) => {
                      this.updateValue(text)
                    }}
                >
                    
                </TextInput>
                <Text>
                    {`Your username is ${this.state.value}`}
                </Text>
            </View>
        )
    }
}