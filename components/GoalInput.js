import {View, Text, Modal, TextInput, Pressable, StyleSheet} from "react-native";
import {useState} from "react";

export default function GoalInput(props){
  const {visible, addGoalHandler, modalOpen, modalClose} = props;
  const [enteredGoalText, setEnteredGoalText] = useState('')
  const goleInputHandler = (enteredText) => {
    setEnteredGoalText(enteredText)
  }

  const pressAddGoalHandler = () => {
    addGoalHandler(enteredGoalText)
    setEnteredGoalText('')
  }

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.goalInputContainer}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Your Course goal!!"
            onChangeText={goleInputHandler}
            value={enteredGoalText}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Pressable onPress={pressAddGoalHandler} style={({pressed}) => pressed ?  [styles.button, styles.pressedItem, styles.mr10] : [styles.button ,styles.mr10]}>
            <Text>Add Goal</Text>
          </Pressable>
          <Pressable onPress={modalClose} style={({pressed}) => pressed ?  [styles.button, styles.pressedItem] : styles.button}>
            <Text>Cancel</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  goalInputContainer:{
    flex:1,
    alignItems:'center',
    justifyContent: 'center',
    padding:30,
    backgroundColor: '#5e0acc'
  },
  inputContainer: {
    flexDirection: 'row'
  },
  textInput:{
    flex:1,
    backgroundColor: '#fff',
    padding:10,
    color: '#5e0acc',
    marginBottom:10,
  },
  buttonContainer: {
    flexDirection:'row',
  },
  button:{
    flex:1,
    alignItems:"center",
    justifyContent:"center",
    height:35,
    backgroundColor:'#e5d0ff'
  },
  mr10:{
    marginRight:10
  },
  pressedItem:{
    opacity: 0.5
  }
})