@regression @app_regression
Feature: App Login

@app_smoke  @app_login
Scenario: As a user, I can log in our application successfully

    #App login
    Given I access the Login screen on application
    When I tap on Login of Login screen on application
    And I login with the following credentials on application
        | username          | password   |
        | autoQA@gft.com    | Test1234!  |
    Then I should see Login successfully popup on application

@app_form
Scenario: As a user, I can log in our application successfully

    #App Form testing
    Given I access the Form screen on application
    When I input the following text for input field of form Screen on application
      | Hello, this is a demo app |
    Then I should see the following text on input field of form Screen on application
      | Hello, this is a demo app |