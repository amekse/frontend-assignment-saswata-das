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
                    <tr key="table-head" className="project-list-table-head" style={{ backgroundColor: styles.tableHeaderColor }}>
                        <th key="table-head-slno">S.No.</th>
                        <th key="table-head-funded">Percatage Funded</th>
                        <th key="table-head-pledged">Amount Pledged</th>
                    </tr>
                    {
                        tableData.map((tableItem) => {
                            const { slNo, percentageFunded, amountPledged } = tableItem;
                            return (
                                <tr key={`table-body-${slNo}`} style={{ backgroundColor: styles.tableRowHoverColor, }}>
                                    <td key={`table-body-${slNo}-slNo`}>{slNo}</td>
                                    <td key={`table-body-${slNo}-funded`}>{percentageFunded}</td>
                                    <td key={`table-body-${slNo}-pledged`}>{amountPledged}</td>
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