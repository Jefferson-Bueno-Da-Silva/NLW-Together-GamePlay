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

// navigation
import { useNavigation } from '@react-navigation/native';

export function SignIn() {
    const navigation = useNavigation()
    
    function HandleSignIn(){
        navigation.navigate('Home');
    }
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
                    onPress={HandleSignIn}
                />

            </View>

        </View>
    );
}
