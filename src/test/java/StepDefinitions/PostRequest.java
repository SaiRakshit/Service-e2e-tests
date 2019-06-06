package StepDefinitions;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.RestAssured;
import io.restassured.response.Response;
import static org.testng.Assert.fail;
import org.testng.Assert;
public class PostRequest {

    private Response response;
    private int unAuthorisedStatusCode=403;


    @When("I try to upload data$")
    public void postEmptyData(){
        try{
            response= RestAssured.post(UtilBase.getBaseUrl()).then().extract().response();
        }catch (Exception e){
            e.printStackTrace();
            fail("Failed to do a Post Request");
        }


    }

    @Then("^the the api should deny it$")
    public void statusCodeAssert()
    {
        Assert.assertEquals(response.getStatusCode(),unAuthorisedStatusCode,"Actual status code did not match expected status code");

    }


}




