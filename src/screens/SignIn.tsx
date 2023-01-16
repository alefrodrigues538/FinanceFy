import React, { useState } from 'react';
import { Alert, Text, View } from 'react-native';
import { Button, Column, Container, Heading, Paragraph, Row } from '../components/GlobalComponents';
import { Input } from '../components/Input';
import { SignInScreenProps } from '../types';

import { FontAwesome5 } from "@expo/vector-icons"
import Colors from '../constants/Colors';

const SignIn = ({ navigation }: SignInScreenProps) => {

    return (
        <Container>
            <Row flex={3}>
                <Heading title='SignIn' />
            </Row>
            <Column flex={6} alignItems="flex-start">
                <Input
                    required
                    placeholder='nome@email.com'
                    label='Email'
                    error
                    errorMessage='teste' />
                <Input
                    placeholder='insira a sua senha.'
                    label='Senha'
                    errorMessage='teste' />

                <Button
                    variation='primary' rounded
                    title='Entrar' />

                <Button
                    variation='link'
                    title='Ainda não possui uma conta? Cadastre-se aqui!'
                />
            </Column>
        </Container>
    );
}

export default SignIn;