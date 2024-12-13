import React, { useContext, useState } from "react";
import { paginationProps, styleReturns } from "../common.type";
import { debounce } from "../utilsAndServices/common.utils";
import projectListModel from "../models/projectList.model";
import "./common.styles.css";
import { StylesContext } from "../common.contexts";

function Pagination(props:paginationProps) {
    const { pageNumber, setPageNumber } = props;
    const styles:styleReturns = useContext(StylesContext);
    const [pageEnd, setPageEnd] = useState(false);

    const pageChangeDebounce = debounce((event: React.MouseEvent<HTMLDivElement>) => {
        const actionId = (event.target as HTMLElement).getAttribute("action-id") as "increase"|"decrease";
        if (projectListModel.isPageAccessible(pageNumber, actionId)) {
            switch(actionId) {
                case "increase": setPageNumber(pageNumber+1); break;
                case "decrease": setPageNumber(pageNumber-1); break;
            }
            if (!projectListModel.isPageAccessible(pageNumber+1, actionId)) {
                setPageEnd(true);
            } else if(pageEnd) {
                setPageEnd(false);
            }
        }
    });

    const handlePageChange = (event: React.MouseEvent<HTMLDivElement>) => {
        if ((event.target as HTMLElement).getAttribute("action-id")) {
            pageChangeDebounce(event);
        }
    }

    return (
        <div onClick={handlePageChange}>
            <button action-id="decrease" className="pagination-button" style={{ backgroundColor: styles.paginationBtnColor }} disabled={pageNumber === 1}>&#x23F4;</button>
            <span className="pagination-text" style={{ color: styles.color }}>{pageNumber}</span>
            <button action-id="increase" className="pagination-button" style={{ backgroundColor: styles.paginationBtnColor }} disabled={pageEnd}>&#x23F5;</button>
        </div>
    )
}

export default Pagination;