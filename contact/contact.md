---
layout: page
title: Contact GPA Central Texas
permalink: /contact/
---

__P.O. Box 10069__

__Austin, TX 78766__

__(855) 4-GOFAST (446-3278)__

__[president@gpa-centex.org](mailto:president@gpa-centex.org)__

## Board of Directors Meetings

Board of Directors meetings are held on the third Tuesday of the month from 7-9pm at

[The Church on Congress Ave. 1511 So. Congress Austin, TX 78704](http://goo.gl/vTCxBs).  Members are always welcome to
join us.

## Membership Meetings

GPA-CT's membership meetings are held quarterly (tentatively in March, June, September, and December) at various
locations around the Austin area.

## Officers & Board of Directors:

{% for contact in site.data.contacts %}
### {{ contact.title }}

{{ contact.name }}

{{ contact.phone }}

{% if contact.email %}
[{{ contact.email }}](mailto:{{ contact.email }})
{% endif %}
{% endfor %}

## *We need You!*

Email [president@gpa-centex.org](mailto:president@gpa-centex.org) to volunteer!
