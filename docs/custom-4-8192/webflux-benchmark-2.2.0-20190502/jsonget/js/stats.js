var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "36265977",
        "ok": "36265626",
        "ko": "351"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "10000"
    },
    "maxResponseTime": {
        "total": "60083",
        "ok": "436",
        "ko": "60083"
    },
    "meanResponseTime": {
        "total": "83",
        "ok": "83",
        "ko": "28384"
    },
    "standardDeviation": {
        "total": "124",
        "ok": "46",
        "ko": "24108"
    },
    "percentiles1": {
        "total": "85",
        "ok": "85",
        "ko": "10009"
    },
    "percentiles2": {
        "total": "125",
        "ok": "125",
        "ko": "60002"
    },
    "percentiles3": {
        "total": "148",
        "ok": "148",
        "ko": "60023"
    },
    "percentiles4": {
        "total": "168",
        "ok": "168",
        "ko": "60045"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 36265626,
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
        "count": 351,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "30221.647",
        "ok": "30221.355",
        "ko": "0.292"
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
        "total": "36265977",
        "ok": "36265626",
        "ko": "351"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "10000"
    },
    "maxResponseTime": {
        "total": "60083",
        "ok": "436",
        "ko": "60083"
    },
    "meanResponseTime": {
        "total": "83",
        "ok": "83",
        "ko": "28384"
    },
    "standardDeviation": {
        "total": "124",
        "ok": "46",
        "ko": "24108"
    },
    "percentiles1": {
        "total": "85",
        "ok": "85",
        "ko": "10009"
    },
    "percentiles2": {
        "total": "125",
        "ok": "125",
        "ko": "60002"
    },
    "percentiles3": {
        "total": "148",
        "ok": "148",
        "ko": "60023"
    },
    "percentiles4": {
        "total": "168",
        "ok": "168",
        "ko": "60045"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 36265626,
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
        "count": 351,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "30221.647",
        "ok": "30221.355",
        "ko": "0.292"
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
