import { tableItem } from "../common.type";

class ProjectListModel {
    #defaultList:tableItem[] = [];
    #lastUpdate:number = Date.now();
    static #instance:ProjectListModel;
    
    constructor() {
        if (ProjectListModel.#instance) {
            return ProjectListModel.#instance
        } else {
            ProjectListModel.#instance = this;
        }
    }

    set(tableItem: tableItem[]) {
        this.#defaultList = tableItem;
    }

    get(pageNumber:number) {
        return this.#defaultList;
    }

    holdsValidData() {
        return ((Date.now() - this.#lastUpdate) > 86400 || this.#defaultList.length === 0)
    }
}

const projectListModel = new ProjectListModel();
export default projectListModel;