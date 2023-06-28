---
title: Bubble
date: 2022-02-03T12:33:54.838Z
description: Integrate Stripe Checkout with Bubble using PriceWell
keywords:
  - bubbble
  - nocode
---
[![](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/80027919545/original/3SYGmmCAAkBhhmd9_ct4dyRAeHK46k6teQ.png?1628064213)](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/80027919545/original/3SYGmmCAAkBhhmd9_ct4dyRAeHK46k6teQ.png?1628064213)

This page will walk you through integrating both the Pricing Page and Customer Portal with Bubble. **Without configuring Webhooks** this will save you many hours compared to other methods. This really is the fastest way to integrate Stripe with Bubble.io.

We'll go through:

* Installing the PriceWell Bubble Plugin
* Using the Pricing Page and Customer Portal components 
* Sync subscription data from Stripe to Bubble
* Displaying the Customer Portal once a user has a subscription.

- - -

## Install the PriceWell Bubble Plugin

Go to the [PriceWell Bubble Plugin](https://bubble.io/plugin/pricewell-1643279429035x716037702183813100) page and click "Install Plugin"

![Stripe Billing Bubble.io plugin by PriceWell](/img/bubble-plugin.png)

## Step 1: Create a Pricing Page and Customer Portal

See detailed instructions below:

[How to create a Pricing Page](https://pricewell.freshdesk.com/a/solutions/articles/80000600056)

[How to create a Customer Portal](https://pricewell.freshdesk.com/a/solutions/articles/80000658397)

## Step 2: Embed the Pricing Page in Bubble

Open the page you want to embed your pricing (**this is usually a page where the user is already logged in like a Billing Admin page**).

Add a new **Pricing Table** element.

If you can't see this element, make sure you have the PriceWell plugin installed.

Copy the **Pricing Page ID** from the Pricing Page you created in Step 1.

![Highlighted link to copy a pricing page id from PriceWell](/img/copy-page-id.png)

Paste the Pricing Page ID into the **Pricing Page Id** field.

![Screenshot of Pricing Table bubble element configuration](/img/bubble-configure-pricing-table.png)

If you know the customers email address or Stripe Customer Id, you can pass it in as a parameter. This will pre-fill the email field on the pricing page.

You can also pre-apply coupon codes here by passing in the coupon code as a parameter.

## Sync subscription data from Stripe to Bubble

### Enable the Data API

Go to Settings -> API

1. Enable Data API
2. User (this gives us access to the user data fields that you allow in the next step)
3. Use field display instead of ID for key names

### Add data fields

In your Bubble App go to Data -> Data types -> User

Create the following new fields on the User data type:

| Name                        | Type |
| --------------------------- | ---- |
| StripeId                    | text |
| StripeSubscriptionId        | text |
| StripeSubscriptionPeriodEnd | date |
| StripeSubscriptionPriceId   | text |
| StripeSubscriptionStatus    | text |

| ⚠️  You must create **all** the fields or the integration won't work |
| -------------------------------------------------------------------- |

### Syncing Custom Fields (optional)

T﻿he fields above are required for the integration to work. You can also sync any additional fields you require (e.g. subscription quantity) by clicking "Add Custom Field".

Now go to Data -> Privacy and give "Everyone else" access to the new Stripe fields and the email field. They must also be able to "Find this in searches" and "Modify via API". This is so that the PriceWell plugin can update the user's subscription details for you.

![Make data visible by the Bubble.io API](/img/bubble-data-privacy.png)

| ⚠️  Be sure to check `Use field display instead of ID for key names` |
| -------------------------------------------------------------------- |

Now go to Settings -> API -> Generate new API token. *Copy the API token*

Go to PriceWell.io, login and click Integrations -> Bubble Integration.

Paste the API token into the **Bubble API Token** field. Then enter you Bubble App Name and click **Save**. You bubble app name will look something like this `https://YOUR_APP.bubbleapps.io`.

![Bubble integration configuration screen in PriceWell](/img/bubble-integration.png)

If the integration fails to save, double check your API token and app name.

 **✨ Stripe subscription changes will appear in Bubble automatically ✨**

| ⚠️  Changes in your Stripe Test Mode will go to /version-test in Bubble. Live Stripe subscriptions will go to you live Bubble app |
| --------------------------------------------------------------------------------------------------------------------------------- |

## How to make the Customer Portal show when the User has a Subscription

Head back to the page in bubble that has the Pricing Table element on it.

Now add a **Conditional** step so that the element is only visible when the Current User's Stripe Subscription Status is not "active".

![Configuration of conditional visibility in Bubble.io](/img/pricing-table-conditional.png)

Copy the Customer Portal Id from the Customer Portal (on PriceWell.io) you created in Step 1.

Add a **Customer Portal** element to the page and paste the Customer Portal Id into the **Customer Portal Id** field. You should also pass in the Stripe Customer Id or email as a parameter (*Current User's Stripe Id*).

Add a conditional step so that the Customer Portal is only visible when the Current User's Stripe Subscription Status is "active".

✨ **The Customer Portal will now show when the user has an active subscription and if not the Pricing Table will show.** ✨



## D﻿isplay Pricing on your Landing Page

Many subscription products display their pricing table on the landing page but require the customer to register an account before subscribing to a plan. To do this, you can use the "**Custom Button Link**" feature of the plugin.\
\
Add a **Pricing Table** component to your landing page and paste the pricing page id as before. This time add a url to the **Custom Button Link** field (e.g. https://yoursite.com/register). This will make **all** the buttons  on the pricing page act as links. Instead of taking the customer to check out, they will be sent to the link you defined.\
\
O﻿nce a customer has registered, if you require payment before they can use your app, you can display another pricing table (this time without the custom button link).



![PriceWell Bubble plugin with a custom link filled in](/img/bubble-plugin-custom-link.png)