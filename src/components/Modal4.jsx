import React, { Component } from 'react'

export default class Modal4 extends Component {
    render() {

        return (
        <div>
            <div class = "position-relative">
                <button type="button" className="btn btn-secondary btn-sm position-absolute" data-toggle="modal" data-target="#myModal4">Read More</button> 
                 <img src = "/assests/aiesec.png.jpg" class="img-fluid" id="img" alt="Responsive image" />

             </div>
  
            <div className="modal fade" id="myModal4" role="dialog">
            <div className="modal-dialog">   
             <div className="modal-content">
             <div className="modal-header">
            <button type="button" className="close" data-dismiss="modal">&times;</button>
             <h4 className="modal-title">Nổi bật cần chiến thuật</h4>
        </div>
        <div className="modal-body">
          <img src="/assests/aiesec.png.jpg" class="img-fluid" alt="Responsive image"/>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
        </div>
      </div>
      
    </div>
  </div>
            </div>
        )
    }
}
