import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";

const Like = props => {
  if (!props.liked) {
    return (
      <FontAwesomeIcon
        onClick={props.onClick}
        style={{ cursor: "pointer" }}
        icon={faHeart}
      />
    );
  } else {
    return (
      <FontAwesomeIcon
        onClick={props.onClick}
        style={{ cursor: "pointer" }}
        icon={faHeartSolid}
      />
    );
  }
};

export default Like;

// class Like extends Component {
//   render() {
//     if (!this.props.liked) {
//       return (
//         <FontAwesomeIcon
//           onClick={this.props.onClick}
//           style={{ cursor: "pointer" }}
//           icon={faHeart}
//         />
//       );
//     } else {
//       return (
//         <FontAwesomeIcon
//           onClick={this.props.onClick}
//           style={{ cursor: "pointer" }}
//           icon={faHeartSolid}
//         />
//       );
//     }
//   }
// }

// export default Like;
