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
  "name": "a valid location exists for coordinates33.946213,-84.334648",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I retrieve weather information",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I should get requested data",
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
      "offset": 39
    }
  ],
  "location": "GetWeatherValidRequest.validPoints(String)"
});
formatter.result({
  "duration": 110045131,
  "status": "passed"
});
formatter.match({
  "location": "GetWeatherValidRequest.retrieveData()"
});
formatter.result({
  "duration": 1317385581,
  "status": "passed"
});
formatter.match({
  "location": "GetWeatherValidRequest.statusCodeAssert()"
});
formatter.result({
  "duration": 1236803,
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
  "duration": 250497410,
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
  "duration": 14348716,
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
  "duration": 208969835,
  "error_message": "java.lang.AssertionError: Current temperature did not match expected temperature expected [85] but found [80]\n\tat org.testng.Assert.fail(Assert.java:96)\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:137)\n\tat org.testng.Assert.assertEquals(Assert.java:118)\n\tat org.testng.Assert.assertEquals(Assert.java:652)\n\tat StepDefinitions.GetWeatherValidRequest.currentTemperatureAssert(GetWeatherValidRequest.java:74)\n\tat ✽.And current temperature should be equal to 85 degrees(GetWeatherAPI.feature:9)\n",
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
  "line": 12,
  "name": "Getting weather info for invalid coordinates",
  "description": "",
  "id": "testing-status-codes-and-response-body-assertions-on-weather-api-get-request;getting-weather-info-for-invalid-coordinates",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "a location does not exist for coordinates 10,20",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I get the weather information",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "the api should send me error response code",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
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
  "duration": 125250,
  "status": "passed"
});
formatter.match({
  "location": "GetWeatherInvalidRequest.retrieveDataWithInvalidPoints()"
});
formatter.result({
  "duration": 250728671,
  "status": "passed"
});
formatter.match({
  "location": "GetWeatherInvalidRequest.statusCodeAssert()"
});
formatter.result({
  "duration": 73791,
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
  "duration": 6539894,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Comparing expected Json Schema to match actual response",
  "description": "",
  "id": "testing-status-codes-and-response-body-assertions-on-weather-api-get-request;comparing-expected-json-schema-to-match-actual-response",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 19,
  "name": "I have a valid json schema",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I retrieve the weather info for valid coordinates 33.946213,-84.334648",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "the response should match the schema",
  "keyword": "Then "
});
formatter.match({
  "location": "GetWeatherValidSchemaMatcher.validSchema()"
});
formatter.result({
  "duration": 86531,
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
  "duration": 191741354,
  "status": "passed"
});
formatter.match({
  "location": "GetWeatherValidSchemaMatcher.compareSchemaToResponse()"
});
formatter.result({
  "duration": 1057062250,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Comparing expected Json Schema to match error response",
  "description": "",
  "id": "testing-status-codes-and-response-body-assertions-on-weather-api-get-request;comparing-expected-json-schema-to-match-error-response",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 24,
  "name": "I have a json schema for error response",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "I retrieve the weather info for invalid coordinates 10,20",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "the error response should match the schema",
  "keyword": "Then "
});
formatter.match({
  "location": "GetWeatherErrorSchemaMatcher.validSchema()"
});
formatter.result({
  "duration": 66889,
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
  "duration": 251882234,
  "status": "passed"
});
formatter.match({
  "location": "GetWeatherErrorSchemaMatcher.compareSchemaToResponse()"
});
formatter.result({
  "duration": 8900330,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Comparing invalid Json Schema to not match actual response",
  "description": "",
  "id": "testing-status-codes-and-response-body-assertions-on-weather-api-get-request;comparing-invalid-json-schema-to-not-match-actual-response",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 29,
  "name": "I have a invalid json schema",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "I get weather information for coordinates 10,20",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "the response should not match the schema",
  "keyword": "Then "
});
formatter.match({
  "location": "GetWeatherNonMatchingSchema.nonMatchingSchema()"
});
formatter.result({
  "duration": 99002,
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
  "duration": 163212976,
  "status": "passed"
});
formatter.match({
  "location": "GetWeatherNonMatchingSchema.compareSchemaToResponse()"
});
formatter.result({
  "duration": 6534428,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Retrieving data for single coordinate",
  "description": "",
  "id": "testing-status-codes-and-response-body-assertions-on-weather-api-get-request;retrieving-data-for-single-coordinate",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 34,
  "name": "I have only one coordinate",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "I retrieve weather information for single coordinate",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "I should get an error response",
  "keyword": "Then "
});
formatter.match({
  "location": "GetBySingleCoordinate.settingUpUrl()"
});
formatter.result({
  "duration": 101742,
  "status": "passed"
});
formatter.match({
  "location": "GetBySingleCoordinate.retrieveDataWithSinglePoint()"
});
formatter.result({
  "duration": 315205345,
  "status": "passed"
});
formatter.match({
  "location": "GetBySingleCoordinate.statusCodeAssert()"
});
formatter.result({
  "duration": 80291,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "Performing unauthorized action",
  "description": "",
  "id": "testing-status-codes-and-response-body-assertions-on-weather-api-get-request;performing-unauthorized-action",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 39,
  "name": "I don\u0027t have access to create data",
  "keyword": "Given "
});
formatter.step({
  "line": 40,
  "name": "I try to upload data",
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "the api should deny it",
  "keyword": "Then "
});
formatter.match({
  "location": "PostRequest.checkAccess()"
});
formatter.result({
  "duration": 96921,
  "status": "passed"
});
formatter.match({
  "location": "PostRequest.postEmptyData()"
});
formatter.result({
  "duration": 208389965,
  "status": "passed"
});
formatter.match({
  "location": "PostRequest.statusCodeAssert()"
});
formatter.result({
  "duration": 53802,
  "status": "passed"
});
});