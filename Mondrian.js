import React, { Component } from "react";
import {StyleSheet, Text, View, Image, ListView, FlatList} from "react-native";

class Mondrian extends Component {
    render() {
        return (
            <View style={styles.parent}>
                <View style={styles.topBlock}>
                    <View style={styles.leftCol}>
                        <View style={[styles.cellOne, styles.base]}/>
                        <View style={[styles.cellTwo, styles.base]}/>
                    </View>
                    <View style={[styles.cellThree, styles.base]}/>
                </View>
                <View style={styles.bottomBlock}>
                    <View style={[styles.cellFour, styles.base]}/>
                    <View style={[styles.cellFive, styles.base]}/>
                    <View style={styles.bottomRight}>
                        <View style={[styles.cellSix, styles.base]}/>
                        <View style={[styles.cellSeven, styles.base]}/>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    parent: {
        flexDirection: 'column',
        backgroundColor: '#F5FCFF',
        position: 'absolute',
        top: 0, bottom: 0, right: 0, left: 0,
        paddingTop: 35,
    },
    base: { borderColor: "#000000", borderWidth: 5 },
    topBlock: { flexDirection: "row", flex: 5 },
    bottomBlock: { flex: 2, flexDirection: "row" },
    leftCol: { flex: 2 },
    bottomRight: { flexDirection: "column", flex: 2 },
    cellOne: { flex: 1, borderBottomWidth: 15 },
    cellTwo: { flex: 3 },
    cellThree: { backgroundColor: "#FF0000", flex: 5 },
    cellFour: { flex: 3, backgroundColor: "#0000FF" },
    cellFive: { flex: 6 },
    cellSix: { flex: 1 },
    cellSeven: { flex: 1, backgroundColor: "#FFFF00" }
});

export default Mondrian;