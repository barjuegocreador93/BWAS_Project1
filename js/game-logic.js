// All code should be written in this file.

var playerOneTypes = [];
var playerOneMoveValues = [];

var playerTwoTypes = [];
var playerTwoMoveValues = [];

var p1_wns = 0;
var p2_wns = 0;


function setPlayerMoves(player, moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue) {
    var types = [moveOneType, moveTwoType, moveThreeType];
    var moveValues = [moveOneValue, moveTwoValue, moveThreeValue];
    if (player === PLAYER_ONE) {
        playerOneTypes = types;
        playerOneMoveValues = moveValues;
        playerOneMoveOneType = types[0];
        playerOneMoveOneValue = moveValues[0];
        playerOneMoveTwoType = types[1];
        playerOneMoveTwoValue = moveValues[1];
        playerOneMoveThreeType = types[2];
        playerOneMoveThreeValue = moveValues[2];
    } else if (player === PLAYER_TWO) {
        playerTwoTypes = types;
        playerTwoMoveValues = moveValues;
        playerTwoMoveOneType = types[0];
        playerTwoMoveOneValue = moveValues[0];
        playerTwoMoveTwoType = types[1];
        playerTwoMoveTwoValue = moveValues[1];
        playerTwoMoveThreeType = types[2];
        playerTwoMoveThreeValue = moveValues[2];
    }


}

function setComputerMoves() {
    let rnd1 = Math.floor((Math.random() * 99) + 1);
    let rnd2 = Math.floor(Math.random() * (99 - rnd1)+1);
    let rnd3 = Math.floor(Math.random() * (99 - rnd1 - rnd2)+1);
    var types = [getRoundType(), getRoundType(), getRoundType()];
    var moveValues = [rnd1, rnd2, rnd3];
    playerTwoMoveOneType = types[0];
    playerTwoMoveOneValue = rnd1;
    playerTwoMoveTwoType = types[1];
    playerTwoMoveTwoValue = rnd2;
    playerTwoMoveThreeType = types[2];
    playerTwoMoveThreeValue = rnd3;
    playerTwoTypes = types;
    playerTwoMoveValues = moveValues;
}

function getRoundType() {
    let rnd = Math.floor(Math.random() * 3);
    return MOVE_TYPES[rnd];
}

function getRoundValue() {

}

function getRoundWinner(round) {
    let i = round-1;  
    
    p1_m = playerOneTypes[i];
    p2_m = playerTwoTypes[i];
    if (p1_m === MOVE_TYPES[0]) {
        if (p2_m === MOVE_TYPES[1]) {
            p2_wns++;
            return PLAYER_TWO;
        } else if (p2_m === MOVE_TYPES[2]) {
            p1_wns++;
            return PLAYER_ONE;
        } else {
            return winByStrenghtStr(i);
        }
    } else if (p1_m === MOVE_TYPES[1]) {
        if (p2_m === MOVE_TYPES[0]) {
            p1_wns++;
            return PLAYER_ONE;
        } else if (p2_m === MOVE_TYPES[2]) {
            p2_wns++;
            return PLAYER_TWO;
        } else {
            return winByStrenghtStr(i);
        }
    } else if (p1_m === MOVE_TYPES[2]) {
        if (p2_m === MOVE_TYPES[0]) {
            p2_wns++;
            return PLAYER_TWO;
        } else if (p2_m === MOVE_TYPES[1]) {
            p1_wns++;
            return PLAYER_ONE;
        } else {
            return winByStrenghtStr(i);
        }
    }
    return TIE;
}

function getGameWinner() {
    if (p1_wns > p2_wns) return PLAYER_ONE
    if (p2_wns > p1_wns) return PLAYER_TWO
    return TIE;
}



function winByStrenghtStr(i) {
    if (playerOneMoveValues[i] > playerTwoMoveValues[i]) {
        p1_wns++;
        return PLAYER_ONE;
    } else if (playerTwoMoveValues[i] > playerOneMoveValues[i]) {
        p2_wns++;
        return PLAYER_TWO;
    }
    return TIE;
}