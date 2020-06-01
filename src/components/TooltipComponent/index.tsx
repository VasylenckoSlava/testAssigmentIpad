import React from 'react';
import {Text, Tooltip} from 'react-native-elements';
import {Image, TouchableWithoutFeedback, View, StyleSheet} from 'react-native';

// assets
import sound from "../../assets/soundOnCopy2.png";
import {colors, fonts} from '../../style';

const TooltipComponent = (props) => {
  return (
    <Tooltip
      withPointer
      // onOpen={props.onPress}
      popover={
        <View style={styles.mainContainer}>
          <View style={{flex: 1}} />
          <Text style={styles.helperText}>{props.textHelperTooltip}</Text>
          <TouchableWithoutFeedback>
            <Image source={sound} style={styles.imageStyles} />
          </TouchableWithoutFeedback>
        </View>
      }
      containerStyle={styles.containerTooltip}
      height={160}
      overlayColor={'transparent'}>
      <Text>{props.text}</Text>
    </Tooltip>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  containerTooltip: {
    width: 400,
    borderRadius: 20,
    backgroundColor: colors.tooltipBackgroundColor,
  },
  helperText: {
    fontFamily: fonts.main,
    fontSize: 25,
    fontWeight: 'bold',
    letterSpacing: 0,
    textAlign: 'center',
    color: colors.tooltipTextColor,
  },
  imageStyles: {
    alignSelf: 'flex-end',
  },
});

export default TooltipComponent;
