import { 
  Button, 
  StyleSheet, 
  Text, 
  TextInput, 
  View, 
  Alert,
  Settings,
  ScrollView,
  FlatList
} from 'react-native';

import { useState } from 'react';
import GoalItem from './Components/GoalItem';
import GoalInput from './Components/GoalInput';

export default function App() {

  const [courseGoals, setCourseGoals] = useState([]);

  function textInputHandler(enteredText) {
    setEnteredTextInput(enteredText);
  }

  function addGoalHandler(enteredTextInput) {
    if (enteredTextInput){
      setCourseGoals((currentCourseGoals) => [
        {text: enteredTextInput, id: currentCourseGoals.length + 1}, 
        ...currentCourseGoals
      ])
    }
  }
 
  return (
    <View style={styles.appContainer}>
      <GoalInput textInputHandler={textInputHandler} addGoalHandler={addGoalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList data={courseGoals} renderItem={(goal) => 
            {
              return <GoalItem text={goal.item.text} />
            }
        }
        keyExtractor={(item, index) => {
          return item.id;
        }}
        >
        </FlatList>
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

  

  goalsContainer: {
    flex: 5,
  },
});
