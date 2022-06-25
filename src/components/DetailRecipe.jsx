import React, {useEffect, useState} from 'react'
import {useParams} from "react-router-dom"
import {singleRecipe, specialsIngredients} from "../functions/functions"
import {Col, Container, Row} from "react-bootstrap";

const DetailRecipe = () => {
    const [info, setInfo] = useState(null)
    const [special, setSpecial] = useState(null)

    const params =useParams()
    useEffect(()=>{
        singleRecipe(params.id, setInfo)
        specialsIngredients(setSpecial)
    },[])

    return (
        <>
            {info != null ? (
                <Container>
                    <a href="http://localhost:3000/">Back</a>
                    <h2 className="fw-bolder">{info.title}</h2>
                    <div className="info m-3">
                        <p>{info.description}</p>
                        <p>Serves: {info.servings}</p>
                        <p>Preparation time: {info.prepTime}</p>
                    </div>
                    <Row>
                        <Col className="firstContent col-7">
                            <img src={`http://localhost:3001/${info.images.medium}`}/>
                            <div className="directionContent">
                                <h3>Directions</h3>
                                <div>
                                    {info.directions.map((direction, i) => (
                                        <ul key={i}>
                                            <li><span>{i}.</span> {direction.instructions}</li>
                                        </ul>
                                    ))}
                                </div>
                            </div>
                        </Col>
                        <Col className="secondContent col-5">
                            <div className="ingredientsContent">
                                <h3>Ingredients</h3>
                                {info.ingredients.map((ingredient) => (
                                <ul key={ingredient.uuid}>
                                    <li>{ingredient.amount} {ingredient.name}
                                        {special != null ? (
                                        <div>
                                            {special.map((specials) => (
                                                <div key={specials.uuid}>
                                                    {specials.ingredientId === ingredient.uuid ? (
                                                    <div className="special">
                                                        <p><span>{specials.type}: </span>{specials.title}</p>
                                                        <p>{specials.text}</p>
                                                        <p>{specials.code}</p>
                                                    </div>
                                                    ) : ('')}
                                                </div>
                                            ))}
                                        </div>
                                        ) : ('It is empty ')}

                                    </li>
                                </ul>
                                ))}
                            </div>
                        </Col>

                    </Row>
                </Container>
            ) : ('It is empty ')}
        </>
    );
};

export default DetailRecipe;