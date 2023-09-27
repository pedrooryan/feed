import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Api from '../../services/Api'
import { FlatList } from 'react-native-gesture-handler'
import { Avatar, Card, IconButton } from 'react-native-paper'

export default function Home(props) {

    const navigation = props.navigation
    const [usuarios, setUsuarios] = useState ([])

    function navegarParaUsuario() {
        navigation.navigate('Usuário')
    }

    useEffect(() => {

        Api.get('/users')
        .then(response =>{

            setUsuarios(response.data.users)


        })
        .catch(error =>{
            console.error('erro em usuarios', error)
        })

    },[])

  return (
    <View>
        <FlatList
        
        data={usuarios}

        renderItem={({item}) => {
            return (
            <Card onPress={()=>{
                navigation.navigate('Usuário', {})
            }}>
                <Card.Title 
                title = {item.username} 
                subtitle={item.email}
                left={() => <Avatar.Image size={48} source={{uri: item.image}} />}
                right={()=> <IconButton icon='chevron-right'/>}
                />
            </Card>
            )
        }}
        />
    </View>
  )
}

const styles = StyleSheet.create({})