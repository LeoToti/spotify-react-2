import React from "react";
import Song from "./Song";
import { Row } from "react-bootstrap";
import { connect } from "react-redux";
import { add_Queue, current_Song } from "../actions/queue";
import { fetch_Album } from "../actions/search";

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
    add_Queue: (data) => {
        dispatch(add_Queue(data));
    },
    current_Song: (data) => {
        dispatch(current_Song(data));
    },
    fetch_Album: (data) => {
        dispatch(fetch_Album(data));
    }
});

class Album extends React.Component {
    state = {
        album: {},
        songs: []
    };

    componentDidMount() {
        let albumId = this.props.match.params.id;
        this.props.fetch_Album(albumId);
        /* this.setState({ album: this.props.search.album });
        this.setState({ songs: this.props.search.album.tracks.data }); */
    }

    render() {
        return (
            <div className="col-12 col-md-9 offset-md-3 mainPage">
                <Row className="mb-3">
                    <div className="col-9 col-lg-11 mainLinks d-none d-md-flex">
                        <div>TRENDING</div>
                        <div>PODCAST</div>
                        <div>MOODS AND GENRES</div>
                        <div>NEW RELEASES</div>
                        <div>DISCOVER</div>
                    </div>
                </Row>
                <Row>
                    {this.props.search.album.cover && (
                        <div className="col-md-3 pt-5 text-center" id="img-container">
                            <img src={this.props.search.album.cover} className="card-img img-fluid" alt="Album" />
                            <div className="mt-4 text-center">
                                <p className="album-title">{this.props.search.album.title}</p>
                            </div>
                            <div className="text-center">
                                <p className="artist-name">{this.props.search.album.artist ? this.props.search.album.artist.name : ""}</p>
                            </div>
                            <div className="mt-4 text-center">
                                <button id="btnPlay" className="btn btn-success" type="button">
                                    Play
                                </button>
                            </div>
                        </div>
                    )}
                    <div className="col-md-8 p-5">
                        <Row>
                            <div className="col-md-10 mb-5" id="trackList">
                                {this.props.search.album.tracks?.data.length > 0
                                    ? this.props.search.album.tracks.data.map((song) => (
                                          <Song songs={this.props.search.album.tracks.data} albumImage={this.props.search.album.cover} track={song} key={song.id} />
                                      ))
                                    : "Is Loading..."}
                            </div>
                        </Row>
                    </div>
                </Row>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Album);
