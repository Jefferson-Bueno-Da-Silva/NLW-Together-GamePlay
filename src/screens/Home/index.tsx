import React, { useState } from 'react';
import { View, Text } from 'react-native';

// components
import { Profile } from '../../components/Profile';
import { ButtonAdd } from '../../components/ButtonAdd';
import { CategorySelect } from '../../components/CategorySelect';
import { ListHeader } from '../../components/ListHeader';

// styles
import { styles } from './styles';

export function Home() {
    const [ category, setCategory ] = useState('');

    function handleCategorySelect(categoryId : string){
        categoryId === category ? setCategory('') : setCategory(categoryId);
    }

    return (
        <View style={styles.constrainer} >
            <View style={styles.header}>
                <Profile />
                <ButtonAdd />
            </View>

            <View>
                <CategorySelect
                    categorySelected={category}
                    setCategory={handleCategorySelect}
                />
            </View>

            <View style={styles.content} >
                <ListHeader
                    title="Partidas agendadas"
                    subTitle="Total 6"
                />
            </View>

        </View>
    )
}
