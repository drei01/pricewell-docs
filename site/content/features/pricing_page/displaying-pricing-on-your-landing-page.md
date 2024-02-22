---
title: Displaying Pricing on your Landing Page
date: 2023-02-10T09:20:48.264Z
description: "Learn how to re-use your pricing table to display "
keywords:
  - pricing
  - landing
  - stripe
  - saas
---
In this article, we'll show you how to re-use your PriceWell pricing table to display pricing on your landing page. This allows you to update your pricing in a single place.

## Pricing on the landing page

I﻿t's common for SaaS products to display their pricing on the landing page. They do this so potential customers can decide upfront whether the app is right for them and whether there's a pricing tier that fits their needs.

![Zendesk landing page displaying their pricing table](/img/zendesk-pricing.png)

It's not common to ask for payment at this point. Instead SaaS products often ask the person to register an account and only ask for payment at a later date.

## Re-use your Pricing Table

Using PriceWell's Pricing Table feature you can configure your pricing in a single place and never worry about updating your pricing in multiple places (marketing site, app etc).

### Using the code snippet

If you are using the code snippet, simply add 
```data-button-link="https://app.mysaas.com/register"```
to your code snippet. And **all** buttons on your pricing page will link to your chosen page (i.e. your registration page).

I﻿f you want to know which product was clicked on you can add a parameter to the link
```data-button-link="https://app.mysaas.com/register?plan={{PLAN_ID}}"```

N﻿ote: `{{PLAN_ID}}` will be replaced automatically by PriceWell.

### Using the Bubble Plugin

If you are using the Bubble plugin, drag the **Pricing Table** component into your landing page, paste the Page Id as normal and add a **Custom Button Link**

![PriceWell Bubble plugin editor with custom button link filled in](/img/bubble-plugin-custom-link.png)
