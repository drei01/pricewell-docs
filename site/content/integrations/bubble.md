---
title: Bubble
date: 2022-02-03T12:33:54.838Z
description: Integrate Stripe Checkout with Bubble using PriceWell
keywords:
  - bubbble
  - nocode
---
[![](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/80027919545/original/3SYGmmCAAkBhhmd9_ct4dyRAeHK46k6teQ.png?1628064213)](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/80027919545/original/3SYGmmCAAkBhhmd9_ct4dyRAeHK46k6teQ.png?1628064213)



This page will walk you through integrating both the Pricing Page and Customer Portal with Bubble. We'll go through:



* Embedding a Pricing Page in Bubble.
* Allowing a user to start a subscription once they are logged in.
* Displaying the Customer Portal once a user has a subscription.
* Reacting to subscription updates using Stripe Webhooks

- - -

## Step 1: Create a Pricing Page and Customer Portal

See detailed instructions below:



[How to create a Pricing Page](https://pricewell.freshdesk.com/a/solutions/articles/80000600056)



[How to create a Customer Portal](https://pricewell.freshdesk.com/a/solutions/articles/80000658397)



## Step 2: Embed the Pricing Page in Bubble

Open the page you want to embed your pricing (**this is usually a page where the user is already logged in like a Billing Admin page**).\
\
Add a new HTML element:

[![](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/80028012043/original/B7p4lYgLK5ArdE37NVbft4uQdDncihnsVg.png?1628079553)](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/80028012043/original/B7p4lYgLK5ArdE37NVbft4uQdDncihnsVg.png?1628079553)



Copy the snippet from PriceWell. **Be sure to choose the Existing Users snippet**





[](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/80028013703/original/Y3JoIGjNOCwshdnpVkwMqbMd_mdMSLsE3g.png?1628079850)



Paste the snippet into the HTML value of the element and **Insert Dynamic Data** to get your customer's email address. This will ensure that Stripe Checkout pre-fills the email address during checkout (so we can match it later when the subscription is created).

[![](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/80028013935/original/ID9Kys6ORShXbJqFW5n4hS5byZ1kP4ixzw.gif?1628079897)](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/80028013935/original/ID9Kys6ORShXbJqFW5n4hS5byZ1kP4ixzw.gif?1628079897)



## Step 3: Add subscription data to Bubble Things



We'll add a couple of new fields to the User in Bubble (you can add this to a Company if you have one) to keep track of the Stripe customer and subscription (so we know when to let the customer update/subscribe).



Create two new fields to User:



| Name                   | Type |
| ---------------------- | ---- |
| Stripe Customer Id     | text |
| Stripe Subscription Id | text |





[![](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/80028015878/original/csw1Zol6HvS24e9Yvd7wyY62SMP4ajybLg.png?1628080252)](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/80028015878/original/csw1Zol6HvS24e9Yvd7wyY62SMP4ajybLg.png?1628080252)



## Step 4: Make the Customer Portal show when the User has a Subscription



Head back to the page in bubble that has the HTML element containing our Pricing Page snippet.



Now add a **Conditional** step so that the HTML changes when the Current User has a Stripe Subscription Id (we'll be doing this in the next step).



[![](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/80028018672/original/-Z4E3mFDRuJJbbzd4mV67lmIoV7gNFIH6A.png?1628080760)](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/80028018672/original/-Z4E3mFDRuJJbbzd4mV67lmIoV7gNFIH6A.png?1628080760)



When the Stripe Subscription Id is **not empty** (that means the customer has a Stripe subscription), we want the HTML of the element to change. Copy the snippet for your PriceWell Customer Portal (**choose the Stripe Id tab**) and paste it in (where is says *Choose a Property to Change*, select *HTML*). Then use *Insert Dynamic Data* to put the Current User's Stripe Id between the quotes in data-stripe-id=""



[![](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/80028019045/original/FkP8qoWMm6pMKMZfI2KE2ffe8l28v4v4Rw.png?1628080834)](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/80028019045/original/FkP8qoWMm6pMKMZfI2KE2ffe8l28v4v4Rw.png?1628080834)



Your preview should look something like this. Note that your Pricing Page is still displayed because the preview doesn't have a Stripe Subscription Id set.



[![](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/80028020395/original/JZ3YbsVgmaAGcCUmvMW_2UEykgWfSWR6ZA.png?1628081055)](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/80028020395/original/JZ3YbsVgmaAGcCUmvMW_2UEykgWfSWR6ZA.png?1628081055)



## Step 5: Set the Stripe Ids when a subscription is created or deleted



We're going to use two Bubble concepts here (please read the documentation if you aren't familiar with them):

**Backend Workflows** ([docs](https://manual.bubble.io/miscellaneous/the-glossary#backend-workflow))

**API Connector** ([docs](https://manual.bubble.io/core-resources/bubble-made-plugins/api-connector))



### Install API Connector and create a new API

We need to create a custom API in order to get some information from Stripe (you'll see why in a moment).



[![](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/80028021962/original/2HK6STcGN7fw0vOp41DhDZ77LMLKMFO0oA.png?1628081375)](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/80028021962/original/2HK6STcGN7fw0vOp41DhDZ77LMLKMFO0oA.png?1628081375)

[![](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/80028072635/original/AU89kJnji3w5Jh72ao4JbarBzzus9cnqhQ.png?1628089574)](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/80028072635/original/AU89kJnji3w5Jh72ao4JbarBzzus9cnqhQ.png?1628089574)

Set the following fields:

| Field                        | Value                                                                                                             |
| ---------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| API Name                     | Stripe Customer                                                                                                   |
| Authentication               | HTTP Basic Auth                                                                                                   |
| Username                     | You Stripe Test **Secret Key** ([docs](https://stripe.com/docs/keys))                                             |
| Password                     | Blank                                                                                                             |
| Name                         | API Call                                                                                                          |
| Use as                       | Action                                                                                                            |
| Data type                    | JSON                                                                                                              |
| Method                       | GET                                                                                                               |
| Url                          | [https://api.stripe.com/v1/customers/\[stripeCustomerId]](https://api.stripe.com/v1/customers/[stripeCustomerId]) |
| URL parameters - Key         | stripeCustomerId                                                                                                  |
| URL parameters -Value        | (enter an example customer id from Stripe here)                                                                   |
| URL parameters - Private     | unchecked                                                                                                         |
| URL parameters - Allow blank | unchecked                                                                                                         |



Press **Initialize call** and the fields will be populated.\
\
We will use this API in the next step



## Step 6: Configure Backend Workflows



Now we need to configure a backend workflow to listen to changes from Stripe and update our User. For this, we are going to use Stripe Webhooks ([docs](https://stripe.com/docs/webhooks))\
\
**Go to Backend Workflows in Bubble** (make sure your plan has this enabled)

[![](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/80028094724/original/gGZuKbI6RpS7M_EHQ8J8smTXfYpLewkTiQ.png?1628096896)](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/80028094724/original/gGZuKbI6RpS7M_EHQ8J8smTXfYpLewkTiQ.png?1628096896)



Create a new **API Workflow**



[](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/80028094820/original/H-QZkyR9AdEyCbCBopGyszUNUaptXbiNZw.png?1628096971)

Configure the parameters as follows:



[](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/80028095202/original/UszQhA4vioP7DfCAea9821iTGKTFvXSJaA.png?1628097168)





| Parameter                                       | Value                |
| ----------------------------------------------- | -------------------- |
| API Workflow name                               | subscription-created |
| Expose as public API workflow                   | checked              |
| This workflow can be run without authentication | checked              |
| Ignore privacy rules when running the workflow  | checked              |
| Parameter definition                            | Detect request data  |



You will be shown a popup containing a URL. **Copy the URL to your clipboard**





[](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/80028095316/original/ciOgFOcx9Y1eyaVa8AcDTPhyvrjuUIxM6w.png?1628097261)

Now open a new browser tab and visit <https://dashboard.stripe.com/test/webhooks>



[![](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/80028095570/original/S3PXH0VDLwOO-BJrp5swhfKJzbdWamnLTA.png?1628097456)](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/80028095570/original/S3PXH0VDLwOO-BJrp5swhfKJzbdWamnLTA.png?1628097456)

Click "Add endpoint"



[![](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/80028095593/original/U3WqFCcWpSjAjRozncMYivDJD-7oG1OTCg.png?1628097479)](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/80028095593/original/U3WqFCcWpSjAjRozncMYivDJD-7oG1OTCg.png?1628097479)

Paste the URL from Bubble into "Endpoint URL" and under "Events to send" select **customer.subscription.created.** Then click "Add endpoint".



[![](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/80028095700/original/Zkfn09EmV8TnH5VyadURF8zfY1eUS3Q7Yw.png?1628097550)](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/80028095700/original/Zkfn09EmV8TnH5VyadURF8zfY1eUS3Q7Yw.png?1628097550)



Now press "Send test webhook"



[![](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/80028095747/original/uOibV1D2YxpqAVRkzDXvCuHUmjiqDRNxkw.png?1628097580)](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/80028095747/original/uOibV1D2YxpqAVRkzDXvCuHUmjiqDRNxkw.png?1628097580)



[![](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/80028095764/original/LU-BgGeFUKOP2uHhIvVj3Q-1nCYFwBDRiA.png?1628097603)](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/80028095764/original/LU-BgGeFUKOP2uHhIvVj3Q-1nCYFwBDRiA.png?1628097603)



Go back to your Bubble browser tab. It should have detected the request data and show the following.



[![](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/80028095827/original/DhBf3X3H0l1M2C7LKL54b7CqZB7WHtpNPQ.png?1628097635)](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/80028095827/original/DhBf3X3H0l1M2C7LKL54b7CqZB7WHtpNPQ.png?1628097635)



Press "Save".



Now **go back to Stripe** and update the webhook to remove "/initialize" from the end of the URL. This part is only used for detecting the data.



[![](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/80028095957/original/E3ak-o7iNkEHELScdnBC-WRowQdQ7fEq2A.png?1628097709)](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/80028095957/original/E3ak-o7iNkEHELScdnBC-WRowQdQ7fEq2A.png?1628097709)





**Back in Bubble,** add a Step 1 to your Backend Workflow called *subscription-created*



Under "Plugins" choose your custom API.\
For *(path) stripeCustomer* select Dynamic Data and choose **RequestsData's -> object customer** \
This will fetch the Stripe Customer for use (who has the email address we need to match the correct User).

[![](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/80028096048/original/-FXkkJYhEem0FuNy6nrVVqjw0EbXo63kyA.png?1628097782)](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/80028096048/original/-FXkkJYhEem0FuNy6nrVVqjw0EbXo63kyA.png?1628097782)



Add a Step 2 to your workflow.\
\
Choose **Data (Things) -> Make changes to -> Search for Users**

Search for Users where email = Result of step 1's-> email\
Get the first item (because Search returns a list of things but we know there's only one).

[![](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/80028096192/original/K6qcFV0awktohCmxzBWCwixotKf6T-IlbA.png?1628097911)](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/80028096192/original/K6qcFV0awktohCmxzBWCwixotKf6T-IlbA.png?1628097911)

\
In the same step (Step 2)

Update the following properties of the User

Stripe Subscription Id = **Request Data's -> object id**

Stripe Customer Id = **Request Data's -> object customer**



This will set both the customer id and subscription id from Stripe on our User (meaning that the Customer Portal will display for them, not the Pricing Page). The workflow runs as soon as the Subscription is created so it will work as soon as the user finishes the checkout.

[![](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/80028096302/original/vYtshkVi_5WupZPf2Wsk__YnHtKJpXniJQ.png?1628098011)](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/80028096302/original/vYtshkVi_5WupZPf2Wsk__YnHtKJpXniJQ.png?1628098011)





Now perform the same steps for a new API workflow called **subscription-deleted**

Create a new Stripe Webhook Endpoint and this time listen for the **customer.subscription.deleted** event.



We don't need to look up the Stripe Customer using our custom API this time (because the User should already have the Stripe Subscription Id field set, we can match on that).

\
Add a single step (Step 1)

Search for Users where\
Stripe Customer Id = **Request Data's -> object customer**\
\
Update the **Stripe Subscription Id** field to be empty. This means the Pricing Page will display instead of the Customer Portal as the user no longer has a subscription.



[![](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/80028096497/original/gLrnGYjjvFSwEZzed7MHls213nZG5sko0g.png?1628098210)](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/80028096497/original/gLrnGYjjvFSwEZzed7MHls213nZG5sko0g.png?1628098210)

## Step 7: Going Live

\
In order for this workflow to work in Stripe's live mode, you need to do a few things

* Set your Pricing Page to **live** in PriceWell
* Go back to Steps **5** and **6** and replace Test with live (i.e your Live secret key and configure the webhook in Stripe Live mode)