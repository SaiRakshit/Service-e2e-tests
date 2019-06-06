package StepDefinitions;
import io.restassured.*;
import cucumber.api.java.en.*;
import io.restassured.response.*;
import static io.restassured.module.jsv.JsonSchemaValidator.matchesJsonSchemaInClasspath;
import static org.hamcrest.MatcherAssert.assertThat;



public class GetWeatherValidSchemaMatcher {

     private Response Response;
     private ResponseBody ResponseBody;
     private String restendpoint= UtilBase.getBaseUrl();
     private String filename;



    @Given("^I have a valid json schema")
    public void validSchema()
    {
        filename="validresponse.json";
    }

    @When("^I retrieve the weather info for valid coordinates (.*)")
    public void getWeatherAPI(String coordinates)
    {
        restendpoint=restendpoint+coordinates;
        Response=RestAssured.get(restendpoint);


    }
    @Then("^the response should match the schema")
    public void compareSchemaToResponse()
    {
        ResponseBody = Response.getBody();
        String responseBodyAsString=ResponseBody.asString();
        assertThat(responseBodyAsString,matchesJsonSchemaInClasspath(filename));

    }

}
