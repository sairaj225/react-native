import { 
  Button, 
  StyleSheet, 
  Text, 
  TextInput, 
  View, 
  Alert,
  Settings,
  ScrollView,
  FlatList,
  Pressable
} from 'react-native';

import { useState } from 'react';
import GoalItem from './Components/GoalItem';
import GoalInput from './Components/GoalInput';

export default function App() {

  const [courseGoals, setCourseGoals] = useState([]);
  const [itemsCount, setItemsCount] = useState(0);
  const [IsModelVisible, setIsModelVisible] = useState(false);

  function textInputHandler(enteredText) {
    setEnteredTextInput(enteredText);
  }

  function addGoalHandler(enteredTextInput) {
    if (enteredTextInput){
      setItemsCount((curreCount) => curreCount + 1);
      setCourseGoals((currentCourseGoals) => [
        {text: enteredTextInput, id: itemsCount}, 
        ...currentCourseGoals
      ]);
      setIsModelVisible(false);
    }
  }

  function addGoalButtonHandler() {
    setIsModelVisible(true);
  }

  function deleteItem(id) {
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    })
  }

  function closeModel() {
    setIsModelVisible(false);
  }
 
  return (
    <View style={styles.appContainer}>
      <Button 
        color="#5AB2FF"
        title="Add Goal"
        onPress={addGoalButtonHandler}
      />
      <GoalInput 
        visible={IsModelVisible} 
        textInputHandler={textInputHandler} 
        addGoalHandler={addGoalHandler} 
        closeModel={closeModel}
        />
      <View style={styles.goalsContainer}>
        <FlatList data={courseGoals} renderItem={(goal) => 
            {
              return <GoalItem text={goal.item.text} id={goal.item.id} deleteItem={deleteItem} />
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
