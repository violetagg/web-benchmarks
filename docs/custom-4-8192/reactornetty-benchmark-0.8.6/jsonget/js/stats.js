var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "35316215",
        "ok": "35315848",
        "ko": "367"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "10001"
    },
    "maxResponseTime": {
        "total": "60334",
        "ok": "1419",
        "ko": "60334"
    },
    "meanResponseTime": {
        "total": "86",
        "ok": "85",
        "ko": "27660"
    },
    "standardDeviation": {
        "total": "129",
        "ok": "52",
        "ko": "23884"
    },
    "percentiles1": {
        "total": "85",
        "ok": "85",
        "ko": "10117"
    },
    "percentiles2": {
        "total": "127",
        "ok": "127",
        "ko": "60050"
    },
    "percentiles3": {
        "total": "167",
        "ok": "167",
        "ko": "60180"
    },
    "percentiles4": {
        "total": "206",
        "ok": "206",
        "ko": "60290"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 35315842,
        "percentage": 100
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 3,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 3,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 367,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "29430.179",
        "ok": "29429.873",
        "ko": "0.306"
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
        "total": "35316215",
        "ok": "35315848",
        "ko": "367"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "10001"
    },
    "maxResponseTime": {
        "total": "60334",
        "ok": "1419",
        "ko": "60334"
    },
    "meanResponseTime": {
        "total": "86",
        "ok": "85",
        "ko": "27660"
    },
    "standardDeviation": {
        "total": "129",
        "ok": "52",
        "ko": "23884"
    },
    "percentiles1": {
        "total": "85",
        "ok": "85",
        "ko": "10117"
    },
    "percentiles2": {
        "total": "127",
        "ok": "127",
        "ko": "60050"
    },
    "percentiles3": {
        "total": "167",
        "ok": "167",
        "ko": "60180"
    },
    "percentiles4": {
        "total": "206",
        "ok": "206",
        "ko": "60290"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 35315842,
        "percentage": 100
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 3,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 3,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 367,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "29430.179",
        "ok": "29429.873",
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
