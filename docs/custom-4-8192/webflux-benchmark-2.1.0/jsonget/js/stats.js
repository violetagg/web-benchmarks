var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "26203650",
        "ok": "26202973",
        "ko": "677"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "10000"
    },
    "maxResponseTime": {
        "total": "60044",
        "ok": "558",
        "ko": "60044"
    },
    "meanResponseTime": {
        "total": "116",
        "ok": "115",
        "ko": "19531"
    },
    "standardDeviation": {
        "total": "154",
        "ok": "63",
        "ko": "19637"
    },
    "percentiles1": {
        "total": "117",
        "ok": "117",
        "ko": "10002"
    },
    "percentiles2": {
        "total": "172",
        "ok": "172",
        "ko": "10009"
    },
    "percentiles3": {
        "total": "216",
        "ok": "216",
        "ko": "60003"
    },
    "percentiles4": {
        "total": "229",
        "ok": "229",
        "ko": "60024"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 26202973,
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
        "count": 677,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "21818.193",
        "ok": "21817.629",
        "ko": "0.564"
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
        "total": "26203650",
        "ok": "26202973",
        "ko": "677"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "10000"
    },
    "maxResponseTime": {
        "total": "60044",
        "ok": "558",
        "ko": "60044"
    },
    "meanResponseTime": {
        "total": "116",
        "ok": "115",
        "ko": "19531"
    },
    "standardDeviation": {
        "total": "154",
        "ok": "63",
        "ko": "19637"
    },
    "percentiles1": {
        "total": "117",
        "ok": "117",
        "ko": "10002"
    },
    "percentiles2": {
        "total": "172",
        "ok": "172",
        "ko": "10009"
    },
    "percentiles3": {
        "total": "216",
        "ok": "216",
        "ko": "60003"
    },
    "percentiles4": {
        "total": "229",
        "ok": "229",
        "ko": "60024"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 26202973,
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
        "count": 677,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "21818.193",
        "ok": "21817.629",
        "ko": "0.564"
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
