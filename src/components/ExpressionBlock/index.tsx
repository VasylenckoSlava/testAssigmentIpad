import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

// assets
import {fonts} from '../../style';

const ExpressionBlock = (props) => {
  return (
    <View>
      <Text style={styles.container}>{props.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    fontFamily: fonts.main,
    fontSize: 120,
    fontWeight: 'bold',
    color: 'white',
    marginHorizontal: 30,
  },
});

export default ExpressionBlock;
