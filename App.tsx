import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import EmployeeEditor from './EmployeeEditor';
import EmployeeList from './EmployeeList';

function App() {
  const [employees, setEmployees] = useState([]);
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);

  useEffect(() => {
    if (editingIndex !== null) {
      setName(employees[editingIndex]?.name);
      setGender(employees[editingIndex]?.gender);
    }
  }, [editingIndex, employees]);

  const addEmployee = value => {
    setEmployees([...employees, value]);
    setEditingIndex(employees.length);
  };

  const deleteEmployee = index => {
    let temp = employees.filter((item, i) => i !== index);
    setEmployees(temp);

    setEditingIndex(null);
  };

  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
      <EmployeeList
        setName={setName}
        employees={employees}
        addEmployee={addEmployee}
        setEditingIndex={setEditingIndex}
        editingIndex={editingIndex}
        deleteEmployee={deleteEmployee}
      />
      {editingIndex !== null && (
        <EmployeeEditor
          name={name}
          gender={gender}
          setGender={setGender}
          setName={setName}
          employees={employees}
          setEmployees={setEmployees}
          editingIndex={editingIndex}
        />
      )}
    </View>
  );
}

export default App;
