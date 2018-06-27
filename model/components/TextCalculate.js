import React from 'react'
import {
    View, Text,
    TextInput
} from "react-native";

const TodoList = ({ getData, sendCalculate }) => (

    <View style={{ flex: 1 }} >
        <View style={{ flexDirection: "row", height: 40, marginTop: 10 }} >
            <Text style={{ width: 70 }} >
                Kilometer
            </Text>
            <TextInput
                style={{ flex: 1, height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={(text) => sendCalculate(text, "kmToMeter")}
                value={ (getData.kilo || !isNaN(getData.kilo)) ? getData.kilo.toString() : "0" }
            />
        </View>
        <View style={{ flexDirection: "row", height: 40, marginTop: 10 }} >
            <Text style={{ width: 70 }} >
                Meter
            </Text>
            <TextInput
                style={{ flex: 1, height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={(text) => sendCalculate(text, "meterTokilo")}
                value={(getData.meter || !isNaN(getData.meter)) ? getData.meter.toString() : "0" }
            />
        </View>
    </View>
)

// TodoList.propTypes = {
//   todos: PropTypes.arrayOf(PropTypes.shape({
//     id: PropTypes.number.isRequired,
//     completed: PropTypes.bool.isRequired,
//     text: PropTypes.string.isRequired
//   }).isRequired).isRequired,
//   toggleTodo: PropTypes.func.isRequired
// }

export default TodoList
