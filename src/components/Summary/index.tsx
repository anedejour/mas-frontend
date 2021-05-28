import {GoFile, GoNote, GoGraph} from 'react-icons/go';
import { Container } from './styles';

export function Summary (){
    return (
        <Container>
            <div>
                <header>
                    <p>Courses Units </p>
                    <GoFile size={40}/>
                </header>
                <strong>
                    25
                </strong>
            </div>
            <div>
                <header>
                    <p> Activities </p>
                    <GoNote size={40}/>
                </header>
                <strong>
                    80
                </strong>
            </div>
            <div className="highlight-background">
                <header>
                    <p> General Media </p>
                    <GoGraph size={40}/>
                </header>
                <strong>
                    9.17
                </strong>
            </div>
        </Container>
    )
}