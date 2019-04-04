var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "33423790",
        "ok": "33423425",
        "ko": "365"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "10002"
    },
    "maxResponseTime": {
        "total": "60291",
        "ok": "906",
        "ko": "60291"
    },
    "meanResponseTime": {
        "total": "91",
        "ok": "90",
        "ko": "27767"
    },
    "standardDeviation": {
        "total": "134",
        "ok": "57",
        "ko": "23914"
    },
    "percentiles1": {
        "total": "87",
        "ok": "87",
        "ko": "10127"
    },
    "percentiles2": {
        "total": "136",
        "ok": "136",
        "ko": "60070"
    },
    "percentiles3": {
        "total": "183",
        "ok": "183",
        "ko": "60185"
    },
    "percentiles4": {
        "total": "224",
        "ok": "224",
        "ko": "60243"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 33423423,
        "percentage": 100
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 2,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 365,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "27853.158",
        "ok": "27852.854",
        "ko": "0.304"
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
        "total": "33423790",
        "ok": "33423425",
        "ko": "365"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "10002"
    },
    "maxResponseTime": {
        "total": "60291",
        "ok": "906",
        "ko": "60291"
    },
    "meanResponseTime": {
        "total": "91",
        "ok": "90",
        "ko": "27767"
    },
    "standardDeviation": {
        "total": "134",
        "ok": "57",
        "ko": "23914"
    },
    "percentiles1": {
        "total": "87",
        "ok": "87",
        "ko": "10127"
    },
    "percentiles2": {
        "total": "136",
        "ok": "136",
        "ko": "60070"
    },
    "percentiles3": {
        "total": "183",
        "ok": "183",
        "ko": "60185"
    },
    "percentiles4": {
        "total": "224",
        "ok": "224",
        "ko": "60243"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 33423423,
        "percentage": 100
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 2,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 365,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "27853.158",
        "ok": "27852.854",
        "ko": "0.304"
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
