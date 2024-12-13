import React, { useContext } from "react";
import { ProjectsDataContext, StylesContext } from "../common.contexts";

function ProjectsList() {
    const tableData = useContext(ProjectsDataContext);
    const styles = useContext(StylesContext);

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