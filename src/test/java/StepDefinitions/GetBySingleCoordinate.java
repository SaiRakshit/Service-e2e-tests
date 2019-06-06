package StepDefinitions;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.RestAssured;
import io.restassured.response.Response;
import static org.testng.Assert.fail;

import org.testng.Assert;

public class GetBySingleCoordinate {

    private Response response;
    private String restendpoint= UtilBase.getBaseUrl();

    @Given("^I have single coordinate$")
    public void settingUpUrl(){
        String coordinate=UtilBase.getSingleCoordinate();
        restendpoint=restendpoint+coordinate;

    }

    @When("I get weather information$")
    public void retrieveDataWithSinglePoint(){
        try{

            response= RestAssured.get(restendpoint).then().extract().response();
        }catch (Exception e){
            e.printStackTrace();
            fail("Error hitting end-point");
        }


    }

    @Then("^the status code from the api should be (\\d+)$")
    public void statusCodeAssert(int expected_status_code)
    {
       Assert.assertEquals(response.getStatusCode(),expected_status_code,"Actual status code did not match expected status code");

    }





}



