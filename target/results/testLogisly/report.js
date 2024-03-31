$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/swagLabs.feature");
formatter.feature({
  "name": "process checkout on swag labs and login",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@all"
    }
  ]
});
formatter.scenario({
  "name": "process login until checkout with happy path",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@all"
    },
    {
      "name": "@checkout"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user direct to swag labs",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.swagLabs.swagLabsSteps.user_direct_to_swag_labs()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user on swag labs user login with valid credential",
  "keyword": "When "
});
formatter.match({
  "location": "steps.swagLabs.swagLabsSteps.user_on_swag_labs_user_login_with_valid_credential()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click button login",
  "keyword": "And "
});
formatter.match({
  "location": "steps.swagLabs.swagLabsSteps.user_click_button_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user success login into swag labs \"Products\"",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.swagLabs.swagLabsSteps.user_success_login_into_swag_labs(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user shorting current product from Z-A",
  "keyword": "And "
});
formatter.match({
  "location": "steps.swagLabs.swagLabsSteps.user_shorting_current_product_from_ZtoA()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "display product \"Sauce Labs Onesie\" on top list",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.swagLabs.swagLabsSteps.displayExpectedProduct(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user Select first product on list of products",
  "keyword": "And "
});
formatter.match({
  "location": "steps.swagLabs.swagLabsSteps.user_select_first_product_on_list_of_products()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user open menu checkout",
  "keyword": "And "
});
formatter.match({
  "location": "steps.swagLabs.swagLabsSteps.user_open_menu_checkout()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "display the product that checkouted \"Sauce Labs Onesie\"",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.swagLabs.swagLabsSteps.display_the_product_that_checkouted(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user checkout item",
  "keyword": "And "
});
formatter.match({
  "location": "steps.swagLabs.swagLabsSteps.user_checkout_item()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user input firstname \"irfan\"",
  "keyword": "And "
});
formatter.match({
  "location": "steps.swagLabs.swagLabsSteps.user_input_firstname(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user input lastname \"azhar\"",
  "keyword": "And "
});
formatter.match({
  "location": "steps.swagLabs.swagLabsSteps.user_input_lastname(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user input postal code \"17112\"",
  "keyword": "And "
});
formatter.match({
  "location": "steps.swagLabs.swagLabsSteps.user_input_postal_code(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click button continue",
  "keyword": "And "
});
formatter.match({
  "location": "steps.swagLabs.swagLabsSteps.user_click_button_continue()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click button finish on overview",
  "keyword": "And "
});
formatter.match({
  "location": "steps.swagLabs.swagLabsSteps.user_click_button_finish_on_overview()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will get info success order \"Thank you for your order!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.swagLabs.swagLabsSteps.user_will_get_info_success_order(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "failed login due to locked user",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@all"
    },
    {
      "name": "@lockeduser"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user direct to swag labs",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.swagLabs.swagLabsSteps.user_direct_to_swag_labs()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user on swag labs user login with locked user credential",
  "keyword": "When "
});
formatter.match({
  "location": "steps.swagLabs.swagLabsSteps.user_on_swag_labs_user_login_with_locked_user_credential()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click button login",
  "keyword": "And "
});
formatter.match({
  "location": "steps.swagLabs.swagLabsSteps.user_click_button_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user failed login and display message \"Epic sadface: Sorry, this user has been locked out.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.swagLabs.swagLabsSteps.user_failed_login_and_display_message(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "failed login due to not match credential",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@all"
    },
    {
      "name": "@notMatchCredential"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user direct to swag labs",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.swagLabs.swagLabsSteps.user_direct_to_swag_labs()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user on swag labs user login with not match credential",
  "keyword": "When "
});
formatter.match({
  "location": "steps.swagLabs.swagLabsSteps.user_on_swag_labs_user_login_with_not_match_credential()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click button login",
  "keyword": "And "
});
formatter.match({
  "location": "steps.swagLabs.swagLabsSteps.user_click_button_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user failed login and display message \"Epic sadface: Username and password do not match any user in this service\"",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.swagLabs.swagLabsSteps.user_failed_login_and_display_message(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});