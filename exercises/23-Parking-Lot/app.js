let parking_state = [
    [1, 1, 1],
    [0, 0, 0],
    [1, 1, 2]
]
console.log(getParkingLotState(parking_state));

function getParkingLotState(park_state) {
    let state = {}
    let total = 0;
    let availableSlot = 0;
    let occupiedSlot = 0;
    for (let i = 0; i < park_state.length; i++) {
        total += park_state.length;
        for (let j = 0; j < park_state.length; j++) {
            if (park_state[i][j] === 2){
                availableSlot++;
            }
            if (park_state[i][j] === 1){
                occupiedSlot++;
            }
        }
    }
    state.totalSlots = total;
    state.availableSlots = availableSlot;
    state.occupiedSlots = occupiedSlot;
    return state;
}