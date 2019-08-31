import React, { Component } from "react";
import img from "../assests/smtt.png";

export default class ImageComponent extends Component {
  state = { isOpen: false };

  handleShowDialog = () => {
    this.setState({ isOpen: !this.state.isOpen });
    console.log("cliked");
  };

  render() {
    return (
      <div>
        <div class="position-relative">
          {/* <button
            type="button"
            className="btn btn-secondary btn-sm position-absolute"
            
          >
            Read More
          </button> */}
          <img
            src={img}
            class="img-fluid"
            id="img"
            alt="Responsive"
            data-toggle="modal"
            data-target="#myModal"
          />
        </div>

        <div className="modal fade" id="myModal" role="dialog">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">
                  &times;
                </button>
                <h4 className="modal-title">Sắc màu tuổi thơ</h4>
              </div>
              <div className="modal-body">
                <img
                  src={img}
                  class="img-fluid"
                  alt="Responsive"
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
