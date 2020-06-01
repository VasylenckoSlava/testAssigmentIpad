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
    valueArray: [1],
  };
  onPressButton = () => {
    console.log('click');
  };
  componentDidMount() {
    console.log('initial', this.state.initialValue);
  }
  componentDidUpdate(
    prevProps: Readonly<any>,
    prevState: Readonly<SecondCardProps>,
    snapshot?: any,
  ) {
    if (this.state.initialValue !== prevState.initialValue) {
      this.setState({
        total: this.state.initialValue * 2,
      });
    }
  }

  onAddNumber = async () => {
    const {initialValue, valueArray} = this.state;
    if (initialValue >= 5) {
      alert('not allow');
    } else {
      await this.setState({
        initialValue: initialValue + 1,
        valueArray: [...valueArray, +valueArray + 1],
      });
    }
  };

  onDeleteNumber = () => {
    console.log('delete picture');
    const newArray = [...this.state.valueArray];
    newArray.splice(
      newArray.findIndex((ele) => ele.id === id),
      1,
    );

    this.setState(() => {
      return {
        valueArray: newArray,
      };
    });
  };

  render() {
    const {initialValue, total, valueArray} = this.state;
    console.log('initialValue', initialValue);
    console.log('total', total);
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
