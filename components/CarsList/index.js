import React from "react";
import {View , Text ,FlatList ,Dimensions} from 'react-native';
import styles from './styles.js';
import cars from './cars.js';
import CarItem  from "../Caritem/index.js";
const CarsList= (props) =>{
    return(
        <View style={styles.container}>
            <FlatList
                data = {cars}
                renderItem={({item})=> <CarItem car={item} />}
                snapToAlignment={'start'}
                decelerationRate={'fast'}
                snapToInterval={Dimensions.get('screen').height}
                showsVerticalScrollIndicator={false}
            />
        </View>

    )
};
export default CarsList;