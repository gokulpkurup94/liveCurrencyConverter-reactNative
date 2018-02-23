import React, { Component } from 'react';
import { View, StyleSheet, Text, StatusBar } from 'react-native';
import { Header } from '../components/Header';
import { CurrencyInput } from "../components/CurrencyInput";
import { Converted } from '../components/Converted';
import { ApiService } from '../config/ApiService';

const styles = StyleSheet.create({
    container: {
        flex:1,
        marginTop: StatusBar.currentHeight,
        alignItems: 'center',

    },
    statusbar: {
        backgroundColor: '#000'
    }
});

export class HomeScreen extends Component {

    componentWillMount = async () => {
        try {
            const response = await fetch('https://api.fixer.io/latest')
            const posts = await response.json()
            console.log(posts.rates);
        } catch (e) {
        }
      }


    // constructor(){
    //     const response = await fetch('https://api.fixer.io/latest')
    //     const posts = await response.json()
    // }
    render() {
        return (
            <View style={styles.container}>
                {/* <StatusBar style={styles.statusbar} barStyle="light-content" backgroundColor="#000" />
                <Header/>
                <CurrencyInput /> */}
                <Converted/>

            </View>
        );
    }
}