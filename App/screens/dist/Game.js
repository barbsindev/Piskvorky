"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var Circle_1 = require("./Circle");
var Cross_1 = require("./Cross");
var Wrapper_1 = require("../components/Wrapper");
var react_native_gesture_handler_1 = require("react-native-gesture-handler");
var winningPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];
var currentPlayer = { Cross: Cross_1["default"] };
function containsAny(source, target) {
    var result = source.filter(function (item) {
        return target.indexOf(item) > -1;
    });
    return result.length > 0;
}
function Game(_a) {
    var route = _a.route, id = _a.id;
    var _b = react_1.useState([]), clickedBoxes = _b[0], setClickedBoxes = _b[1];
    react_1.useEffect(function () {
        // log if you have 3 or more clicked boxes
        console.log(winningPattern[0], clickedBoxes);
        // checks weather our clicked boxes array Contains ANY of the winning patterns
        // eg if we have created a winning poattern on the game board
        var checker = function (arr, target) { return target.every(function (v) { return arr.includes(v); }); };
        // if ( true) {
        //   Alert.alert('Alert Title', 'My Alert Msg');
        // }
        // loops through EACH element in our winning pattern array one by one
        // eg [0,1,2], [0,3,6]
        // if our clicked boxes arr has any of the winning pattens we get a TRUE else a FALSE
        winningPattern.forEach(function (element, index) {
            // inedex is the number of the array item we are looping though -- starts at 0, ends at 8
            console.log(element, 'frr');
            console.log(checker(clickedBoxes, winningPattern[index]));
            if (checker(clickedBoxes, winningPattern[index]) === true) {
                react_native_1.Alert.alert('Game Over!', 'You Won!');
            }
            console.log('checker func called');
        });
        // winningPattern.every((item) => {
        //   console.log(item, 'i');
        //   if (item.includes(clickedBoxes)) {
        //     console.log('yay');
        //   }
        // });
        if (clickedBoxes.length >= 3) {
            console.log('array');
        }
        // check wehther your clickedboxes array contains ALL 3 numbers in winningPattern[0],[1],[2]ect
        // if your arr does u WIN
        // if your arr doesnt you are yet to win
        // you will need some kind of loop - to loop though winningPattern[0],[1]etc and check agaist your array
        console.log(clickedBoxes);
    }, [clickedBoxes]);
    var handleEvent = function (index) {
        if (clickedBoxes.includes(index)) {
            // do nothing, we dont want to add a number that already esists in  the array to the array again
            return;
        }
        else {
            // the index/boxnumber isnt already in the array so we want to add to array
            setClickedBoxes(function (clickedBoxes) { return __spreadArrays(clickedBoxes, [index]); });
        }
    };
    function handlePlayerChange() {
        currentPlayer = currentPlayer === { Cross: Cross_1["default"] } ? { Circle: Circle_1["default"] } : { Cross: Cross_1["default"] };
    }
    var filledArray = new Array(9).fill(null).map(function (box, index) { return (react_1["default"].createElement(react_native_gesture_handler_1.TouchableWithoutFeedback, { onPress: function () { return handleEvent(index); } },
        react_1["default"].createElement(react_native_1.View, { style: styles.box, key: box }, clickedBoxes.includes(index) && react_1["default"].createElement(Cross_1["default"], null)))); });
    // console.log(filledArray);
    return (react_1["default"].createElement(react_native_gesture_handler_1.ScrollView, null,
        react_1["default"].createElement(Wrapper_1["default"], { flex: 1 },
            react_1["default"].createElement(react_native_1.View, { style: styles.flex }, filledArray)),
        react_1["default"].createElement(react_native_1.Button, { title: "Reset", onPress: function () { return setClickedBoxes([]); } })));
}
exports["default"] = Game;
var styles = react_native_1.StyleSheet.create({
    flex: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center'
    },
    box: {
        width: 100,
        height: 100,
        borderWidth: 1,
        borderColor: 'black',
        alignItems: 'center',
        justifyContent: 'center'
    },
    player: {
        padding: 20,
        fontSize: 16,
        fontWeight: 'bold'
    },
    icon: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        color: '#27bdac'
    }
});

//# sourceMappingURL=Game.js.map
