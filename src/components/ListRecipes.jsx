import React,{ useEffect, useState } from 'react'
import { allRecipes } from "../functions/functions"
import {Col, Container, Row} from "react-bootstrap";


const ListRecipes = () => {
    const [recipes, setRecipes] = useState(null)

    useEffect(() =>{
        allRecipes(setRecipes)
    },[ ])

    return (
        <>
            <Container>
                <Row xs={1} md={5} >
                    {recipes != null ? (
                        recipes.map((recipe) => (
                            <Col key={recipe.uuid} >
                                <a href={`/recipe/${recipe.uuid}`} className="text-decoration-none fs-3 lh-1 fw-bold text-dark goRecipe">
                                    <div className="contentImg rounded">
                                        <img src={`http://localhost:3001/${recipe.images.medium}`}/>
                                    </div>
                                    <p className="mt-2 border-bottom border-dark">{recipe.title} </p>
                                </a>
                            </Col>
                        ))
                    ) : ('It is empty ')}
                </Row>
            </Container>
        </>
    );
};

export default ListRecipes;