import React from 'react';
import {Image, StyleSheet, TouchableWithoutFeedback, View} from 'react-native';

// assets
import next from '../../assets/next.png';

const NextButton = ({onPress}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.floatingMenuButtonStyle}>
        <Image source={next} />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  floatingMenuButtonStyle: {
    position: 'absolute',
    bottom: 50,
    right: 0,
  },
});

export default NextButton;
