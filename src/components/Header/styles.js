import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';

export const styles = EStyleSheet.create({
    container: {

        backgroundColor: 'rgb(255,255,255)',
        // position: 'absolute',
        justifyContent: 'center',
        width: '$windowWidth',
        left: 0,
        top: 0,
        right: 0,
        alignItems: 'center',
        height: '$windowHeight/2.5'
        
    },
    title: {
        color: '#000',
        fontWeight: '500',
        fontSize: 23, 
    },
    image: {
        width:Dimensions.get('window').width/5,
        height: Dimensions.get('window').height/10,
    }
})