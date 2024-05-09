import { 
  Button, 
  StyleSheet, 
  Text, 
  TextInput, 
  View, 
  Alert,
  Settings,
  ScrollView
} from 'react-native';

import { useState } from 'react';

export default function App() {

  const [enteredTextInput, setEnteredTextInput] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  function textInputHandler(enteredText) {
    setEnteredTextInput(enteredText);
  }

  function addGoalHandler() {
    setCourseGoals((currentCourseGoals) => [enteredTextInput, ...currentCourseGoals])
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput 
          style={styles.textInput}   
          placeholder='add text here' 
          onChangeText={textInputHandler}
          />
        <Button title="Add Goal" onPress={addGoalHandler}/>
      </View>
      <View style={styles.goalsContainer}>
        <ScrollView>
          {
            courseGoals.map((goal) => 
              <View key={goal} style={styles.goalItemView}>
                <Text style={styles.goalItem}>{goal}</Text>
              </View>
            )
          }
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16
  },

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

  goalsContainer: {
    flex: 5,
  },

  goalItemView: {
    padding: 10,
    margin: 10,
    borderRadius: 6,
    backgroundColor: 'purple',
  },

  goalItem: {
    color: 'white'
  }



});
