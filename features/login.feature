Feature: Login feature

    Scenario Outline: Verify login with <condition>

        Given I am on the login page
        When I login with <username> and <password>
        Then I verify the message <message> is displayed on the login page

        Examples:
            | condition                     | username      | password      | message                                                                   |
            | correct username and password | standard_user | secret_sauce! | Login successfully!                                                       |
            | with incorrect password       | standard_user | incorrectPass | Epic sadface: Username and password do not match any user in this service |
            | with incorrect username       | incorrectName | secret_sauce  | Epic sadface: Username and password do not match any user in this service |

