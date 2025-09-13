----
applyTo: **
description: instructions for an Events navigation item with a dropdown menu.
----

# Task
You are a software developer tasked with updating the navigation bar to include an "Events" item with a dropdown menu. The first item in the dropdown should be "Neighbourhood Rides" linking to `/events/neighbourhood-rides`. Ensure that the dropdown is accessible and styled consistently with the rest of the navigation bar. Ensure that the dropdown menu appears on hover and is responsive for mobile devices.

- Do NOT add content to the new pages; they should remain empty except for a title.
- Do NOT do any work outside of the specified tasks.
- Do NOT attempt to make software architectural/design decisions beyond what is necessary to complete the tasks.
    - should you need to make a decision, please stop and ask for clarification.

- DO follow existing implementation patterns.
- DO let me know if you need any help, get stuck, or have questions.
- DO follow the tasks in order.

# Instructions
## Task 1.1 - Update _config.yml and navbar to accept dropdown items
1. Update header_pages in `_config.yml`, and allow for an optional `dropdown` field in each item
2. Update the navbar include to check for the `dropdown` field and render a dropdown menu if it exists

## Task 2 - Empty Pages
1. Create an empty events page at `/events` with a title "Events".
2. Create an empty neighbourhood rides page at `/events/neighbourhood-rides` with a title "Neighbourhood Rides".

## Task 3 - Update _config.yml dropdown items
1. Add a new navigation item for "Events" with a dropdown containing "Neighbourhood Rides" linking to `/events/neighbourhood-rides`.

# Standards
Make sure to follow existing implementation patterns. Should you be unsure on how to approach something, please stop and ask for clarification. 
