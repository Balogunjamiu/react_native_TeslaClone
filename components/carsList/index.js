
import React from "react";
import CarItem from "../CarItem";
import { View, Text,Dimensions, FlatList } from "react-native";
import styles from './style'
import cars from './cars'

const CarList =()=>{
    return(
        <View style={styles.container}>
            <FlatList 
            data={cars}
            renderItem={({item})=>
            <CarItem car={item} />
        }
        snapToAlignment={'start'}
        showsVerticalScrollIndicator={false}
        decelerationRate={'fast'}
        snapToInterval={Dimensions.get('window').height}
            />
        </View>
    )
}


export default CarList