import { styleReturns, theme } from "../common.type";

function commonStyles(theme:theme):styleReturns {
    const lightMode:styleReturns = {
        backgroundColor: "#FFFFFF",
        color: "#1A1A1A",
        tableHeaderColor: "#007bff",
        tableRowHoverColor: "#f1f1f1",
        paginationBtnColor: "#007bff",
        paginationBtnHoverColor: "#0056b3",
        pageNumberColor: "#007bff",
        headingColor: "#333333",
    };

    const darkMode:styleReturns = {
        backgroundColor: "#121212",
        color: "#E0E0E0",
        tableHeaderColor: "#3700b3",
        tableRowHoverColor: "#444",
        paginationBtnColor: "#bb86fc",
        paginationBtnHoverColor: "#3700b3",
        pageNumberColor: "#bb86fc",
        headingColor: "#E0E0E0",
    };
      
    return theme === "dark" ? darkMode : lightMode;  
}

export default commonStyles;