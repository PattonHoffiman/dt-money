import { Summary } from "../Summary";
import { TransactionTable } from "../TransactionsTable";

import { Container } from "./styles";

export const Dashboard: React.FC = () => {
  return (
    <Container>
      <Summary />
      <TransactionTable />
    </Container>
  );
}