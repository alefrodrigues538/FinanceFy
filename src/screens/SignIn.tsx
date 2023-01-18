import React from 'react';
import { Button, Column, Container, Heading, Row } from '../components/GlobalComponents';
import { Input } from '../components/Input';
import SignInWithGoogle from '../components/SignWithGoogle';
import { SignInScreenProps } from '../types';

const SignIn = ({ navigation }: SignInScreenProps) => {

    return (
        <Container>
            <Row flex={4}
                width={"100%"}
                alignItems="flex-end">
                <Heading title='SignIn' />
            </Row>
            <Column flex={5}
                alignItems="flex-start"
                justifyContent="flex-start"
                paddingTop={16}>
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
                <SignInWithGoogle rounded />

                <Button
                    variation='link'
                    title='Recuperar senha.'
                />

            </Column>
            <Row flex={1} maxHeight={50}>
                <Button
                    variation='link'
                    title='Ainda não possui uma conta? Cadastre-se aqui!'
                    onPress={() => navigation.navigate("Main")}
                />
            </Row>
        </Container>
    );
}

export default SignIn;