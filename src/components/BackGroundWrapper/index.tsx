import React, {Component} from 'react';
import {View, ImageBackground, StyleSheet, Text} from 'react-native';

// components
import InsideBox from '../InsideBox';
import NextButton from '../NextButton';
import SwipedDots from '../SwipedDots';
import BackButton from '../BackButton';

// assets
import seaBg from '../../assets/seaBgNewNew01Copy.png';

class BackGroundWrapper extends Component {
	public props: any;
	public onClickBackButton: any;
	public children: any;
	public onPress: any;
	public navigation: any;

  render() {
    const {children, onPress, navigation} = this.props;
    // const {showBackButton} = this.state;

    return (
      <View style={styles.container}>
        <ImageBackground source={seaBg} style={styles.imageStyles}>
          <View style={styles.dotsPosition}>
            <SwipedDots navigation={navigation} />
          </View>
          <InsideBox>{children}</InsideBox>
          <BackButton onPress={this.onClickBackButton} />
          <NextButton onPress={onPress} />
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {flex: 1},
  imageStyles: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  dotsPosition: {
    position: 'absolute',
    alignSelf: 'center',
    flexDirection: 'row',
    top: 20,
  },
});

export default BackGroundWrapper;
