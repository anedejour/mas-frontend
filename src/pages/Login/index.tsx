import {FiLogIn, FiMail, FiLock} from 'react-icons/fi'
import { Content, Container, FormContainer, InputContainer, Background } from "./styles";
import { Button } from '../../components/Button';
import { Link } from 'react-router-dom';

export function Login (){
    return (
        <Container>
            <Content>
                <FormContainer>
                    <h2>Faça seu login</h2>
                    <form action="">
                        <InputContainer>
                        <FiMail size={40} />
                            <input
                             type="email" 
                             placeholder="email"
                             />
                        </InputContainer>
                        <InputContainer>
                        <FiLock size={40} />
                            <input
                             type="password" 
                             placeholder="senha"
                             />
                        </InputContainer>
                        <Button type="submit"> Login </Button>
                    </form>
                    <Link to="/register">
                        <FiLogIn size={40} />
                        Cadastre seu acesso.
                    </Link>
                </FormContainer>
            </Content>
            <Background />
        </Container>
    )
}