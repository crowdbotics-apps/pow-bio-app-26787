import React from "react";
import { CubeDiv } from "./styles";

const Cube = ({ size=50, borderRadius=20, ...props  }) => {
    return <CubeDiv size={size} borderRadius={borderRadius} {...props}></CubeDiv>
};

export default Cube;
