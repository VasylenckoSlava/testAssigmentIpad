import React from 'react';
import {View, StyleSheet} from 'react-native';

const Divider = ({noColor}) => {
  return (
    <View style={styles.container}>
      <View
        style={noColor ? styles.transparentDivider : styles.dividerStyles}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 30,
  },
  dividerStyles: {
    width: '100%',
    borderRadius: 33,
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: '#434358',
  },
  transparentDivider: {
    width: '100%',
    borderRadius: 33,
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: 'transparent',
  },
});

export default Divider;
