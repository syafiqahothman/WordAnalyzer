import React, {Component} from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default class App extends React.Component {
constructor(){
  super();
  this.state = {
  word: '',
  counter : 0,
  counterv : 0,
  counterc : 0,
  countConsonant : 0,
  vowels = ['a','e','i','o','u'],
  consonant = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z'],
  };
}

analyzeWord = () => {
  countVowels = () =>{
  if (vowels.includes(this.state.word)){
    counterv++;
  }
}
countConsonant = () =>{
  if (consonant.includes(this.state.word)){
    counterv++;
  }
}
countCharacters = (counter) =>{
var Characters = counter.length.toString();
this.setState({word : Characters});
}
}



  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.title}>Word Analyzer</Text>
      <TextInput style = {styles.label} onChangeText={(word) => this.setState({word})} placeholder='Enter a word'/>
      <Button color="#ff6666" onPress={this.analyzeWord} title='Analyze'/>
      <Text style = {styles.result}>Word: {this.state.word} </Text>
      <Text style = {styles.result}>No of vowels: {this.countConsonant}</Text>
      <Text style = {styles.result}>No of vowels: {this.countVowels}</Text>
      <Text style = {styles.result}>No of characters: {this.state.counter}</Text>
           
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff99',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    color: 'black',
  fontWeight: 'bold',
  fontSize: 30
  },
  label: {
    backgroundColor: '#7733ff',
    textAlign: 'center',
    width: 250,
    height: 50,
    margin: 10,
    color: 'white',
    fontSize: 20
  },
  result:{
    margin: 10,
    color: '#595959',
    fontWeight: 'bold',
    fontSize: 20
  },
});


