import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';

// components
import BackGroundWrapper from '../../components/BackGroundWrapper';
import DescriptionBlock from '../../components/DescriptionBlock';
import DisplayContentBlock from '../../components/DisplayContentBlock';
import Divider from '../../components/Divider';
import Rectangle from '../../components/Rectangle';
import ExpressionBlock from '../../components/ExpressionBlock';

// assets
import {colors} from '../../style';

interface SecondCardProps {
  firstNumber: string;
  secondNumber: string;
  onPress: void;
  text: string;
}

const buttonData = [
  {text: '1', id: '1'},
  {text: '2', id: '2'},
  {text: '3', id: '3'},
  {text: '4', id: '4'},
  {text: '5', id: '5'},
  // {text: '=', id: 'equals'},
];

const buttonEquations = [
  {text: '×', id: 'multiply'},
  // {text: '-', class: 'subtract'},
  // {text: '+', class: 'add'},
];

class Second extends Component<any, SecondCardProps> {
  public setState: any;
  public props: any;
  public navigation: any;
  state = {
    initialValue: 1,
    total: 2,
    valueArray: [],
  };
  onPressButton = () => {
    console.log('click');
  };

  onAddNumber = () => {
    const {initialValue, valueArray} = this.state;
    if (initialValue > 5) {
      alert('not allow');
    } else {
      this.setState({
        initialValue: initialValue + 1,
        total: initialValue * 2,
        valueArray: [...valueArray, +valueArray + 1],
      });
    }
  };

  onDeleteNumber = () => {
    console.log('delete number');
  };

  render() {
    const {initialValue, total, valueArray} = this.state;
    return (
      <BackGroundWrapper>
        <DescriptionBlock
          text={'Prova att ändra på siffran och se vad som händer!'}
          onPress={this.onPressButton}
        />

        <View style={styles.wrapper}>
          {valueArray.map((item, key) => (
            <View style={styles.displayContent}>
              <DisplayContentBlock image key={key.index} />
            </View>
          ))}
        </View>
        <Divider />
        <View style={styles.wrapper}>
          <Rectangle
            onPress={this.onAddNumber}
            character={initialValue}
            arows
          />
          <ExpressionBlock text={'×'} />
          <Rectangle character={2} style={styles.primaryColor} />
          <ExpressionBlock text={'='} />
          <Rectangle character={total} customWidth />
        </View>
      </BackGroundWrapper>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  displayContent: {
    marginHorizontal: 20,
  },
  primaryColor: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
});

export default Second;
