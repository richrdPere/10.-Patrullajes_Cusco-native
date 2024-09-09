import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const Header = () => {
  return (
    <View style={styles.header}>
        <Text style={styles.texto}>Sistema de Patrullaje</Text>

    </View>
  )
}

const styles = StyleSheet.create({
    header:{
        backgroundColor: '#3B82F6',

    },
    texto:{
        textAlign: 'center',
        fontSize: 30,
        color: '#FFF',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        paddingVertical: 20,
    },
})

export default Header