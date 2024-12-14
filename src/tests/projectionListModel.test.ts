import projectListModel from "../models/projectList.model"
import { apiDataC1T1, apiDataC1T3, expectedOutputC1T1 } from "./dataForTest.constants"

describe('C1 projection list data model coverage', () => {
    beforeEach(() => {
        projectListModel.clearAll();
    })

    test('T1 check proper api data to ui data', () => {
        projectListModel.set(apiDataC1T1);
        const actual = projectListModel.get(1);
        expect(actual).toEqual(expectedOutputC1T1);
    })

    test('T2 check wrong page number for proper api data to ui data', () => {
        projectListModel.set(apiDataC1T1);
        const actualT1 = projectListModel.get(0);
        const actualT2 = projectListModel.get(4);
        expect(actualT1).toEqual([]);
        expect(actualT2).toEqual([]);
    })

    test('T3 check bad api data tp ui data', () => {
        projectListModel.set(apiDataC1T3);
        const actual = projectListModel.get(1);
        expect(actual).toEqual([]);
    })

    test('T4 check empty api data to ui data', () => {
        projectListModel.set([]);
        const actual = projectListModel.get(1);
        expect(actual).toEqual([]);
    })
})