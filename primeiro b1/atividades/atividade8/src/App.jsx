import { useState } from "react";

function App() {
  // Estado da lista de tarefas
  const [tarefas, setTarefas] = useState([]);

  // Estado do input
  const [input, setInput] = useState("");

  // Adicionar tarefa
  function adicionarTarefa(e) {
    e.preventDefault();

    if (input.trim() === "") return;

    const novaTarefa = {
      id: Date.now(),
      text: input,
    };

    setTarefas([...tarefas, novaTarefa]);
    setInput("");
  }

  // Remover tarefa
  function removerTarefa(id) {
    const novaLista = tarefas.filter(tarefa => tarefa.id !== id);
    setTarefas(novaLista);
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>To-Do List</h1>

      {/* FORM */}
      <form onSubmit={adicionarTarefa}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Digite uma tarefa"
        />
        <button type="submit">Adicionar</button>
      </form>

      {/* LISTA */}
      <ul>
        {tarefas.map((tarefa) => (
          <li key={tarefa.id}>
            {tarefa.text}
            <button onClick={() => removerTarefa(tarefa.id)}>
              Remover
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;