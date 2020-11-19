import React from 'react'
import {Text, View, ScrollView} from 'react-native'
import Card from './components/Card'
// import MyFuncComponent from './components/MyFuncComponent'
// import MyArrowFuncComponent from './components/MyArrowFuncComponent'
// import MyClassComponent from './components/MyClassComponent'
// import MyOSCompanent from './components/MyOSComponent/MyOSComponent'

// const App = () => {
//   return(
//     <View style ={styles.container}>
//       <ScrollView>
//       <MyFuncComponent/>  
//       <MyArrowFuncComponent/>
//       <MyClassComponent/>
//       <MyOSCompanent/>
//       <MyFuncComponent/>
//       <MyArrowFuncComponent/>
//       <MyClassComponent/>
//       <MyOSCompanent/>
//       <MyFuncComponent/>
//       <MyArrowFuncComponent/>
//       <MyClassComponent/>
//       <MyOSCompanent/>
//       <MyFuncComponent/>
//       <MyArrowFuncComponent/>
//       <MyClassComponent/>
//       <MyOSCompanent/>
//       <MyFuncComponent/>
//       <MyArrowFuncComponent/>
//       <MyClassComponent/>
//       <MyOSCompanent/>
//       <MyFuncComponent/>
//       <MyArrowFuncComponent/>
//       <MyClassComponent/>
//       <MyOSCompanent/>
//       <MyFuncComponent/>
//       <MyArrowFuncComponent/>
//       <MyClassComponent/>
//       <MyOSCompanent/>
//       <MyFuncComponent/>
//       <MyArrowFuncComponent/>
//       <MyClassComponent/>
//       <MyOSCompanent/>
//       <MyFuncComponent/>
//       <MyArrowFuncComponent/>
//       <MyClassComponent/>
//       <MyOSCompanent/>
//       <MyFuncComponent/>
//       <MyArrowFuncComponent/>
//       <MyClassComponent/>
//       <MyOSCompanent/>
//       <Text>Open up App.js to start</Text>
//       </ScrollView>
//     </View>
//   )
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   }
// })
// export default App

const App = () => {
    return(
        <View>
            <ScrollView>
                <Card userName = {"Игорь"} />
            </ScrollView>
        </View>
    )
}
export default App