import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Api from '../../services/Api'

export default function usuario(props) {
    const [usuario, setUsuario] = useState()
    const usuarioId = props.route.params.id

    useEffect(() => {

        Api.get('/users/' + usuarioId)
        .then(response =>{

        setUsuario(response.data)


        })
        .catch(error =>{
            console.error('erro em usuarios', error)
        })

    },[])

  return (
    <View>
      <Card onPress={()=>{}}>
                <Card.Title 
                title = {usuario?.username} 
                subtitle={usuario?.email}
                left={() => <Avatar.Image size={48} source={{uri: usuario?.image}} />}
                right={()=> <IconButton icon='chevron-right'/>}
                />
            </Card>
    </View>
  )
}

const styles = StyleSheet.create({})