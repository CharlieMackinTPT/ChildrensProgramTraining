var GATelemetryEvents = function(){};

Object.defineProperty(this, 'googleAnalyticsTelemetry', {
    writable: false,
    value: new GATelemetryEvents()
});

Object.defineProperty(GATelemetryEvents.prototype, 'LogTelemetry', {
    writable: false,
    value: function(eventName, eventData)
    {
        var analyticsObj = {
            'event_name': eventName,
            'data': eventData,
            'timestamp': Date.now()
        };

        gtag('event', analyticsObj.event_name, {
            'name': analyticsObj.event_name,
            'data': analyticsObj.data,
            'timestamp': analyticsObj.timestamp
        });

        console.log("GA recorded analytics Event")
    }
});


