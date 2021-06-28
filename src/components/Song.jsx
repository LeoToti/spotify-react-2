import React from "react";
import { MdFavorite } from "react-icons/md";
import { add_Favorite, remove_Favorite } from "../actions/favorites";
import { connect } from "react-redux";
import { add_Queue, current_Song, add_Queue_Image } from "../actions/queue";

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
    add_Favorite: (data) => {
        dispatch(add_Favorite(data));
    },
    remove_Favorite: (data) => {
        dispatch(remove_Favorite(data));
    },
    add_Queue_Image: (data) => {
        dispatch(add_Queue_Image(data));
    },
    add_Queue: (data) => {
        dispatch(add_Queue(data));
    },
    current_Song: (data) => {
        dispatch(current_Song(data));
    }
});

class Song extends React.Component {
    state = {
        selected: false
    };

    handleFavorite(Track) {
        if (!this.state.selected) {
            this.props.add_Favorite(Track);
            this.setState({ selected: true });
        } else {
            this.props.remove_Favorite(Track);
            this.setState({ selected: false });
        }
    }

    handleQueue(albumImage, songs, currentSongId) {
        this.props.add_Queue_Image(albumImage);
        this.props.add_Queue(songs);
        let index = songs.findIndex((x) => x.id === currentSongId);
        this.props.current_Song(index);
    }

    render() {
        return (
            <div className="py-3 this.props.trackHover">
                <MdFavorite className="cursor" onClick={() => this.handleFavorite(this.props.track)} style={{ color: this.state.selected ? "red" : "white" }} />
                <span
                    className="card-title this.props.trackHover px-3"
                    onClick={() => this.handleQueue(this.props.albumImage, this.props.songs, this.props.track.id)}
                    style={{ color: "white", cursor: "pointer" }}
                >
                    {this.props.track.title}
                </span>
                <small className="duration" style={{ color: "white" }}>
                    {Math.floor(parseInt(this.props.track.duration) / 60)}:
                    {parseInt(this.props.track.duration) % 60 < 10 ? "0" + (parseInt(this.props.track.duration) % 60) : parseInt(this.props.track.duration) % 60}
                </small>
            </div>
        );
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Song);
