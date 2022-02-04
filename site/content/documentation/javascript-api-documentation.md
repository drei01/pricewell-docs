---
title: JavaScript API Documentation
date: 2022-02-03T07:11:44.075Z
description: PriceWell API Documentation
keywords:
  - api
  - cli
  - frontend
---
**Warning:** This documentation is for skilled software developers only. We cannot provide any technical support if you choose to use our JavaScript client in a way it was not intended. Please had to the main documentation if you are not a developer.

---

The PriceWell JavaScript client exposes the following functions to interact with the PriceWell API.

### window.pricewell
**Kind**: global variable

* [pricewell](#pricewell)
    * [.checkout(pageId, planId, settings)](#pricewell.checkout) ⇒ <code>Promise</code>
    * [.upgrade(pageId, planId, settings)](#pricewell.upgrade) ⇒ <code>Promise</code>
    * [.customerPortal(id, config)](#pricewell.customerPortal)
    * [.features(pageId, config)](#pricewell.features) ⇒ <code>Promise</code>

<a name="pricewell.checkout"></a>

### pricewell.checkout(pageId, planId, settings) ⇒ <code>Promise</code>
Redirects the customer to the Stripe payment page

**Kind**: static method of [<code>pricewell</code>](#pricewell)

| Param | Type | Description |
| --- | --- | --- |
| pageId | <code>string</code> | The PriceWell ID of the page to checkout. |
| planId | <code>string</code> | The PriceWell ID of the plan to checkout. |
| settings | <code>object</code> |  |
| settings.quantity | <code>string</code> | quantity of the plan (Optional) |
| settings.email | <code>string</code> | Pre fill the email of the customer (Optional) |
| settings.stripeId | <code>string</code> | Stripe Customer Id to use for checkout (Optional) |

<a name="pricewell.upgrade"></a>

### pricewell.upgrade(pageId, planId, settings) ⇒ <code>Promise</code>
Update the current plan of a Stripe customer

**Kind**: static method of [<code>pricewell</code>](#pricewell)

| Param | Type | Description |
| --- | --- | --- |
| pageId | <code>string</code> | The PriceWell ID of the page |
| planId | <code>string</code> | The PriceWell ID of the plan to upgrade to |
| settings | <code>object</code> | One of email and stripeId are required |
| settings.quantity | <code>string</code> | quantity of the plan (Optional) |
| settings.email | <code>string</code> | Email address of current Stripe customer (Optional) |
| settings.stripeId | <code>string</code> | Stripe Customer Id (Optional) |

<a name="pricewell.customerPortal"></a>

### pricewell.customerPortal(id, config)
Redirects the customer to the Stripe Customer Portal to manage their subscription

**Kind**: static method of [<code>pricewell</code>](#pricewell)

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> |  |
| config | <code>object</code> | (one of stripeId or email must be present) |
| config.stripeId | <code>string</code> | The Stripe account id (optional) |
| config.email | <code>string</code> | The customer email (optional) |

<a name="pricewell.features"></a>

### pricewell.features(pageId, config) ⇒ <code>Promise</code>
Returns a list of features for the users current plan

**Kind**: static method of [<code>pricewell</code>](#pricewell)

| Param | Type | Description |
| --- | --- | --- |
| pageId | <code>string</code> |  |
| config | <code>object</code> | (one of stripeId or email must be present) |
| config.stripeId | <code>string</code> | The Stripe account id (optional) |
| config.email | <code>string</code> | The customer email (optional) |

<a name="pricewell.cancelSubscription"></a>

### pricewell.cancelSubscription(config) ⇒ <code>Promise</code>
Cancels a customers subscription

**Kind**: static method of [<code>pricewell</code>](#pricewell)

| Param | Type | Description |
| --- | --- | --- |
| config | <code>object</code> | (one of stripeId or email must be present) |
| config.companyId | <code>string</code> | Your company id |
| config.mode | <code>string</code> | Either test or live |
| config.stripeId | <code>string</code> | The Stripe customer id (optional) |
| config.email | <code>string</code> | The customer email (optional) |
| config.subscriptionId | <code>string</code> | The Stripe subscription id (optional) |