import React, { useState } from 'react';
import { View, Text } from 'react-native';

// dependencies
import { useNavigation } from '@react-navigation/native';

// components
import { Profile } from '../../components/Profile';
import { ButtonAdd } from '../../components/ButtonAdd';
import { CategorySelect } from '../../components/CategorySelect';
import { ListHeader } from '../../components/ListHeader';
import { Appointment } from '../../components/Appointment';
import { ListDivider } from '../../components/ListDivider';
import { Background } from '../../components/Background';

// styles
import { styles } from './styles';
import { FlatList } from 'react-native';

export function Home() {
    const navigation = useNavigation();

    const [ category, setCategory ] = useState('');

    const appointments = [
        {
            id: '1',
            guild: {
                id: '1',
                name: 'Lendários',
                icon: null,
                owner: true
            },
            category: '1',
            date: "22/06 às 20:40h",
            description: "É hoje que vamos chegar ao challenger sem perder uma partida da md10"
        },
        {
            id: '2',
            guild: {
                id: '2',
                name: 'Lendários',
                icon: null,
                owner: true
            },
            category: '1',
            date: "22/06 às 20:40h",
            description: "É hoje que vamos chegar ao challenger sem perder uma partida da md10"
        }
    ]

    function handleCategorySelect(categoryId : string){
        categoryId === category ? setCategory('') : setCategory(categoryId);
    }

    function handleAppointmentDetails(){
        navigation.navigate('AppointmentDetails');
    }

    return (
        <Background>
            <View style={styles.header}>
                <Profile />
                <ButtonAdd />
            </View>
            
            <CategorySelect
                categorySelected={category}
                setCategory={handleCategorySelect}
            />

            <View style={styles.content} >
                <ListHeader
                    title="Partidas agendadas"
                    subTitle="Total 6"
                />

                <FlatList
                    data={appointments}
                    keyExtractor={item => item.id}
                    style={styles.matches}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <Appointment
                            data={item}
                            onPress={handleAppointmentDetails}
                        />
                    )}
                    ItemSeparatorComponent={() => <ListDivider />}
                />

            </View>
        </Background>
    )
}
