import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

// assets
import {colors, fonts, mergeStyles} from '../../style';
import arrow from '../../assets/arowsExpression.png';
import arrowDown from '../../assets/arrowDown.png';

const Rectangle = (props) => {
  return (
    <View style={styles.wrapper}>
      {props.arowsUp && (
        <TouchableOpacity
          onPress={props.onPressAdd}
          style={styles.styleImageContainer}>
          <Image source={arrow} />
        </TouchableOpacity>
      )}
      <View
        style={mergeStyles(
          props.customWidth
            ? styles.customContainer
            : [styles.mainContainer, props.style],
        )}>
        <View style={styles.textContainer}>
          <Text
            style={props.primaryColor ? styles.primaryTextColor : styles.text}>
            {props.character}
          </Text>
        </View>
      </View>
      {props.arowsDown && (
        <TouchableOpacity onPress={props.onPressRemove} style={{padding: 10}}>
          <Image source={arrowDown} />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {justifyContent: 'center', alignItems: 'center'},
  mainContainer: {
    width: 120,
    height: 120,
    borderRadius: 18,
    backgroundColor: colors.firstCharacter,
    borderStyle: 'solid',
    borderWidth: 12,
    borderColor: colors.firstCharacter,
  },
  customContainer: {
    width: 150,
    height: 120,
    borderRadius: 18,
    backgroundColor: colors.white,
    borderStyle: 'solid',
    borderWidth: 12,
    borderColor: colors.white,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: fonts.main,
    fontSize: 120,
    textAlign: 'center',
    color: colors.tooltipTextColor,
  },
  primaryTextColor: {
    fontFamily: fonts.main,
    fontSize: 120,
    textAlign: 'center',
    color: colors.tooltipTextColor,
  },
  styleImageContainer: {
    padding: 10,
  },
});

export default Rectangle;
