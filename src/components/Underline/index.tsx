import React from 'react';
import {View, StyleSheet} from 'react-native';

import TooltipComponent from '../TooltipComponent';

const Underline = (props) => {
  return (
    <View style={styles.container}>
      <TooltipComponent
        textHelperTooltip={props.textHelperTooltip}
        text={props.text}
        onPress={props.onPress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {justifyContent: 'center', alignItems: 'center'},
});

export default Underline;
