import Nome from "./components/Nome";

function App() {
  return (

    <div>
  <form>
    <h1 className="container">  Componente App </h1>
    <Nome aluno="Lucas" idade="30" />
     <br/>
    <Nome aluno="Jose silva" idade="25" />
  </form>
    </div>
  );

}

export default App;

