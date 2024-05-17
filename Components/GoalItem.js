import {
    StyleSheet,
    View,
    Text,
    Pressable
} from 'react-native'

function GoalItem(props) {
    return (
        <View style={styles.goalItemView}>
            <Pressable 
                onPress={props.deleteItem.bind(this, props.id)}
                android_ripple={{color: "#dddddd"}}
                style={({pressed}) => pressed && styles.pressedItem}>
                <Text style={styles.goalItem}>{props.text}</Text>
            </Pressable>
        </View>
        
    )
};


export default GoalItem;

const styles = StyleSheet.create({
    goalItemView: {
        borderRadius: 6,
        borderWidth: 1,
        borderColor: '57A6A1',
        backgroundColor: '#EEEDEB',
        margin: 5,
      },
    
      goalItem: {
        color: '#3C3633',
        padding: 10,
        backgroundColor: '#FF9800',
        borderRadius: 6
      },

      pressedItem: {
        opacity: 0.5,
      }
});