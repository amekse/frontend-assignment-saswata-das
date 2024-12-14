import React, { lazy, Suspense, useMemo, useState } from "react";
import { styleReturns, theme } from "../common.type";
import commonStyles from "./common.style";
import { PageNumberContext, StylesContext } from "../common.contexts";
import Loader from "./loader.component";
import projectListModel from "../models/projectList.model";
import { fetchData } from "../utilsAndServices/api.service";
import "./common.styles.css";
import Pagination from "./pagination.component";
import Accessibility from "./accessibility.component";
const ProjectsListLazy = lazy(() => import("./projectsList.component"));

function ParentContainer() {
    const [currentTheme, setCurrentTheme] = useState<theme>("light");
    const stylesList:styleReturns = useMemo(() => commonStyles(currentTheme), [currentTheme]);
    const [pageNumber, setPageNumber] = useState<number>(1);

    function ProjectionsListLazyDataFetch() {
        if (!projectListModel.holdsValidData()) {
            throw fetchData();
        }
        return <ProjectsListLazy />;
    }

    return (
        <StylesContext.Provider value={stylesList}>
            <div className="parent-container" style={{ backgroundColor: stylesList.backgroundColor }} data-testid="parent-page">
                <div className="parent-container-header">
                    <span className="parent-container-header-text" style={{ color: stylesList.headingColor }}>SAASLab Interview Assignment</span>
                    <span className="parent-container-header-text" style={{ color: stylesList.headingColor }}>Saswata Das</span>
                </div>
                <PageNumberContext.Provider value={pageNumber}>
                    <Suspense fallback={<Loader />}>
                        <ProjectionsListLazyDataFetch />
                    </Suspense>
                </PageNumberContext.Provider>
                <div className="parent-action-bar">
                    <>
                        <Accessibility currentTheme={currentTheme} setCurrentTheme={setCurrentTheme} />
                    </>
                    <Pagination pageNumber={pageNumber} setPageNumber={setPageNumber} />
                </div>
            </div>
        </StylesContext.Provider>
    )
}

export default ParentContainer;