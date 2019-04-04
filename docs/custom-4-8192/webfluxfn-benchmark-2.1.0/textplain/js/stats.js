var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "43231364",
        "ok": "43230696",
        "ko": "668"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "10000"
    },
    "maxResponseTime": {
        "total": "60226",
        "ok": "647",
        "ko": "60226"
    },
    "meanResponseTime": {
        "total": "70",
        "ok": "70",
        "ko": "19705"
    },
    "standardDeviation": {
        "total": "119",
        "ok": "48",
        "ko": "19752"
    },
    "percentiles1": {
        "total": "63",
        "ok": "63",
        "ko": "10045"
    },
    "percentiles2": {
        "total": "99",
        "ok": "99",
        "ko": "10099"
    },
    "percentiles3": {
        "total": "155",
        "ok": "155",
        "ko": "60107"
    },
    "percentiles4": {
        "total": "215",
        "ok": "215",
        "ko": "60172"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 43230696,
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
        "count": 668,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "35996.14",
        "ok": "35995.584",
        "ko": "0.556"
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
        "total": "43231364",
        "ok": "43230696",
        "ko": "668"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "10000"
    },
    "maxResponseTime": {
        "total": "60226",
        "ok": "647",
        "ko": "60226"
    },
    "meanResponseTime": {
        "total": "70",
        "ok": "70",
        "ko": "19705"
    },
    "standardDeviation": {
        "total": "119",
        "ok": "48",
        "ko": "19752"
    },
    "percentiles1": {
        "total": "63",
        "ok": "63",
        "ko": "10045"
    },
    "percentiles2": {
        "total": "99",
        "ok": "99",
        "ko": "10099"
    },
    "percentiles3": {
        "total": "155",
        "ok": "155",
        "ko": "60107"
    },
    "percentiles4": {
        "total": "215",
        "ok": "215",
        "ko": "60172"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 43230696,
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
        "count": 668,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "35996.14",
        "ok": "35995.584",
        "ko": "0.556"
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
