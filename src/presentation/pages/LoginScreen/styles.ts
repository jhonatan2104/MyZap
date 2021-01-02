import styled, { css } from 'styled-components/native'
import { StyleSheet } from 'react-native'
import InputPassword from './components/InputPassword'

export const CircleBackground = styled.View`
    width: 500px;
    height: 500px;
    border-radius: 270px;
    background-color: #FFF;
    position: absolute;
    left: -90px;
    top: -20px;
`
export const Label = styled.Text`
    font-weight: 800;
    font-size: 25px;
    color: #514E5A;
    margin-top: 5px;
`

const input = css`
    height: 50px;
    border-width: ${() => `${StyleSheet.hairlineWidth}px`};
    border-color: #BAB7C3;
    border-radius: 30px;
    padding-left: 20px;
    padding-right: 20px;
    color: #514e5a;
    font-weight: 600;
`
export const Input = styled.TextInput`
    ${input}
`
export const InputPasswordStyled = styled(InputPassword)`
    ${input}
`

export const Button = styled.TouchableOpacity`
    width: 70px;
    height: 70px;
    border-radius: 35px;
    background-color: #25B7D3;
    align-items: center;
    justify-content: center;
`
