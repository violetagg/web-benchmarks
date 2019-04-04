var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "29922240",
        "ok": "29921564",
        "ko": "676"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "10000"
    },
    "maxResponseTime": {
        "total": "60161",
        "ok": "504",
        "ko": "60161"
    },
    "meanResponseTime": {
        "total": "101",
        "ok": "101",
        "ko": "19546"
    },
    "standardDeviation": {
        "total": "143",
        "ok": "57",
        "ko": "19651"
    },
    "percentiles1": {
        "total": "102",
        "ok": "102",
        "ko": "10002"
    },
    "percentiles2": {
        "total": "151",
        "ok": "151",
        "ko": "10009"
    },
    "percentiles3": {
        "total": "194",
        "ok": "194",
        "ko": "60010"
    },
    "percentiles4": {
        "total": "205",
        "ok": "205",
        "ko": "60046"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 29921564,
        "percentage": 100
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 676,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "24935.2",
        "ok": "24934.637",
        "ko": "0.563"
    }
},
contents: {
"req_jsonpost-8a187": {
        type: "REQUEST",
        name: "jsonPost",
path: "jsonPost",
pathFormatted: "req_jsonpost-8a187",
stats: {
    "name": "jsonPost",
    "numberOfRequests": {
        "total": "29922240",
        "ok": "29921564",
        "ko": "676"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "10000"
    },
    "maxResponseTime": {
        "total": "60161",
        "ok": "504",
        "ko": "60161"
    },
    "meanResponseTime": {
        "total": "101",
        "ok": "101",
        "ko": "19546"
    },
    "standardDeviation": {
        "total": "143",
        "ok": "57",
        "ko": "19651"
    },
    "percentiles1": {
        "total": "102",
        "ok": "102",
        "ko": "10002"
    },
    "percentiles2": {
        "total": "151",
        "ok": "151",
        "ko": "10009"
    },
    "percentiles3": {
        "total": "194",
        "ok": "194",
        "ko": "60010"
    },
    "percentiles4": {
        "total": "205",
        "ok": "205",
        "ko": "60046"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 29921564,
        "percentage": 100
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 676,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "24935.2",
        "ok": "24934.637",
        "ko": "0.563"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
