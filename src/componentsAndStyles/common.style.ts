import { styleReturns, theme } from "../common.type";

function commonStyles(theme:theme):styleReturns {
    const lightMode:styleReturns = {
        backgroundColor: "#FFFFFF",
        color: "#1A1A1A",
        tableHeaderColor: "#95B8D1",
        tableRowHoverColor: "#f1f1f1",
        paginationBtnColor: "#95B8D1",
        paginationBtnHoverColor: "#0056b3",
        pageNumberColor: "#95B8D1",
        headingColor: "#333333",
    };

    const darkMode:styleReturns = {
        backgroundColor: "#121212",
        color: "#E0E0E0",
        tableHeaderColor: "#809BCE",
        tableRowHoverColor: "#444",
        paginationBtnColor: "#809BCE",
        paginationBtnHoverColor: "#3700b3",
        pageNumberColor: "#809BCE",
        headingColor: "#E0E0E0",
    };
      
    return theme === "dark" ? darkMode : lightMode;  
}

export default commonStyles;