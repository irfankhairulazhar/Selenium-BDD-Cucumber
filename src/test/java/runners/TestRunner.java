package runners;
import io.cucumber.testng.CucumberOptions;

@CucumberOptions(
        plugin = {"json:target/results/testLogisly/cucumber-report.json", "html:target/results/testLogisly"},
        features = "src/test/resources/features",
        glue = "steps",
        tags = {"@all"}
)


public class TestRunner extends BaseTestRunner{
}
