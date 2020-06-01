import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';

// assets
import dice from '../../assets/dice2.png';
import {fonts, colors, fontSizes} from '../../style';

const DisplayContentBlock = ({...props}) => {
  const convertObj = JSON.stringify(props);
  const lightColor =
    props.calculation === '+' ||
    (props.calculation === 'x' && convertObj.includes('expression'));

  return (
    <View style={styles.wrapper}>
      {props.calculation === '+' && (
        <Text style={lightColor ? styles.brightColor : styles.textStyles}>
          {props.expressionFirstNumber}&nbsp;
          <Text style={styles.whiteColor}>{props.calculation}</Text>&nbsp;
          {props.expressionSecondNumber}
          &nbsp;<Text style={styles.whiteColor}>{props.calculation}</Text>&nbsp;
          {props.expressionThirdNumber}
          <Text style={styles.whiteColor}>
            &nbsp;=&nbsp;
            {props.result}
          </Text>
        </Text>
      )}
      {props.calculation === 'x' && (
        <Text style={lightColor ? styles.brightColor : styles.textStyles}>
          <Text style={styles.greyColor}>{props.expressionFirstNumber}</Text>
          &nbsp;
          <Text style={styles.whiteColor}>{props.calculation}</Text>&nbsp;
          {props.expressionSecondNumber}
          <Text style={styles.whiteColor}>
            &nbsp;=&nbsp;
            {props.result}
          </Text>
        </Text>
      )}
      {props.image && <Image source={dice} style={styles.imageStyles} />}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyles: {
    fontSize: fontSizes.bigInt,
    fontWeight: 'bold',
    textAlign: 'right',
    fontFamily: fonts.main,
  },
  imageStyles: {
    marginTop: 20,
  },
  brightColor: {
    color: colors.primary,
    fontSize: fontSizes.bigInt,
    fontWeight: 'bold',
    textAlign: 'right',
    fontFamily: fonts.main,
  },
  whiteColor: {
    color: colors.white,
  },
  greyColor: {color: colors.firstCharacter},
});

export default DisplayContentBlock;
