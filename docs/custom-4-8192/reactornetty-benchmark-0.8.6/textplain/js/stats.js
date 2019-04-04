var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "37083870",
        "ok": "37083503",
        "ko": "367"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "10001"
    },
    "maxResponseTime": {
        "total": "60328",
        "ok": "1459",
        "ko": "60328"
    },
    "meanResponseTime": {
        "total": "82",
        "ok": "81",
        "ko": "27662"
    },
    "standardDeviation": {
        "total": "126",
        "ok": "52",
        "ko": "23886"
    },
    "percentiles1": {
        "total": "79",
        "ok": "79",
        "ko": "10113"
    },
    "percentiles2": {
        "total": "122",
        "ok": "122",
        "ko": "60061"
    },
    "percentiles3": {
        "total": "167",
        "ok": "167",
        "ko": "60189"
    },
    "percentiles4": {
        "total": "208",
        "ok": "208",
        "ko": "60297"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 37083498,
        "percentage": 100
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 3,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 2,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 367,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "30903.225",
        "ok": "30902.919",
        "ko": "0.306"
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
        "total": "37083870",
        "ok": "37083503",
        "ko": "367"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "10001"
    },
    "maxResponseTime": {
        "total": "60328",
        "ok": "1459",
        "ko": "60328"
    },
    "meanResponseTime": {
        "total": "82",
        "ok": "81",
        "ko": "27662"
    },
    "standardDeviation": {
        "total": "126",
        "ok": "52",
        "ko": "23886"
    },
    "percentiles1": {
        "total": "79",
        "ok": "79",
        "ko": "10113"
    },
    "percentiles2": {
        "total": "122",
        "ok": "122",
        "ko": "60061"
    },
    "percentiles3": {
        "total": "167",
        "ok": "167",
        "ko": "60189"
    },
    "percentiles4": {
        "total": "208",
        "ok": "208",
        "ko": "60297"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 37083498,
        "percentage": 100
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 3,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 2,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 367,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "30903.225",
        "ok": "30902.919",
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
