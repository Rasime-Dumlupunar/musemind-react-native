import React, {useState} from 'react';
import {View} from 'react-native';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';
import Button from '../../components/UI/button';
import {InputUpdate} from '../../components/UI/input';
import {useDispatch} from 'react-redux';
import {updateTask} from '../../store/actions/tasksActions';
import {Radio, RadioGroup} from '@ui-kitten/components';

const UpdateTask = ({route}) => {
  const task = route.params.task;
  const [title, setTitle] = useState(task.title);
  const [date, setDate] = useState(task.date);
  const [status, setStatus] = useState(task.status);
  const dispatch = useDispatch();

  const saveTask = () => {
    const form = {
      id: task.id,
      title: title,
      status: status,
      date: date,
    };
    dispatch(updateTask(form));
  };
  const handleStatusChange = index => {
    const statuses = ['In Progress', 'In Review', 'On Hold', 'Complated'];
    setStatus(statuses[index]);
  };
  return (
    <View style={defaultScreenStyle.container}>
      <InputUpdate
        placeholder="Please set title"
        title="Task Title"
        onChangeText={value => setTitle(value)}
        value={title}
      />
      <InputUpdate
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
      <Button onPress={() => saveTask()} title="Güncelle" status="warning" />
    </View>
  );
};

export default UpdateTask;
