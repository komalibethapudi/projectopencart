Feature: OpenCartApplication 
  In order to create a webpage
  As a e-commerce vendor
  I want to get access to the portal
  
  Background: these are the steps common for every scenario to be followed
  Given I have browser with opencartpage 
  
  Scenario: ValidRegisterCredential
  When User register details from Excel "src/test/resources/excel/Book1.xlsx" with SheetName "Sheet2"   
  Then my account has created
    
  Scenario Outline: InValidRegisterCredential
  When user enter '<firstname>' and '<lastname>' and '<email>' and '<telephone>' and '<address>' and '<city>' and '<postcode>' and '<country>' and '<region>' and '<password>' and '<passwordconfirm>'
  Then I get Invalid credentials 
   
  Examples:
  |firstname|lastname|email|telephone|address|city|postcode|country|region|password|passwordconfirm|
  |lilly|chintabathina|s0nii12@gmail.com|9052349765|sidharthanagar|podalada|532243|India|Delhi|komali1234|komali1234|
  
  
     Scenario: ClickOnSoftware
   When I click on the product Software
   Then I should get the text
   
    Scenario: ClickOnWishList
    When User enter search details from Excel "src/test/resources/excel/Book1.xlsx" with SheetName "Sheet1"   
   Then I should get My WishList
 
   Scenario Outline: ClickOnLogout
   When I enter '<username>' and '<password>' and click on logout
   Then I should logout from the page
   
   Examples:
   |username|password|
   |liilly022333@gmail.com|komali1234|
   |komalikomali@gmail.com|komali123|
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
  