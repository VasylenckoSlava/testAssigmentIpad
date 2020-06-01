import React from 'react';
import {Image, StyleSheet, TouchableWithoutFeedback, View} from 'react-native';

// assets
// @ts-ignore
import back from '../../assets/back.png';

const BackButton = ({onPress}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.floatingMenuButtonStyle}>
        <Image source={back} />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  floatingMenuButtonStyle: {
    position: 'absolute',
    bottom: 180,
    right: 10,
  },
});

export default BackButton;
