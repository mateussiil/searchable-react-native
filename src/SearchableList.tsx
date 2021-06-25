import React, {useEffect, useState} from 'react';

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  TextInput,
  Image,
  Platform,
  GestureResponderEvent,
} from 'react-native';

interface SearchableListProps {
  children?: React.ReactNode;
  options: any[] & Array<{id: number | string}>;
  optionLabel?: string;
  optionValue?: string;
  itemTemplate?: React.FC;
  optionFilter: string;
  id: string | number;
  filter?: Boolean;
}

const SearchableList: React.FunctionComponent<SearchableListProps> = ({
  children,
  id,
  options = [],
  optionLabel = '',
  optionValue = '',
  itemTemplate,
  optionFilter = '',
  filter = false,
}) => {
  const [filterInputClicked, setfilterInputClicked] = useState(false);
  const [filterHooks, setFilterHooks] = useState<any[]>([]);
  const [assign, setAssign] = useState();

  function loadAssign(text: any) {
    setAssign(text);
    setfilterInputClicked(true);
    const elementsFilter = options.filter(item => {
      if (item[optionFilter].toUpperCase().includes(text.toUpperCase())) {
        return item;
      }
    });

    setFilterHooks(elementsFilter);
  }

  const handleClickItem = (e: GestureResponderEvent) => {
  };

  return (
    <>
      {filter && (
        <View style={styles.action}>
          <TextInput
            style={styles.textInput}
            onChangeText={loadAssign}
            value={assign}
            placeholder="Procure por um nome ..."
          />
        </View>
      )}
      <View>
        {filterInputClicked && filterHooks.length === 0 ? (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              paddingTop: 5,
              marginLeft: 10,
              paddingBottom: 5,
            }}>
            <Text style={{fontSize: 16, color: '#8DA8C7'}}>
              Nenhum Usuário encontrado
            </Text>
          </View>
        ) : (
          <View
            style={{
              height: 200,
              borderTopColor: '#95a5a6',
              borderTopWidth: 2,
              backgroundColor: 'rgba(189, 195, 199,0.2)',
            }}>
            <FlatList
              keyExtractor={item => item[id]}
              data={filterInputClicked ? filterHooks : options}
              renderItem={({item, index}) => (
                <TouchableOpacity
                  onPress={() => {
                    console.log(item[id]);
                    setAssign(item[optionLabel]);
                  }}>
                  {children ? (
                    children
                  ) : (
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                        paddingTop: 5,
                        marginLeft: 10,
                        paddingBottom: 5,
                      }}>
                      <Text style={{fontSize: 20, color: '#2c3e50'}}>
                        {item[optionLabel]}
                      </Text>
                    </View>
                  )}
                </TouchableOpacity>
              )}
            />
          </View>
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  action: {
    flexDirection: 'row',
    marginTop: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#01a3a4',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    height: 40,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
});

export default SearchableList;
