import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, TextInput, TouchableHighlight, Text, TouchableOpacity  } from 'react-native';
import { styles } from "./styles";

export class CurrencyInput extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.dateContainer}>
                    <Text style={styles.date}>Date</Text>
                </TouchableOpacity>
                <View style={styles.currencyContainer}>
                    <TouchableOpacity style={styles.labelContainer}>
                        <Text>USD</Text>
                    </TouchableOpacity>
                    <View style={styles.separator} />

                    {/* <View>
                        
                    </View> */}
                    <TextInput style={styles.currencyInput} underlineColorAndroid="transparent" />
                </View>
            </View>
        );
    }
}



// CurrencyInput.propTypes = {
//     onPress: PropTypes.func,
//     buttonText: PropTypes.string,
//     editable: PropTypes.bool,
//     isBase: PropTypes.bool
//   };
