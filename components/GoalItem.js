import {Text, View, StyleSheet, Pressable} from "react-native";

export default function GoalItem(props){
  const { id, value, onDeleteItem } = props;
  return (
    <Pressable onPress={() => onDeleteItem(id)} style={({ pressed }) => pressed && styles.pressedItem}>
      <View style={styles.goalItemContainer}>
        <Text style={styles.goalItemText}>{value}</Text>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  goalItemContainer:{
    backgroundColor:'#5e0acc',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 10,
    borderRadius: 10,
  },
  goalItemText:{
    color: '#fff',
  },
  pressedItem:{
    opacity: 0.5
  }
})