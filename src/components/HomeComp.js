import React, { Component } from 'react';
import { StyleSheet, View, Image, Dimensions } from 'react-native';
import { Button, Text, Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import { fetchSpeakers } from '../redux/state/speakers/index';

class HomeComp extends Component {
  
  static navigationOptions = {
    title: 'DevFest Nantes 2018',
  };

  onSessionButtonClicked() {
    this.props.navigation.navigate('SessionList');
  }

  onSpeakerButtonClicked() {
    console.log("speaker button clicked");
  }

  componentDidMount() {
    this.props.dispatch(fetchSpeakers());
  }

  render() {
      return (
        <View style={styles.container}>
          <Image
            source={require('../../assets/devfest_logo.png')}
            style={styles.logo}
          />
          <Button 
            title='Voir les sessions'
            icon={
              <Image
                source={require('../../assets/planet1_logo.png')}
                style={styles.planet1_logo}
              />
            }
            buttonStyle={{
              backgroundColor: '#bf5022',
              width: 300,
              height: 45,
              borderColor: "#ffffff",
              borderRadius: 100,
              borderWidth: 0,
              elevation: 0,
            }}
            onPress={this.onSessionButtonClicked.bind(this)}
          />
          <Button 
            title='Voir les présentateurs'
            icon={
              <Image
                source={require('../../assets/planet2_logo.png')}
                style={styles.planet1_logo}
              />
            }
            buttonStyle={{
              marginTop: 25,
              backgroundColor: '#bf5022',
              width: 300,
              height: 45,
              borderColor: "#ffffff",
              borderRadius: 100,
              borderWidth: 0,
              elevation: 0,
            }}
            onPress={this.onSpeakerButtonClicked}
          />
        </View>
    );
  }

}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3d4746',
  },
  logo: {
    width: windowWidth * 0.75,
    resizeMode: "contain",
  },
  planet1_logo: {
    width: 35,
    resizeMode: 'contain',
  }
});

export default connect(null, null)(HomeComp);