function Article({ titulo, data, conteudo, imagem }) {
  return (
    <article>
      <h2>{titulo}</h2>
      <time>{data}</time>

      <p>{conteudo.parte1}</p>
      <p>{conteudo.parte2}</p>

      <figure>
        <img src={imagem.src} alt={imagem.alt} />
        <figcaption>{imagem.legenda}</figcaption>
      </figure>
    </article>
  );
}

export default Article;