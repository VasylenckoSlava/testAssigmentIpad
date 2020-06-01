import React, {Component} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';

// components

import BackGroundWrapper from '../../components/BackGroundWrapper';
import DescriptionBlock from '../../components/DescriptionBlock';
import Divider from '../../components/Divider';
import DisplayContentBlock from '../../components/DisplayContentBlock';
import Underline from '../../components/Underline';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

class First extends Component {
  public setState: any;
  public props: any;
  public navigation: any;
  state = {
    showBackButton: false,
  };
  onClickBackButton = () => {
    this.setState({
      showBackButton: !this.state.showBackButton,
    });
  };
  onClickNextButton = () => {
    this.props.navigation.navigate('Second');
  };
  onClickSoundButton = () => {
    alert('click on sound button');
  };
  render() {
    const {navigation} = this.props;
    return (
      <BackGroundWrapper
        onPress={this.onClickNextButton}
        navigation={navigation}>
        <DescriptionBlock
          firstNumber={'3'}
          secondNumber={'2'}
          onPress={this.onClickSoundButton}
        />
        <View style={styles.containerForContainerBlock}>
          <View style={styles.containerForListImages}>
            <FlatList
              data={DATA}
              numColumns={3}
              renderItem={() => (
                <View style={styles.spaceBetweenImages}>
                  <DisplayContentBlock image />
                </View>
              )}
              keyExtractor={(item) => item.id}
            />
          </View>
          <Divider />
          <DisplayContentBlock
            expressionFirstNumber={'2'}
            expressionSecondNumber={'2'}
            expressionThirdNumber={'2'}
            calculation={'+'}
            result={'6'}
          />
          <Underline
            textHelperTooltip={'Vi kan räkna ut antalet prickar med plus.'}
            text={'Press me'}
            onPressBackButton={this.onClickBackButton}
          />

          <Divider />
          <DisplayContentBlock
            expressionFirstNumber={'3'}
            expressionSecondNumber={'2'}
            calculation={'x'}
            result={'6'}
            tooltip
            textHelperTooltip={
              'Vi kan också räkna så här. Detta kallas gånger.'
            }
          />
          <Divider noColor />
        </View>
      </BackGroundWrapper>
    );
  }
}

const styles = StyleSheet.create({
  containerForContainerBlock: {
    flex: 1,
    justifyContent: 'space-between',
  },
  containerForListImages: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  spaceBetweenImages: {
    marginHorizontal: 20,
  },
});

export default First;
