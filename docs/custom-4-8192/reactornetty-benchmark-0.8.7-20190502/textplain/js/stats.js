var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "50807563",
        "ok": "50807193",
        "ko": "370"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "10001"
    },
    "maxResponseTime": {
        "total": "60257",
        "ok": "1413",
        "ko": "60257"
    },
    "meanResponseTime": {
        "total": "60",
        "ok": "59",
        "ko": "27501"
    },
    "standardDeviation": {
        "total": "107",
        "ok": "42",
        "ko": "23841"
    },
    "percentiles1": {
        "total": "56",
        "ok": "56",
        "ko": "10089"
    },
    "percentiles2": {
        "total": "87",
        "ok": "87",
        "ko": "60036"
    },
    "percentiles3": {
        "total": "131",
        "ok": "131",
        "ko": "60172"
    },
    "percentiles4": {
        "total": "174",
        "ok": "174",
        "ko": "60237"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 50807192,
        "percentage": 100
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 1,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 370,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "42339.636",
        "ok": "42339.327",
        "ko": "0.308"
    }
},
contents: {
"req_plain-text-10504": {
        type: "REQUEST",
        name: "plain_text",
path: "plain_text",
pathFormatted: "req_plain-text-10504",
stats: {
    "name": "plain_text",
    "numberOfRequests": {
        "total": "50807563",
        "ok": "50807193",
        "ko": "370"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "10001"
    },
    "maxResponseTime": {
        "total": "60257",
        "ok": "1413",
        "ko": "60257"
    },
    "meanResponseTime": {
        "total": "60",
        "ok": "59",
        "ko": "27501"
    },
    "standardDeviation": {
        "total": "107",
        "ok": "42",
        "ko": "23841"
    },
    "percentiles1": {
        "total": "56",
        "ok": "56",
        "ko": "10089"
    },
    "percentiles2": {
        "total": "87",
        "ok": "87",
        "ko": "60036"
    },
    "percentiles3": {
        "total": "131",
        "ok": "131",
        "ko": "60172"
    },
    "percentiles4": {
        "total": "174",
        "ok": "174",
        "ko": "60237"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 50807192,
        "percentage": 100
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 1,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 370,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "42339.636",
        "ok": "42339.327",
        "ko": "0.308"
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
