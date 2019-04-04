var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "30473591",
        "ok": "30473245",
        "ko": "346"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "10001"
    },
    "maxResponseTime": {
        "total": "60190",
        "ok": "734",
        "ko": "60190"
    },
    "meanResponseTime": {
        "total": "99",
        "ok": "99",
        "ko": "28689"
    },
    "standardDeviation": {
        "total": "140",
        "ok": "62",
        "ko": "24185"
    },
    "percentiles1": {
        "total": "93",
        "ok": "93",
        "ko": "10069"
    },
    "percentiles2": {
        "total": "143",
        "ok": "143",
        "ko": "60033"
    },
    "percentiles3": {
        "total": "205",
        "ok": "205",
        "ko": "60104"
    },
    "percentiles4": {
        "total": "252",
        "ok": "252",
        "ko": "60155"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 30473245,
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
        "count": 346,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "25394.659",
        "ok": "25394.371",
        "ko": "0.288"
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
        "total": "30473591",
        "ok": "30473245",
        "ko": "346"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "10001"
    },
    "maxResponseTime": {
        "total": "60190",
        "ok": "734",
        "ko": "60190"
    },
    "meanResponseTime": {
        "total": "99",
        "ok": "99",
        "ko": "28689"
    },
    "standardDeviation": {
        "total": "140",
        "ok": "62",
        "ko": "24185"
    },
    "percentiles1": {
        "total": "93",
        "ok": "93",
        "ko": "10069"
    },
    "percentiles2": {
        "total": "143",
        "ok": "143",
        "ko": "60033"
    },
    "percentiles3": {
        "total": "205",
        "ok": "205",
        "ko": "60104"
    },
    "percentiles4": {
        "total": "252",
        "ok": "252",
        "ko": "60155"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 30473245,
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
        "count": 346,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "25394.659",
        "ok": "25394.371",
        "ko": "0.288"
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
