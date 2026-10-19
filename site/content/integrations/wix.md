---
title: Wix
date: 2026-10-16T00:00:00Z
description: How to add Pricing Pages, Customer Portals and Gated Content to Wix using PriceWell
keywords:
  - wix
  - stripe
  - pricing page
  - customer portal
  - gated content
---

You can use PriceWell to add Pricing Pages and Customer Portals to your Wix site and restrict access to pages based on your customers' Stripe subscriptions.

## Adding a Pricing Page to Wix

Follow our [guide to creating a Pricing Page](/getting-started/create-a-pricing-page/) to set up your pricing in PriceWell. Once it is ready, copy the code from the **Snippet** section.

In the Wix Editor, use **Embed HTML** to display your Pricing Page. Follow Wix's guide to [embedding a site or a widget](https://support.wix.com/en/article/wix-editor-embedding-a-site-or-a-widget):

1. Open the page where you want to display your pricing in the Wix Editor.
2. Click **Add Elements**, then **Embed Code** and **Popular Embeds**.
3. Select **Embed HTML** to add it to your page.
4. Click the embed, then **Enter Code**, and paste your PriceWell snippet under **Add your code here**.
5. Click **Apply** and resize the embed so the full Pricing Page is visible.
6. Publish your site and check the Pricing Page on the published page, including on mobile.

## Adding a Customer Portal to Wix

Follow our [guide to creating a Customer Portal](/getting-started/create-a-customer-portal/) to configure how customers manage their subscriptions. For customers to sign in using their email address, enable [Email Login](/features/customer_portal/email-login/). Then copy the Customer Portal's embed snippet.

Add the snippet to your account or subscription management page using **Embed HTML**, following the same steps above and Wix's guide to [embedding a site or a widget](https://support.wix.com/en/article/wix-editor-embedding-a-site-or-a-widget). Resize the embed to fit the portal, publish your site, and check that customers can sign in and open their Customer Portal.

## Setting up Gated Content

Follow our [guide to adding a paywall](/features/gated_content/adding-a-paywall/) to configure gated content in PriceWell. Set the domain to your Wix site's connected domain and add the paths of the pages you want to restrict. Once you have finished, click **Snippet** and copy the code.

## Adding the snippet to Wix

Make sure your Wix site is published and has a connected domain. Follow Wix's guide to [embedding custom code on your site](https://support.wix.com/en/article/embedding-custom-code-on-your-site) to add your PriceWell gated content snippet:

1. Open **Settings** in your Wix site's dashboard.
2. Click **Custom Code** in the **Development & integrations** section, then click **+ Add Custom Code**.
3. Paste the snippet you copied from PriceWell and give it a name, such as "PriceWell Gated Content".
4. Under **Add Code to Pages**, select **All pages** and choose to load the code on each page your visitor opens.
5. Under **Place Code in**, select **Head**.
6. Click **Apply**.

The snippet must be added to the **Head** section for the restrictions to work. It will only restrict the pages you configured in PriceWell.

## Testing your restricted pages

Visit a restricted page on your published Wix site. You will be prompted to enter your email address. PriceWell will email you a secure link to access the page if you have a qualifying paid Stripe subscription.

![A webpage restricted to Stripe customers only using PriceWell](/img/gated-content-demo.gif)
