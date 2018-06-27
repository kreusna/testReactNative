import React, { Component } from "react";
import {
    SafeAreaView,
} from "react-native";
import TextCalculate from "../model/containers/CalcualteMeter"

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from '../model/reducers/todos'

const store = createStore(rootReducer)

// import { createBottomTabNavigator } from 'react-navigation'



export default class Inbox extends Component {

    render() {
        return (
            <Provider store={store}>
                <SafeAreaView style={{ flex: 1 }} >
                    <TextCalculate />
                </SafeAreaView>
            </Provider>
        )
    }
}


// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: "#fff",
//         alignItems: "center",
//         justifyContent: 'center',
//     }
// });