---
title: Notion and Super.so
date: 2022-01-20T16:54:53.627Z
description: How to integrate Stripe with Notion using Super.so and PriceWell
keywords:
  - notion
  - super
  - stripe
---
[![](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/80026135579/original/0YoAHlmq4OxNCfFxVZMIcDEVCtS4-UgjvA.png?1627292482)](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/80026135579/original/0YoAHlmq4OxNCfFxVZMIcDEVCtS4-UgjvA.png?1627292482)



    

In the following article we are going through the [Stripe](https://stripe.com/) integration using [Super.so](https://super.so/) , [Notion](https://www.notion.so/) and [Pricewell](https://www.pricewell.com/).

### What is Notion?    

Notion is an all-in-one productivity platform that allows teams and individuals to access and use notes, databases, kanban boards, wikis, calendars and reminders. Users can connect those components to create their own systems for knowledge management, note taking, data management, project management and others. \
\
What is Super.so?    

Super.so is an application, which allows you to combine your Notion pages, and a domain to create a simple, functional website without coding needed. The app provides templates to enhance the development speed, as well as advanced Search Engine Optimization Settings. 



### Stripe Integration     

After entering in the [Super.so](http://super.so/) landing page, clicking the [Templates](https://super.so/market) option, will redirect you to the page where you can select the template you are going to use to build your website.  Among the templates, there’s the landing page option. By clicking it, you will be able to see a preview of your landing page.   

[![](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/80026136853/original/jc492g6lOJyLawtmA5y030Tp262oTHTLoA.png?1627292655)](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/80026136853/original/jc492g6lOJyLawtmA5y030Tp262oTHTLoA.png?1627292655)

  Click “Duplicate” on the upper right corner and some instructions will pop up regarding the Notion integration. Should look like this: 

[![](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/80026136834/original/g-qJfIod8hZiNK2ZekgI_2Glg10bbpmVaQ.png?1627292653)](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/80026136834/original/g-qJfIod8hZiNK2ZekgI_2Glg10bbpmVaQ.png?1627292653)

###      

Follow the first step and click “here”, which will take you to the [Notion](https://www.notion.so/) document. In the top right corner again, click “Duplicate”. This will create an exact copy of the Notion Document in the Notion 

Page. Click “Share” on the top right corner and “Share to web”. 

[![](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/80026136916/original/WQq6ANgHxrp8baufyObU-vDS_rxLJZ3KJg.png?1627292666)](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/80026136916/original/WQq6ANgHxrp8baufyObU-vDS_rxLJZ3KJg.png?1627292666)

    

That makes the Notion Document a public version. “Copy” the public url and head back to Super.so, to paste it. 

Click “New Site” at the top right corner and paste the copied URL. You can also give the name of your site. 



[![](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/80026136857/original/SXtBQgu60plXD-XZVDey2kcZso3SQM4oPQ.png?1627292656)](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/80026136857/original/SXtBQgu60plXD-XZVDey2kcZso3SQM4oPQ.png?1627292656)

By clicking “Continue” you automatically create a static website on top of your Notion Page, which will seem a bit different than the provided template. That’s because we have completed only step 1 and 2 from the Duplicate parameters. 



[![](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/80026136888/original/AloVQ-TbtRj2L9v0DLUdRoMH8Fjn9Wvc8w.png?1627292662)](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/80026136888/original/AloVQ-TbtRj2L9v0DLUdRoMH8Fjn9Wvc8w.png?1627292662)



Copy the provided snippet and go back to your already made public site to paste it into your static code.\
\
When you are in your Super.so site, click “Options” in the upper left corner and “Edit Code”.\
Then paste the snippet into your static code in the <head>. 



[![](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/80026136901/original/FcNGZkZ8Evrv6Z_kbUPZiZObsV3uTMTH_A.png?1627292665)](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/80026136901/original/FcNGZkZ8Evrv6Z_kbUPZiZObsV3uTMTH_A.png?1627292665)

\
\
Once those steps are completed, the website should be ready. In order to start collecting payments from the website, you have to move to your already made pricing page in [Pricewell’s ](https://app.pricewell.io/login)app and copy the snippet.



[![](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/80026136908/original/HP_VssWOlCsBFRVYAqZvdNM6n3DpXF4nIg.png?1627292666)](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/80026136908/original/HP_VssWOlCsBFRVYAqZvdNM6n3DpXF4nIg.png?1627292666)

 

For a smoother implementation of the pricing page, you are not going to paste the snippet in the custom code box at Super.so, but it is better if you paste it at the Notion page we’ve created a while ago.\
\
By clicking in the place where your pricing page want to appear, you will have the option to type “/code”



[![](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/80026136898/original/I8cglpbBzQt4wKvEyjZxVFDcPUUh2Ocbzg.png?1627292664)](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/80026136898/original/I8cglpbBzQt4wKvEyjZxVFDcPUUh2Ocbzg.png?1627292664)

A JavaScript box will appear, where you will paste the snippet in it.

However, for the Super.so to know that it will publish the custom code we’ve just entered in the Notion Page, you have to include the “super-embed” before the pasted snippet. 

[![](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/80026136917/original/nEIh2aNqHB8ZVagV0w1pKppJiHns-EpB2g.png?1627292666)](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/80026136917/original/nEIh2aNqHB8ZVagV0w1pKppJiHns-EpB2g.png?1627292666)

We created a standalone document with the Pricewell and Super.so instructions [here](https://pricewell-integration.super.site/).

\
In there you will find one more step, to finish the Stripe Set up.\
We need to let Super.so identify that there is custom code in the Notion Page.

In order to do that you have to copy the following code and just paste it into the Super.so website, below the <head> element. 



[![](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/80026136903/original/vKnN1cyq7iQdA1M6XKLN-YlQK3UmSrwhGA.png?1627292665)](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/80026136903/original/vKnN1cyq7iQdA1M6XKLN-YlQK3UmSrwhGA.png?1627292665)

```html

```

HTML

Now just hit the refresh button in the right top corner of Super.so landing page and the pricing page will appear. Clicking on the pricing button will redirect you straight to checkout.\
\
For an even better representation of the Stripe integration using Super.so and Notion you can check the video below:

<iframe width="640" height="360" src="https://www.youtube.com/embed/fHegVwD5oa8?&amp;wmode=opaque" frameborder="0" allowfullscreen="" class="fr-draggable" sandbox="allow-scripts allow-forms allow-same-origin allow-presentation"></iframe>