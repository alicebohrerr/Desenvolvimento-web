import Header from "./components/Header";
import Article from "./components/Article";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

function App() {

  const post = {
    titulo: "A importancia da agricultura para o paraná",
    data: "27 de fevereiro de 2026",
    conteudo: {
      parte1: "A força do Paraná reside na terra, e a agricultura é o fio condutor que costura a história.",
      parte2: "O estado consolidou um modelo de cooperativismo que é referência global."
    },
    imagem: {
      src: "https://www.parana.pr.gov.br/sites/default/arquivos_restritos/files/imagem/2022-11/colheitasojagilson_059.jpg",
      alt: "Agricultura no Paraná",
      legenda: "Produção agrícola no Paraná."
    }
  };

  return (
    <div className="container">
      <Header />

      <main>
        <Article
          titulo={post.titulo}
          data={post.data}
          conteudo={post.conteudo}
          imagem={post.imagem}
        />
      </main>

      <Sidebar />

      <Footer />
    </div>
  );
}


export default App;