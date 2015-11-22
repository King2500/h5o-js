global.buster = require("buster");
var createTests = require("./tests");
var HTML5Outline = require("../dist/outliner.min");
var path = require("path");
var contextPath = "file://" + path.resolve(__dirname + "/..");

function runTestsIn(jsdomModule) {
	require(jsdomModule).env(
			"<div></div>",
			{features: {FetchExternalResources: ["iframe"]}},
			function (e, w) {
				createTests(jsdomModule, w.document, contextPath, HTML5Outline);
			});
}

runTestsIn("jsdom-compat");
if (process.version.indexOf("v0.") < 0) {
	runTestsIn("jsdom");
}
