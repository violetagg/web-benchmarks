var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "24990433",
        "ok": "24989758",
        "ko": "675"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "10000"
    },
    "maxResponseTime": {
        "total": "60247",
        "ok": "643",
        "ko": "60247"
    },
    "meanResponseTime": {
        "total": "121",
        "ok": "121",
        "ko": "19562"
    },
    "standardDeviation": {
        "total": "158",
        "ok": "66",
        "ko": "19663"
    },
    "percentiles1": {
        "total": "124",
        "ok": "124",
        "ko": "10002"
    },
    "percentiles2": {
        "total": "183",
        "ok": "183",
        "ko": "10017"
    },
    "percentiles3": {
        "total": "222",
        "ok": "222",
        "ko": "60010"
    },
    "percentiles4": {
        "total": "242",
        "ok": "242",
        "ko": "60069"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 24989758,
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
        "count": 675,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "20825.361",
        "ok": "20824.798",
        "ko": "0.562"
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
        "total": "24990433",
        "ok": "24989758",
        "ko": "675"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "10000"
    },
    "maxResponseTime": {
        "total": "60247",
        "ok": "643",
        "ko": "60247"
    },
    "meanResponseTime": {
        "total": "121",
        "ok": "121",
        "ko": "19562"
    },
    "standardDeviation": {
        "total": "158",
        "ok": "66",
        "ko": "19663"
    },
    "percentiles1": {
        "total": "124",
        "ok": "124",
        "ko": "10002"
    },
    "percentiles2": {
        "total": "183",
        "ok": "183",
        "ko": "10017"
    },
    "percentiles3": {
        "total": "222",
        "ok": "222",
        "ko": "60010"
    },
    "percentiles4": {
        "total": "242",
        "ok": "242",
        "ko": "60069"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 24989758,
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
        "count": 675,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "20825.361",
        "ok": "20824.798",
        "ko": "0.562"
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
