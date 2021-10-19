import { Container } from './styles';

export function TransactionTable() {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento de WebSite</td>
            <td className="deposit">R$10.000</td>
            <td>Freela</td>
            <td>20/10/2021</td>
          </tr>
          <tr>
            <td>Salário</td>
            <td className="deposit">R$2.000</td>
            <td>Emprego</td>
            <td>05/11/2021</td>
          </tr>
          <tr>
            <td>Internet</td>
            <td className="withdraw">- R$300</td>
            <td>Contas</td>
            <td>10/11/2021</td>
          </tr>
          <tr>
            <td>Academia</td>
            <td className="withdraw">- R$80</td>
            <td>Contas</td>
            <td>26/11/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}