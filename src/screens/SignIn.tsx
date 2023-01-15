import React from 'react';
import { Text, View } from 'react-native';
import { Column, Container, Heading, Paragraph, Row } from '../components/GlobalComponents';
import { Input } from '../components/Input';
import { SignInScreenProps } from '../types';

const SignIn = ({ navigation }: SignInScreenProps) => {

    return (
        <Container>
            <Row>
                <Paragraph
                    title='Paragraph' />
                <Paragraph
                    title='Paragraph' />
            </Row>
            <Column>
                <Paragraph
                    title='Paragraph' />
                <Paragraph
                    title='Paragraph' />
            </Column>

            <Heading title='Heading' />
            <Input
                placeholder='Insira o seu email aqui'
                label='Teste'
                errorMessage='teste' />
        </Container>
    );
}

export default SignIn;