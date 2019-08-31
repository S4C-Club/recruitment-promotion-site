import React, { Component } from "react";
import img from "../assests/TIESTO1.OFF.jpg";

export default class Modal2 extends Component {
  render() {
    return (
      <div>
        <div class="position-relative">
          <img
            src={img}
            class="img-fluid"
            id="img"
            alt="Responsive"
            data-toggle="modal"
            data-target="#myModal2"
          />
        </div>

        <div className="modal fade" id="myModal2" role="dialog">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">
                  &times;
                </button>
                <h4 className="modal-title">emBee Festival</h4>
              </div>
              <div className="modal-body">
                <img
                  src={img}
                  class="img-fluid"
                  alt="res"
                />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-default"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
