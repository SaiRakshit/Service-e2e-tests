Feature: Testing status codes and response body assertions on Weather API GET request

Scenario: Getting weather info for valid coordinates
 Given a valid location exists with coordinates33.946213,-84.334648
 When I retrieve the weather info
 Then the status code returned from the api should be 200
 And the city should be Dunwoody
 And the state should be GA
 And current temperature should be equal to 85 degrees
 And response time should be less than 20ms


Scenario: Getting weather info for invalid coordinates
 Given a location does not exist for coordinates 10,20
 When I get the weather info
 Then the status code returned from the api should be equal to 404
 And the title should be equal to Data Unavailable For Requested Point

Scenario: Comparing expected Json Schema to match actual response
 Given I have a valid json schema
 When I retrieve the weather info for valid coordinates 33.946213,-84.334648
 Then the response should match the schema

 Scenario: Comparing expected Json Schema to match error response
  Given I have a json schema for error response
 When I retrieve the weather info for invalid coordinates 10,20
 Then the error response should match the schema

Scenario: Comparing invalid Json Schema to not match actual response
  Given I have a invalid json schema
  When I get weather information for coordinates 10,20
  Then the response should not match the schema

 Scenario: Retrieving data for single coordinate
  Given I have single coordinate
  When I get weather information
  Then the status code from the api should be 404

 Scenario: Performing unauthorized action
  When I try to upload data
  Then the the api should deny it




