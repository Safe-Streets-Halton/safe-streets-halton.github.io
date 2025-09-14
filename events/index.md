---
title: Events
permalink: "/events/"
layout: page
icalfeed: https://calendar.google.com/calendar/ical/926ec19eafe787c87e14dd080b121ffda8227a8fc9d5f5fbfeb2c8097f5468df%40group.calendar.google.com/public/basic.ics

---

{% assign approx_one_year_in_future = "now"
    | date: "%s"
    | plus: 31536000
    | date: "%Y-%m-%d" %}

{% ical url: {{page.icalfeed}} reverse: false only_future: true before_date: {{approx_one_year_in_future}} %}

{% comment %}
  Note:
   Compute a duration, and render it if between 30-120 minutes.
   Otherwise assume the duration in event is a mistake.
{% endcomment %}
{% assign dtend = event.end_time | date: "%s" %}
{% assign dtstart = event.start_time | date: "%s" %}
{% assign duration_seconds = dtend | minus: dtstart %}
{% assign duration_minutes = duration_seconds | divided_by: 60 %}

## {{ event.summary }}

* {{ event.start_time | date: "%A %F %l:%M %p" }}
{% if duration_minutes >= 30 and duration_minutes < 120 -%}
* Duration: {{ duration_minutes }} minutes
{% endif -%}
{% if event.location -%}
* Location:
<span class="adr">{{ event.location | replace: ", Canada", "" }}</span>
    —
    <small>
    [OpenStreetMap](https://www.openstreetmap.org/search?query={{ event.location | uri_escape }}&minlon=-80.44941172485548&minlat=43.270554613257694&maxlon=-79.33223948364454&maxlat=43.749618848985655#layers=YNG) |
    [Google Maps](https://www.google.com/maps/search/?api=1&query={{ event.location | uri_escape }}) |
    [Apple Maps](https://maps.apple.com/place?address={{ event.location | uri_escape }})
    </small>
{%- endif %}

{{ event.simple_html_description | newline_to_br }}

{% if event.url contains 'https://www.eventbrite.ca/' %}
[RSVP]({{ event.url }}){: .btn-primary }
{% endif %}


{% endical %}

---

[Subscribe to calendar feed for future events]({{page.icalfeed}})
