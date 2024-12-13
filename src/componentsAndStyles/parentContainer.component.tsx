import React, { lazy, Suspense, useMemo, useState } from "react";
import { stylesObject, theme } from "../common.type";
import commonStyles from "./common.style";
import { PageNumberContext, StylesContext } from "../common.contexts";
import { Accessibility, Loader, Pagination } from "./helpers.component";
import projectListModel from "../models/projectList.model";
import { fetchData } from "../utilsAndServices/api.service";
const ProjectsListLazy = lazy(() => import("./projectsList.component"));

function ParentContainer() {
    const [currentTheme, setCurrentTheme] = useState<theme>("light");
    const stylesList:stylesObject = useMemo(() => commonStyles(currentTheme), [currentTheme]);
    const [pageNumber, setPageNumber] = useState<number>(0);

    function ProjectionsListLazyDataFetch() {
        if (!projectListModel.holdsValidData()) {
            throw fetchData;
        }
        return <ProjectsListLazy />;
    }

    return (
        <StylesContext.Provider value={stylesList}>
            <div>
                <PageNumberContext.Provider value={pageNumber}>
                    <Suspense fallback={<Loader />}>
                        <ProjectionsListLazyDataFetch />
                    </Suspense>
                </PageNumberContext.Provider>
                <div>
                    <Pagination pageNumber={pageNumber} setPageNumber={setPageNumber} />
                    <Accessibility currentTheme={currentTheme} setCurrentTheme={setCurrentTheme} />
                </div>
            </div>
        </StylesContext.Provider>
    )
}

export default ParentContainer;