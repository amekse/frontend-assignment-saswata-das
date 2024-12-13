type theme = "light" | "dark";

type tableItem = {
    slNo: number,
    percentageFunded: number,
    amountPledged: number
}

type styleItem = {
    [key:string]: string
}

type stylesObject = {
    [key:string]: styleItem
}

type paginationProps = {
    setPageNumber: (value:number) => void,
    pageNumber: number
}

type accessibilityProps = {
    currentTheme: theme,
    setCurrentTheme: (value:theme) => void
}

export type {
    theme,
    tableItem,
    styleItem,
    stylesObject,
    paginationProps,
    accessibilityProps
}