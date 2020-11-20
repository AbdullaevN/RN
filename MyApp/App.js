import React from 'react'
import {View, Text, StyleSheet, SafeAreaView, Platform, StatusBar} from 'react-native'

export default function App() {
    return(
        <SafeAreaView style = {styles.container}>
            <View style={styles.item}>
            <Text>1</Text>
            </View>

            <View style={[styles.item, styles.item2]}>
            <Text>2</Text>
            </View>

            <View style={styles.item}>
                <Text>3</Text>
                    <View style={styles.item33}>
                    <Text style={styles.text}>
                        33
                        <Text>333</Text>
                        </Text>
                </View>
            </View>

            <View style={styles.item}>
                <Text>4</Text>
                <View style={styles.item44}>
                    <Text>44</Text>
            </View>
            </View> 

            <View style={styles.item}>
            <Text>5</Text>
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#96ceb4',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight: 0
    },
    item:{
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffeead',
        borderBottomWidth: StyleSheet.hairlineWidth
    },
    item2: {
        backgroundColor: '#d9534f',
        transform: [
            {translateX: 150 },
            {rotateZ: '0.8rad'}
        ]
    },
    item33:{
        backgroundColor: '#293462',
        ...StyleSheet.absoluteFill
    },
    text: {
        color: '#fff'
    },
    item44:{
        position: 'absolute',
        ...Platform.select({
            ios:{
                top: 0,
                left: 0
            },
            android: {
                top: 0,
                right: 0
            },
            web: {
                bottom: 0,
                left: 0
            }
        })
    }
})