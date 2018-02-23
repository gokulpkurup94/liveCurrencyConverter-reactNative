import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from './styles';

export class Header extends Component {
    render() {
        return (
            <View style={styles.container}>
                    <Image  
                            resizeMode="contain"
                            style={styles.image}
                            source={require('./images/logo.png')}
                    />
                
                <Text style={styles.title}>Currency Converter</Text>
            </View>
        );
    }
}