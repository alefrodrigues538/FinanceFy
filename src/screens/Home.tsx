import React, { useState } from 'react';
import { Button, View } from 'react-native';
import { Container, Paragraph } from '../components/GlobalComponents';
import { HomeScreenProps, MainScreenProps } from '../types';
import { useNavigation } from '@react-navigation/native';
import Colors from '../constants/Colors';
import User from '../classes/user';

const HomeScreen = ({ navigation }: HomeScreenProps) => {
    const [usuario, setUsuario] = useState<User>();


    return (
        <Container>
            <View style={{
                flex: 1,
                width: '100%',
                justifyContent: 'flex-end',
                backgroundColor: Colors.primary,
                alignItems: 'center'
            }}>

                <View style={{
                    backgroundColor: Colors.white,
                    width: '100%',
                    minHeight: '30%',
                    borderTopLeftRadius: 16,
                    borderTopRightRadius: 16,
                    paddingHorizontal: 16,
                }}>

                    <Paragraph>HomeScreen</Paragraph>
                    <Button title='Settings' onPress={() => navigation.navigate('Settings')} />
                </View>
            </View>
        </Container>
    );
}

export default HomeScreen;