package StepDefinitions;


import java.util.concurrent.TimeUnit;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.RestAssured;
import io.restassured.response.Response;
import org.testng.Assert;
import static org.testng.Assert.fail;



public class GetWeatherValidRequest {


    private Response response;

    private String restendpoint= UtilBase.getBaseUrl();


        @Given("a valid location exists with coordinates(.*)")
        public void validPoints (String coordinates){
        restendpoint=restendpoint+coordinates;
        System.out.println(restendpoint);

    }

        @When("I retrieve the weather info$")
        public void retrieveData () {
            try {
                response = RestAssured.when().get(restendpoint).then().extract().response();
            }
            catch(Exception e){
                fail("Error hitting end-point");
            }

    }

        @Then("^the status code returned from the api should be (\\d+)$")
        public void statusCodeAssert (int actual_status_code)
        {

                Assert.assertEquals(response.getStatusCode(), actual_status_code,"Actual status code did not match expected status code");

        }

        @And("^the city should be (.*)$")
        public void cityAssert (String expected_city) {

                String city_from_response = response.jsonPath().get("properties.relativeLocation.properties.city");
               Assert.assertEquals(city_from_response, expected_city, "Expected city did not match actual city");

        }


        @And("^the state should be (.*)$")
        public void stateAssert (String expected_state)
        {

                String state_from_response = response.jsonPath().get("properties.relativeLocation.properties.state");
                Assert.assertEquals(state_from_response, expected_state, "Expected state did not match actual state");

        }

        @And("current temperature should be equal to (\\d+) degrees$")
        public void currentTemperatureAssert ( int expected_temperature)
        {

                String forecastHref = response.jsonPath().get("properties.forecast");
                int response_current_temperature = RestAssured.when().get(forecastHref).then().extract().path("properties.periods[0].temperature");
                Assert.assertEquals(response_current_temperature, expected_temperature, "Current temperature did not match expected temperature");

        }


        @And("^response time should be less than (\\d+)ms$")

        public void responseTimeAssert (int expected_response_time)
        {
          Assert.assertTrue(response.getTimeIn(TimeUnit.MILLISECONDS) <= expected_response_time, " Response time is more than expected response time");


    }

}

