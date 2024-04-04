import { View, Text, Image, Pressable,StyleSheet,Dimensions,Searchbar,TextInput } from 'react-native'
import {React,useState} from 'react'
import Layout from './Layout'
// import { DrawerNavigator, Header } from 'react-navigation';



import Styles from './styles';
import LoginScreen from './LoginScreen';
import { ScrollView } from 'react-native-gesture-handler';
import styles from './styles';

const SplashScreen=({navigation})=> {
  const [searchText, setSearchText] = useState('');
  return (
    <Layout >
        <View style={Styles.container}>
           <View style={{justifyContent:'center'}}>
          <TextInput placeholder=' Search here...' placeholderTextColor='gray'style={{elevation:3,backgroundColor:'#edeeef',borderRadius:10,padding:2,height:40,width:320}}keyboardType='default' />

          </View>  
          <ScrollView>
          {/* <View style={styles.container1}> */}
          {/* <Image style={styles.image} source={require('../AwesomeProject/image/asgLogo1.png')}/> */}
        {/* <Text style={{color:'green',textAlign:'center',fontSize:19,fontWeight:'bold'}}>AGROSHINE</Text> */}
          {/* </View> */}
          <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={false}  contentContainerStyle={styles.scrollViewContent}
 >
  <View style={Styles.Imageconatiner}>
  <Image style={[styles.Splimage,{width:250}]} resizeMode='cover' source={require('../AwesomeProject/image/splash.jpg')}/>

  </View>
  <View style={Styles.Imageconatiner}>
  <Image style={[styles.Splimage,{width:250}]} resizeMode='cover' source={require('../AwesomeProject/image/splash1.jpg')}/>

  </View>
  <View style={Styles.Imageconatiner}>
  <Image style={[styles.Splimage,{width:250}]}  resizeMode='cover'source={require('../AwesomeProject/image/splash2.jpg')}/>

  </View>
  <View style={Styles.Imageconatiner}>
  <Image style={[styles.Splimage,{width:250}]} resizeMode='cover' source={require('../AwesomeProject/image/splash4.jpg')}/>

  </View>
         </ScrollView>

       <Text style={{fontSize:17,fontWeight:'bold',marginLeft:15,padding:1}}>categories</Text>  
        
         <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center',flexGrow:4 ,margin:4,height:150,padding:5}}>
          <View>
  <Image style={{ elevation:4,width: 170, height: 120, margin: 4,borderRadius:10,borderWidth:1,backgroundColor:'#ebfbad'}} resizeMode='cover' source={require('../AwesomeProject/image/splash56.jpg')} />
  {/* <Image style={{ elevation:4,width: 180, height: 120, margin: 5,borderRadius:10,borderWidth:1,}} resizeMode='cover' source={require('../AwesomeProject/image/images.jpg')} /> */}
  <Text style={{textAlign:'center',fontSize:16}}>Pesticides</Text>
  </View>
  <View>
  <Image style={{ elevation:4, width: 170, height: 120, margin: 4,borderRadius:10,borderWidth:1,backgroundColor:'#ebfbad' }} resizeMode='cover' source={require('../AwesomeProject/image/splash66.png')} />
  <Text style={{textAlign:'center',fontSize:16}}>Herbicides</Text>
  </View>

  {/* <Image style={{ width: 120, height: 120, marginHorizontal: 5 }} resizeMode='cover' source={require('../AwesomeProject/image/splash7.jpg')} /> */}
</View>
 
 
<View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center',flexGrow:4 ,margin:5,height:150,padding:5}}>
          <View>
  <Image style={{ elevation:4,width: 180, height: 120, margin: 5,borderRadius:10,borderWidth:1,backgroundColor:'#ebfbad',}} resizeMode='cover' source={require('../AwesomeProject/image/splash7.png')} />
  <Text style={{textAlign:'center',fontSize:16}}>Pesticides</Text>
  </View>
  <View>
  <Image style={{ elevation:4, width: 180, height: 120, margin: 5,borderRadius:10,borderWidth:1,backgroundColor:'#ebfbad' }} resizeMode='cover' source={require('../AwesomeProject/image/images.jpg')} />
  <Text style={{textAlign:'center',fontSize:16}}>Herbicides</Text>
  </View>

  {/* <Image style={{ width: 120, height: 120, marginHorizontal: 5 }} resizeMode='cover' source={require('../AwesomeProject/image/splash7.jpg')} /> */}
</View>

        
        

<View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center',flexGrow:4 ,margin:5,height:150,padding:5}}>
          <View>
  <Image style={{ elevation:4,width: 180, height: 120, margin: 5,borderRadius:10,borderWidth:1,backgroundColor:'#ebfbad',}} resizeMode='cover' source={require('../AwesomeProject/image/splash8.jpg')} />
  <Text style={{textAlign:'center',fontSize:16}}>Nutrients</Text>
  </View>
  <View>
  <Image style={{ elevation:4, width: 180, height: 120, margin: 5,borderRadius:10,borderWidth:1,backgroundColor:'#ebfbad' }} resizeMode='cover' source={require('../AwesomeProject/image/splash9.jpg')} />
  <Text style={{textAlign:'center',fontSize:16}}>Growth Promotors</Text>
  </View>

  {/* <Image style={{ width: 120, height: 120, marginHorizontal: 5 }} resizeMode='cover' source={require('../AwesomeProject/image/splash7.jpg')} /> */}
</View>



 
<View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center',flexGrow:4 ,margin:5,height:150,padding:5}}>
          <View>
  <Image style={{ elevation:4,width: 180, height: 120, margin: 5,borderRadius:10,borderWidth:1,backgroundColor:'#ebfbad',}} resizeMode='cover' source={require('../AwesomeProject/image/splash10.jpg')} />
  <Text style={{textAlign:'center',fontSize:16}}>Toolkit</Text>
  </View>
  <View>
  <Image style={{ elevation:4, width: 180, height: 120, margin: 5,borderRadius:10,borderWidth:1,backgroundColor:'#ebfbad' }} resizeMode='cover' source={require('../AwesomeProject/image/splash11.jpg')} />
  <Text style={{textAlign:'center',fontSize:16}}>Seeds</Text>
  </View>

  {/* <Image style={{ width: 120, height: 120, marginHorizontal: 5 }} resizeMode='cover' source={require('../AwesomeProject/image/splash7.jpg')} /> */}
</View>

{/* insert some bnnner here  */}

<Text style={{fontSize:17,fontWeight:'bold',marginLeft:15,padding:1,margin:20,marginBottom:30}}>Recommended Products</Text>
<View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center',flexGrow:4 ,margin:5,height:250,padding:5}}>
          <View>
  <Image style={{ elevation:4,width: 180, height: 250, margin: 10,borderRadius:10,borderWidth:1,backgroundColor:'#ebfbad',}} resizeMode='cover' source={require('../AwesomeProject/image/splash12.png')} />
  <Text style={{textAlign:'center',fontSize:16,marginBottom:25}}>Herbicides</Text>
  </View>
  <View>
  <Image style={{ elevation:4, width: 180, height: 250, margin: 10,borderRadius:10,borderWidth:1,backgroundColor:'#ebfbad' }} resizeMode='cover' source={require('../AwesomeProject/image/splash13.png')} />
  <Text style={{textAlign:'center',fontSize:16,marginBottom:25}}>Fungicides</Text>
  </View>

  {/* <Image style={{ width: 120, height: 120, marginHorizontal: 5 }} resizeMode='cover' source={require('../AwesomeProject/image/splash7.jpg')} /> */}
</View>

<Text style={{fontSize:17,fontWeight:'bold',marginLeft:15,padding:1,marginTop:25}}>Trending Products</Text>


<View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center',flexGrow:4 ,margin:5,height:350,padding:5}}>
          <View>
  <Image style={{ elevation:4,width: 180, height: 300, margin: 5,borderRadius:10,borderWidth:1,backgroundColor:'#ebfbad',}} resizeMode='cover' source={require('../AwesomeProject/image/splash14.png')} />
  <Text style={{textAlign:'center',fontSize:16}}>Insecticides</Text>
  </View>
  <View>
  <Image style={{ elevation:4, width: 180, height: 300, margin: 5,borderRadius:10,borderWidth:1,backgroundColor:'#ebfbad' }} resizeMode='cover' source={require('../AwesomeProject/image/splash15.png')} />
  <Text style={{textAlign:'center',fontSize:16}}>FMC</Text>
  </View>

  {/* <Image style={{ width: 120, height: 120, marginHorizontal: 5 }} resizeMode='cover' source={require('../AwesomeProject/image/splash7.jpg')} /> */}
</View>
<Text style={{fontSize:17,fontWeight:'bold',marginLeft:15,padding:1,marginTop:25}}>Seeds Product</Text>

<View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center',flexGrow:4 ,margin:5,height:150,padding:5}}>
          <View>
  <Image style={{ elevation:4,width: 180, height: 120, margin: 5,borderRadius:10,borderWidth:1,backgroundColor:'#ebfbad',}} resizeMode='cover' source={require('../AwesomeProject/image/seeds1.png')} />
  <Text style={{textAlign:'center',fontSize:16}}>Cauliflower</Text>
  </View>
  <View>
  <Image style={{ elevation:4, width: 180, height: 120, margin: 5,borderRadius:10,borderWidth:1,backgroundColor:'#ebfbad' }} resizeMode='cover' source={require('../AwesomeProject/image/seeds2.png')} />
  <Text style={{textAlign:'center',fontSize:16}}>Spinach</Text>
  </View>

  {/* <Image style={{ width: 120, height: 120, marginHorizontal: 5 }} resizeMode='cover' source={require('../AwesomeProject/image/splash7.jpg')} /> */}
</View>
<View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center',flexGrow:4 ,margin:5,height:150,padding:5}}>
          <View>
  <Image style={{ elevation:4,width: 180, height: 120, margin: 5,borderRadius:10,borderWidth:1,backgroundColor:'#ebfbad',}} resizeMode='cover' source={require('../AwesomeProject/image/seeds3.png')} />
  <Text style={{textAlign:'center',fontSize:16}}>Cabbage</Text>
  </View>
  <View>
  <Image style={{ elevation:4, width: 180, height: 120, margin: 5,borderRadius:10,borderWidth:1,backgroundColor:'#ebfbad' }} resizeMode='cover' source={require('../AwesomeProject/image/seeds4.png')} />
  <Text style={{textAlign:'center',fontSize:16}}>Carrot</Text>
  </View>

  {/* <Image style={{ width: 120, height: 120, marginHorizontal: 5 }} resizeMode='cover' source={require('../AwesomeProject/image/splash7.jpg')} /> */}
</View>


<View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center',flexGrow:4 ,margin:5,height:150,padding:5}}>
          <View>
  <Image style={{ elevation:4,width: 180, height: 120, margin: 5,borderRadius:10,borderWidth:1,backgroundColor:'#ebfbad'}} resizeMode='cover' source={require('../AwesomeProject/image/seeds5.png')} />
  <Text style={{textAlign:'center',fontSize:16}}>Raddish</Text>
  </View>
  <View>
  <Image style={{  width: 180, height: 120, margin: 5,borderRadius:10,borderWidth:1,backgroundColor:'#ebfbad' }} resizeMode='cover' source={require('../AwesomeProject/image/seeds6.jpg')} />
  <Text style={{textAlign:'center',fontSize:16}}>Bitter Guard </Text>
  </View>

  {/* <Image style={{ width: 120, height: 120, marginHorizontal: 5 }} resizeMode='cover' source={require('../AwesomeProject/image/splash7.jpg')} /> */}
</View>








</ScrollView>
        </View> 

        {/* <View style={{paddingLeft:25,paddingRight:25,width:'100%',marginTop:10}}>
         <Pressable style={Styles.defaultButton}>
         <Text style={{color:'white',fontSize:19,fontWeight:'bold'}} onPress={() => navigation.navigate('LoginScreen')}>Started</Text>
        
         </Pressable>
         </View>  */}
         
    </Layout>

    

  )
};


export default  SplashScreen;