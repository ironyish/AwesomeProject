
import { StyleSheet } from "react-native";

export default Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
     width:'100%',
    Height:'100%',


  },
  container1:{
flex:1/2,
justifyContent:"space-around",
borderWidth:2,
borderColor: 'green',
borderRadius:10,
backgroundColor:'green'
// height:100
  },
  text: {
    fontSize: 50,
    color: "#42e97e",
    fontWeight: 'bold',
  },
  image:{
    justifyContent:'center',
    alignSelf:'center',
     marginTop:5,
     padding:5,
     
  },
Splimage:{
  width:25,
  height:125,
  borderRadius:10,
  // elevation:30
  marginRight:10

},
scrollViewContent:{
  paddingHorizontal:10,
  paddingVertical:10,
  margin:5,
  height:160,
  // width:'90%',
  // justifyContent: "center",
},
// Imageconatiner:{
//   // borderWidth:2,
//   // borderColor:'green',
//   margin:5,
//   justifyContent: 'center' ,
//   // alignItems:"center",
//   // backgroundColor:'yellow',
//   padding:5,
//   borderRadius:10,
//   elevation:1




// },
  defaultButton:{
    backgroundColor:'green',
    height:60,
    width:'100%',
    alignItems:'center',
    borderRadius:100,
    justifyContent:'center',
    marginBottom: 30,
  }
});
