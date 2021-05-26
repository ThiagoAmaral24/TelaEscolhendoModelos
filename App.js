import React, {useState} from 'react';
import {View, Image, Text} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const images = [
  {
    key: 'one',
    title: 'Camiseta',
    text: 'Modelo usado para o verão',
    image: require('./assets/camiset.png'),
  },

  {
    key: 'two',
    title: 'Moletom',
    text: 'Modelo usado para o inverno',
    image: require('./assets/moletom.png'),
  },
];

export default function App() {
  const [showHome, setShowHome] = useState(false);

  function renderImages({item}) {
    return (
      <View style={{flex: 1}}>
        <Text
          style={{
            paddingTop: 25,
            paddingBottom: 10,
            fontSize: 22,
            fontWeight: 'bold',
            color: 'black',
            textAlign: 'center',
          }}>
          {item.title}
        </Text>

        <Image
          source={item.image}
          style={{resizeMode: 'cover', height: '60%', width: '100%'}}
        />

        <Text
          style={{
            paddingTop: 25,
            paddingLeft: 10,
            textAlign: 'center',
            paddingHorizontal: 25,
            fontSize: 15,
          }}>
          {item.text}
        </Text>
      </View>
    );
  }

  if (showHome) {
    return <Text>Está na home</Text>;
  } else {
    return (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              children={() => (
                <AppIntroSlider
                  renderItem={renderImages}
                  data={images}
                  activeDotStyle={{
                    backgroundColor: '#e3e3e3',
                    width: 10,
                  }}
                  showDoneButton={false}
                  showNextButton={false}
                />)
              }
            />
          </Stack.Navigator>
        </NavigationContainer>
    );
  }
}
