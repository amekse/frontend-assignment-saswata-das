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
        rawData.forEach(data => {
            let checksArray = [];

            if(data.hasOwnProperty("s.no") && typeof data["s.no"] === "number") {
                checksArray.push(true);
            }

            if(data.hasOwnProperty("amt.pledged") && typeof data["amt.pledged"] === "number") {
                checksArray.push(true);
            }

            if(data.hasOwnProperty("percentage.funded") && typeof data["percentage.funded"] === "number") {
                checksArray.push(true);
            }

            if(!checksArray.includes(false) && checksArray.length === 3) {
                this.#rawData.push(data);
            }
        })
    }

    get(pageNumber:number):tableItem[] {
        const showableList:tableItem[] = []
        if (pageNumber > 0) {
            const lastRead = (pageNumber*5)-5;
            const readTill = (pageNumber*5 > this.#rawData.length) ? this.#rawData.length : pageNumber*5;
            for (let i=lastRead; i < readTill; i++) {
                const data = this.#rawData[i];
                showableList.push({
                    slNo: data["s.no"],
                    amountPledged: data["amt.pledged"],
                    percentageFunded: data["percentage.funded"]
                });
            }
        }
        return showableList;
    }

    isPageAccessible(currentPageNumber:number, actionType:"increase"|"decrease"):boolean {
        switch(actionType) {
            case "increase": return !(currentPageNumber*5 >= this.#rawData.length);
            case "decrease": return currentPageNumber > 1;
        }
    }

    holdsValidData() {
        return ((Date.now() - this.#lastUpdate) < 86400 && this.#rawData.length !== 0)
    }

    clearAll() {
        this.#lastUpdate = 0;
        this.#rawData = [];
    }
}

const projectListModel = new ProjectListModel();
export default projectListModel;