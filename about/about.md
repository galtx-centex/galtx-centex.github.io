---
layout: page
title: Greyhound Adoption League of Texas <br> Central Texas Chapter
permalink: /about/
---

GALT-Central Texas is a chapter of [Greyhound Adoption League of Texas Inc.](http://galtx.org),
a national 501(c)3 non-profit organization.

We are passionate about Greyhounds and our mission is to find the perfect home for these
beautiful, sweet, gentle dogs!

Our mission is to find responsible loving homes for greyhounds, to acquaint the
public with the desirability of greyhounds as pets and to inform them of the
availability of greyhounds for adoption.

We place all dogs in foster homes upon coming into our group.  This helps us
get to know the dog and their personality before they go to their home.
We pride ourselves in helping you pick the perfect dog.  While the dogs are at
their foster home, they are taken to the veterinarian to get spayed or
neutered, all their shots, have their teeth cleaned, and heartworm tested.
During this time, they are also evaluated for injuries or health problems.

We host Meet & Greets at different pet stores and other locations to show off
our greyhounds and to let people know what good pets they make.  If you are
looking for a good, healthy, wonderful dog as a pet, please consider adopting a
greyhound.

<div class="text-center">

<h2>Officers and Directors</h2>

{% for contact in site.data.contacts %}
  {% cycle 'begin row': '<div class="row">', '', '' %}
  <div class="col-sm-4">
    <h3>{{ contact.name }}</h3>

    {% for title in contact.title %}
      {{ title }}
      <br>
    {% endfor %}

    {% if contact.phone %}
      {{ contact.phone }}
      <br>
    {% endif %}

    {% if contact.email %}
      <a href="mailto:{{ contact.email }}">{{ contact.email }}</a>
    {% endif %}
  </div>
  {% cycle 'end row': '', '', '</div>' %}
{% endfor %}
{% cycle 'end row' : '', '</div>', '</div>' %}

<div class="row">
  <div class="col-md-6">
    <h2>Board of Directors Meetings</h2>

    Board of Directors meetings are held on the third Tuesday of the month from 7-9 pm at
    <a href="http://goo.gl/oV0yar">Old Quarry Branch Library</a>.
    Members are always welcome to join us.
  </div>
  <div class="col-md-6">
    <h2>Membership Meetings</h2>

    GALT-Central Texas's membership meetings are held quarterly
    (tentatively in March, June, September, and December)
    at various locations around the Austin area.
  </div>
</div>

<h2>Contact Us</h2>
GALT-Central Texas<br>
P.O. Box 170160<br>
Austin, Texas 78717<br>
<a href="tel:855-446-3278">(855) 4-GO-FAST</a>
<br>
<a href="mailto:info@galtx-centex.org">info@galtx-centex.org</a>

</div> <!-- text-center -->
