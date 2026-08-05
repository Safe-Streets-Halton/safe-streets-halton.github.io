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

# Local development

If you can install ruby and bundler.

```sh
bundle install
bundle exec jekyll serve --livereload
```

If you don't want to install ruby or bundler or jekyll, you can use a docker container.

```sh
docker run -it --volume "$PWD:/srv/jekyll" --publish 4000:4000 --publish 35729:35729 --rm jekyll/jekyll:4.3 jekyll serve --host 0.0.0.0 --livereload
```
