var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "32182058",
        "ok": "32181842",
        "ko": "216"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "1434"
    },
    "maxResponseTime": {
        "total": "15222",
        "ok": "15222",
        "ko": "14581"
    },
    "meanResponseTime": {
        "total": "94",
        "ok": "94",
        "ko": "12007"
    },
    "standardDeviation": {
        "total": "90",
        "ok": "85",
        "ko": "2571"
    },
    "percentiles1": {
        "total": "91",
        "ok": "91",
        "ko": "12469"
    },
    "percentiles2": {
        "total": "143",
        "ok": "144",
        "ko": "13385"
    },
    "percentiles3": {
        "total": "189",
        "ok": "190",
        "ko": "14406"
    },
    "percentiles4": {
        "total": "241",
        "ok": "241",
        "ko": "14488"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 32181129,
        "percentage": 100
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 7,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 706,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 216,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "26818.382",
        "ok": "26818.202",
        "ko": "0.18"
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
        "total": "32182058",
        "ok": "32181842",
        "ko": "216"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "1434"
    },
    "maxResponseTime": {
        "total": "15222",
        "ok": "15222",
        "ko": "14581"
    },
    "meanResponseTime": {
        "total": "94",
        "ok": "94",
        "ko": "12007"
    },
    "standardDeviation": {
        "total": "90",
        "ok": "85",
        "ko": "2571"
    },
    "percentiles1": {
        "total": "91",
        "ok": "91",
        "ko": "12469"
    },
    "percentiles2": {
        "total": "143",
        "ok": "143",
        "ko": "13385"
    },
    "percentiles3": {
        "total": "190",
        "ok": "189",
        "ko": "14406"
    },
    "percentiles4": {
        "total": "241",
        "ok": "241",
        "ko": "14488"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 32181129,
        "percentage": 100
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 7,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 706,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 216,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "26818.382",
        "ok": "26818.202",
        "ko": "0.18"
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
