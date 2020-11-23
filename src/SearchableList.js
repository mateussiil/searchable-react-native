import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity,FlatList, TextInput } from 'react-native';

export default function SearchableList({data, }){
  const [showUser,setShowUser] = useState(false);
  const [noUsers, setNoUsers] = useState(false)
  const [usersFilter, setUsersFilter] = useState({name:'',id:''})
  const [assign, setAssign]= useState({name:'',id:''})

  function loadAssign(text){
    setAssign({...assign, name:text})
    
    const filter = data.filter((item)=>{
      if(item.name.toUpperCase().includes(text.toUpperCase())){
        return item;
      }
    })
    
    setShowUser(true)
    
    if (!text || text === '') {
      setNoUsers(true)
    } else if (!Array.isArray(filter) && !filter.length) {
      setNoUsers(true)
    } else if (Array.isArray(filter)) {
      setNoUsers(false)
      setUsersFilter(filter)
    }
  }
  return(
    <>
      <View style={styles.action}>
        <TextInput
              style={styles.textInput}
              onChangeText={loadAssign}
              value={assign.name}
              placeholder="Procure por um nome ..."
          />
      </View>
      <View>
        { !showUser ? <></> :
        noUsers  ?
          <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  paddingTop: 5,
                  marginLeft:10,
                  paddingBottom: 5,
                }}
              >
              <Text style={{ fontSize:16,color: '#8DA8C7' }}>
                Nenhum Usuario encontrado
              </Text>
            </View> 
            :
            <>
            <View 
              style={{
                  height: 200,
                  borderTopColor:'#95a5a6',
                  borderTopWidth:2,
                  backgroundColor:'rgba(189, 195, 199,0.2)',
                }}
              >
            <FlatList
              data={data}
              renderItem={({item}) => 
                  <TouchableOpacity onPress={()=>HandleClickUsers(item)}>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                        paddingTop: 5,
                        marginLeft:10,
                        paddingBottom: 5,
                      }}
                    >
                    <Image style={{ height:10,width:10,alignSelf:'center', marginHorizontal:10  }} source={icon}/>
                    <Text style={{ fontSize:20,color: '#2c3e50' }}>
                      {(item.name)}
                    </Text>
                  </View>
                </TouchableOpacity>
              }
              keyExtractor={item => item.id}
              />
              </View>
              </>
        }
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  action: {
    flexDirection: 'row',
    marginTop: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#01a3a4',
    paddingBottom: 5
  },
  textInput: {
    flex: 1,
    height:40,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
})