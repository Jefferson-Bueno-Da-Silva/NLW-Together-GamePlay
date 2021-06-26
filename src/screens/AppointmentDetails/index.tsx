import React from 'react';
import { 
  View, 
  ImageBackground, 
  Text,
  FlatList,
} from 'react-native';

// dependencies
import { BorderlessButton } from 'react-native-gesture-handler';
import { Fontisto } from '@expo/vector-icons';

// components
import { Background } from '../../components/Background';
import { Header } from '../../components/Header';
import { ListHeader } from '../../components/ListHeader';
import { Member } from '../../components/Member';

// assets
import BannerImg from '../../assets/banner.png';

// styles
import { styles } from './styles';
import { theme } from '../../global/styles/theme';

export function AppointmentDetails() {
  const members = [
    {
      id: "1",
      username: "Jefferson",
      avatar_url: "https://github.com/Jefferson-Bueno-Da-Silva.png",
      status: "online",
    },
    {
      id: "2",
      username: "Jefferson bueno",
      avatar_url: "https://github.com/Jefferson-Bueno-Da-Silva.png",
      status: "offline",
    }
  ]
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

      <ListHeader 
        title="Jogadores"
        subTitle="Total 3"
      />

      <FlatList
        data={members}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <Member data={item} />
        )}

      />
      

    </Background>
  );
}

