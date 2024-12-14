import React, { useContext, useMemo } from "react";
import { PageNumberContext, StylesContext } from "../common.contexts";
import projectListModel from "../models/projectList.model";
import "./common.styles.css";
import { styleReturns } from "../common.type";

function ProjectsList() {
    const pageNumber = useContext(PageNumberContext);
    const styles:styleReturns = useContext(StylesContext);
    const tableData = useMemo(() => projectListModel.get(pageNumber), [pageNumber]);

    return (
        <div className="project-list-container" style={{ backgroundColor: styles.backgroundColor, color: styles.color }}>
            <table className="project-list-table">
                <tbody>
                    <tr key="table-head" className="project-list-table-head">
                        <th key="table-head-slno" style={{ backgroundColor: styles.tableHeaderColor }}>S.No.</th>
                        <th key="table-head-funded" style={{ backgroundColor: styles.tableHeaderColor }}>Percentage Funded</th>
                        <th key="table-head-pledged" style={{ backgroundColor: styles.tableHeaderColor }}>Amount Pledged</th> 
                    </tr>
                    {
                        tableData.map((tableItem) => {
                            const { slNo, percentageFunded, amountPledged } = tableItem;
                            return (
                                <tr key={`table-body-${slNo}`} style={{ backgroundColor: styles.tableRowHoverColor, }}>
                                    <td data-testid={`table-body-${slNo}-slNo`} key={`table-body-${slNo}-slNo`}>{slNo}</td>
                                    <td data-testid={`table-body-${slNo}-funded`} key={`table-body-${slNo}-funded`}>{percentageFunded}</td>
                                    <td data-testid={`table-body-${slNo}-pledged`} key={`table-body-${slNo}-pledged`}>{amountPledged}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ProjectsList;