import {
    View,
    TextInput,
    Button,
    StyleSheet,
    Modal
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
        <Modal visible={props.visible} animationType='slide'>
            <View style={styles.inputContainer}>
                <TextInput 
                style={styles.textInput}   
                value={enteredText}
                placeholder='add text here'
                onChangeText={inputHandler}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="Add Goal" onPress={addGoal}/>
                    </View>    
                    <View style={styles.button}>
                        <Button title="Cancel" onPress={props.closeModel} />
                    </View> 
                </View>
            </View>
        </Modal>
        
    )
};

export default GoalInput;

const styles = StyleSheet.create({

    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
        margin: 7,
        paddingBottom: 16
      },
    
      textInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '80%',
        marginRight: 8,
        padding: 8
      },

      buttonContainer: {
        flexDirection: 'row',
        margin: 10
      },

      button: {
        width: '40%',
        marginHorizontal: 7,
      }
});