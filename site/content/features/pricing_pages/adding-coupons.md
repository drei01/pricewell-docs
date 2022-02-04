---
title: Adding Coupons
date: 2022-02-04T18:48:00.289Z
description: Send Coupons directly to Stripe Checkout with PriceWell
keywords:
  - checkout
  - coupon
  - coupons
  - promo
  - codes
---
You can send coupons directly to the Checkout using PriceWell. This means your customers don't have to enter a coupon code.\
\
**Applying a Coupon**

Your Pricing Page snippet will look something like the following\
`<div id="pricewell-a506c336-a866-430b-99b3-347fba5b78f4"></div><script src="http://localhost:3200/a506c336-a866-430b-99b3-347fba5b78f4/pricewell.js" async=""></script>`

You simply need to add an attribute `data-coupon="COUPON_ID"` to the div element and replace COUPON_Id with your[ coupon id from Stripe](https://dashboard.stripe.com/coupons). **Note:** The coupon must be created in the same Stripe environment (test or live) as your Pricing Page.\
\
The updated snippet should look like this:\
`<div id="pricewell-a506c336-a866-430b-99b3-347fba5b78f4" data-coupon="COUPON_ID"></div><script src="http://localhost:3200/a506c336-a866-430b-99b3-347fba5b78f4/pricewell.js" async=""></script>`\
``\
**Allowing customers to enter coupons**\
\
If you would like to let your customers enter their own coupons, this can be enabled in PriceWell under "Advanced Settings" -> "Enable coupons"

![checkbox to allow coupons in stripe checkout](/img/allow-coupons.png)