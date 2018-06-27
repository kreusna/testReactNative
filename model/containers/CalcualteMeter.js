import {
    connect
} from 'react-redux'
// import {
//     toggleTodo
// } from '../actions'
import TodoList from "../components/TextCalculate"
// import {
//     VisibilityFilters
// } from '../actions'


const mapStateToProps = function (state) {
    let kilo = state.kilo ;
    let meter = state.meter;
    // let storedRepositories = state;
    return {
        getData: {
            kilo : kilo,
            meter : meter 
        }
    }
}


const myTEstingmapDispatchToProps = dispatch => ({
    sendCalculate: (number,type) => dispatch({type: type, number:number})
})

// const funcCalMeterToKilo = dispatch => ({
//     meterToKilo: (number) => dispatch({type: "meterTokilo", number:number})
// })

// export default connect(
//   mapStateToProps
// )(TodoList)

export default connect(
    mapStateToProps,
    myTEstingmapDispatchToProps
)(TodoList)