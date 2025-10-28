@regression  @e2e_regression 
Feature: Web Login -> App Login -> Web input text, click Save and validate text in saved list -> App input text on Form

@e2e_smoke
Scenario: As a user, I can log into the secure area

    #Web login
    Given I access the Login page on browser
    When I login with following credentials on browser
        | username     | password |
        | autoQAGFT    | admin    |
    Then I should see home page which title is "Welcome Admin" on browser
    #App login
    Given I access the Login screen on application
    When I tap on Login of Login screen on application
    And I login with the following credentials on application
        | username          | password   |
        | autoQA@gft.com    | Test1234!  |
    Then I should see Login successfully popup on application

    #Web input
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

    #App form
    And I access the Form screen on application
    When I input the following text for input field of form Screen on application
      | Hello, this is a demo app |
    Then I should see the following text on input field of form Screen on application
      | Hello, this is a demo app |