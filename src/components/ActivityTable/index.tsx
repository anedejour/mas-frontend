import { Container } from "./styles";

export function AcitivityTable(){
    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Course Unit</th>
                        <th>Activities</th>
                        <th>Rating</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Programação Web</td>
                        <td>Desenvolvimento Front-end</td>
                        <td>8.50</td>
                        <td>05/04/2021</td>
                    </tr>
                    <tr>
                        <td>Programação Web</td>
                        <td>Implementação e autenticação</td>
                        <td>9.00</td>
                        <td>05/04/2021</td>
                    </tr>
                    <tr>
                        <td>Programação Web</td>
                        <td>Alterar estilos de páginas</td>
                        <td>10.00</td>
                        <td>05/04/2021</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}