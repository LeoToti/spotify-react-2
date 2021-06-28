import React, { Component } from "react";
import AlbumCard from "./AlbumCard";
import { Row, Col, Card, Container } from "react-bootstrap";
import { connect } from "react-redux";
import { add_Favorite, remove_Favorite } from "../actions/favorites";
import Song from "./Song";
import { MdFavorite } from "react-icons/md";
import { add_Queue, current_Song, add_Queue_Image } from "../actions/queue";

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
    remove_Favorite: (data) => {
        dispatch(remove_Favorite(data));
    },
    add_Queue: (data) => {
        dispatch(add_Queue(data));
    },
    current_Song: (data) => {
        dispatch(current_Song(data));
    }
});

export class Favourites extends Component {
    state = {
        selected: false
    };

    handleFavorite(Track) {
        this.props.remove_Favorite(Track);
    }

    handleQueue(songs, currentSongId) {
        /* this.props.add_Queue_Image(albumImage); */
        this.props.add_Queue(songs);
        let index = songs.findIndex((x) => x.id === currentSongId);
        this.props.current_Song(index);
    }

    render() {
        return (
            <Col className="col-12 col-md-9 offset-md-3 mainPage">
                <Row>
                    <div className="col-9 col-lg-11 mainLinks d-none d-md-flex">
                        <div>TRENDING</div>
                        <div>PODCAST</div>
                        <div>MOODS AND GENRES</div>
                        <div>NEW RELEASES</div>
                        <div>DISCOVER</div>
                    </div>
                </Row>

                <>
                    <Row>
                        <Col xs={10} className="mt-5 text-white">
                            <h2>Your Favourites</h2>
                            <Row className="imgLinks py-3" id="favoritesSection">
                                {this.props.like.favorites.length > 0 ? (
                                    <div className="col-10 mb-5" id="trackList">
                                        {this.props.like.favorites.map((song) => (
                                            <div className="py-3 this.props.trackHover">
                                                <MdFavorite className="cursor" onClick={() => this.handleFavorite(song)} style={{ color: "red" }} />
                                                <span className="card-title this.props.trackHover px-3" onClick={() => this.handleQueue(this.props.like.favorites, song.id)} style={{ color: "white" }}>
                                                    {song.title}
                                                </span>
                                                <small className="duration" style={{ color: "white" }}>
                                                    {Math.floor(parseInt(song.duration) / 60)}:{parseInt(song.duration) % 60 < 10 ? "0" + (parseInt(song.duration) % 60) : parseInt(song.duration) % 60}
                                                </small>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <div style={{ paddingInline: "15px" }}>No current Favourites</div>
                                )}
                            </Row>
                        </Col>
                    </Row>
                </>
            </Col>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Favourites);
