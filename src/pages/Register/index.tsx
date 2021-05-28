import {FiArrowLeft, FiMail, FiLock, FiUser} from 'react-icons/fi'
import { Content, Container, FormContainer, InputContainer, Background } from "./styles";
import { Button } from '../../components/Button';
import { Link } from 'react-router-dom';

export function Register (){
    return (
        <Container>
            <Content>
                <FormContainer>
                    <h2>Faça seu cadastro</h2>
                    <form action="">
                        <InputContainer>
                        <FiUser size={40} />
                            <input
                             type="text" 
                             placeholder="Nome"
                             />
                        </InputContainer>
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
                        <Button type="submit"> Cadastrar </Button>
                    </form>
                    <Link to="/">
                        <FiArrowLeft size={40} />
                        Voltar para login
                    </Link>
                </FormContainer>
            </Content>
            <Background />
        </Container>
    )
}