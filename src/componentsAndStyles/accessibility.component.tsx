import React, { useContext } from "react";
import { accessibilityProps, styleReturns } from "../common.type";
import { StylesContext } from "../common.contexts";
import "./common.styles.css";

function Accessibility(props:accessibilityProps) {
    const { currentTheme, setCurrentTheme } = props;
    const styles:styleReturns = useContext(StylesContext);

    const handleThemeChange = () => {
        if (currentTheme === "light") {
            setCurrentTheme("dark");
        } else {
            setCurrentTheme("light");
        }
    }

    return (
        <>
            <button className="theme-button" style={{ backgroundColor: styles.paginationBtnColor }} onClick={handleThemeChange}>
                {
                    currentTheme === "light" ? <span>&#x25C9;</span> : <span>&#x25CB;</span>
                }
            </button>
        </>
    )
}

export default Accessibility;