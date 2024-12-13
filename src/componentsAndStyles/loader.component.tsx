import React, { useContext } from "react";
import "./common.styles.css";
import { StylesContext } from "../common.contexts";
import { styleReturns } from "../common.type";

function Loader() {
    const styles:styleReturns = useContext(StylesContext);
    return (
        <div className="loader" style={{ border: `8px solid ${styles.backgroundColor}`, borderTop: `8px solid ${styles.paginationBtnColor}` }} />
    )
}

export default Loader;