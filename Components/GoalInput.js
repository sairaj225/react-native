import {
    View,
    TextInput,
    Button,
    StyleSheet
} from 'react-native';

import { useState } from 'react';


function GoalInput(props) {

    const [enteredText, setEnteredText] = useState('');

    function inputHandler(inputText) {
        setEnteredText(inputText);
    }

    function addGoal() {
        props.addGoalHandler(enteredText);
        setEnteredText('');
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput 
            style={styles.textInput}   
            value={enteredText}
            placeholder='add text here'
            onChangeText={inputHandler}
            />
            <Button title="Add Goal" onPress={addGoal}/>
        </View>
    )
};

export default GoalInput;

const styles = StyleSheet.create({

    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
        marginBottom: 24,
        paddingBottom: 16
      },
    
      textInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '70%',
        marginRight: 8,
        padding: 8
      },
});