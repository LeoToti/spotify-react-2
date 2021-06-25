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
                    <div className="col-lg-10 offset-lg-2">
                        <Row className="d-flex ">
                            <div className="d-flex justify-content-right">
                                <img src={this.props.queue.queueImage} height="50px" width="50px" alt="" />
                                <span style={{ color: "white" }}>{this.props.queue.currentQueue.length > 0 ? this.props.queue.currentQueue[this.props.queue.currentSong].title : ""} </span>
                            </div>
                            <div className="col-6 col-md-4 col-lg-2 offset-3 offset-md-4 offset-lg-5 playerControls mt-1">
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
                        <Row className="justify-content-center playBar py-3">
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
