---
title: Stripe Metered Billing Tool
date: 2023-12-15T11:02:05+06:00
description: Report metered usage to Stripe without code
keywords:
  - metered billing
  - stripe
  - usage-based billing
---

| ⚠️ You must connect your Stripe account to use this feature. For help, see the [Connecting Stripe](https://help.pricewell.com/getting-started/connecting-a-stripe-account/) article. |
| -------------------------------------------------------------------- |

## Reporting metered usage to Stripe

In [PriceWell](https://app.pricewell.io/app/tools/usage), go to Tools -> Subscription Usage Reporter.

- Choose the Stripe mode (Test or Live) in the top-right corner.
- Find the Stripe subscription you want to report usage for and copy the Subscription Id.
![Stripe dashboard displaying a subscription](/img/stripe-subscription-id.png)
- Paste the Subscription Id into the Subscription Id field.
- Enter the usage amount (this could be hours, API calls, or anything else you want to charge for).
- Choose whether to add the usage to the current period or overwrite the current quantity.
- Click "Report Usage"

### Demo

![Reporting metered usage to Stripe](https://www.pricewell.com/img/usage-billing-tool.gif)
