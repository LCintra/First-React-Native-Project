import { StyleSheet , View, FlatList, Button } from 'react-native';
import { useState } from 'react';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [modalIsVisible,setModalIsVisible] = useState(false);
  const [courseGoals,setCourseGoals] = useState([]);

  const startAddGoalHandler = () => {
    setModalIsVisible(true);
  }

  const endAddGoalHandler = () => {
    setModalIsVisible(false);
  }

  const addGoalHandler = (enteredGoalText) => {
    setCourseGoals(currentCourseGoals => [...currentCourseGoals, {text: enteredGoalText, id: Math.random()}]);
    endAddGoalHandler();
  }

  const deleteGoalHandler = (id) => {
    setCourseGoals(currentCourseGoals => currentCourseGoals.filter((goal) => goal.id !== id))
  }

  return (
    <View style={styles.appContainer}>
      <Button title='Add new Goal' color="#5e0acc" onPress={startAddGoalHandler} />
      <GoalInput onCancel={endAddGoalHandler} visible={modalIsVisible} onAddGoal={addGoalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList data={courseGoals} alwaysBounceVertical={false} renderItem={itemData => {
          return (
            <GoalItem onDeleteItem={deleteGoalHandler} text={itemData.item.text} id={itemData.item.id} />
          );
        }} keyExtractor={(item) => item.id} /> 
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },
  goalsContainer: {
    flex: 5,
  },
});
