import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'

const TodoItem = ({name, category}) => {
    return (
        <View styles = {{
            flex: 1,
            backgroundColor: 'black'}}>
            <Text>{name}</Text>
            <Text>{category}</Text>
        </View>
    )
}

export default TodoItem