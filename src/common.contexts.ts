import { createContext } from "react";
import { stylesObject, tableItem } from "./common.type";

const StylesContext = createContext<stylesObject>({});

const ProjectsDataContext = createContext<tableItem[]>([]);

export {
    StylesContext,
    ProjectsDataContext
}
