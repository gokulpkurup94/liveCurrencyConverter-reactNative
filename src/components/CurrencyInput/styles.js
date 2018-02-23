import EStyleSheet from "react-native-extended-stylesheet";
import { StyleSheet } from "react-native";

export const styles = EStyleSheet.create({
    container: {
        width: '$windowWidth/2',
        alignItems: 'center',
        borderRadius: 2,
        borderWidth: 1,
       
    },
    dateContainer: {
        display: 'none',
    },
    // date: {

    // },
    currencyContainer: {
        flexDirection: 'row',
        // backgroundColor: '#000',
        alignItems: 'center',
        width:'100%'
    },
    labelContainer: {
        alignItems: 'center',
        width: '30%'
    },
    // label: {
        
    // },
    currencyInput: {
        paddingHorizontal: 5,
        width: '70%',
        
    },
    separator: {
        height: '100%',
        width: StyleSheet.hairlineWidth,
        backgroundColor: '#000',
    },
    
})