import { tableItem } from "../common.type"

const correctApiData = [
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
    },
    {
        "s.no": 3,
        "amt.pledged": 67081,
        "blurb": "The Johnny Wander autobio omnibus you've all been asking for! Over 400 pages of comics and extras over the years!",
        "by": "Johnny Wander",
        "country": "US",
        "currency": "usd",
        "end.time": "2016-11-01T23:50:00-04:00",
        "location": "Brooklyn, NY",
        "percentage.funded": 191,
        "num.backers": "91585",
        "state": "NY",
        "title": "Our Cats Are More Famous Than Us: A Johnny Wander Omnibus",
        "type": "County",
        "url": "/projects/746734715/our-cats-are-more-famous-than-us-a-johnny-wander-o?ref=discovery"
    },
    {
        "s.no": 4,
        "amt.pledged": 32772,
        "blurb": "The vision for this project is the establishment of a women-owned craft brewery in Rwanda.",
        "by": "Beau's All Natural Brewing Company",
        "country": "RW",
        "currency": "cad",
        "end.time": "2016-11-18T23:05:48-05:00",
        "location": "Kigali, Rwanda",
        "percentage.funded": 34,
        "num.backers": "87142",
        "state": "Kigali Province",
        "title": "The Rwanda Craft Brewery Project",
        "type": "Town",
        "url": "/projects/beaus/the-rwanda-craft-brewery-project?ref=discovery"
    },
    {
        "s.no": 5,
        "amt.pledged": 2065,
        "blurb": "In Shiraz, traditional and modern family recipes tell a story of inherited love through delicious Persian comfort food",
        "by": "Shireen Rahimi",
        "country": "US",
        "currency": "usd",
        "end.time": "2016-11-28T00:00:00-05:00",
        "location": "Miami, FL",
        "percentage.funded": 114,
        "num.backers": "78471",
        "state": "FL",
        "title": "Shiraz the Cookbook",
        "type": "Town",
        "url": "/projects/844448164/shiraz-the-cookbook?ref=discovery"
    },
    {
        "s.no": 6,
        "amt.pledged": 577844,
        "blurb": "Polygons is the origami-like measuring spoon that lays flat and folds to 4 different sizes to fit your cooking and baking needs ",
        "by": "Polygons Design",
        "country": "US",
        "currency": "usd",
        "end.time": "2016-11-20T11:57:34-05:00",
        "location": "Wilmington, DE",
        "percentage.funded": 5778,
        "num.backers": "74405",
        "state": "DE",
        "title": "Polygons | The Flat 4-in-1 Measuring Spoon",
        "type": "Town",
        "url": "/projects/stillalive/polygons-the-flat-4-in-1-measuring-spoon?ref=discovery"
    }
]

const correctProjectsModelExpectedTableData:tableItem[] = [
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
    },
    {
        slNo: 3,
        percentageFunded: 191,
        amountPledged: 67081
    },
    {
        slNo: 4,
        percentageFunded: 34,
        amountPledged: 32772
    },
    // {
    //     slNo: 5,
    //     percentageFunded: 2065,
    //     amountPledged: 114
    // },
    // {
    //     slNo: 6,
    //     percentageFunded: 577844,
    //     amountPledged: 5778
    // }
]

const badApiData = [
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
    correctApiData,
    correctProjectsModelExpectedTableData,
    badApiData
}