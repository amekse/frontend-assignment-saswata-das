import { createContext } from "react";
import { stylesObject, tableItem } from "./common.type";

const StylesContext = createContext<stylesObject>({});

const PageNumberContext = createContext<number>(0);

export {
    StylesContext,
    PageNumberContext
}
