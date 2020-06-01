import React  from 'react';
import {View, StyleSheet} from 'react-native';
import {useRoute} from '@react-navigation/native';

const rows = ['First', 2];

const SwipedDots = (props) => {
  const route = useRoute();
  console.log(route);
  return rows.map((obj, index) => {
    return <View style={styles.dotsStyle} key={index} />;
  });
};

const styles = StyleSheet.create({
  dotsStyle: {
    width: 20,
    height: 20,
    borderRadius: 20 / 2,
    backgroundColor: '#505068',
    marginHorizontal: 10,
  },
  dotsStyle1: {
    width: 20,
    height: 20,
    borderRadius: 20 / 2,
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
    marginHorizontal: 10,
  },
});

export default SwipedDots;
