---
title: Secure Mode (Advanced)
date: 2022-02-03T12:40:50.389Z
description: Secure your Stripe Customer Portal
keywords:
  - security
  - portal
---
During development you can use your customer's email address or Stripe id with the customer portal. When you are ready to take it live you must switch to secure mode (or anyone could check whether an email address is one of your customers). Secure mode can be configured in either the "Configuration" or "Snippet" section of the Customer Portal edit screen (as shown below).



[![](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/80013093147/original/7VKE8B_MJ3cQmIIFsVZdaIi7iI1y65ka-Q.jpeg?1621449390)](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/80013093147/original/7VKE8B_MJ3cQmIIFsVZdaIi7iI1y65ka-Q.jpeg?1621449390)



#### Encrypting customer data



Once enabled, you must encrypt your customer's email address or Stripe id before passing it into the Customer Portal snippet.