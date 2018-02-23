import React, { Component } from 'react';
import { View } from 'react-native';
import { styles } from "./styles";
import DatePicker from 'react-native-datepicker'

import { CurrencyDate } from "../Date";
import { Swipable } from '../Swipable/Swipable';


const TEMP_DATE = new Date();


export class Converted extends Component {
    render() {
        return (
            <View style = {styles.wrapper}>
                <View style = {styles.container}>
                    <DatePicker date={TEMP_DATE}
                    
                    format="DD-MMMM-YYYY"
                    customStyles={{
                        dateIcon: {display: 'none' },
                        dateInput: {borderWidth: 0, borderColor: '#000', borderRadius: 2,}
                        }}
                    />
                
                </View>
                <Swipable style = {styles.swipable}/>
            </View>
            
        );
    }
}