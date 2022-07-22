import React from 'react';
import {StyleSheet,View, Image, Text, Linking, TouchableOpacity} from 'react-native';
import { AntDesign, Ionicons, MaterialIcons} from '@expo/vector-icons';

import foto from './assets/perfil.jpg';


const App = () => {
  return(
    
   
    <View style={style.page}>
    <View style={style.containerCabecalho}>
    <Image source={foto} style={style.image}/>
    <Text style={style.nome}>GIOVANNA GONÇALVES DE SOUZA </Text>
    <Text style={style.funcao}>Desenvolverdor Web </Text>
    <Text style={style.funcao}></Text>
    <View style={style.redes}>
      <TouchableOpacity>
    <AntDesign name="github" size={24} color='black' 
    onPress={() => { 
              Linking.openURL('https://github.com/Giovanna-GS');
       }}/>
    </TouchableOpacity>
    <TouchableOpacity >
    <AntDesign name="linkedin-square" size={24} color='black'  
     onPress={() => {
              Linking.openURL('https://www.linkedin.com/in/giovanna-goncalves/')}}/>
    </TouchableOpacity>
    <TouchableOpacity >
    <Ionicons name="logo-whatsapp" size={24} color='black' flexDirection= 'row'
    onPress={() => { Linking.openURL('https://wa.me/qr/5ZO6FAQGCSBRH1')}}
      />
    </TouchableOpacity >
    <TouchableOpacity >
    <MaterialIcons name="email"  size={24} color='black' flexDirection= 'row'
    onPress={() => {Linking.openURL('mailto: giovanna.gsouza99@gmail.com')}}  />
    </TouchableOpacity>
    </View>
    </View>
    
    
    

    <View style={style.card}>
    <View style={style.cardHeader}>
    <Text>Experiencia Profissional </Text>
    </View>

    <View style={style.cardContent}>
    <Text style={style.cardContentText}> Fidelity FIS- 06/2019- 06/2022</Text>

    </View>
    </View>

    <View style={style.card}>
    <View style={style.cardHeader}>
    <Text> Histórico Escolar </Text>
    </View>
    <View style={style.cardContent}>
    <Text style={style.cardContentText}> Hotelaria- Faculdade das Américas / 2017- 2018 </Text>
    <Text style={style.cardContentText}> Superior de Tecnologia em Análise e
Desenvolvimento de Sistema- Anhembi Morumbi / 2022-2024 </Text>
     </View>
     </View>
    

  <View style={style.card}>
  <View style={style.cardHeader}>
  <Text> Cursos Complementares </Text>
  </View>
  <View style={style.cardContent}>
  <Text style={style.cardContentText}> Desenvolvimento de Websites - Frontend </Text>
  <Text style={style.cardContentText}> Desenvolvimento Mobile React Native e Expo </Text>
  <Text style={style.cardContentText}>JavaScript - Interatividade para WEB
</Text>
  </View>
  </View>
  </View>

   
  );
};



const style = StyleSheet.create({
  page:{
    backgroundColor: '#fcd5ce',
    flex: 1,
    alignItems: 'center'
  },

  containerCabecalho:{
    marginTop:50,
    alignItems: 'center',
    justifyContent:'center'

  },

  image:{
    width:180,
    height: 180,
    borderRadius: 150

  },
  nome:{
    fontSize: 15,
    fontWeight:'bold',
    marginTop: 20
  },
  funcao:{
    color:'#be95c4',
    marginBottom: 10
    
  },
  redes:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    alignItems:'center',
    marginLeft: '50'
    
    
  },
  card:{
    width: '80%',
    borderWidth: 2,
    borderColor: '#f28482',
    alignItems:'center',
    marginTop: 15,
    padding: 5,
    backgroundColor: 'white'

},
cardContent:{
  marginTop: 10,
  color: '1b263b',
  alignItems:'center'
},

cardContentText:{
  color:'#8b8c89',
  marginBottom: 10,
  alignItems:'center',
  textAlign: 'center'
},


})

export default App;
