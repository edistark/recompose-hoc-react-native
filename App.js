import React from 'react';
import { withHandlers, withState} from 'recompose';
import { View, TextInput, Text } from 'react-native';


//create stateless components , change to recompose version, hoc
const MyForm = ({onChange, value }) => (
    <View>
        <TextInput
        
            onChangeText={ (text) => {
                onChange(text)
            }}
        >

        </TextInput>
        <Text>
            {`Your username is ${value}`}
        </Text>
    </View>
);

//withState accepts three parameters, stateName, stateUpdaterName, and initialState 
const addState = withState('value', 'updateValue', '');

const addHandlers = withHandlers({
    onChange : ({
        updateValue
    }) => (event) => {
        updateValue(event)
    }
});

export default addState(addHandlers(MyForm))