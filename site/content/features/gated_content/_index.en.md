---
title: Gated Content
date: 2022-10-10T11:02:05+06:00
description: Member-only content for your website
type: features
keywords:
  - gated
  - content
  - authentication
---
If you want to restrict certain pages on your website to only paying Stripe customers, you are in the right place.

### What is Member-only content?

Member-only content or "gated content" is a feature that lets you restrict certain pages (or whole sections) of your website to paying customers only. This can be used for:

* Paid newsletters
* Premium content for subscribers only (similar to Patreon)
* Paid content like PDF reports
* Courses
* SaaS products

Anything you want to restrict can be hidden behind gated content.

### What does it look like?

Here's a quick demo of what your customer will see.

![A webpage restricted to Stripe customers only using PriceWell](/img/gated-content-demo.gif)

### Restricting pages of your website

Your gated content can always be found in the sidebar:

![PriceWell sidebar showing "Gated Content"](/img/gated-content-sidebar.png)

To configure a new piece of gated content head to Create New -> Gated Content

![PriceWell create menu with "Gated Content" selected](/img/gated-content-create.png)

### Configuring Gated Content

Configure the following:

**Description:** This helps you differentiate between different gated content within PriceWell

**Domain:** This is the website you wish to restrict content for (example: google.com)

**Paths:** These are the pages you wish to restrict to paying subscribers. They must start with a "/" (example: /my-course)\
 Paths can have one of two types:

* **Exact:** Only this path will match (example: "/my-course" will restrict "/my-course" but not "/my-course/lesson-1")
* **Starts With:** This can be used to restrict whole folders (example: "/pages" would restrict "/pages", "/pages/ashley" and "/pages/ashley/home" etc)

**Unauthorized Redirect (optional):** This determines which page we send your customer to if they do not have a paid subscription in your Stripe account. This field is optional. If it is not specified the contents of the page will be hidden and the customer will be shown a modal stating their access is restricted.

![PriceWell Gated Content configuration screen](/img/gated-content-configure.png)

### Adding it to your Website

After you have finished your configuration, hit the "Snippet" button at the bottom (note: if the button doesn't work, check you filled in all the required fields above).

You will be taken to the snippet view where you can copy a small piece of javascript to add to your website.

> The snippet MUST be added to the <head> section of your HTML or the restrictions won't work

![javascript snippet](/img/gated-content-snippet.png)

Simply copy the snippet as shown and add it to the **<head>** tag in your website

When a customer visits one of your restricted pages, they will be asked to enter their email address. PriceWell will send them an email containing a secure link (**valid for 24 hours**) which takes them back to the same webpage. The customer will be allowed to view the page if:

* There is a Stripe customer (in either your Live or Test Stripe account) with a matching email
* The Stripe customer has an active paid subscription (their last invoice was for more than $0)



If there is no customer for the email they entered, the customer will be redirected to the **Unauthorized Redirect** you entered in the configuration



#### What if I already know the email address for my customer?

Some website builders (such as Bubble, Wordpress etc) store user accounts. You customer may already be logged in. If this is the case, you can pass the email address to PriceWell so they will be allowed immediate access to Gated Content (if they match the criteria above).

To do this, you need to change the snippet to add `data-email="CUSTOMER_EMAIL_HERE"` after the first *<script* (replacing CUSTOMER_EMAIL_HERE with your customers actual email address).

So the new snippet should looks something like

`<script data-email="CUSTOMER_EMAIL_HERE" src="...`


#### Need Help?

PriceWell is for everyone, particularly those who don't code or even know what HTML stands for (Hypertext Markup Language btw). We are very happy to help, no question is a stupid on. Just r[each out to support ](mailto:support@pricewell.io)if you have any questions at all about gated content. We're here to help you.