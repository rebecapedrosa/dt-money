import { useEffect } from "react";
import { Container } from "./style";
import { api } from "../../services/api";

export function TransactionTable() {
  useEffect(() => {
    api.get("transactions")
      .then((response) => console.log(response.data));
  }, []);

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
            <td>Sopa de macaco</td>
            <td className="deposit">R$ +200,00</td>
            <td>Comida</td>
            <td>20/09/2020</td>
          </tr>
          <tr>
            <td>Sopa de macaco</td>
            <td className="withdraw">R$ -200,00</td>
            <td>Comida</td>
            <td>20/09/2020</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
