---
title: Create a Customer Portal
date: 2022-01-21T19:47:47.538Z
description: Step by step guide on creating your first Stripe Customer Portal
keywords:
  - portal
---
PriceWell’s customer portal feature gives your customers a one-stop-shop where they can self-manage their subscription. Currently it works with any subscription created in Stripe, but only from PriceWell’s Pricing Page feature. 



### Set Up Customer Portal

First, [log in](https://app.pricewell.io/login) to your PriceWell account. You will be taken to the dashboard.

[![](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/80015747392/original/A61I_vDzKQS0rfQL7Z4tgbwPi5CevmMq2A.png?1622907359)](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/80015747392/original/A61I_vDzKQS0rfQL7Z4tgbwPi5CevmMq2A.png?1622907359)

Click “create new customer portal”. This will take you to the customer portal wizard.

### Choose the pricing page to create a Customer Portal for

[![](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/80015747414/original/m322dI1bJrsbdFNGcLivjpeHZoKI0-6acQ.png?1622907411)](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/80015747414/original/m322dI1bJrsbdFNGcLivjpeHZoKI0-6acQ.png?1622907411)

    The Customer Portal (currently) works only with Pricing pages created by Pricewell. 



Press "Configure" to be taken to next step.



### Step 3: Configuration

[![](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/80015747438/original/QheEsFq_GoHNz2GRp1_2zA9GMjVM9ilahg.png?1622907445)](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/80015747438/original/QheEsFq_GoHNz2GRp1_2zA9GMjVM9ilahg.png?1622907445)

Next step includes configuring the Customer Portal to include all the necessary features that your customers might need. 



#### Payment Method     

    This means that you will give the option to your customers to update their payment method. Meaning that they will be free to update their card credentials and get charged in the newly updated address. 



Use Case: A customer’s card expired during the subscription. He wants to keep his/her subscription with the new card credentials, but he/she is not willing to cancel its existing subscription and initiate a new one with the updated credentials.



#### Update Subscription

    This means that you will allow customers to update their existing subscription, either with the choice of updating the plan that you have set up in Stripe or a promotion code offer. 



You also have the choice to select whether or not there will be a proration for the remaining period, an invoice issuance or no proration at all. 

Use Case: You want to allow customers to update in one button tap their subscriptions, prorating the remaining period, while using promotion code offers



#### Cancel Subscription

    Give your customers to cancel their subscriptions.

    You select whether the remaining billing period will be continued or the subscription will be cancelled immediately. 

    You also select whether the remaining period will be prorated. 



#### Subscription Pause

    Give your customers the option to pause their subscriptions for a 90-days period



#### Customer Update

    Give your customers the option to update any necessary details and select which one of them will be available to them for update



#### Invoice History

    Let your customers see their billing history including any single-purchase products and subscription invoices.



#### Secure Mode

 Without Secure Mode you can put any email address into the customer portal. That means, anyone can load the customer portal for any email address. 

 By enabling the secure mode, it lets you encrypt your customer’s email addresses before sending them to the Customer Portal using your API key so no one else can see the customer portal for a different customer.

Secure Mode is an advanced feature that should be enabled once you have tested the portal using plain email addresses. Check [Documentation ](https://pricewell.freshdesk.com/support/solutions/articles/80000613420)for more details



#### Email Authentication

The Customer will be asked to enter their email address before clicking the “Call to Action” button. The customer will receive an email containing a link that redirects them to the Customer Portal



Press "Snippet" to be taken to the next step.



### Step 4: Snippet and Custom Configuration

[![](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/80015747472/original/V284fX5sCnOk2R5RL2xIQt9kNPeJ8I6FnA.png?1622907504)](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/80015747472/original/V284fX5sCnOk2R5RL2xIQt9kNPeJ8I6FnA.png?1622907504)

####     Standard

    The code snippet is generated and you can copy and paste it into the HTML <body> of your webpage, in the exact place where you want your customers to view it. 



    Even though there is not an ideal spot to display the Manage Subscription button, many SaaS companies usually display it either in the Account Section or in the Payments Section. 

 

    

#### Custom

    There is also the option to use Pricewell’s Customer Portal, while creating your own Call to Action button and configure it in the way it best matches your website’s theme. You will still be able to have all the features you have added in the previous section. 



    You have to copy the generated script from the Custom Section and paste it into the <head> of your HTML. Then, when the button is created, you will call the generated function and this will automatically trigger the Customer Portal.