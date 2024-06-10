---
title: Generating Stripe Invoice PDFs
date: 2023-01-24T11:02:05+06:00
description: Generate Stripe PDF Invoices
keywords:
  - invoices
  - invoice
  - bulk
  - pdf
---

| ⚠️ You must connect your Stripe account to use this feature. For help, see the [Connecting Stripe](https://help.pricewell.com/getting-started/connecting-a-stripe-account/) article. |
| -------------------------------------------------------------------- |

### Can I edit a Stripe Invoice?

If a Stripe invoice has already been paid, there's no way to edit it in Stripe. Instead, you can use the PriceWell Invoice Generator to generate a new invoice with the correct details. This is useful when a customer asks you to add their address to an invoice, even if they've already paid.

### Can I generate an invoice for a Payment Link?

Yes, this is **not** possible within Stripe itself but PriceWell's invoice PDF tool can generate an invoice for any payment made through Stripe.

### Generating an Invoice PDF

- Go to the [Invoice Generator](https://app.pricewell.io/invoices/generate) page.
- Enter the Stripe invoice ID (See "How to find Stripe Invoice Id" below).
- Make sure the correct **Stripe mode** is selected (Test or Live).
- Add the customer's address details.
- Click "Generate Invoice"
- Click "Download PDF" to download the invoice.

You can re-generate the invoice as many times as you like

![animation showing how to generate a Stripe invoice pdf with PriceWell](/img/invoice-generator.gif)

#### How to find Stripe Invoice Id or Payment Intent Id

Follow our [Guide on how to find the Stripe Invoice or Payment ID](/faq/how-to-find-stripe-invoice-id/)