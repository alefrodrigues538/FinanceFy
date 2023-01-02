import React from 'react';
import { Button, View } from 'react-native';
import { Container, Paragraph } from '../components/GlobalComponents';
import { HomeScreenProps, MainScreenProps } from '../types';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = ({ navigation }: HomeScreenProps) => {

    return (
        <Container>
            <Paragraph>HomeScreen</Paragraph>
            <Button title='Settings' onPress={() => navigation.navigate('Settings')} />
        </Container>
    );
}

export default HomeScreen;