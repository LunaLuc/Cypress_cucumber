Feature: Bing
  Scenario: Add items to cart
    Given go to url site
    When choose and confirm location
    And search with Dress
    And select first item and choose size
    And click add to card
    Then verify go to cart with new URL which includes cart
    And verify price