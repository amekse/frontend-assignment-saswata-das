import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import projectListModel from "../models/projectList.model";
import { correctApiData } from "./dataForTest.constants";
import ParentContainer from '../componentsAndStyles/parentContainer.component';
import ProjectsList from '../componentsAndStyles/projectsList.component';
import { PageNumberContext, StylesContext } from '../common.contexts';
import commonStyles from '../componentsAndStyles/common.style';

describe('parent screen initiation and user actions coverage', () => {
    afterAll(() => {
        projectListModel.clearAll();
    })
    
    projectListModel.set(correctApiData);

    test('table data visible', () => {
        render(
            <StylesContext.Provider value={commonStyles("light")}>
                <PageNumberContext.Provider value={1}>
                    <ProjectsList />
                </PageNumberContext.Provider>
            </StylesContext.Provider>
        );

        const tableBody0SlNo = screen.getByTestId('table-body-0-slNo');
        const tableBody0Funded = screen.getByTestId('table-body-0-funded');
        const tableBody0Pledged = screen.getByTestId('table-body-0-pledged');

        expect(tableBody0SlNo.textContent).toEqual("0");
        expect(tableBody0Funded.textContent).toEqual("186");
        expect(tableBody0Pledged.textContent).toEqual("15823");
    })

    test('table data page 2 and dark theme visible', () => {
        render(
            <StylesContext.Provider value={commonStyles("dark")}>
                <PageNumberContext.Provider value={2}>
                    <ProjectsList />
                </PageNumberContext.Provider>
            </StylesContext.Provider>
        );

        const tableBody5SlNo = screen.getByTestId('table-body-5-slNo');
        const tableBody5Funded = screen.getByTestId('table-body-5-funded');
        const tableBody5Pledged = screen.getByTestId('table-body-5-pledged');

        expect(tableBody5SlNo.textContent).toEqual("5");
        expect(tableBody5Funded.textContent).toEqual("114");
        expect(tableBody5Pledged.textContent).toEqual("2065");
    })
})