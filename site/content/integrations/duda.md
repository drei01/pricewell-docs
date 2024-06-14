---
title: Duda
date: 2024-06-13T11:54:53.627Z
description: How to add Stripe subscriptions to Duda.co
keywords:
  - duda
  - stripe
---

In the following article we'll teach you how to restrict access to your Duda pages using [Stripe](https://stripe.com/) and [PriceWell](https://www.pricewell.com/). After reading this, you'll be able to create a pricing table and restrict access pages on your Duda website based on your customers' subscription plan.

## What is Duda?

Duda is an easy to use website builder that allows you to create websites with a drag-and-drop interface. You can create a website from scratch or use one of their templates.

## Adding a Pricing Table to a Duda site

First, you need to create a pricing table in PriceWell. You can follow these [instructions](/getting-started/create-a-pricing-page/) to create a pricing table.

Once your pricing table is ready. You need to copy the snippet.

![](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/80028013703/original/Y3JoIGjNOCwshdnpVkwMqbMd_mdMSLsE3g.png?1628079850)

Head over to Duda and add an **Empty** section to your homepage (the homepage usually make sense for a pricing table but you can add it anywhere you want). By default Duda will give you two content blocks side-by-side. Remove one of them so you have a single block to work with.

Click to add content, choose the HTML widget and paste the snippet you copied from PriceWell. Now click "Update".

![Adding a section to a Duda site and adding an HTML widget](/img/duda-pricing-table.gif)

Publish the changes and preview your page. You'll now see your PriceWell pricing table on your Duda site.

## Restricting Access to Duda pages

You can use PriceWell's Gated Content feature to restrict access to certain pages on your Duda site. Follow these [instructions](/features/gated-content) to set up gated content within PriceWell.

**Tips💡**

- Have all your restricted pages start with the same name (which forms the URL), for example, `/members-home`, `/members-content`. Then you can add a single restriction ins PriceWell (e.g. starts with `/members`).
- Make sure you set up the **exact** same products in your Gated Content as you did for your Pricing Table. If you are using Stripe test mode for your Pricing Table, make sure you are using test mode products for your Gated Content as well.

Once you have set up your gated content in PriceWell, copy the snippet and head over to Duda.

Go to SEO & Settings -> Head HTML -> Head HTML and paste the snippet in the box. Press "Save" and confirm. Now "Republish" your site This will add the snippet to **every** page on your Duda site (but it will only be active on the pages you have restricted in PriceWell).

![Adding custom HTML code to a Duda site](/img/duda-gated-content.gif)

Now visit one of the restricted pages of your restricted pages and you will be prompted to enter your email address to access the content.

![A webpage restricted to Stripe customers only using PriceWell](/img/gated-content-demo.gif)