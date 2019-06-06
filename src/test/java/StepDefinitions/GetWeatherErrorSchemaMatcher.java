package StepDefinitions;
import io.restassured.*;
import cucumber.api.java.en.*;
import io.restassured.response.*;
import static io.restassured.module.jsv.JsonSchemaValidator.matchesJsonSchemaInClasspath;
import static org.hamcrest.MatcherAssert.assertThat;



public class GetWeatherErrorSchemaMatcher {

   private Response Response;
   private ResponseBody ResponseBody;
   private String restendpoint= UtilBase.getBaseUrl();
   private String filename;



    @Given("^I have a json schema for error response")
    public void validSchema()
    {
        filename="file.json";
    }

    @When("^I retrieve the weather info for invalid coordinates (.*)")
    public void getWeatherAPI(String coordinates)
    {
        restendpoint=restendpoint+coordinates;
        System.out.println(restendpoint);
        Response=RestAssured.get(restendpoint);


    }
    @Then("^the error response should match the schema")
    public void compareSchemaToResponse()
    {
        ResponseBody = Response.getBody();
        String responseBodyAsString=ResponseBody.asString();
        assertThat(responseBodyAsString,matchesJsonSchemaInClasspath(filename));

    }

}
