

const todos = (calculate = {kilo:0, meter:0}, action) => {

    switch (action.type) {
    case 'kmToMeter':
        return {
            kilo : action.number,
            meter : parseFloat( parseFloat( action.number) *1000)
        }
    case 'meterTokilo':
        return {
            kilo : parseFloat( parseFloat(action.number) /1000),
            meter : action.number
        }    
    default:
        return calculate 
    }
}

export default todos
