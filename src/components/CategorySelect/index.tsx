import React from 'react'
import { ScrollView, Text } from 'react-native'

import { styles } from './styles';

export function CategorySelect() {
    return (
        <ScrollView 
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{paddingRight: 40}}
            style={styles.container}
        >
            <Text>CategorySelect</Text>
        </ScrollView>
    )
}
