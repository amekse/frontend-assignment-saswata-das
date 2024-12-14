import projectListModel from "../models/projectList.model"
import { correctApiData, correctProjectsModelExpectedTableData, badApiData } from "./dataForTest.constants"

describe('projection list data model coverage', () => {
    beforeEach(() => {
        projectListModel.clearAll();
    })

    afterAll(() => {
        projectListModel.clearAll();
    })

    test('check proper api data to ui data', () => {
        projectListModel.set(correctApiData);
        const actual = projectListModel.get(1); 
        expect(actual).toEqual(correctProjectsModelExpectedTableData);
    })

    test('check wrong page number for proper api data to ui data', () => {
        projectListModel.set(correctApiData);
        const actualT1 = projectListModel.get(0);
        const actualT2 = projectListModel.get(4);
        expect(actualT1).toEqual([]);
        expect(actualT2).toEqual([]);
    })

    test('check bad api data tp ui data', () => {
        projectListModel.set(badApiData);
        const actual = projectListModel.get(1);
        expect(actual).toEqual([]);
    })

    test('check empty api data to ui data', () => {
        projectListModel.set([]);
        const actual = projectListModel.get(1);
        expect(actual).toEqual([]);
    })
})