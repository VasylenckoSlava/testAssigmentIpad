import React from 'react';
import {StyleSheet, View} from 'react-native';

const InsideBox = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.boxStyles}>{props.children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 60,
    marginLeft: 60,
    marginRight: 60,
    marginBottom: 30,
  },
  boxStyles: {
    width: '100%',
    height: '100%',
    borderRadius: 33,
    backgroundColor: '#505068',
    borderStyle: 'solid',
    borderWidth: 20,
    borderColor: '#434358',
  },
});

export default InsideBox;
