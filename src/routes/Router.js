import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import Home from '../screens/home/Home'
import Posts from '../screens/posts/Posts'
import Usuario from '../screens/usuario/Usuario'

const Stack = createStackNavigator()

export default function Router() {
  return (

    <NavigationContainer>
        <Stack.Navigator>

            <Stack.Screen name= 'Home' component={Home}/>
            <Stack.Screen name= 'Usuário' component={Usuario}/>

        </Stack.Navigator>
        

    </NavigationContainer>

  )
}

const styles = StyleSheet.create({})