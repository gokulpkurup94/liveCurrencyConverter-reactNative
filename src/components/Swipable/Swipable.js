import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Container, Header, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Right, Body, Icon } from 'native-base';
import { styles } from "./styles";

const cards = [
    {
      label: 'USD',
      value: '30',
    },
    {
    label: 'INR',
    value: '67',
    },
    {
    label: 'EUR',
    value: '45',
    },
    {
    label: 'GER',
    value: '56',
    },
    {
    label: 'RUS',
    value: '34',
    },
    {
    label: 'CHN',
    value: '1',
    }
]
export class Swipable extends Component {
    render(){
        return(
            <View style = {styles.container}>
                <View style = {styles.back}>
                    <TouchableOpacity onPress={() => this._deckSwiper._root.swipeLeft()}>
                        <Icon  name='arrow-back'/>
                    </TouchableOpacity>
                    
                </View>
                
                <View style = {styles.wrapper}>
                    <DeckSwiper
                        style = {styles.deck}
                        ref={(c) => this._deckSwiper = c}
                        dataSource={cards}
                        renderItem={item =>
                        <Card style = {styles.card}>
                            <CardItem style = {styles.cardItem}>
                                <TouchableOpacity >
                                    <Text style={styles.labelContainer}>{item.label}</Text>
                                </TouchableOpacity>
                            </CardItem>
                            <CardItem >
                                <Text style = {styles.value}>{item.value}</Text>
                            </CardItem>
                        </Card>
                        }
                    />
                </View>
                <View style = {styles.forward}>
                    <TouchableOpacity onPress={() => this._deckSwiper._root.swipeRight()}>
                        <Icon  name='arrow-forward'/>
                    </TouchableOpacity>
                </View> 
            </View>
        );
    }
}