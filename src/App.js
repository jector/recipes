import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './components/ListRecipes'
import Detail from './components/DetailRecipe'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Col, Container, Row} from "react-bootstrap"
import './index.css'


function App() {
  return (
      <Container fluid>
        <div className="App">
            <Container className="mb-3">
                <Row>
                    <Col className="border-bottom border-dark header">
                        <h1 className="mt-5">Recipes</h1>
                        <h2 className="fs-6 fw-normal text-uppercase">Hector Velasco</h2>
                    </Col>
                </Row>
            </Container>
              <BrowserRouter>
                <Routes>
                  <Route path= '/' element= {<Home></Home>}></Route>
                  <Route path= 'recipe/:id' element= {<Detail></Detail>}></Route>
                </Routes>
              </BrowserRouter>

        </div>

      </Container>
  );
}
export default App;


/*
//Pull the data from the API
//Create a list view which includes all the recipes
//Create a recipe detail view to display each recipe
Ingredients with a matching ingredientId listed in the specials response should also show the special title, type and text under the ingredient name
*/