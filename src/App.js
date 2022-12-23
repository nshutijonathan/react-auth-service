import { Routes, Route } from "react-router-dom";
import { Container, Col, Row } from "react-bootstrap";
import Account from "./components/account";
import FreeComponent from "./components/freeComponent";
import AuthComponent from "./components/authComponent";
import ProtectedRoutes from "./components/protectedRoutes";
function App() {
  return (
    <Container>
      <Row>
        <Col className="text-center">
          <h1>React Authentication Tutorial</h1>

          <section id="navigation">
            <a href="/">Home</a>
            <a href="/free">Free Component</a>
            <a href="/auth">Auth Component</a>
          </section>
        </Col>
      </Row>

      {/* create routes here */}
      <Routes>
        <Route exact path="/" component={Account} />
        <Route exact path="/free" component={FreeComponent} />
        <Route path="/auth" component={AuthComponent} />
      </Routes>
    </Container>
  );
}

export default App;
