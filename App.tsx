import React, { ReactNode } from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import SearchableList from './src/SearchableList';

const options = [
  {type: 'cat', quantity: 10, id:1},
  {type: 'cat', quantity: 2, id:2},
  {type: 'dog', quantity: 11, id:3},
  {type: 'fish', quantity: 12, id:4},
]

interface itemTemplateProps{
  option:{type:string, quantity:number, id:number}
}

const ItemTemplate = ( option: {type:string, quantity:number, id:number} ) =>{
  return(
    <View>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />
      <Text>{option.type}</Text>
       </View>
  )
}

interface AppProps{
  placeholder?:string;
  children?: ReactNode;
}

let props:AppProps = {
    placeholder:"Digite aqui"
}

const App: React.FC<AppProps> = ({placeholder}) => {
  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <Text>{placeholder}</Text>
      <SearchableList
        key={1}
        id='id'
        options={options}
        optionLabel="type"
        optionValue="quantity"
        optionFilter="type"
        filter={true}
     >
       <ItemTemplate />
       </SearchableList>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  }, 
  tinyLogo: {
    width: 30,
    height: 30,
  },
});

export default App;
