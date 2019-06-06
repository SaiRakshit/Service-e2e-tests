package StepDefinitions;

import io.restassured.*;
import cucumber.api.java.en.*;
import io.restassured.response.*;
import static io.restassured.module.jsv.JsonSchemaValidator.matchesJsonSchemaInClasspath;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.testng.Assert.fail;

public class GetWeatherNonMatchingSchema {

    private Response Response;
    private ResponseBody ResponseBody;
    private String restendpoint= UtilBase.getBaseUrl();
    private String filename;



    @Given("^I have a invalid json schema")
    public void validSchema()
    {
        filename="file.json";
    }

    @When("^I get weather information for coordinates (.*)")
    public void getWeatherAPI(String coordinates)
    {
        restendpoint=restendpoint+coordinates;
        System.out.println(restendpoint);
        Response=RestAssured.get(restendpoint);


    }
    @Then("^the response should not match the schema")
    public void compareSchemaToResponse() {
        try {
            ResponseBody = Response.getBody();
            String responseBodyAsString = ResponseBody.asString();
            assertThat(responseBodyAsString, matchesJsonSchemaInClasspath(filename));
            fail("Response Matched Schema");

        }catch (AssertionError ae){
            System.out.println("Raised Assert Error as expected");
        }
    }

}
