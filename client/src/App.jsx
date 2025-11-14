import TestController from "./modules/test/test.controller"

function App() {

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a href="" className="navbar-brand">ADJ-Demo</a>
        </div>

        <div className="container mt-5">
          <h2>Inicio</h2>
          <hr />
          <button className="btn btn-success" onClick={() => TestController.callAPI()}>Llamar a mi API</button>
        </div>
      </nav>
    </>
  )
}

export default App
