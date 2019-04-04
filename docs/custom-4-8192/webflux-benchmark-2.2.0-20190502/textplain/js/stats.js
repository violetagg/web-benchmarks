var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "47175100",
        "ok": "47174754",
        "ko": "346"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "10000"
    },
    "maxResponseTime": {
        "total": "60272",
        "ok": "679",
        "ko": "60272"
    },
    "meanResponseTime": {
        "total": "64",
        "ok": "64",
        "ko": "28693"
    },
    "standardDeviation": {
        "total": "111",
        "ok": "44",
        "ko": "24185"
    },
    "percentiles1": {
        "total": "58",
        "ok": "58",
        "ko": "10076"
    },
    "percentiles2": {
        "total": "91",
        "ok": "91",
        "ko": "60028"
    },
    "percentiles3": {
        "total": "142",
        "ok": "142",
        "ko": "60120"
    },
    "percentiles4": {
        "total": "200",
        "ok": "200",
        "ko": "60191"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 47174754,
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
        "total": "39312.583",
        "ok": "39312.295",
        "ko": "0.288"
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
        "total": "47175100",
        "ok": "47174754",
        "ko": "346"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "10000"
    },
    "maxResponseTime": {
        "total": "60272",
        "ok": "679",
        "ko": "60272"
    },
    "meanResponseTime": {
        "total": "64",
        "ok": "64",
        "ko": "28693"
    },
    "standardDeviation": {
        "total": "111",
        "ok": "44",
        "ko": "24185"
    },
    "percentiles1": {
        "total": "58",
        "ok": "58",
        "ko": "10076"
    },
    "percentiles2": {
        "total": "91",
        "ok": "91",
        "ko": "60028"
    },
    "percentiles3": {
        "total": "142",
        "ok": "142",
        "ko": "60120"
    },
    "percentiles4": {
        "total": "200",
        "ok": "200",
        "ko": "60191"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 47174754,
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
        "total": "39312.583",
        "ok": "39312.295",
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
