import {StyleSheet, TextInput, View, Button, Modal, Image} from 'react-native'
import { useState } from 'react';

const GoalInput = ({onAddGoal, visible, onCancel}) => {
  const [enteredGoalText,setEnteredGoalText] = useState('');

  const goalInputHandler = (text) => {
    setEnteredGoalText(text)
  }

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require('../assets/images/pointer.png')} />
        <TextInput value={enteredGoalText} style={styles.textInput} placeholder='Your course goal' onChangeText={goalInputHandler} />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title='Add Goal' onPress={() => onAddGoal(enteredGoalText)} />
          </View>
          <View style={styles.button}>
            <Button onPress={onCancel} title="Cancel" />
          </View>
        </View>
      </View>
    </Modal>
  )
}
export default GoalInput


const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,

  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    width: '100%',
    padding: 8,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: 'row',
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  }
})