# Safe Streets Halton's website

This repository contains the source code for Safe Streets Halton's website, built using Jekyll and hosted on GitHub Pages. The website provides information about our initiatives, events, and ways to get involved in promoting safer streets in the Halton region.

# Navbar
## Dropdown Menus
To create a dropdown menu in the navbar, you can use the following structure in the `_config.yml` file:

```yaml
header_pages:
    #... other items
  - url: "<Parent Page URL>"
    dropdown:
        - title: "Item Title"
            url: "Child Page URL"
        - title: "Another Item Title"
            url: "Another Child Page URL"
    # remaining items
```