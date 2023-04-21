/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {TextInput, Text, View, Pressable} from 'react-native';

const EmployeeEditor = ({
  name,
  setName,
  employees,
  setEmployees,
  editingIndex,
  gender,
  setGender,
}) => {
  return (
    <View style={{width: '50%', padding: 10}}>
      <Text>Enter Details</Text>
      <TextInput
        style={{borderWidth: 1, marginBottom: 10, width: '100%'}}
        onChangeText={value => {
          let temp = employees;
          console.log(value);
          temp[editingIndex].name = value;
          setEmployees(temp);
          setName(value);
        }}
        value={name}
      />

      <Pressable
        style={{
          backgroundColor: gender === 'Male' ? 'gray' : 'white',
          borderWidth: 1,
        }}
        onPress={e => {
          let temp = employees;
          temp[editingIndex].gender = 'Male';
          setEmployees(temp);
          setGender('Male');
        }}>
        <Text>male</Text>
      </Pressable>

      <Pressable
        style={{
          backgroundColor: gender === 'Female' ? 'gray' : 'white',
          borderWidth: 1,
        }}
        onPress={e => {
          let temp = employees;
          temp[editingIndex].gender = 'Female';
          setEmployees(temp);
          setGender('Female');
        }}>
        <Text>female</Text>
      </Pressable>
    </View>
  );
};
export default EmployeeEditor;
