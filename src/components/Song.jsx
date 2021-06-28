import React, { useEffect, useState } from "react";
import { MdFavorite } from "react-icons/md";
import { add_Favorite, remove_Favorite } from "../actions/favorites";
import { connect, useSelector, useDispatch } from "react-redux";
import { add_Queue, current_Song, add_Queue_Image } from "../actions/queue";

/* const mapDispatchToProps = (dispatch) => ({
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
}); */

const Song = (props) => {
    const { albumImage, songs, track } = { ...props };
    const [selected, setSelected] = useState(false);

    const state = useSelector((state) => state);
    const dispatch = useDispatch();

    const handleFavorite = (Track) => {
        if (!selected) {
            dispatch(add_Favorite(Track));
            setSelected(true);
        } else {
            dispatch(remove_Favorite(Track));
            setSelected(false);
        }
    };

    const handleQueue = (albumImage, songs, currentSongId) => {
        dispatch(add_Queue_Image(albumImage));
        dispatch(add_Queue(songs));
        let index = songs.findIndex((x) => x.id === currentSongId);
        dispatch(current_Song(index));
    };

    return (
        <div className="py-3 this.trackHover">
            <MdFavorite className="cursor" onClick={() => handleFavorite(track)} style={{ color: selected ? "red" : "white" }} />
            <span className="card-title this.trackHover px-3" onClick={() => handleQueue(albumImage, songs, track.id)} style={{ color: "white", cursor: "pointer" }}>
                {track.title}
            </span>
            <small className="duration" style={{ color: "white" }}>
                {Math.floor(parseInt(track.duration) / 60)}:{parseInt(track.duration) % 60 < 10 ? "0" + (parseInt(track.duration) % 60) : parseInt(track.duration) % 60}
            </small>
        </div>
    );
};

export default Song;
