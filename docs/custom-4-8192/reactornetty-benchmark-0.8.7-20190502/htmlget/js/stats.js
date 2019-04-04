var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "35254227",
        "ok": "35254028",
        "ko": "199"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "922"
    },
    "maxResponseTime": {
        "total": "15233",
        "ok": "15233",
        "ko": "14489"
    },
    "meanResponseTime": {
        "total": "86",
        "ok": "86",
        "ko": "12366"
    },
    "standardDeviation": {
        "total": "84",
        "ok": "79",
        "ko": "2042"
    },
    "percentiles1": {
        "total": "84",
        "ok": "84",
        "ko": "12930"
    },
    "percentiles2": {
        "total": "128",
        "ok": "128",
        "ko": "13379"
    },
    "percentiles3": {
        "total": "172",
        "ok": "172",
        "ko": "14289"
    },
    "percentiles4": {
        "total": "224",
        "ok": "224",
        "ko": "14440"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 35253304,
        "percentage": 100
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 15,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 709,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 199,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "29354.061",
        "ok": "29353.895",
        "ko": "0.166"
    }
},
contents: {
"req_htmlget-3dd37": {
        type: "REQUEST",
        name: "htmlGet",
path: "htmlGet",
pathFormatted: "req_htmlget-3dd37",
stats: {
    "name": "htmlGet",
    "numberOfRequests": {
        "total": "35254227",
        "ok": "35254028",
        "ko": "199"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "922"
    },
    "maxResponseTime": {
        "total": "15233",
        "ok": "15233",
        "ko": "14489"
    },
    "meanResponseTime": {
        "total": "86",
        "ok": "86",
        "ko": "12366"
    },
    "standardDeviation": {
        "total": "84",
        "ok": "79",
        "ko": "2042"
    },
    "percentiles1": {
        "total": "84",
        "ok": "84",
        "ko": "12930"
    },
    "percentiles2": {
        "total": "128",
        "ok": "128",
        "ko": "13379"
    },
    "percentiles3": {
        "total": "171",
        "ok": "172",
        "ko": "14289"
    },
    "percentiles4": {
        "total": "224",
        "ok": "225",
        "ko": "14440"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 35253304,
        "percentage": 100
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 15,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 709,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 199,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "29354.061",
        "ok": "29353.895",
        "ko": "0.166"
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
