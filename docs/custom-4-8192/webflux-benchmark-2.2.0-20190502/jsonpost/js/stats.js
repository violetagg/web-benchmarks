var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "49035",
        "ok": "0",
        "ko": "49035"
    },
    "minResponseTime": {
        "total": "10000",
        "ok": "-",
        "ko": "10000"
    },
    "maxResponseTime": {
        "total": "60075",
        "ok": "-",
        "ko": "60075"
    },
    "meanResponseTime": {
        "total": "59984",
        "ok": "-",
        "ko": "59984"
    },
    "standardDeviation": {
        "total": "931",
        "ok": "-",
        "ko": "931"
    },
    "percentiles1": {
        "total": "60001",
        "ok": "-",
        "ko": "60001"
    },
    "percentiles2": {
        "total": "60002",
        "ok": "-",
        "ko": "60002"
    },
    "percentiles3": {
        "total": "60003",
        "ok": "-",
        "ko": "60003"
    },
    "percentiles4": {
        "total": "60009",
        "ok": "-",
        "ko": "60009"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 0,
        "percentage": 0
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
        "count": 49035,
        "percentage": 100
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "40.862",
        "ok": "-",
        "ko": "40.862"
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
        "total": "49035",
        "ok": "0",
        "ko": "49035"
    },
    "minResponseTime": {
        "total": "10000",
        "ok": "-",
        "ko": "10000"
    },
    "maxResponseTime": {
        "total": "60075",
        "ok": "-",
        "ko": "60075"
    },
    "meanResponseTime": {
        "total": "59984",
        "ok": "-",
        "ko": "59984"
    },
    "standardDeviation": {
        "total": "931",
        "ok": "-",
        "ko": "931"
    },
    "percentiles1": {
        "total": "60001",
        "ok": "-",
        "ko": "60001"
    },
    "percentiles2": {
        "total": "60002",
        "ok": "-",
        "ko": "60002"
    },
    "percentiles3": {
        "total": "60003",
        "ok": "-",
        "ko": "60003"
    },
    "percentiles4": {
        "total": "60009",
        "ok": "-",
        "ko": "60009"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 0,
        "percentage": 0
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
        "count": 49035,
        "percentage": 100
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "40.862",
        "ok": "-",
        "ko": "40.862"
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
