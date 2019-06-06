Feature: Testing status codes and response body assertions on Weather API GET request

Scenario: Getting weather info for valid coordinates
 Given a valid location exists for coordinates33.946213,-84.334648
 When I retrieve weather information
 Then I should get requested data
 And the city should be Dunwoody
 And the state should be GA
 And current temperature should be equal to 85 degrees
 And response time should be less than 20ms

Scenario: Getting weather info for invalid coordinates
 Given a location does not exist for coordinates 10,20
 When I get the weather information
 Then the api should send me error response code
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
  Given I have only one coordinate
  When I retrieve weather information for single coordinate
  Then I should get an error response

 Scenario: Performing unauthorized action
  Given I don't have access to create data
  When I try to upload data
  Then the api should deny it



