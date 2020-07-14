import React from 'react';
import {Text} from 'react-native';

interface Hello {
  name: string;
}

const HelloWorld = ({name}: Hello) => <Text>Hello World {name}!</Text>;

export default HelloWorld;
