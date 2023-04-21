/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {Pressable, Text, View} from 'react-native';

const EmployeeList = ({
  employees,
  addEmployee,
  setEditingIndex,
  editingIndex,
  deleteEmployee,
}) => {
  useEffect(() => {
    console.log('xx', employees);
  }, [employees]);
  return (
    <View style={{width: '45%', padding: 10}}>
      <Pressable
        style={{backgroundColor: 'green', alignItems: 'center', padding: 10}}
        onPress={() => addEmployee({name: 'New Employee', gender: 'Male'})}>
        <Text style={{color: 'white'}}>Add Employee</Text>
      </Pressable>

      {employees.map((item, key) => {
        return (
          <View
            style={{
              marginTop: 10,
              borderWidth: editingIndex === key ? 5 : 1,
              borderColor: editingIndex === key ? 'green' : 'black',
            }}>
            <Text
              style={{
                height: 50,
              }}
              onPress={() => setEditingIndex(key)}>
              {item.name}
              {'    '}
              {item.gender}
            </Text>
            <Pressable
              style={{backgroundColor: 'red', alignItems: 'center'}}
              onPress={() => deleteEmployee(key)}>
              <Text style={{color: 'white'}}>delete</Text>
            </Pressable>
          </View>
        );
      })}
    </View>
  );
};

export default EmployeeList;
