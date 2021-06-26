import React from 'react';
import { View } from 'react-native';

// dependencies
import { BorderlessButton } from 'react-native-gesture-handler';
import { Fontisto } from '@expo/vector-icons';

// components
import { Background } from '../../components/Background';
import { Header } from '../../components/Header';

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
    </Background>
  );
}

