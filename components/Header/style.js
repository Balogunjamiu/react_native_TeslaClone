import  {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
container:{
    height:10,
    position:'absolute',
    top:50,
    zIndex:100,
    flexDirection:'row',
    justifyContent:'space-between',
    width:'100%',
    paddingHorizontal:20,
    elevation:4
    
},logo:{
    width:100,
    height:20,
    resizeMode:'contain',
    
},menu:{
width: 25,
height: 25,
resizeMode:'contain',
}
})

// https://www.youtube.com/watch?v=EvSUJ5lUcBw
export default styles