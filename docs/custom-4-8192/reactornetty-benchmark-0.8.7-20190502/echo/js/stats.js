var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "44535474",
        "ok": "44535108",
        "ko": "366"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "10001"
    },
    "maxResponseTime": {
        "total": "60378",
        "ok": "809",
        "ko": "60378"
    },
    "meanResponseTime": {
        "total": "68",
        "ok": "68",
        "ko": "27702"
    },
    "standardDeviation": {
        "total": "114",
        "ok": "46",
        "ko": "23902"
    },
    "percentiles1": {
        "total": "64",
        "ok": "65",
        "ko": "10096"
    },
    "percentiles2": {
        "total": "100",
        "ok": "100",
        "ko": "60054"
    },
    "percentiles3": {
        "total": "145",
        "ok": "146",
        "ko": "60179"
    },
    "percentiles4": {
        "total": "191",
        "ok": "191",
        "ko": "60263"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 44535107,
        "percentage": 100
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 1,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 366,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "37081.993",
        "ok": "37081.689",
        "ko": "0.305"
    }
},
contents: {
"req_echo-cbb11": {
        type: "REQUEST",
        name: "echo",
path: "echo",
pathFormatted: "req_echo-cbb11",
stats: {
    "name": "echo",
    "numberOfRequests": {
        "total": "44535474",
        "ok": "44535108",
        "ko": "366"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "10001"
    },
    "maxResponseTime": {
        "total": "60378",
        "ok": "809",
        "ko": "60378"
    },
    "meanResponseTime": {
        "total": "68",
        "ok": "68",
        "ko": "27702"
    },
    "standardDeviation": {
        "total": "114",
        "ok": "46",
        "ko": "23902"
    },
    "percentiles1": {
        "total": "64",
        "ok": "65",
        "ko": "10096"
    },
    "percentiles2": {
        "total": "100",
        "ok": "100",
        "ko": "60054"
    },
    "percentiles3": {
        "total": "145",
        "ok": "145",
        "ko": "60179"
    },
    "percentiles4": {
        "total": "191",
        "ok": "191",
        "ko": "60263"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 44535107,
        "percentage": 100
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 1,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 366,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "37081.993",
        "ok": "37081.689",
        "ko": "0.305"
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
