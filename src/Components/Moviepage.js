import React from "react";
import { Card, Button } from "react-bootstrap";
import "./MovieCard.css";
import { Link } from "react-router-dom";

function Moviepage({ movie }) {
    return (
        <div className=" MovieCard">
            <Card>
                <Card.Img
                    className="Movieimg"
                    variant="top"
                    src={movie.posterUrl}
                    alt="mlovie"
                />
                <Card.Body>
                    <Card.Title>{movie.title}</Card.Title>
                    <Card.Text>{movie.desciption}</Card.Text>
                    <h2>{"⭐".repeat(movie.rate)}</h2>
                    {/* <Card.Text>{movie.filter}</Card.Text> */}
                    <br></br>
                    <iframe
                        width="876"
                        height="372"
                        src={movie.trailer}
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                    ></iframe>
                </Card.Body>
                <Card.Footer>
                    <Link to="/">
                        <Button variant="primary">Go Back</Button>
                    </Link>
                </Card.Footer>
            </Card>
        </div>
    );
}

export default Moviepage;
