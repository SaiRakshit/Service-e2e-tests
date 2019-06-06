package StepDefinitions;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.RestAssured;
import io.restassured.response.Response;
import static org.testng.Assert.fail;
import org.testng.Assert;
public class PostRequest {

    private Response response;
    private String restendpoint=UtilBase.getBaseUrl();

    @Given("^I don't have access to create data$")
    public void checkAccess()
    {
        //Supply wrong authentication details.
    }

    @When("I try to upload data$")
    public void postEmptyData(){
        try{
            response= RestAssured.post(restendpoint).then().extract().response();
        }catch (Exception e){
            e.printStackTrace();
            fail("Failed to do a Post Request");
        }


    }

    @Then("^the api should deny it$")
    public void statusCodeAssert()
    {
        Assert.assertEquals(response.getStatusCode(),UtilBase.getUnAuthorizedActionCode(),"Actual status code did not match expected status code");

    }


}




