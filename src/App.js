import forca0 from "./assets/forca0.png";
import forca1 from "./assets/forca1.png";
import forca2 from "./assets/forca2.png";
import forca3 from "./assets/forca3.png";
import forca4 from "./assets/forca4.png";
import forca5 from "./assets/forca5.png";
import forca6 from "./assets/forca6.png";
import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";
import React, { useState } from "react";

import Letters from "./Letters.js";

export default function App() {
    return (
        <div className="App">
            <div className="App-top">
                <div className="Forca-img"></div>
                <div className="Forca-word"></div>
            </div>
            <Letters />
        </div>
    );
}
