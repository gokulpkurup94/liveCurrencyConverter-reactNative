import EStyleSheet from "react-native-extended-stylesheet";
import { StyleSheet } from "react-native";

export const styles = EStyleSheet.create({
    container: {
        flexDirection: 'row',
        
    },
    card: {
        alignItems: 'center',
        
    },
    labelContainer:  {
        fontSize: 20,
        fontWeight: '100',
    },
    value:  {
        fontSize: 80,
        fontWeight: '600',
    },
    back: {
        marginRight: 10,
        marginTop: 80,
    },
    forward: {
        marginLeft: 10,
        marginTop: 80,
    },
    wrapper: {
        width: '$windowWidth/2',
    }
    // deck: {
    //     flex: 1,
    // }
   

})