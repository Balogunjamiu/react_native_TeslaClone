import React from 'react';
import {View,Text, ImageBackground} from 'react-native';
import StyledButton from "../StyledButton"
import styles from './styles'

const CarItem =(props)=>{

  const { name, tagLine, image , taglineCTA} = props.car
    return(
        <View style={styles.carContainer}>
      <ImageBackground source={image}
      style={styles.image}
      />
      <View style={styles.titles}>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.subTitle}>
        {tagLine} {''}
      <Text style={styles.subtitleCTA}>{taglineCTA}</Text>
      </Text>
      </View>
      <View style={styles.buttonsContainer}>
        <StyledButton type="primary"  
        content={'custom Order'}
        onPress={()=>{
          console.log('custom other was press')
        }}
        />
        <StyledButton type="secondary"  
        content={'Existing inventory'}
        onPress={()=>{
          console.log('existing inventory was pressed was press')
        }}
        />
        </View>
      </View>
    )
}

export default CarItem