package StepDefinitions;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.RestAssured;
import io.restassured.response.Response;
import static org.testng.Assert.fail;

import org.testng.Assert;

public class GetWeatherInvalidRequest {

    private Response response;
    private String restendpoint= UtilBase.getBaseUrl();


    @Given("^a location does not exist for coordinates (.*)")
    public void settingUpUrl(String coordinates){

        restendpoint=restendpoint+coordinates;


    }

    @When("I get the weather information$")
    public void retrieveDataWithInvalidPoints(){
        try{
            response= RestAssured.get(restendpoint).then().extract().response();
        }catch (Exception e){
         e.printStackTrace();
         fail("Error hitting end-point");
        }


    }

    @Then("^the api should send me error response code$")
    public void statusCodeAssert()
    {
        Assert.assertEquals(response.getStatusCode(),UtilBase.getErrorStatusCode(),"Actual status code did not match expected status code");

    }

    @And("^the title should be equal to (.*)$")
    public void titleAssert(String expected_title)
    {
        String title_from_response=response.jsonPath().get("title");
        Assert.assertEquals(title_from_response, expected_title,"Actual title did not match expected title");
    }



}



