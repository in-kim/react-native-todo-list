import { StatusBar } from 'expo-status-bar';
import {Button, FlatList, StyleSheet, Text, View} from 'react-native';

import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";
import {useState} from "react";

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false)
  const [courseGoals, setCourseGoals] = useState([]);

  function toggleModalHandler(is) {
    setModalIsVisible(is ? is : !modalIsVisible);
  }
  function addGoalHandler(enteredGoal) {
    console.log('addGoalHandler:', enteredGoal)
    setCourseGoals(currentGoals => [...currentGoals, {id: Math.random().toString(), value: enteredGoal}])
    toggleModalHandler(false)
  }

  function deleteGoalHandler(id){
    setCourseGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== id)
    })
  }
  return (
    <View style={styles.appContainer}>
      <Button
        title="Add New Goal"
        color="#5e0acc"
        onPress={() => toggleModalHandler(true)}
      />
      <GoalInput
        visible={modalIsVisible}
        addGoalHandler={addGoalHandler}
        modalOpen={() => toggleModalHandler(true)}
        modalClose={() => toggleModalHandler(false)}
      />
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={itemData => <GoalItem id={itemData.item.id} value={itemData.item.value} onDeleteItem={deleteGoalHandler}/>}
          keyExtractor={itemData => itemData.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex:1,
    backgroundColor: '#fff',
    padding: 50,
  },
  goalsContainer:{
    marginTop: 20,
  }
});
