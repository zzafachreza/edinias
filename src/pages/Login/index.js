import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, ActivityIndicator, TouchableOpacity, BackHandler, Alert, Linking } from 'react-native';
import { fonts, windowWidth, colors, windowHeight } from '../../utils';
import { MyInput, MyGap, MyButton } from '../../components';
import axios from 'axios';
import { apiURL, api_token, MYAPP, storeData } from '../../utils/localStorage';
import { showMessage } from 'react-native-flash-message';


export default function Login({ navigation }) {

  const [kirim, setKirim] = useState({
    api_token: api_token,
    email: null,
    password: null
  });
  const [loading, setLoading] = useState(false);

  const [comp, setComp] = useState({});





  const masuk = () => {


    if (kirim.email == null && kirim.password == null) {
      Alert.alert(MYAPP, 'email dan Password tidak boleh kosong !');
    } else if (kirim.email == null) {
      Alert.alert(MYAPP, 'email tidak boleh kosong !');
    } else if (kirim.password == null) {
      Alert.alert(MYAPP, 'Password tidak boleh kosong !');
    } else {


      setLoading(true);
      console.log(kirim);

      axios
        .post(apiURL + 'login', kirim)
        .then(res => {
          setLoading(false);
          console.log(res.data);
          if (res.data.status == 404) {
            showMessage({
              type: 'danger',
              message: res.data.message
            })
          } else {
            storeData('user', res.data.data);
            navigation.replace('Home')
          }

        });



    }




  }

  useEffect(() => {

    axios.post(apiURL + 'company').then(res => {
      setComp(res.data.data);
    })

  }, [])

  return (
    <>
      <ScrollView style={{ padding: 10, flex: 1, backgroundColor: colors.secondary, position: 'relative' }}>


        <View style={{ justifyContent: 'center', alignItems: 'center', paddingHorizontal: 5, paddingTop: 10, height: windowHeight / 4 }}>


          <Image
            source={require('../../assets/logo.png')}
            style={
              {
                width: 120,
                height: 120,
                resizeMode: 'contain'
              }
            }
          />





        </View>
        <MyGap jarak={20} />
        <View style={{ padding: 10, marginVertical: 10, flex: 1 }}>
          <MyInput label="Email" onChangeText={val => setKirim({
            ...kirim,
            email: val
          })}
            iconname="mail" placeholder="Masukan email" />
          <MyGap jarak={20} />
          <MyInput
            onChangeText={val => setKirim({
              ...kirim,
              password: val
            })}
            secureTextEntry={true}
            label="Password"
            iconname="lock-closed"
            keyboardType="number-pad"
            placeholder="Masukan kata sandi"
          />
          <MyGap jarak={40} />
          {!loading &&


            <MyButton
              onPress={masuk}
              title="Log in"
              warna={colors.primary}
              Icons="log-in-outline"
            />

          }

        </View>
        {loading && <View style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <ActivityIndicator color={colors.primary} size="large" />
        </View>}
      </ScrollView>
      <TouchableOpacity onPress={() => {

        navigation.navigate('LupaPassword', comp)
      }} style={{
        padding: 10,
        backgroundColor: colors.secondary,
        justifyContent: 'center',
        alignItems: 'center'
      }}><Text style={{
        fontSize: windowWidth / 28,
        marginTop: 10,
        fontFamily: fonts.primary[400],
        textAlign: 'center',
        color: colors.black
      }}>Lupa password  ?</Text></TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({});
