import React from 'react'
import { Image } from 'react-native'

// styles
import { styles } from './styles';

export function GuildIcon() {
    const uri = 'https://image.pngaaa.com/766/2341766-middle.png'
    return (
        <Image
            source={{ uri }}
            style={styles.image}
            resizeMode="cover"
        />
    )
}