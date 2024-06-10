---
title: How to find the Stripe Invoice ID
date: 2024-06-10T09:04:20.025Z
description: Where to find a Stripe Invoice or PaymentIntent Id on the Stripe Dashboard
---
When generating [invoice PDFs](/features/invoices/generating-invoices/) you will need the Stripe Invoice ID or PaymentIntent ID. Here's how you can find it:

## Determine if you need the Invoice ID or PaymentIntent ID

**Payments made using PriceWell, subscriptions or Stripe Checkout** should all have a Stripe Invoice associated.

**Payment made with Payment Links** _do not_ have a Stripe Invoice attached be default. For this you'll need to find the Payment Intent instead in order to generate an invoice PDF.

## Find Stripe Invoice ID

For live payments visit the [Stripe Live Invoices Dashboard](https://dashboard.stripe.com/invoices) and for test payments visit the [Stripe Test Invoices Dashboard](https://dashboard.stripe.com/test/invoices).

![Stripe Invoice Dashboard](/img/stripe-invoice-dashboard.png)

Locate the payment using the filters provided. Once you've found the payment, click on it to view the details. The Invoice ID is located at the top-right of the page. Click it to copy the id.

![Stripe Invoice Page showing how to locate the invoice id in the top right](/img/stripe-invoice-id.png)

## Find Stripe Payment Intent ID

For live payments visit the [Stripe Live Payments Dashboard](https://dashboard.stripe.com/payments) and for test payments visit the [Stripe Test Payments Dashboard](https://dashboard.stripe.com/test/payments).

![Stripe Payments Dashboard](/img/stripe-payment-dashboard.png)

Locate the payment using the filters provided. Payments that aren't associated with a subscription have a descriptions that starts `pi_`. Click on the payment to view the details. The Payment Intent ID is located at the top-right of the page. Click it to copy the id.

![Stripe Payment Intent Page showing how to locate the payment intent id in the top right](/img/stripe-payment-id.png)

[Create a FREE PriceWell account](https://app.pricewell.io/register) to PDF invoice generator now.

