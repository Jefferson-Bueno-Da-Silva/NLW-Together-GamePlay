import React from 'react';
import {
    Text,
    View,
    Image,
} from 'react-native';

// Assets
import IllustrationImg from '../../assets/illustration.png'

// components
import { ButtonIcon } from '../../components/ButtonIcon';

// styles
import { styles } from './styles';

export function SignIn() {
    return (
        <View style={styles.container} >

            <Image 
                style={styles.image}
                source={IllustrationImg}
                resizeMode="stretch"
            />

            <View style={styles.content}>

                <Text style={styles.title}>
                    Conecte-se {'\n'}
                    e organize suas {'\n'}
                    jogatinas
                </Text>

                <Text style={styles.subTitle}>
                    Crie grupos para jogar seus games {`\n`}
                    favoritos com seus amigos
                </Text>

                <ButtonIcon 
                    title="Entrar Com discord"
                    activeOpacity={0.7}
                />

            </View>

        </View>
    );
}
