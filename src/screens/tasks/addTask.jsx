import React, {useState} from 'react';
import {View} from 'react-native';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';
import Button from '../../components/UI/button';
import {Input} from '../../components/UI/input';
import {useDispatch} from 'react-redux';
import {addNewTask} from '../../store/actions/tasksActions';
import {Radio, RadioGroup} from '@ui-kitten/components'; // RadioGroup için import

const AddTask = () => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [status, setStatus] = useState('In Progress');
  const dispatch = useDispatch();

  const saveTask = () => {
    const task = {
      id: Date.now(),
      title: title,
      status: status,
      date: date,
    };
    dispatch(addNewTask(task));
  };

  const handleStatusChange = index => {
    const statuses = ['In Progress', 'In Review', 'On Hold', 'Complated'];
    setStatus(statuses[index]);
  };
  return (
    <View style={defaultScreenStyle.container}>
      <Input
        placeholder="Please set title"
        title="Task Title"
        onChangeText={value => setTitle(value)}
        value={title}
      />
      <Input
        placeholder="Please set date"
        title="Task Date"
        onChangeText={value => setDate(value)}
        value={date}
      />
      <View style={{marginVertical: 10, marginHorizontal: 20}}>
        <RadioGroup
          selectedIndex={[
            'In Progress',
            'In Review',
            'On Hold',
            'Complated',
          ].indexOf(status)}
          onChange={handleStatusChange}>
          <Radio>In Progress</Radio>
          <Radio>In Review </Radio>
          <Radio>On Hold</Radio>
          <Radio>Complated</Radio>
        </RadioGroup>
      </View>
      <Button onPress={() => saveTask()} title="Kaydet" status="success" />
    </View>
  );
};

export default AddTask;
