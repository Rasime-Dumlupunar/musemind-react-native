import React from 'react';
import {View, Text} from 'react-native';
import {BarChart} from 'react-native-gifted-charts';
import {ThemeColors} from '../../theme/colors';

const BarrChart = () => {
  const barData = [
    {
      value: 60,
      label: 'Jan',
      spacing: 2,
      labelWidth: 30,
      labelTextStyle: {color: 'black'},
      frontColor: ThemeColors.green,
    },
    {
      value: 25,
      frontColor: ThemeColors.pink,
    },
    {
      value: 70,
      label: 'Feb',
      spacing: 2,
      labelWidth: 30,
      labelTextStyle: {color: 'black'},
      frontColor: ThemeColors.green,
    },
    {value: 40, frontColor: ThemeColors.pink},
    {
      value: 65,
      label: 'Mar',
      spacing: 2,
      labelWidth: 30,
      labelTextStyle: {color: 'black'},
      frontColor: ThemeColors.green,
    },
    {value: 35, frontColor: ThemeColors.pink},
    {
      value: 40,
      label: 'Apr',
      spacing: 2,
      labelWidth: 30,
      labelTextStyle: {color: 'black'},
      frontColor: ThemeColors.green,
    },
    {value: 20, frontColor: ThemeColors.pink},
    {
      value: 60,
      label: 'May',
      spacing: 2,
      labelWidth: 30,
      labelTextStyle: {color: 'black'},
      frontColor: ThemeColors.green,
    },
    {value: 40, frontColor: ThemeColors.pink},
    {
      value: 65,
      label: 'Jun',
      spacing: 2,
      labelWidth: 30,
      labelTextStyle: {color: 'black'},
      frontColor: ThemeColors.green,
    },
    {value: 30, frontColor: ThemeColors.pink},
    {
      value: 45,
      label: 'Jul',
      spacing: 2,
      labelWidth: 30,
      labelTextStyle: {color: 'black'},
      frontColor: ThemeColors.green,
    },
    {value: 20, frontColor: ThemeColors.pink},
  ];

  const renderTitle = () => {
    return (
      <View style={{marginVertical: 20}}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-evenly',
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View
              style={{
                height: 14,
                width: 14,
                borderRadius: 6,
                backgroundColor: ThemeColors.pink,
                marginRight: 8,
              }}
            />
            <Text
              style={{
                fontSize: 16,
                color: 'black',
              }}>
              In Review
            </Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View
              style={{
                height: 14,
                width: 14,
                borderRadius: 6,
                backgroundColor: ThemeColors.green,
                marginRight: 8,
              }}
            />
            <Text
              style={{
                fontSize: 16,
                color: 'black',
              }}>
              Complated
            </Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View
      style={{
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 10,
        margin: 10,
      }}>
      <BarChart
        data={barData}
        barWidth={8}
        spacing={24}
        roundedTop
        roundedBottom
        hideRules
        xAxisThickness={0}
        yAxisThickness={0}
        yAxisTextStyle={{color: 'black'}}
        noOfSections={5}
        maxValue={80}
        marginBottom={10}
      />
      {renderTitle()}
    </View>
  );
};

export default BarrChart;
