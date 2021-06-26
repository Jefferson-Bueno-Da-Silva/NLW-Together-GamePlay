import React from 'react';
import { View } from 'react-native';

// components
import { Background } from '../../components/Background';
import { Header } from '../../components/Header';

// styles
import { styles } from './styles';

export function AppointmentDetails(){
  return (
    <Background>
        <Header
            title="Detalhes"
        />
    </Background>
  );
}

