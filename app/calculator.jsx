import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const Calculator = () => {
  const [inputs, setInputs] = useState([{ value: '0' }, { value: '0' }]);
  const [result, setResult] = useState(null);

  const handleCalculation = (operation) => {
    const numbers = inputs.map((input) => parseFloat(input.value));

    if (numbers.some((num) => isNaN(num))) return;

    let calcResult = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
      switch (operation) {
        case '+':
          calcResult += numbers[i];
          break;
        case '-':
          calcResult -= numbers[i];
          break;
        case '*':
          calcResult *= numbers[i];
          break;
        case '/':
          if (numbers[i] !== 0) calcResult /= numbers[i];
          else return;
          break;
        default:
          break;
      }
    }
    setResult(calcResult);
  };

  const addInput = () => {
    setInputs([...inputs, { value: '0' }]);
  };

  const handleInputChange = (index, value) => {
    const newInputs = [...inputs];
    newInputs[index].value = value;
    setInputs(newInputs);
  };

  const removeInput = (index) => {
    if (inputs.length > 2) {
      const newInputs = inputs.filter((_, i) => i !== index);
      setInputs(newInputs);
    }
  };

  const resetCalculator = () => {
    setInputs([{ value: '0' }, { value: '0' }]);
    setResult(null);
  };

  return (
    <View style={styles.calculator}>
      <Text style={styles.header}>Calculator</Text>

      <View style={styles.inputsContainer}>
        {inputs.map((input, index) => (
          <View key={index} style={styles.inputRow}>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              value={input.value}
              onChangeText={(text) => handleInputChange(index, text)}
              placeholder={`Number ${index + 1}`}
              placeholderTextColor="#aaa"
            />
            {inputs.length > 2 && (
              <TouchableOpacity style={styles.removeButton} onPress={() => removeInput(index)}>
                <Text style={styles.removeButtonText}>❌</Text>
              </TouchableOpacity>
            )}
          </View>
        ))}
      </View>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={addInput}>
          <Text style={styles.buttonText}>+ Input</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleCalculation('+')}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleCalculation('-')}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleCalculation('*')}>
          <Text style={styles.buttonText}>*</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleCalculation('/')}>
          <Text style={styles.buttonText}>/</Text>
        </TouchableOpacity>
      </View>

      {result !== null && <Text style={styles.result}>Result: {result}</Text>}

      <TouchableOpacity style={styles.resetButton} onPress={resetCalculator}>
        <Text style={styles.resetButtonText}>Reset</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  calculator: {
    backgroundColor: 'white', 
    padding: 25,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    width: '97%',
    maxWidth: 350,
    alignItems: 'center',
  },
  header: {
    fontSize: 22,
    fontWeight: '600',
    color: '#FF4F91',
    marginBottom: 15,
  },
  inputsContainer: {
    width: '100%',
    marginBottom: 15,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  input: {
    flex: 1,
    padding: 12,
    fontSize: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#FF8FAB',
    backgroundColor: '#fff',
    textAlign: 'center',
  },
  removeButton: {
    marginLeft: 10,
    backgroundColor: '#FF4F91',
    padding: 8,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  removeButtonText: {
    fontSize: 14,
    color: '#fff',
    fontWeight: 'bold',
  },
  buttonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 10,
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#FF8FAB',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    minWidth: 60,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
  result: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
    marginTop: 15,
  },
  resetButton: {
    backgroundColor: '#FF4F91',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 15,
  },
  resetButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
});

export default Calculator;
