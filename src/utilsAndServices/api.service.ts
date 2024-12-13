import projectListModel from "../models/projectList.model";

const API_URL = "https://raw.githubusercontent.com/saaslabsco/frontend-assignment/refs/heads/master/frontend-assignment.json";

async function fetchData() {
    try {
        const res = await fetch(API_URL);
        if (res.ok) {
            projectListModel.set(await res.json());
        } else {
            console.log(`Check issue: ${res.status}`);
        }
    } catch (error) {
        console.log(error);
    }
}

export {
    fetchData
}