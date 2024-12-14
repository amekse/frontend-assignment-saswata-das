import { tableItem } from "../common.type"

const apiDataC1T1 = [
    {
        "s.no": 0,
        "amt.pledged": 15823,
        "blurb": "'Catalysts, Explorers & Secret Keepers: Women of Science Fiction' is a take-home exhibit & anthology by the Museum of Science Fiction.",
        "by": "Museum of Science Fiction",
        "country": "US",
        "currency": "usd",
        "end.time": "2016-11-01T23:59:00-04:00",
        "location": "Washington, DC",
        "percentage.funded": 186,
        "num.backers": "219382",
        "state": "DC",
        "title": "Catalysts, Explorers & Secret Keepers: Women of SF",
        "type": "Town",
        "url": "/projects/1608905146/catalysts-explorers-and-secret-keepers-women-of-sf?ref=discovery"
    },
    {
        "s.no": 1,
        "amt.pledged": 6859,
        "blurb": "A unique handmade picture book for kids & art lovers about a nervous monster who finds his courage with the help of a brave little girl",
        "by": "Tyrone Wells & Broken Eagle, LLC",
        "country": "US",
        "currency": "usd",
        "end.time": "2016-11-25T01:13:33-05:00",
        "location": "Portland, OR",
        "percentage.funded": 8,
        "num.backers": "154926",
        "state": "OR",
        "title": "The Whatamagump (a hand-crafted story picture book)",
        "type": "Town",
        "url": "/projects/thewhatamagump/the-whatamagump-a-hand-crafted-story-picture-book?ref=discovery"
    },
    {
        "s.no": 2,
        "amt.pledged": 17906,
        "blurb": "A horror comedy about a repairman who was in the wrong place at the wrong time thanks to mad scientists and monsters.",
        "by": "Tessa Stone",
        "country": "US",
        "currency": "usd",
        "end.time": "2016-11-23T23:00:00-05:00",
        "location": "Los Angeles, CA",
        "percentage.funded": 102,
        "num.backers": "105857",
        "state": "CA",
        "title": "Not Drunk Enough Volume 1!",
        "type": "Town",
        "url": "/projects/1890925998/not-drunk-enough-volume-1?ref=discovery"
    }
]

const expectedOutputC1T1:tableItem[] = [
    {
        slNo: 0,
        percentageFunded: 186,
        amountPledged: 15823
    },
    {
        slNo: 1,
        percentageFunded: 8,
        amountPledged: 6859
    },
    {
        slNo: 2,
        percentageFunded: 102,
        amountPledged: 17906
    }
]

const apiDataC1T3 = [
    {
        "s.no": 0,
        "blurb": "'Catalysts, Explorers & Secret Keepers: Women of Science Fiction' is a take-home exhibit & anthology by the Museum of Science Fiction.",
        "by": "Museum of Science Fiction",
        "country": "US",
        "currency": "usd",
        "end.time": "2016-11-01T23:59:00-04:00",
        "location": "Washington, DC",
        "percentage.funded": 186,
        "num.backers": "219382",
        "state": "DC",
        "title": "Catalysts, Explorers & Secret Keepers: Women of SF",
        "type": "Town",
        "url": "/projects/1608905146/catalysts-explorers-and-secret-keepers-women-of-sf?ref=discovery"
    },
    {
        "s.no": 1,
        "amt.pledged": "",
        "blurb": "A unique handmade picture book for kids & art lovers about a nervous monster who finds his courage with the help of a brave little girl",
        "by": "Tyrone Wells & Broken Eagle, LLC",
        "country": "US",
        "currency": "usd",
        "end.time": "2016-11-25T01:13:33-05:00",
        "location": "Portland, OR",
        "percentage.funded": 8,
        "num.backers": "154926",
        "state": "OR",
        "title": "The Whatamagump (a hand-crafted story picture book)",
        "type": "Town",
        "url": "/projects/thewhatamagump/the-whatamagump-a-hand-crafted-story-picture-book?ref=discovery"
    },
    {
        "s.no": 2,
        "amt.pledged": 17906,
        "blurb": "A horror comedy about a repairman who was in the wrong place at the wrong time thanks to mad scientists and monsters.",
        "by": "Tessa Stone",
        "country": "US",
        "currency": "usd",
        "end.time": "2016-11-23T23:00:00-05:00",
        "location": "Los Angeles, CA",
        "percentage.funded": null,
        "num.backers": "105857",
        "state": "CA",
        "title": "Not Drunk Enough Volume 1!",
        "type": "Town",
        "url": "/projects/1890925998/not-drunk-enough-volume-1?ref=discovery"
    }
]

export {
    apiDataC1T1,
    expectedOutputC1T1,
    apiDataC1T3
}