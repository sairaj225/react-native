import {
    View,
    TextInput,
    Button,
    StyleSheet,
    Modal,
    Image
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
                <Image 
                    style={styles.image}
                    source={require('../assets/images/goal.png')}/>
                <TextInput 
                style={styles.textInput}   
                value={enteredText}
                placeholder='add text here'
                onChangeText={inputHandler}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="Add Goal" onPress={addGoal} color="#2C7865" />
                    </View>    
                    <View style={styles.button}>
                        <Button title="Cancel" onPress={props.closeModel} color="#FF9800" />
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
        margin: 7,
        padding: 16,
        backgroundColor: '#90D26D'
      },
    
      textInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '100%',
        margin: 10,
        padding: 8,
        backgroundColor: '#D9EDBF',
        borderRadius: 7,
      },

      buttonContainer: {
        flexDirection: 'row',
        margin: 10
      },

      button: {
        width: '40%',
        marginHorizontal: 7,
      },

      image: {
        width: 100,
        height: 100,
      }
});