import React from 'react';
import { View, Text } from 'react-native';

// components
import { Profile } from '../../components/Profile';
import { ButtonAdd } from '../../components/ButtonAdd';

// styles
import { styles } from './styles';

export function Home() {
    return (
        <View style={styles.constrainer} >
            <View style={styles.header}>
                <Profile />
                <ButtonAdd />
            </View>
        </View>
    )
}
