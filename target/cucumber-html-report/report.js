$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("GetWeatherAPI.feature");
formatter.feature({
  "line": 1,
  "name": "Testing status codes and response body assertions on Weather API GET request",
  "description": "",
  "id": "testing-status-codes-and-response-body-assertions-on-weather-api-get-request",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Getting weather info for valid coordinates",
  "description": "",
  "id": "testing-status-codes-and-response-body-assertions-on-weather-api-get-request;getting-weather-info-for-valid-coordinates",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "a valid location exists with coordinates33.946213,-84.334648",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I retrieve the weather info",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "the status code returned from the api should be 200",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "the city should be Dunwoody",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "the state should be GA",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "current temperature should be equal to 85 degrees",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "response time should be less than 20ms",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "33.946213,-84.334648",
      "offset": 40
    }
  ],
  "location": "GetWeatherValidRequest.validPoints(String)"
});
formatter.result({
  "duration": 81082914,
  "status": "passed"
});
formatter.match({
  "location": "GetWeatherValidRequest.retrieveData()"
});
formatter.result({
  "duration": 1035441130,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 48
    }
  ],
  "location": "GetWeatherValidRequest.statusCodeAssert(int)"
});
formatter.result({
  "duration": 1982410,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dunwoody",
      "offset": 19
    }
  ],
  "location": "GetWeatherValidRequest.cityAssert(String)"
});
formatter.result({
  "duration": 276171707,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "GA",
      "offset": 20
    }
  ],
  "location": "GetWeatherValidRequest.stateAssert(String)"
});
formatter.result({
  "duration": 14719736,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "85",
      "offset": 39
    }
  ],
  "location": "GetWeatherValidRequest.currentTemperatureAssert(int)"
});
formatter.result({
  "duration": 206716093,
  "error_message": "java.lang.AssertionError: Current temperature did not match expected temperature expected [85] but found [70]\n\tat org.testng.Assert.fail(Assert.java:96)\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:137)\n\tat org.testng.Assert.assertEquals(Assert.java:118)\n\tat org.testng.Assert.assertEquals(Assert.java:652)\n\tat StepDefinitions.GetWeatherValidRequest.currentTemperatureAssert(GetWeatherValidRequest.java:74)\n\tat ✽.And current temperature should be equal to 85 degrees(GetWeatherAPI.feature:9)\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 34
    }
  ],
  "location": "GetWeatherValidRequest.responseTimeAssert(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 13,
  "name": "Getting weather info for invalid coordinates",
  "description": "",
  "id": "testing-status-codes-and-response-body-assertions-on-weather-api-get-request;getting-weather-info-for-invalid-coordinates",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 14,
  "name": "a location does not exist for coordinates 10,20",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I get the weather info",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "the status code returned from the api should be equal to 404",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "the title should be equal to Data Unavailable For Requested Point",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "10,20",
      "offset": 42
    }
  ],
  "location": "GetWeatherInvalidRequest.settingUpUrl(String)"
});
formatter.result({
  "duration": 138343,
  "status": "passed"
});
formatter.match({
  "location": "GetWeatherInvalidRequest.retrieveDataWithInvalidPoints()"
});
formatter.result({
  "duration": 159795327,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 57
    }
  ],
  "location": "GetWeatherInvalidRequest.statusCodeAssert(int)"
});
formatter.result({
  "duration": 126859,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Data Unavailable For Requested Point",
      "offset": 29
    }
  ],
  "location": "GetWeatherInvalidRequest.titleAssert(String)"
});
formatter.result({
  "duration": 7190382,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Comparing expected Json Schema to match actual response",
  "description": "",
  "id": "testing-status-codes-and-response-body-assertions-on-weather-api-get-request;comparing-expected-json-schema-to-match-actual-response",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 20,
  "name": "I have a valid json schema",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "I retrieve the weather info for valid coordinates 33.946213,-84.334648",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "the response should match the schema",
  "keyword": "Then "
});
formatter.match({
  "location": "GetWeatherValidSchemaMatcher.validSchema()"
});
formatter.result({
  "duration": 91481,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "33.946213,-84.334648",
      "offset": 50
    }
  ],
  "location": "GetWeatherValidSchemaMatcher.getWeatherAPI(String)"
});
formatter.result({
  "duration": 191265816,
  "status": "passed"
});
formatter.match({
  "location": "GetWeatherValidSchemaMatcher.compareSchemaToResponse()"
});
formatter.result({
  "duration": 755088709,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Comparing expected Json Schema to match error response",
  "description": "",
  "id": "testing-status-codes-and-response-body-assertions-on-weather-api-get-request;comparing-expected-json-schema-to-match-error-response",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 25,
  "name": "I have a json schema for error response",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "I retrieve the weather info for invalid coordinates 10,20",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "the error response should match the schema",
  "keyword": "Then "
});
formatter.match({
  "location": "GetWeatherErrorSchemaMatcher.validSchema()"
});
formatter.result({
  "duration": 86252,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10,20",
      "offset": 52
    }
  ],
  "location": "GetWeatherErrorSchemaMatcher.getWeatherAPI(String)"
});
formatter.result({
  "duration": 457271466,
  "status": "passed"
});
formatter.match({
  "location": "GetWeatherErrorSchemaMatcher.compareSchemaToResponse()"
});
formatter.result({
  "duration": 6800596,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Comparing invalid Json Schema to not match actual response",
  "description": "",
  "id": "testing-status-codes-and-response-body-assertions-on-weather-api-get-request;comparing-invalid-json-schema-to-not-match-actual-response",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 30,
  "name": "I have a invalid json schema",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "I get weather information for coordinates 10,20",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "the response should not match the schema",
  "keyword": "Then "
});
formatter.match({
  "location": "GetWeatherNonMatchingSchema.validSchema()"
});
formatter.result({
  "duration": 91073,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10,20",
      "offset": 42
    }
  ],
  "location": "GetWeatherNonMatchingSchema.getWeatherAPI(String)"
});
formatter.result({
  "duration": 159731614,
  "status": "passed"
});
formatter.match({
  "location": "GetWeatherNonMatchingSchema.compareSchemaToResponse()"
});
formatter.result({
  "duration": 6518379,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "Retrieving data for single coordinate",
  "description": "",
  "id": "testing-status-codes-and-response-body-assertions-on-weather-api-get-request;retrieving-data-for-single-coordinate",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 35,
  "name": "I have single coordinate",
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "I get weather information",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "the status code from the api should be 404",
  "keyword": "Then "
});
formatter.match({
  "location": "GetBySingleCoordinate.settingUpUrl()"
});
formatter.result({
  "duration": 97470,
  "status": "passed"
});
formatter.match({
  "location": "GetBySingleCoordinate.retrieveDataWithSinglePoint()"
});
formatter.result({
  "duration": 225158080,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 39
    }
  ],
  "location": "GetBySingleCoordinate.statusCodeAssert(int)"
});
formatter.result({
  "duration": 161462,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "Performing unauthorized action",
  "description": "",
  "id": "testing-status-codes-and-response-body-assertions-on-weather-api-get-request;performing-unauthorized-action",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 40,
  "name": "I try to upload data",
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "the the api should deny it",
  "keyword": "Then "
});
formatter.match({
  "location": "PostRequest.retrieveDataWithInvalidPoints()"
});
formatter.result({
  "duration": 173341446,
  "status": "passed"
});
formatter.match({
  "location": "PostRequest.statusCodeAssert()"
});
formatter.result({
  "duration": 51488,
  "status": "passed"
});
});