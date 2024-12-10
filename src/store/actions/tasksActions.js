import {Alert} from 'react-native';
import {ADDTASK, DELETETASK, UPDATETASK} from '../types/tasksTypes';

export const addNewTask = task => {
  return async dispatch => {
    dispatch({
      type: ADDTASK,
      payload: task,
    });
    Alert.alert('İşlem başarılı.', 'Kayıt başarılı bir şekilde gerçekleşti.');
  };
};
export const deleteTask = taskId => {
  return async dispatch => {
    dispatch({
      type: DELETETASK,
      payload: taskId,
    });
    Alert.alert('Silme işlemi başarılı.', 'Başarılı bir şekilde silindi.');
  };
};
export const updateTask = task => {
  return async dispatch => {
    dispatch({
      type: UPDATETASK,
      payload: task,
    });
    Alert.alert(
      'Güncelleme işlemi başarılı.',
      'Kayıt başarılı bir şekilde güncellendi.',
    );
  };
};
