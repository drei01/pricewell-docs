---
title: Adding Metadata
date: 2024-05-02T10:48:00.289Z
description: Add metadata to Stripe subscriptions
keywords:
  - checkout
  - metadata
---

In this guide, we'll walk through how to add metadata to your Stripe subscriptions using PriceWell.

## What is Metadata?

Metadata is a way to store additional information about your subscriptions. This information can be used in your application to pass additional context that you may need for your use case.

*Example:*

You could store the internal ID of a your user in the metadata field. This way you can easily link the subscription to the user in your database.

## Adding Metadata to Subscriptions

Adding metadata in PriceWell is simple. You can add metadata to your subscriptions by adding a `data-metadata` attribute to the div element in your Pricing Page snippet.

Here's an example:

```javascript
<div
    id="pricewell-4b1d36dc-74ac-446a-a099-41f67a7a9977"
    data-email="matt@pricewell.com"
    data-meta-id="123"
></div>
<script
    src="http://snippet.pricewell.io/4b1d36dc-74ac-446a-a099-41f67a7a9977/pricewell.js"
    async=""
></script>
```

You'll notice in this snippet that we added `data-meta-id="123"` which will set a metadata field in Stripe with the value `123`. You can replace this value this anything you like.

Here's what it looks like in Stripe.

![Stripe subscription with metadata](/img/stripe-meta-id.png)

PriceWell automatically adds two metadata fields to your subscriptions:

- PageId: The ID of the Pricing Page that the subscription was created on.
- PlanId: The ID of the PriceWell plan that the subscription was created for.
