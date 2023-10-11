// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// const App = () => {
//   return (
//     <View>
//       <Text>App</Text>
//     </View>
//   )
// }

// export default App

// const styles = StyleSheet.create({})

import React, {createRef} from 'react'
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'

import DrawerNavigator from './src/navigation/DrawerNavigator'

// store reference to navigation object
const navigationRef = createRef();
const nav = () => navigationRef.current;

const App = () => {
    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar backgroundColor="#551E18" barStyle="light-content"/>
            <NavigationContainer ref={navigationRef}>
                <DrawerNavigator nav={nav}/>
            </NavigationContainer>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        overflow: 'hidden',
    },
});

export default App