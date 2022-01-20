---
title: Switch from Test to Live mode
date: 2022-01-20T16:49:39.704Z
description: Switch between Stripe test mode and Stripe live mode for Customer
  Portal and Pricing Page
keywords:
  - test
  - live
  - switch
---
In this article, we will show you how to switch your Pricing Page or Customer Portal from Test mode (the default) to Live mode in order to collect real credit card payments.

### **Pricing Pages**

\
New Pricing Pages **default to Test mode**. That means it will use your Test mode products in Stripe. In order to switch to Live mode, you need to click on the orange toggle in the top-right corner of the page. Once you confirm using the popup, PriceWell will create a copy of your Test mode Stripe products to Stripe's Live mode and then set your Pricing Page to Live. This means you can accept real credit card payments and the test cards (424242 etc) will no longer work.

[![](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/80065546865/original/ikR90o91YuVHtxDz4ow-XkVsGEHEDao-6A.gif?1641311966)](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/80065546865/original/ikR90o91YuVHtxDz4ow-XkVsGEHEDao-6A.gif?1641311966)

### \
**Customer Portal**

If your Customer Portal is linked to a Pricing Page, you cannot set it to use Live mode on it's own. Instead, you need to set the linked Pricing Page to Live mode following the steps above. Once this is done, the Customer Portal will be set to Live mode and will look for customers in Stripe's Live mode (instead of test mode).