$(document).ready(function(){
    console.log(document.title)
    //Telemetry Event
	var data = {
		"pageName" : document.title,
	};
    googleAnalyticsTelemetry.LogPageView("onView", JSON.stringify(data));
});

function onPDFDownload(domElement)
{
    console.log(domElement.name);
    //Telemetry Event
	var data = {
		"pdf" : domElement.name
	};

	googleAnalyticsTelemetry.LogResourceDownload("onPDFDownload", JSON.stringify(data));
}

function onClickEvent(domElement)
{
    console.log(domElement.name);
    //Telemetry Event
	var data = {
		"element" : domElement.name
	};

	googleAnalyticsTelemetry.LogClick("onClick", JSON.stringify(data));
}

function onFAQViewed(domElement)
{
    console.log(domElement.name);
}