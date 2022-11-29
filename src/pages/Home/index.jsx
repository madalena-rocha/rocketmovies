import { FiPlus } from "react-icons/fi";
import { Container, Content, NewMovie } from "./styles";

import { Header } from "../../components/Header";
import { Movie } from "../../components/Movie";

export function Home() {
  return (
    <Container>
      <Header />

      <main>
        <header>
          <h1>Meus filmes</h1>

          <NewMovie to="/new">
            <FiPlus />
            Adicionar filme
          </NewMovie>
        </header>

        <Content>
          <Movie
            data={{
              title: "O Senhor dos Anéis: A Sociedade do Anel",
              rating: "4",
              description:
                "Em uma terra fantástica e única, um hobbit recebe de presente de seu tio um anel mágico e maligno que precisa ser destruído antes que caia nas mãos do mal. Para isso, o hobbit Frodo tem um caminho árduo pela frente, onde encontra perigo, medo e seres bizarros. Ao seu lado para o cumprimento desta jornada, ele aos poucos pode contar com outros hobbits, um elfo, um anão, dois humanos e um mago, totalizando nove seres que formam a Sociedade do Anel.",
              tags: [
                { id: "1", name: "Fantasia" },
                { id: "2", name: "Aventura" },
              ],
            }}
          />

          <Movie
            data={{
              title: "O Senhor dos Anéis: As Duas Torres",
              rating: "4",
              description:
                "Após a captura de Merry e Pippy pelos orcs, a Sociedade do Anel é dissolvida. Frodo e Sam seguem sua jornada rumo à Montanha da Perdição para destruir o anel e descobrem que estão sendo perseguidos pelo misterioso Gollum. Enquanto isso, Aragorn, o elfo e arqueiro Legolas e o anão Gimli partem para resgatar os hobbits sequestrados e chegam ao reino de Rohan, onde o rei Theoden foi vítima de uma maldição mortal de Saruman.",
              tags: [
                { id: "1", name: "Fantasia" },
                { id: "2", name: "Aventura" },
              ],
            }}
          />

          <Movie
            data={{
              title: "O Senhor dos Anéis: O Retorno do Rei",
              rating: "4",
              description:
                "O confronto final entre as forças do bem e do mal que lutam pelo controle do futuro da Terra Média se aproxima. Sauron planeja um grande ataque a Minas Tirith, capital de Gondor, o que faz com que Gandalf e Pippin partam para o local na intenção de ajudar a resistência. Um exército é reunido por Theoden em Rohan, em mais uma tentativa de deter as forças de Sauron. Enquanto isso, Frodo, Sam e Gollum seguem sua viagem rumo à Montanha da Perdição para destruir o anel.",
              tags: [
                { id: "1", name: "Fantasia" },
                { id: "2", name: "Aventura" },
              ],
            }}
          />
        </Content>
      </main>
    </Container>
  );
}
