---
layout: page
title: Adoption
permalink: /adopt/
---

<div class="row">
  <div class="col-md-4"></div>
  <div class="col-md-4">
    <a class="btn btn-lg btn-block btn-padding btn-success" href="https://galtct.armgnt.com/gms_appform.php" role="button">Apply</a>
  </div>
</div>

<div class="row">
  <div class="col-md-4"></div>
  <div class="col-md-4">
    <form action='https://www.paypal.com/cgi-bin/webscr' method='post'>
      <input type='hidden' name='cmd' value='_donations'>
      <input type='hidden' name='business' value='accounting@galtx-centex.org'>
      <input type='hidden' name='amount' value='75'>
      <input type='hidden' name='currency_code' value='USD'>
      <input type='hidden' name='item_name' value='Adoption Application Deposit'>
      <input type='hidden' name='return' value='https://galtx-centex.org/adopt/'>
      <input type='hidden' name='cancel_return' value='https://galtx-centex.org/adopt/'>
      <input type="submit" name="submit" value="Submit Application Deposit" class="btn btn-lg btn-block btn-padding btn-primary">
    </form>
  </div>
</div>

<div class="text-center">
  ($75 application deposit is required with submission of the application)
</div>

## Adopting a Greyhound from GALT-Central Texas

The application is processed in several steps. We want to get a feel for your family life to begin considering the right
personality match and ensure that the family and greyhound are an appropriate fit together. Our process includes the steps listed below.

## Application review

We will contact you to ask additional questions and will check your references. We will also discuss any behavioral and
training items that are pertinent to items found in your application.

## Home visit

Once the application review has occurred, we will schedule a home visit. The purpose of the home visit is to assess your
home and/or yard and note any items that may pose a danger to a greyhound, and discuss preventative measures to take. A
volunteer from the Placement Team will visit you in your home, and will answer any questions you may have that did not
come up during the application review. All adults that live in the home need to be present for this visit.

## Adoption Approval

After the home visit, we will notify you of the decision. We reserve the right to deny an application for any reason.
If approved, we will begin the process of helping you select the best greyhound to suit your interest and lifestyle.
We discourage requesting a dog based solely on physical traits.
Greyhounds are pets and are to be incorporated into your family lifestyle based on personality and character traits.
Keep in mind, it is likely that a greyhound will behave differently in your home than they did at the meet and greet.

## Pre-Adoption Visit

After you have met a dog and agreed with your GALT-Central Texas placement volunteer on a good match, we will arrange for a second home
visit with the selected dog. The adoption can be finalized at this point or you have the option of an extended trial
period to make sure the dog is a good fit for your family. It could take several months for a dog to adapt to its
permanent home and its complete personality to show, but it is easy to determine if a chosen dog is not a good fit. Most
dogs are often nervous and do not exhibit their true nature or personalities in the first 24-48 hours, so it is
important to be prepared for that introduction to your home and family. If all is well, the GALT-Central Texas placement team volunteer
will set a time to finalize the adoption. We are available to help you and your new family member adjust and work
through any issues as long as you need us.

## Adoption Fees

### Non-refundable adoption fee of ${{ site.data.fees.StandardFee }} for Greyhounds

<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
  <input type='hidden' name='cmd' value='_donations'>
  <input type='hidden' name='business' value='accounting@galtx-centex.org'>
  <input type='hidden' name='amount' value='{{ site.data.fees.StandardFee }}'>
  <input type='hidden' name='currency_code' value='USD'>
  <input type='hidden' name='item_name' value='Adoption fee for Greyhounds'>
  <input type='hidden' name='return' value='https://galtx-centex.org/adopt/'>
  <input type='hidden' name='cancel_return' value='https://galtx-centex.org/adopt/'>
  <input type="submit" name="submit" value="Pay Adoption Fee - ${{ site.data.fees.StandardFee }}" class="btn btn-primary btn-padding">
</form>

<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
  <input type='hidden' name='cmd' value='_donations'>
  <input type='hidden' name='business' value='accounting@galtx-centex.org'>
  <input type='hidden' name='amount' value='{{ site.data.fees.StandardFee | minus: 75 }}'>
  <input type='hidden' name='currency_code' value='USD'>
  <input type='hidden' name='item_name' value='Adoption fee for Greyhounds'>
  <input type='hidden' name='return' value='https://galtx-centex.org/adopt/'>
  <input type='hidden' name='cancel_return' value='https://galtx-centex.org/adopt/'>
  <input type="submit" name="submit" value="Adoption Fee w/o Deposit - ${{ site.data.fees.StandardFee | minus: 75 }}" class="btn btn-primary btn-padding">
</form>

### Non-refundable adoption fee of ${{ site.data.fees.SeniorFee }} for Greyhounds age 7 and up

<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
  <input type='hidden' name='cmd' value='_donations'>
  <input type='hidden' name='business' value='accounting@galtx-centex.org'>
  <input type='hidden' name='amount' value='{{ site.data.fees.SeniorFee }}'>
  <input type='hidden' name='currency_code' value='USD'>
  <input type='hidden' name='item_name' value='Adoption fee for Greyhounds age 7 and up'>
  <input type='hidden' name='return' value='https://galtx-centex.org/adopt/'>
  <input type='hidden' name='cancel_return' value='https://galtx-centex.org/adopt/'>
  <input type="submit" name="submit" value="Pay Adoption Fee - ${{ site.data.fees.SeniorFee }}" class="btn btn-primary btn-padding">
</form>

<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
  <input type='hidden' name='cmd' value='_donations'>
  <input type='hidden' name='business' value='accounting@galtx-centex.org'>
  <input type='hidden' name='amount' value='{{ page.SeniorFree | minus: 75 }}'>
  <input type='hidden' name='currency_code' value='USD'>
  <input type='hidden' name='item_name' value='Adoption fee for Greyhounds age 7 and up'>
  <input type='hidden' name='return' value='https://galtx-centex.org/adopt/'>
  <input type='hidden' name='cancel_return' value='https://galtx-centex.org/adopt/'>
  <input type="submit" name="submit" value="Adoption Fee w/o Deposit - ${{ site.data.fees.SeniorFee | minus: 75 }}" class="btn btn-primary btn-padding">
</form>

### Non-refundable adoption fee of ${{ site.data.fees.LurcherFee }} for Lurchers

<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
  <input type='hidden' name='cmd' value='_donations'>
  <input type='hidden' name='business' value='accounting@galtx-centex.org'>
  <input type='hidden' name='amount' value='{{ site.data.fees.LurcherFee }}'>
  <input type='hidden' name='currency_code' value='USD'>
  <input type='hidden' name='item_name' value='Adoption fee for Lurchers'>
  <input type='hidden' name='return' value='https://galtx-centex.org/adopt/'>
  <input type='hidden' name='cancel_return' value='https://galtx-centex.org/adopt/'>
  <input type="submit" name="submit" value="Pay Adoption Fee - ${{ site.data.fees.LurcherFee }}" class="btn btn-primary btn-padding">
</form>

<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
  <input type='hidden' name='cmd' value='_donations'>
  <input type='hidden' name='business' value='accounting@galtx-centex.org'>
  <input type='hidden' name='amount' value='{{ site.data.fees.LurcherFee | minus: 75 }}'>
  <input type='hidden' name='currency_code' value='USD'>
  <input type='hidden' name='item_name' value='Adoption fee for Lurchers'>
  <input type='hidden' name='return' value='https://galtx-centex.org/adopt/'>
  <input type='hidden' name='cancel_return' value='https://galtx-centex.org/adopt/'>
  <input type="submit" name="submit" value="Adoption Fee w/o Deposit - ${{ site.data.fees.LurcherFee | minus: 75 }}" class="btn btn-primary btn-padding">
</form>

## GALT Veterinarian Protocol for Adoption & Foster Applicants

This document defines GALT’s requirements for veterinarian care for an applicant’s pet(s), both
foster and adoption. In addition to the items listed below, we will also inquire as to the
historical care of the pets. In the event that the practice is no longer open, dated records on
practice letterhead will be accepted in lieu of the vet check.

All cats and dogs must be current on core vaccinations (Rabies, DHPP) and wellness exam. Cats
that are kept solely indoors must be current on Rabies vaccinations as it is required by law.
If the pet is exempt from core vaccinations, a letter must be submitted signed by a
veterinarian explaining why the animal is not current.  Annual heartworm test is required with
proof of current monthly heartworm preventative.

If the pet or pets is/are not current, they must not be greater than 6 months overdue.  If
greater than six months overdue, GALT has the right to terminate its consideration for adoption
or foster.  If less than 6 months overdue, the applicant has <u>7 days</u> to update his/her
pets’ vaccinations and physical exams.

GALT recommends, in consultation with your veterinarian, current Bordatella, Lepto and Canine
Flu vaccinations as well as monthly flea and tick preventatives due to the high exposure to
diseases.

If pets are recently deceased (within the past quarter), we will conduct the vet check to
ensure that they were kept current before they passed away and were well cared for in life.

### Questions?

[Adoption FAQs](/adopt/faqs)

More questions? Email the Adoption Coordinator at [adopt@galtx-centex.org](mailto:adopt@galtx-centex.org)
