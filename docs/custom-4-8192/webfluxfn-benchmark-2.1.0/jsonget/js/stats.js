var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "35727285",
        "ok": "35726610",
        "ko": "675"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "10000"
    },
    "maxResponseTime": {
        "total": "60184",
        "ok": "484",
        "ko": "60184"
    },
    "meanResponseTime": {
        "total": "85",
        "ok": "84",
        "ko": "19568"
    },
    "standardDeviation": {
        "total": "130",
        "ok": "48",
        "ko": "19660"
    },
    "percentiles1": {
        "total": "85",
        "ok": "85",
        "ko": "10009"
    },
    "percentiles2": {
        "total": "125",
        "ok": "125",
        "ko": "10036"
    },
    "percentiles3": {
        "total": "161",
        "ok": "161",
        "ko": "60017"
    },
    "percentiles4": {
        "total": "181",
        "ok": "181",
        "ko": "60054"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 35726610,
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
        "total": "29747.948",
        "ok": "29747.386",
        "ko": "0.562"
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
        "total": "35727285",
        "ok": "35726610",
        "ko": "675"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "10000"
    },
    "maxResponseTime": {
        "total": "60184",
        "ok": "484",
        "ko": "60184"
    },
    "meanResponseTime": {
        "total": "85",
        "ok": "84",
        "ko": "19568"
    },
    "standardDeviation": {
        "total": "130",
        "ok": "48",
        "ko": "19660"
    },
    "percentiles1": {
        "total": "85",
        "ok": "85",
        "ko": "10009"
    },
    "percentiles2": {
        "total": "125",
        "ok": "125",
        "ko": "10036"
    },
    "percentiles3": {
        "total": "161",
        "ok": "161",
        "ko": "60017"
    },
    "percentiles4": {
        "total": "181",
        "ok": "181",
        "ko": "60054"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 35726610,
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
        "total": "29747.948",
        "ok": "29747.386",
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
