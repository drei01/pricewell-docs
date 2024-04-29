---
title: Pory.io
date: 2024-04-28T11:54:53.627Z
description: How to add Stripe subscriptions to Pory.io
keywords:
  - pory
  - stripe
---

In the following article we'll teach you how to restrict access to your Pory pages using [Stripe](https://stripe.com/) and [PriceWell](https://www.pricewell.com/). After reading this, you'll be able to create a pricing table and restrict access to your Pory pages based on the subscription plan.

## What is Pory.io?

Pory is a no-code builder for creating portals and internal tools. You can build a website based on data in Airtable without giving away access to your base.

## Adding a Pricing Table to Pory

First, you need to create a pricing table in PriceWell. You can follow these [instructions](/getting-started/create-a-pricing-page/) to create a pricing table.

Once your pricing table is ready. You need to copy the snippet.

![](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/80028013703/original/Y3JoIGjNOCwshdnpVkwMqbMd_mdMSLsE3g.png?1628079850)

Head over to Pory and add a section to your homepage (the homepage usually make sense for a pricing table) but you can add it anywhere you want.

Select "Content" and choose a "Custom Code Block", this will be a blank block that will let you add any HTML code. Here you can paste the snippet you copied from PriceWell.

![Pory.io editor displaying a custom code block](/img/pory-custom-code.png)

Publish the changes and preview your page. You'll now see your PriceWell pricing table on your Pory page.

## Restricting Access to Pory Pages

You can use PriceWell's Gated Content feature to restrict access to certain pages on your Pory site. Follow these [instructions](/features/gated-content) to set up gated content within PriceWell.

**Tips💡**

- Have all your restricted pages start with the same URL, for example, `/members-home`, `/members-content`. Then you can add a single restriction ins PriceWell (e.g. starts with `/members`).
- Make sure you set up the **exact** same products in your Gated Content as you did for your Pricing Table. If you are using Stripe test mode for your Pricing Table, make sure you are using test mode products for your Gated Content as well.

Once you have set up your gated content in PriceWell, copy the snippet and head over to Pory.

Go to Settings -> Integrations -> Custom Code and paste the snippet in the box. Press "Save Changes". This will add the snippet to **every** page on your Pory site (but it will only be active on the pages you have restricted in PriceWell).

![Pory.io dashboard showing the custom code setting screen](/img/pory-gate-content.png)

Now visit one of the restricted pages of your restricted pages and you will be prompted to enter your email address to access the content.

![A webpage restricted to Stripe customers only using PriceWell](/img/gated-content-demo.gif)