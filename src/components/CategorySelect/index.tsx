import React from 'react'
import { ScrollView, Text } from 'react-native'

// components
import { Category } from '../Category';

// Utils
import { categories } from '../../utils/Categories';

// Styles
import { styles } from './styles';

type Props = {
    categorySelected: string;
    setCategory : (categoryId : string) => void;
    hasCheckBox?: boolean,
}

export function CategorySelect({ 
    categorySelected,
    setCategory,
    hasCheckBox = false,
}: Props) {

    return (
        <ScrollView 
            horizontal
            style={styles.container}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{paddingRight: 40}}
        >
            {
                categories.map(category => (
                    <Category
                        key={category.id}
                        title={category.title}
                        icon={category.icon}
                        checked={ category.id === categorySelected }
                        onPress={() => setCategory(category.id)}
                        hasCheckBox={hasCheckBox}
                    />
                ))
            }
        </ScrollView>
    )
}
