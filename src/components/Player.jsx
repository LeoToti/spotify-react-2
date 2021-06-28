import { Row } from "react-bootstrap";
import { connect } from "react-redux";
import React, { Component } from "react";
import { add_Queue, current_Song, add_Queue_Image, next_Song, prev_Song } from "../actions/queue";

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
    add_Queue_Image: (data) => {
        dispatch(add_Queue_Image(data));
    },
    add_Queue: (data) => {
        dispatch(add_Queue(data));
    },
    current_Song: (data) => {
        dispatch(current_Song(data));
    },
    next_Song: (data) => {
        dispatch(next_Song(data));
    },
    prev_Song: (data) => {
        dispatch(prev_Song(data));
    }
});

class Player extends Component {
    render() {
        return (
            <div className="container-fluid fixed-bottom bg-container pt-1">
                <Row>
                    <div className="col-lg-10 offset-lg-2 offset-md-2">
                        <Row>
                            <div className=" col-md-3 col-lg-3">
                                <div className="d-flex justify-content-start align-items-center no-wrap">
                                    <img src={this.props.queue.queueImage} height="60px" width="60px" alt="" />

                                    <div className="pl-2 songName">{this.props.queue.currentQueue.length > 0 ? this.props.queue.currentQueue[this.props.queue.currentSong].title : ""} </div>
                                </div>
                            </div>
                            <div className=" col-md-3 col-lg-3 offset-md-1 offset-lg-1 playerControls">
                                <Row>
                                    <a onClick={() => console.log("I am here")}>
                                        <img src="/playerbuttons/Shuffle.png" alt="shuffle" />
                                    </a>
                                    <a onClick={() => this.props.prev_Song(this.props.queue.currentSong)}>
                                        <img src="/playerbuttons/Previous.png" alt="shuffle" />
                                    </a>
                                    <a onClick={() => console.log("I am here")}>
                                        <img src="/playerbuttons/Play.png" alt="shuffle" />
                                    </a>
                                    <a onClick={() => this.props.next_Song(this.props.queue.currentSong)}>
                                        <img src="/playerbuttons/Next.png" alt="shuffle" />
                                    </a>
                                    <a onClick={() => console.log("I am here")}>
                                        <img src="/playerbuttons/Repeat.png" alt="shuffle" />
                                    </a>
                                </Row>
                            </div>
                        </Row>
                        <Row className="justify-content-center playBar ">
                            <div className="col-8 col-md-6">
                                <div id="progress">
                                    <div className="progress-bar" role="progressbar" aria-valuenow={0} aria-valuemin={0} aria-valuemax={100}></div>
                                </div>
                            </div>
                        </Row>
                    </div>
                </Row>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Player);
