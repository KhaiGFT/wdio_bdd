@regression  @web_regression
Feature: Web Login

@web_smoke   @web_login
Scenario: As a user, I can log in our website successfully

    #Web login
    Given I access the Login page on browser
    When I login with following credentials on browser
        | username     | password |
        | autoQAGFT    | admin    |
    Then I should see home page which title is "Welcome Admin" on browser

@web_savedList
Scenario: As a user, I can successfuly save input text in SavedList on Home page

    #Web save input into SavedList on Home page
    Given I access the Home page on browser by following credentials
        | username     | password |
        | autoQAGFT    | admin    |
    When I input the following texts and click Save on browser 
      | autoQA@gft.com     | 
      | auto@gft.com       | 
      | test@gft.com       |
      | autoQA2026@gft.com |
    Then I should see the following texts at Saved List on browser
      | autoQA@gft.com     | 
      | auto@gft.com       | 
      | test@gft.com       |
      | autoQA2026@gft.com |