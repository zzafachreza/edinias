import { Alert, StyleSheet, Text, View, Image, FlatList, ActivityIndicator, Dimensions, ImageBackground } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { apiURL, getData, MYAPP, storeData } from '../../utils/localStorage';
import { colors, fonts, windowHeight, windowWidth } from '../../utils';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { showMessage } from 'react-native-flash-message';
import Sound from 'react-native-sound';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { MyButton, MyGap, MyHeader, MyInput } from '../../components';
import { useIsFocused } from '@react-navigation/native';
import axios from 'axios';
import { FloatingAction } from "react-native-floating-action";
import 'intl';
import 'intl/locale-data/jsonp/en';
import LinearGradient from 'react-native-linear-gradient';
import moment from 'moment';
import { color } from 'react-native-elements/dist/helpers';
import MyCarouser from '../../components/MyCarouser';


export default function Home({ navigation }) {


  const [data, setData] = useState([]);
  const [user, setUser] = useState({});
  const isFocused = useIsFocused();
  useEffect(() => {


    if (isFocused) {
      __getTransaction();
    }

  }, [isFocused]);

  const __getTransaction = () => {
    getData('user').then(res => {
      setUser(res);
    });


  }




  return (






    <ImageBackground
      source={require('../../assets/back.png')}
      style={{
        flex: 1,
        backgroundColor: colors.white
      }}>
      <View style={{
        padding: 10,
      }}>
        <TouchableOpacity onPress={() => navigation.navigate('AAAtur')} style={{
          height: 30,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 5,
          width: 40,
        }}>
          <Image source={require('../../assets/menu.png')} style={{
            width: 18,
            height: 18,
          }} />
        </TouchableOpacity>
      </View>
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Image source={require('../../assets/logo.png')} style={{
          width: 150,
          height: 150,
          resizeMode: 'contain'
        }} />
      </View>

      <View style={{
        flex: 1,
        backgroundColor: colors.secondary,
        justifyContent: 'center',
        paddingHorizontal: 20,


      }}>

        <TouchableOpacity onPress={() => {

          navigation.navigate('Produk')

        }} style={{
          width: '100%',
          flexDirection: 'row',
          marginTop: 10,
          borderRadius: 10,
          backgroundColor: colors.white,
          padding: 10,
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Image source={require('../../assets/A1.png')} style={{
            width: 80,
            flex: 1,
            height: 80,
            resizeMode: 'contain'
          }} />
          <Text style={{
            flex: 1,
            fontSize: 22,
            fontFamily: fonts.secondary[600],
          }}>Manajemen</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Transaksi')} style={{
          width: '100%',
          flexDirection: 'row',
          marginTop: 10,
          borderRadius: 10,
          backgroundColor: colors.white,
          padding: 10,
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Image source={require('../../assets/A4.png')} style={{
            width: 80,
            flex: 1,
            height: 80,
            resizeMode: 'contain'
          }} />
          <Text style={{
            flex: 1,
            fontSize: 22,
            fontFamily: fonts.secondary[600],

          }}>Transaksi</Text>
        </TouchableOpacity>




      </View>

    </ImageBackground>




  )
}

const styles = StyleSheet.create({
  container: {

    flex: 1,
  },
  item: {
    width: windowHeight,
    height: windowWidth / 2,
  },
  imageContainer: {
    flex: 1,
    marginBottom: 1, // Prevent a random Android rendering issue
    backgroundColor: 'white',
    borderRadius: 8,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },
});