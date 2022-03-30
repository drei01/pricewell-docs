---
title: Email Login
date: 2022-03-09T12:20:14.543Z
description: Let your Stripe customers manage their own subscription via email
  using Email Login
keywords:
  - stripe
  - portal
  - email
  - login
---
### Simple Installation

If you don't have a backend for your website (maybe you have a Webflow site), you can enable "Email Login" for your Customer Portal. This feature lets your customer login to manage their subscriptions simply using their email address

### Enabling Email Login

Under "Advanced Settings" click "Enable Email Login". The preview above will update to show the input box where customers enter their email address.



![](/img/customer-portal-enable-email.png)

How it works


1. Your customer enters their email

![](https://www.pricewell.io/img/webflow/customer-portal-button.jpg)

\
\
2. They receive an email containing a unique link 

![](https://www.pricewell.io/img/webflow/webflow-stripe-login-link.png)

3. They are taken to the Customer Portal

![](https://www.pricewell.io/img/stripe-customer-portal.png)





### Customizing the email

The email containing the magic link is completely customizable. 
Under "Advance Settings" -> "Email Login" click "Show Customization Settings"

![](/img/customer-portal-email-customization.png)



#### Customizing the email sender

**Note:** If you don't know what **DNS** is, you will want to send this page to someone technical who can help here.\

In order to customize where the email is sent from (e.g. from your own domain), you will need to enter the full company address details (which are passed on to our email sending partner [SendGrid](https://sendgrid.com/))

![](/img/customer-portal-verify-sender.png)

Once you have entered all the address details, click "verify" and you will be given new DNS records to add for your domain to verify that you own the domain itself.

Once this is done you can choose your email address from the dropdown under "Sender"