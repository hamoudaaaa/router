import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Moviepage.css";

function Moviepage({ location }) {
    const movie = location.state.movie;
    {
        console.log(movie);
    }
    return (
        <div className=" MovieCard">
            <Card className="moviePageCard">
                <Card.Img
                    className="Movieimg"
                    variant="top"
                    src={movie.posterUrl}
                    alt="mlovie"
                />
                <Card.Body classname="MoviePageBody">
                    <Card.Title>{movie.title}</Card.Title>
                    <Card.Text style={{ align: "center" }}>
                        {movie.desciption}
                    </Card.Text>
                    <h2>{"⭐".repeat(movie.rate)}</h2>

                    <br></br>
                    <iframe
                        width="840"
                        height="472.5"
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
