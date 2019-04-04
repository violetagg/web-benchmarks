var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "18056767",
        "ok": "18056090",
        "ko": "677"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "10000"
    },
    "maxResponseTime": {
        "total": "60067",
        "ok": "787",
        "ko": "60067"
    },
    "meanResponseTime": {
        "total": "168",
        "ok": "167",
        "ko": "19529"
    },
    "standardDeviation": {
        "total": "192",
        "ok": "91",
        "ko": "19637"
    },
    "percentiles1": {
        "total": "172",
        "ok": "172",
        "ko": "10001"
    },
    "percentiles2": {
        "total": "250",
        "ok": "250",
        "ko": "10004"
    },
    "percentiles3": {
        "total": "298",
        "ok": "298",
        "ko": "60002"
    },
    "percentiles4": {
        "total": "312",
        "ok": "312",
        "ko": "60011"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 18056090,
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
        "total": "15047.306",
        "ok": "15046.742",
        "ko": "0.564"
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
        "total": "18056767",
        "ok": "18056090",
        "ko": "677"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "10000"
    },
    "maxResponseTime": {
        "total": "60067",
        "ok": "787",
        "ko": "60067"
    },
    "meanResponseTime": {
        "total": "168",
        "ok": "167",
        "ko": "19529"
    },
    "standardDeviation": {
        "total": "192",
        "ok": "91",
        "ko": "19637"
    },
    "percentiles1": {
        "total": "172",
        "ok": "172",
        "ko": "10001"
    },
    "percentiles2": {
        "total": "250",
        "ok": "250",
        "ko": "10004"
    },
    "percentiles3": {
        "total": "298",
        "ok": "298",
        "ko": "60002"
    },
    "percentiles4": {
        "total": "312",
        "ok": "312",
        "ko": "60011"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 18056090,
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
        "total": "15047.306",
        "ok": "15046.742",
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
