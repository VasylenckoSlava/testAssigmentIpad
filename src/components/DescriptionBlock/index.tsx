import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';

// assets
// @ts-ignore
import sound from '../../assets/soundOnCopy2.png';
import {colors, fontSizes, fonts} from '../../style';

const DescriptionBlock = ({firstNumber, secondNumber, onPress, text}) => {
  return (
    <View style={styles.container}>
      <View style={styles.blockContainer}>
        <View style={styles.centerContainer}>
          {firstNumber && (
            <View style={styles.textDirection}>
              <Text style={styles.firstNumber}>{firstNumber}&nbsp;</Text>
              <Text style={styles.textStyles}>tärningar med&nbsp;</Text>
              <Text style={styles.secondNumber}>{secondNumber}&nbsp;</Text>
              <Text style={styles.textStyles}>prickar i varje.</Text>
            </View>
          )}
          {text && (
            <View>
              <Text style={styles.textStyles}>{text}</Text>
            </View>
          )}
        </View>
        <TouchableWithoutFeedback onPress={onPress}>
          <Image source={sound} style={styles.imageStyles} />
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginTop: 15,
  },
  blockContainer: {
    width: '100%',
    height: 90,
    borderRadius: 11,
    backgroundColor: colors.backgroundColor,
  },
  centerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  textDirection: {
    flexDirection: 'row',
  },
  firstNumber: {
    fontSize: fontSizes.middleInt,
    color: colors.firstCharacter,
    fontWeight: 'bold',
    fontFamily: fonts.main,
  },
  secondNumber: {
    fontSize: fontSizes.middleInt,
    color: colors.primary,
    fontWeight: 'bold',
    fontFamily: fonts.main,
  },
  textStyles: {
    fontSize: 30,
    fontWeight: 'bold',
    color: colors.white,
    fontFamily: fonts.main,
  },
  imageStyles: {
    position: 'absolute',
    right: 0,
  },
});

export default DescriptionBlock;
