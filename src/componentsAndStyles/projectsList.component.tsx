import React, { useContext, useMemo } from "react";
import { PageNumberContext, StylesContext } from "../common.contexts";
import projectListModel from "../models/projectList.model";

function ProjectsList() {
    const pageNumber = useContext(PageNumberContext);
    const styles = useContext(StylesContext);
    const tableData = projectListModel.get(pageNumber);

    return (
        <div>
            <table>
                <tr>
                    <th>S.No.</th>
                    <th>Percatage Funded</th>
                    <th>Amount Pledged</th>
                </tr>
                {
                    tableData.map((tableItem) => {
                        const { slNo, percentageFunded, amountPledged } = tableItem;
                        return (
                            <tr>
                                <td>{slNo}</td>
                                <td>{percentageFunded}</td>
                                <td>{amountPledged}</td>
                            </tr>
                        )
                    })
                }
            </table>
        </div>
    )
}

export default ProjectsList;