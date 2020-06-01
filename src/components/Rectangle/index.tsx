import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

// assets
import {colors, fonts, mergeStyles} from '../../style';
import arrow from '../../assets/arowsExpression.png';

const Rectangle = (props) => {
  return (
    <View>
      {props.arows && (
        <TouchableOpacity onPress={props.onPress}  style={{position: 'absolute', bottom: 130, left: 45}}>
          <Image
            source={arrow}

          />
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
    </View>
  );
};

const styles = StyleSheet.create({
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
});

export default Rectangle;
