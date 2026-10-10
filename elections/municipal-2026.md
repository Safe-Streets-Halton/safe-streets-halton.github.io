---
title: 2026 Halton Region Municipal Elections
layout: base-layout
custom_css: municipal-election-2026
---

{%- comment -%}
  Landing page for the 2026 municipal elections.
  Uses base-layout (not default) so the hero can run full width; base-layout already provides <main>.
  Data: _data/elections/Municipal 2026/ (cities.yml for ward counts and ward-map links,
  categories.yml for the scoring categories, questions.yml for the general (no city name) questions).
  The survey pages link back to #burlington, #oakville and #how-well-grade-responses on this page.
{%- endcomment -%}
{%- assign m26 = site.data.elections.Municipal_2026 -%}
<div class="m26">
{%- include survey-icon-sprite.html -%}
<header class="m26-hero">
<img class="m26-hero-img" src="{{ '/uploads/crosswalk-banner.webp' | relative_url }}" alt="" width="1080" height="713" fetchpriority="high">
<div class="m26-hero-shade"></div>
<div class="m26-hero-inner">
<p class="m26-eyebrow">Halton Region · Municipal Elections</p>
<h1 class="m26-h1">Your Streets Are on the <span class="m26-h1-accent">Ballot</span></h1>
<p class="m26-date">Election Day: <time datetime="2026-10-26">Monday, October 26, 2026</time></p>
<p class="m26-hero-text">Whether you walk, cycle, take transit or drive, you deserve to get around Halton safely. Find out where your candidates stand, and vote for streets that work for everyone.</p>
</div>
</header>
<nav class="m26-toc" aria-label="On this page">
<div class="m26-toc-inner">
<span class="m26-toc-label">On this page:</span>
<a class="m26-btn-quiet" href="#voting">Get Ready to Vote</a>
<a class="m26-btn-quiet" href="#survey">Candidate Survey</a>
<a class="m26-btn-quiet" href="#questions">Questions to Ask</a>
<a class="m26-btn-quiet" href="#milton-halton-hills">Milton &amp; Halton Hills</a>
</div>
</nav>
<div class="m26-body">
<section id="voting" class="m26-section" aria-labelledby="voting-h">
<h2 id="voting-h" class="m26-h2">Get Ready to <span class="m26-accent">Vote</span></h2>
<p class="m26-text">Ontario’s municipal elections are this fall. On your ballot you’ll choose your:</p>
<ul class="m26-offices" role="list">
<li>Mayor</li>
<li>Regional Councillor</li>
<li>Local Councillor</li>
<li>School Board Trustee</li>
</ul>
<p class="m26-text">Candidate lists, voting locations and advance voting dates are on your city’s official election page. Not sure which city you’re in? See the <a href="https://www.halton.ca/the-region/regional-council-and-committees/municipal-elections">Halton Region elections overview</a>.</p>
<div class="m26-official">
<a class="m26-card" href="https://www.burlington.ca/en/council-and-city-administration/elections.aspx"><span class="m26-card-name">Burlington</span><span class="m26-card-link">Official election page <span aria-hidden="true">↗</span></span></a>
<a class="m26-card" href="https://www.oakville.ca/town-hall/elections/"><span class="m26-card-name">Oakville</span><span class="m26-card-link">Official election page <span aria-hidden="true">↗</span></span></a>
<a class="m26-card" href="https://www.milton.ca/en/town-hall/2026-municipal-election.aspx"><span class="m26-card-name">Milton</span><span class="m26-card-link">Official election page <span aria-hidden="true">↗</span></span></a>
<a class="m26-card" href="https://www.haltonhills.ca/election"><span class="m26-card-name">Halton Hills</span><span class="m26-card-link">Official election page <span aria-hidden="true">↗</span></span></a>
</div>
<p class="m26-note"><strong>Not on the voters’ list yet?</strong> The online registration deadline has passed, but you can still register in person. See <a href="https://www.elections.on.ca">Elections Ontario</a> for how. For general information about voter registration, visit <a href="https://www.registertovoteon.ca">registertovoteon.ca</a>.</p>
</section>
<section id="survey" class="m26-section" aria-labelledby="survey-h">
<h2 id="survey-h" class="m26-h2">Where the <span class="m26-accent">Candidates</span> Stand</h2>
<p class="m26-text">We asked every municipal candidate in Burlington and Oakville the same eight questions about transit, road safety and active transportation. Choose your city, then your ward or the mayor’s race, to read their answers and see how we scored them.<br><a href="#how-well-grade-responses">How we score responses</a></p>
<div class="m26-cities">
{%- for entry in m26.cities %}
{%- assign city = entry[0] %}
{%- assign cfg = entry[1] %}
{%- assign slug = city | downcase %}
<article id="{{ slug }}" class="m26-city" aria-labelledby="{{ slug }}-h">
<div class="m26-city-banner">
<img src="{{ '/assets/' | append: slug | append: '_big_banner.webp' | relative_url }}" alt="" width="1920" height="1125" loading="lazy">
<h3 id="{{ slug }}-h" class="m26-city-name">{{ city }}</h3>
</div>
<div class="m26-city-body">
<p class="m26-city-label">{{ city }} candidates:</p>
<div class="m26-pages">
<a class="m26-wardmap" href="{{ cfg.ward_map_url }}">Not sure of your ward?<span class="visually-hidden"> {{ city }} ward map</span></a>
<a class="m26-chip" href="{{ '/elections/municipal-2026/' | append: slug | append: '/mayor/' | relative_url }}">Mayor<span class="visually-hidden">, {{ city }}</span></a>
{%- for w in (1..cfg.wards) %}
<a class="m26-chip" href="{{ '/elections/municipal-2026/' | append: slug | append: '/ward-' | append: w | append: '/' | relative_url }}">Ward {{ w }}<span class="visually-hidden">, {{ city }}</span></a>
{%- endfor %}
</div>
{%- if slug == "burlington" %}
<p class="m26-city-note"><img src="{{ '/assets/partners/ico-burlingtongreen-transparent.png' | relative_url }}" alt="" width="176" height="128" loading="lazy"><span>Check out the survey conducted by our friends at <a href="https://www.burlingtongreen.org/candidate-responses-2026/">BurlingtonGreen</a>!</span></p>
{%- endif %}
</div>
</article>
{%- endfor %}
</div>
<div class="m26-score">
<h3 id="how-well-grade-responses" class="m26-h3">How We Score Responses</h3>
<p class="m26-text">Every response is reviewed against a detailed rubric so candidates are assessed consistently and fairly. We don’t publish the rubric itself, but each response is scored from 0 to 4 in the four categories below. Across every category we’re looking for the same thing: real awareness of the issue, and a willingness to act on it – not just supportive language.</p>
<ul class="m26-cats" role="list">
{%- for cat in m26.categories %}
<li class="m26-cat"><svg class="m26-cat-ico" viewBox="0 0 512 512" aria-hidden="true" focusable="false"><use href="#sv-icon-{{ cat.icon }}"/></svg><span class="m26-cat-label">{{ cat.label }}</span></li>
{%- endfor %}
</ul>
</div>
</section>
<section id="questions" class="m26-section m26-questions" aria-labelledby="questions-h">
<div class="m26-questions-intro">
<h2 id="questions-h" class="m26-h2">Questions You Can <span class="m26-accent">Ask</span></h2>
<p class="m26-text">These are the questions we asked every candidate. Ask your own candidates at the door, at a debate or by email – the same ones or your own version – and see how they answer.</p>
<img class="m26-photo" src="{{ '/assets/palladium-way-group-photo.jpg' | relative_url }}" alt="Safe Streets Halton volunteers in safety vests at an outreach table" width="1179" height="944" loading="lazy">
</div>
<ol class="m26-qlist" role="list">
{%- for q in m26.questions %}
<li class="m26-q"><span class="m26-q-num" aria-hidden="true">{{ forloop.index }}</span><span class="m26-q-text">{{ q.text }}</span></li>
{%- endfor %}
</ol>
</section>
<section id="milton-halton-hills" class="m26-panel" aria-labelledby="mhh-h">
<div class="m26-panel-text">
<h2 id="mhh-h" class="m26-h3 m26-panel-h">Why Not Milton or Halton Hills?</h2>
<p class="m26-text">Safe Streets Halton is a small, volunteer-run organization, and right now we don’t have organized volunteer capacity in Milton or Halton Hills to run this survey properly there. We’d love to cover all four municipalities in a future election.</p>
</div>
<a class="m26-btn-light" href="{% link get-involved/volunteer.html %}">Volunteer in Your Community</a>
</section>
<p class="m26-footnote">Safe Streets Halton is a non-partisan organization. We do not endorse any party or candidate.</p>
</div>
</div>
