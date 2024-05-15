import {
    StyleSheet,
    View,
    Text
} from 'react-native'

function GoalItem(props) {
    return (
        <View style={styles.goalItemView}>
            <Text style={styles.goalItem}>{props.text}</Text>
        </View>
    )
};


export default GoalItem;

const styles = StyleSheet.create({
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