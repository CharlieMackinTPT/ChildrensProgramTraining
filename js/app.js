$(document).ready(function(){
    console.log(document.title)
    //Telemetry Event
	var data = document.title;
    googleAnalyticsTelemetry.LogPageView("onView", data);
});

function onPDFDownload(domElement)
{
    console.log(domElement.name);
    //Telemetry Event
	var data = domElement.name;

	googleAnalyticsTelemetry.LogResourceDownload("onPDFDownload", data);
}

function onClickEvent(domElement)
{
    console.log(domElement.name);
    //Telemetry Event
	var data = domElement.name

	googleAnalyticsTelemetry.LogClick("onClick", data);
}

function onFAQViewed(domElement)
{
    console.log(domElement.name);
}