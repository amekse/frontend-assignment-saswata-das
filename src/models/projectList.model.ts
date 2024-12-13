import { rawData, tableItem } from "../common.type";

class ProjectListModel {
    #rawData:rawData[] = [];
    #lastUpdate:number = Date.now();
    static #instance:ProjectListModel;
    
    constructor() {
        if (ProjectListModel.#instance) {
            return ProjectListModel.#instance
        } else {
            ProjectListModel.#instance = this;
        }
    }

    set(rawData:rawData[]) {
        this.#rawData = rawData;
    }

    get(pageNumber:number):tableItem[] {
        const showableList:tableItem[] = []
        if (pageNumber > 0) {
            const lastRead = (pageNumber*5)-5;
            const readTill = (pageNumber*5 > this.#rawData.length) ? this.#rawData.length : pageNumber*5;
            for (let i=lastRead; i < readTill; i++) {
                const data = this.#rawData[i];
                if (data.hasOwnProperty("s.no") && data.hasOwnProperty("amt.pledged") && data.hasOwnProperty("percentage.funded")) {
                    showableList.push({
                        slNo: data["s.no"],
                        amountPledged: data["amt.pledged"],
                        percentageFunded: data["percentage.funded"]
                    });
                }
            }
        }
        return showableList;
    }

    holdsValidData() {
        return ((Date.now() - this.#lastUpdate) < 86400 && this.#rawData.length !== 0)
    }
}

const projectListModel = new ProjectListModel();
export default projectListModel;