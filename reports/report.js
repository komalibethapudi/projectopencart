$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/main/resources/feature/OpenCart.feature");
formatter.feature({
  "name": "OpenCartApplication",
  "description": "  In order to create a webpage\n  As a e-commerce vendor\n  I want to get access to the portal",
  "keyword": "Feature"
});
formatter.background({
  "name": "these are the steps common for every scenario to be followed",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I have browser with opencartpage",
  "keyword": "Given "
});
formatter.match({
  "location": "com.cts.stepdefintion.StepDefinition.i_have_browser_with_opencartpage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "ValidRegisterCredential",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User register details from Excel \"src/test/resources/excel/Book1.xlsx\" with SheetName \"Sheet2\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.cts.stepdefintion.StepDefinition.user_register_details_from_Excel_with_SheetName(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "my account has created",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cts.stepdefintion.StepDefinition.my_account_has_created()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "ClickOnLogout",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I enter \u0027\u003cusername\u003e\u0027 and \u0027\u003cpassword\u003e\u0027 and click on logout",
  "keyword": "When "
});
formatter.step({
  "name": "I should logout from the page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "liilly022333@gmail.com",
        "komali1234"
      ]
    },
    {
      "cells": [
        "komalikomali@gmail.com",
        "komali123"
      ]
    }
  ]
});
formatter.background({
  "name": "these are the steps common for every scenario to be followed",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I have browser with opencartpage",
  "keyword": "Given "
});
formatter.match({
  "location": "com.cts.stepdefintion.StepDefinition.i_have_browser_with_opencartpage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "ClickOnLogout",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I enter \u0027liilly022333@gmail.com\u0027 and \u0027komali1234\u0027 and click on logout",
  "keyword": "When "
});
formatter.match({
  "location": "com.cts.stepdefintion.StepDefinition.i_enter_and_and_click_on_logout(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should logout from the page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cts.stepdefintion.StepDefinition.i_should_logout_from_the_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "these are the steps common for every scenario to be followed",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I have browser with opencartpage",
  "keyword": "Given "
});
formatter.match({
  "location": "com.cts.stepdefintion.StepDefinition.i_have_browser_with_opencartpage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "ClickOnLogout",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I enter \u0027komalikomali@gmail.com\u0027 and \u0027komali123\u0027 and click on logout",
  "keyword": "When "
});
formatter.match({
  "location": "com.cts.stepdefintion.StepDefinition.i_enter_and_and_click_on_logout(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should logout from the page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cts.stepdefintion.StepDefinition.i_should_logout_from_the_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});