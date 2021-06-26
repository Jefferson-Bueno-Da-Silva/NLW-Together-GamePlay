import React from 'react';
import { View, ImageBackground, Text } from 'react-native';

// dependencies
import { BorderlessButton } from 'react-native-gesture-handler';
import { Fontisto } from '@expo/vector-icons';

// components
import { Background } from '../../components/Background';
import { Header } from '../../components/Header';

// assets
import BannerImg from '../../assets/banner.png';

// styles
import { styles } from './styles';
import { theme } from '../../global/styles/theme';

export function AppointmentDetails() {
  return (
    <Background>
      <Header
        title="Detalhes"
        action={
          <BorderlessButton>
            <Fontisto
              name="share"
              size={24}
              color={theme.colors.primary}
            />
          </BorderlessButton>
        }
      />
      
      <ImageBackground
        source={BannerImg}
        style={styles.banner}
      >
        <View style={styles.bannerContent} >
          
          <Text style={styles.title} >
            Lendários
          </Text>
          
          <Text style={styles.subTitle} >
            É hoje que vamos chegar ao challenger sem perder uma partida da md10
          </Text>

        </View>

      </ImageBackground>

    </Background>
  );
}

