Feature: App Login
Scenario: As a user, I can log in our application successfully

    #App login
    Given I access the Login screen on application
    When I tap on Login of Login screen on application
    And I login with the following credentials on application
        | username          | password   |
        | autoQA@gft.com    | Test1234!  |
    Then I should see Login successfully popup on application