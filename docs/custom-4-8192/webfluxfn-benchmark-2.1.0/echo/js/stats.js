var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "37226624",
        "ok": "37225961",
        "ko": "663"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "10001"
    },
    "maxResponseTime": {
        "total": "60295",
        "ok": "686",
        "ko": "60295"
    },
    "meanResponseTime": {
        "total": "81",
        "ok": "81",
        "ko": "19793"
    },
    "standardDeviation": {
        "total": "130",
        "ok": "55",
        "ko": "19804"
    },
    "percentiles1": {
        "total": "73",
        "ok": "74",
        "ko": "10066"
    },
    "percentiles2": {
        "total": "113",
        "ok": "113",
        "ko": "10131"
    },
    "percentiles3": {
        "total": "181",
        "ok": "180",
        "ko": "60124"
    },
    "percentiles4": {
        "total": "252",
        "ok": "252",
        "ko": "60229"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 37225961,
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
        "count": 663,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "31022.187",
        "ok": "31021.634",
        "ko": "0.552"
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
        "total": "37226624",
        "ok": "37225961",
        "ko": "663"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "10001"
    },
    "maxResponseTime": {
        "total": "60295",
        "ok": "686",
        "ko": "60295"
    },
    "meanResponseTime": {
        "total": "81",
        "ok": "81",
        "ko": "19793"
    },
    "standardDeviation": {
        "total": "130",
        "ok": "55",
        "ko": "19804"
    },
    "percentiles1": {
        "total": "73",
        "ok": "74",
        "ko": "10066"
    },
    "percentiles2": {
        "total": "113",
        "ok": "113",
        "ko": "10131"
    },
    "percentiles3": {
        "total": "181",
        "ok": "180",
        "ko": "60124"
    },
    "percentiles4": {
        "total": "252",
        "ok": "252",
        "ko": "60229"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 37225961,
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
        "count": 663,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "31022.187",
        "ok": "31021.634",
        "ko": "0.552"
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
