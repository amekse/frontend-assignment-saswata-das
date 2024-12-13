import React, { lazy, Suspense, useMemo, useState } from "react";
import { stylesObject, tableItem, theme } from "../common.type";
import commonStyles from "./common.style";
import { ProjectsDataContext, StylesContext } from "../common.contexts";
import { Accessibility, Loader, Pagination } from "./helpers.component";
const ProjectsListLazy = lazy(() => import("./projectsList.component"));

function ParentContainer() {
    const [currentTheme, setCurrentTheme] = useState<theme>("light");
    const stylesList:stylesObject = useMemo(() => commonStyles(currentTheme), [currentTheme]);
    const [pageNumber, setPageNumber] = useState<number>(0);
    const showableTableData:tableItem[] = useMemo(() => [], [pageNumber]);

    return (
        <StylesContext.Provider value={stylesList}>
            <div>
                <ProjectsDataContext.Provider value={showableTableData}>
                    <Suspense fallback={<Loader />}>
                        <ProjectsListLazy />
                    </Suspense>
                </ProjectsDataContext.Provider>
                <div>
                    <Pagination pageNumber={pageNumber} setPageNumber={setPageNumber} />
                    <Accessibility currentTheme={currentTheme} setCurrentTheme={setCurrentTheme} />
                </div>
            </div>
        </StylesContext.Provider>
    )
}

export default ParentContainer;