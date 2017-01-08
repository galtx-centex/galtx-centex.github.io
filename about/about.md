---
layout: page
title: About Us
permalink: /about/
---

Greyhound Pets of America-Central Texas (GPA-CT) is a chapter of Greyhound Pets of America, a national 501(c)3
non-profit organization whose mission is to find responsible loving homes for greyhounds, to acquaint the public with
the desirability of greyhounds as pets and to inform them of the availability of greyhounds for adoption.

GPA-CT places all dogs in foster homes upon coming into our group.  This helps us get to know the dog and their
personality before they go to their home.  We pride ourselves in helping you pick the perfect dog.  While the dogs are at
their foster home, they are taken to the veterinarian to get spayed or neutered, all their shots, have their teeth
cleaned, and heartworm tested.  During this time, they are also evaluated for injuries or health problems.

GPA-CT hosts Meet & Greets at different pet stores and other locations to show off our greyhounds and to let people know
what good pets they make.  If you are looking for a good, healthy, wonderful dog as a pet, please consider adopting a
greyhound.

<div class="text-center">

<h2>Officers and Directors</h2>

<div class="row">
{% for contact in site.data.contacts %}
<div class="col-sm-6 col-md-6">
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
{% endfor %}
</div>

<div class="row">
  <div class="col-md-6">
    <h2>Board of Directors Meetings</h2>

    Board of Directors meetings are held on the third Tuesday of the month from 7-9 pm at
    <a href="http://goo.gl/oV0yar">Old Quarry Branch Library</a>.
    Members are always welcome to join us.
  </div>
  <div class="col-md-6">
    <h2>Membership Meetings</h2>

    GPA-CT's membership meetings are held quarterly
    (tentatively in March, June, September, and December)
    at various locations around the Austin area.
  </div>
</div>

<h2>Contact Us</h2>
Greyhound Pets of America-Central Texas
<br>
P.O. Box 10069
<br>
Austin, TX 78766
<br>
<a href="tel:855-446-3278">(855) 4-GO-FAST</a>
<br>
<a href="mailto:info@gpa-centex.org">info@gpa-centex.org</a>

</div> <!-- text-center -->
