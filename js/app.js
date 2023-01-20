function onPDFDownload(domElement)
{
    console.log(domElement.name);
    //Telemetry Event
	var data = {
		"pdf" : domElement.name
	};

	//googleAnalyticsTelemetry.LogTelemetry("onPDFDownload", JSON.stringify(data));
}

function onClickEvent(domElement)
{

    console.log(domElement.name);
    //Telemetry Event
	var data = {
		"element" : domElement.name
	};

	//googleAnalyticsTelemetry.LogTelemetry("onClickEvent", JSON.stringify(data));
}

function onFAQViewed(domElement)
{
    console.log(domElement.name);
}