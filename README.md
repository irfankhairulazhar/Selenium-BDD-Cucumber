Overview 

This project uses Selenium for browser automation and Cucumber for implementing BDD (Behavior Driven Development) tests. 
It enables writing tests in a natural language style, making them easy to understand for non-technical stakeholders.
for this sample using "https://www.saucedemo.com/v1/"

Prerequisites

Before setting up this project, make sure you have the following installed:

- Java JDK (version 11 or higher)
- Maven (for managing project dependencies)
- IntelliJ IDEA or Eclipse (recommended IDEs)
- Google Chrome / firefox


Folder Structure

selenium-bdd-cucumber/
|-- src/
|   |-- main/
|   |   |-- java/
|   |   |   `-- [Page Object]  ==> To defined your element and call selenium function (click, wait,and etc)
|   |   |   `--  [Utility Classes] ==> configuration to create Driver Manager (configure browser setup), SeleniumHelpers ( to convert selenium function to be resubility and maintainability, Threadmanaer to managing parallel execution of tests. This is particularly important when running a large suite of tests that need to be executed efficiently to save time and resources. 
|   `-- test/
|       |-- java/
|       |   `-- Runners/
|       |       `-- [Base TestRunners] ==> To call your brower that you waht use for execute test case 
|       |       `-- [TestRunner] ==> To call your feature file and set which test that you want run using unique outline. also to generate cucumber after you run test case
|       |   `-- Steps/ ==> To Definitioning your cucumber test case into programming language being used
|       |    `-- resources/
|       |        `-- features/
|       |            `-- [Feature Files]==> to create you test case using gherkin format
|       |        `-- features/    
|       |            `-- [data.properties] ==> to save your test data and this data would be called on class of steps   
|-- pom.xml => add all depedecy needed 
|-- testng.test.xml => to configgure your test suite using testng and this suite will have connection to test runner under step folder

