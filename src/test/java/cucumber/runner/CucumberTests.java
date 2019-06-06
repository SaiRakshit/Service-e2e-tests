package cucumber.runner;


import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;



@RunWith(Cucumber.class)
@CucumberOptions(
        plugin = {"pretty" ,"html:target/cucumber-html-report"},
        glue = {"StepDefinitions"},
        features = {"src/test/java/features"})
public class CucumberTests {}
