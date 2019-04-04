var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "49043",
        "ok": "0",
        "ko": "49043"
    },
    "minResponseTime": {
        "total": "10000",
        "ok": "-",
        "ko": "10000"
    },
    "maxResponseTime": {
        "total": "60424",
        "ok": "-",
        "ko": "60424"
    },
    "meanResponseTime": {
        "total": "59941",
        "ok": "-",
        "ko": "59941"
    },
    "standardDeviation": {
        "total": "1733",
        "ok": "-",
        "ko": "1733"
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
        "count": 49043,
        "percentage": 100
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "40.869",
        "ok": "-",
        "ko": "40.869"
    }
},
contents: {
"req_jsonget-66b2f": {
        type: "REQUEST",
        name: "jsonGet",
path: "jsonGet",
pathFormatted: "req_jsonget-66b2f",
stats: {
    "name": "jsonGet",
    "numberOfRequests": {
        "total": "49043",
        "ok": "0",
        "ko": "49043"
    },
    "minResponseTime": {
        "total": "10000",
        "ok": "-",
        "ko": "10000"
    },
    "maxResponseTime": {
        "total": "60424",
        "ok": "-",
        "ko": "60424"
    },
    "meanResponseTime": {
        "total": "59941",
        "ok": "-",
        "ko": "59941"
    },
    "standardDeviation": {
        "total": "1733",
        "ok": "-",
        "ko": "1733"
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
        "count": 49043,
        "percentage": 100
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "40.869",
        "ok": "-",
        "ko": "40.869"
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
