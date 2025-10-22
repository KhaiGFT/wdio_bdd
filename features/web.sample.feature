Feature: Web Login
Scenario: As a user, I can log in our website successfully

    #Web login
    Given I access the login page on browser
    When I login with following credentials on browser
        | username | password |
        | admin    | admin    |
    Then I should see home page which title is "Welcome Admin" on browser