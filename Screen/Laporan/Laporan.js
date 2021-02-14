'use strict';
import React, {Component} from 'react';
import {RNCamera} from 'react-native-camera';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

class Laporan extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      kejadian: '',
      alamat: '',
      keterangan: '',
    };
  }

  inputLaporan = () => {
    console.log('Test laporan');
        firestore()
          .collection('laporan')
          .doc(this.state.kejadian)
          .set({
            name: this.state.name,
            kejadian: this.state.kejadian,
            alamat: this.state.alamat,
            keterangan: this.state.keterangan
          })
          .then(() => {
            this.props.navigation.navigate('Dashboard');
            console.log('laporan added!');
          })
          .catch((error) => {
            Alert.alert('Maaf Gagal Simpan', JSON.stringify(error));
          });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  render() {
    return (
      <View style={styles.container}>

       <KeyboardAwareScrollView
                style={{ flex: 1, width: '100%' }}
                keyboardShouldPersistTaps="always">
                <Image
                    style={styles.logo}
                    source={require('../../assets/ic_launcher.png')}
                />
                <TextInput
                    style={styles.input}
                    placeholder=' Name'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(name) => this.setState({ name : name})}
                    
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholder='kejadian'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(email) => this.setState({ kejadian : kejadian})}
                   
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholderTextColor="#aaaaaa"
                    secureTextEntry
                    placeholder='alamat'
                    onChangeText={(password) => this.setState({ alamat : alamat})}
                    
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholderTextColor="#aaaaaa"
                    secureTextEntry
                    placeholder='keterangan'
                    onChangeText={(repassword) => this.setState({ keterangan : keterangan})}
                    
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
        <RNCamera
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.on}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          androidRecordAudioPermissionOptions={{
            title: 'Permission to use audio recording',
            message: 'We need your permission to use your audio',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}>
          {({camera, status, recordAudioPermissionStatus}) => {
            return (
              <View
                style={{
                  flex: 0,
                  flexDirection: 'row',
                  justifyContent: 'center',
                }}>
                <TouchableOpacity
                  onPress={() => this.takePicture(camera)}
                  style={styles.capture}>
                  <Text style={{fontSize: 14}}> SNAP </Text>
                </TouchableOpacity>
              </View>
            );
          }}
        </RNCamera>
         <TouchableOpacity
                    style={styles.button}
                    onPress={this.inputLaporan}
                    >
                    <Text style={styles.buttonTitle}>laporkan</Text>
                </TouchableOpacity>
        </KeyboardAwareScrollView>
      </View>
    );
  }

  takePicture = async function (camera) {
    const options = {quality: 0.5, base64: true};
    const data = await camera.takePictureAsync(options);
    console.log(data.uri);
  };
}
export default Laporan;
