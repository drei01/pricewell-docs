---
title: Why don't my Stripe Products appear?
date: 2022-02-16T13:04:20.025Z
description: Troubleshoot why Stripe Products don't show up in PriceWell
---
There can be multiple reasons why your Stripe products fail to show in PriceWell when creating a new Pricing Page.

#### Stripe Products are in Live mode

By default, Pricing Pages look for products in Stripe's Test Mode so you can test your integration before going live. If you have already created your products in Stripe's Live Mode, you can **switch your Pricing Page to Live Mode** by clicking "Switch to Live Mode"

![link to switch from Stripe Test Mode to Live Mode](/img/switch_to_live_mode.png)

#### Products using an unsupported pricing type

We are working hard to add support for all of Stripe's pricing types to PriceWell. Below is a list of the pricing types we currently support:

* Per-Unit Pricing
* Tiered Pricing (Beta)
* Licenced Pricing (Coming Soon)
* Metered Usage (Coming Soon)

Any products that do not use a supported pricing type will not appear in PriceWell

#### Product is not Active

Only active products appear in PriceWell. Make sure your product is not archived or deleted in Stripe.

#### Using the wrong Stripe account

It can easily happen that you accidentally created a new Stripe account when connecting to PriceWell. \
If you aren't logged into Stripe at the time, they will ask you to enter your email address. Make sure you **use the same email as your Stripe admin account.**

![stripe connect window with a text input asking for email address](/img/stripe-connect-step1.png)
