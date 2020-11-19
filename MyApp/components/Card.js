import React from 'react'
import {Text, View, StyleSheet} from 'react-native'

const Card = (props) => {
    <View style = {styles.card}>
      <View> 
        <Text>{props.userName}</Text>
      </View>
    </View>
  }

  const styles = StyleSheet.create({
    card: {
      marginTop: 30
    }
  })

  export default Card