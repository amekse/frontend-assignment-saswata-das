type theme = "light" | "dark";

type tableItem = {
    slNo: number,
    percentageFunded: number,
    amountPledged: number
}

type paginationProps = {
    setPageNumber: (value:number) => void,
    pageNumber: number                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
}

type accessibilityProps = {
    currentTheme: theme,
    setCurrentTheme: (value:theme) => void                                                                                                                                                                  
}

type rawData = {[key:string]: any} 

type styleReturns = {
    backgroundColor: string;
    tableHeaderColor: string;
    tableRowHoverColor: string;
    paginationBtnColor: string;
    paginationBtnHoverColor: string;
    pageNumberColor: string;
    color: string;
    headingColor: string;
}

export type {
    theme,
    tableItem,                                                                                          
    styleReturns,
    paginationProps,
    accessibilityProps,
    rawData                                                                                                  
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               