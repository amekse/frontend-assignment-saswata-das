import { createContext } from "react";
import { styleReturns, tableItem } from "./common.type";
import commonStyles from "./componentsAndStyles/common.style";

const StylesContext = createContext<styleReturns>(commonStyles("light"));

const PageNumberContext = createContext<number>(0);

export {
    StylesContext,
    PageNumberContext
}
