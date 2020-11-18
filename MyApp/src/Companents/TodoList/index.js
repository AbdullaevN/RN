import React from 'react'
import { View, Text, FlatList} from 'react-native'
import TodoItem from '../TodoItem'

const todoData = [
    {
        id: '1',
        name: 'Задача 1',
        category: 'finansy'
    },
    {
        id: '2',
        name: 'zadacha 2',
        category: 'ne finansy'
    },
    {
        id: '3',
        name: 'zadacha 3',
        category: 'chill'
    },
    {
        id: '4',
        name: 'zadacha 5',
        category: 'spisiok pokupok'
    }

]

const TodoList = () => {
    const renderItem = ({item}) => (
        <TodoItem name = {item.name}
        category = {item.category}
        />
    )

    return (
        <View>
            <FlatList 
            data = {todoData} 
            renderItem = {renderItem}
            keyExtractor = {(item) => item.id}
            />
        </View>
    )
}

export default TodoList