var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "35927008",
        "ok": "35926641",
        "ko": "367"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "10000"
    },
    "maxResponseTime": {
        "total": "60360",
        "ok": "900",
        "ko": "60360"
    },
    "meanResponseTime": {
        "total": "84",
        "ok": "84",
        "ko": "27665"
    },
    "standardDeviation": {
        "total": "129",
        "ok": "55",
        "ko": "23886"
    },
    "percentiles1": {
        "total": "81",
        "ok": "80",
        "ko": "10118"
    },
    "percentiles2": {
        "total": "126",
        "ok": "126",
        "ko": "60048"
    },
    "percentiles3": {
        "total": "174",
        "ok": "174",
        "ko": "60187"
    },
    "percentiles4": {
        "total": "223",
        "ok": "223",
        "ko": "60271"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 35926639,
        "percentage": 100
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 2,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 367,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "29939.173",
        "ok": "29938.868",
        "ko": "0.306"
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
        "total": "35927008",
        "ok": "35926641",
        "ko": "367"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "10000"
    },
    "maxResponseTime": {
        "total": "60360",
        "ok": "900",
        "ko": "60360"
    },
    "meanResponseTime": {
        "total": "84",
        "ok": "84",
        "ko": "27665"
    },
    "standardDeviation": {
        "total": "129",
        "ok": "55",
        "ko": "23886"
    },
    "percentiles1": {
        "total": "81",
        "ok": "80",
        "ko": "10118"
    },
    "percentiles2": {
        "total": "126",
        "ok": "126",
        "ko": "60048"
    },
    "percentiles3": {
        "total": "174",
        "ok": "174",
        "ko": "60187"
    },
    "percentiles4": {
        "total": "223",
        "ok": "223",
        "ko": "60271"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 35926639,
        "percentage": 100
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 2,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 367,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "29939.173",
        "ok": "29938.868",
        "ko": "0.306"
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
