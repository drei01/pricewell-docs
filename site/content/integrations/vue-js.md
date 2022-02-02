---
title: Vue.js
date: 2022-02-02T07:26:43.894Z
description: Integrate Stripe Checkout with Vue.js using PriceWell
keywords:
  - vue
  - vue.js
  - javascript
  - react
---
In this article, we're going to explain how to set up PriceWell's Pricing Page snippet inside your Vue.js app.

First of all, you'll need to get hold of your Pricing Page ID, this can be copied from the top right corner by clicking "**copy page id"**



![](/img/copy-page-id.png)



## Pricing Page Vue Component

## Next, copy the following Vue.js component into your codebase:

*\
PriceWellPricingPage.vue*

```javascript
<template>
  <div v-bind:id="`pricewell-${pricingPageId}`"></div>
</template>

<script>
export default {
  name: "PricingPage",
  props: {
    pricingPageId: String,
  },
  updated: function () {
    let vm = this;
    this.$nextTick(function () {
      if (window.pricewell) {
        return;
      }
      const script = document.createElement("script");
      script.async = true;
      script.src = `https://snippet.pricewell.io/${vm.pricingPageId}/pricewell.js`;
      document.head.appendChild(script);
    });
  },
};
</script>
```

[View source code](https://codesandbox.io/s/pricewell-vuejs-y95ul?file=/src/components/PricingPage.vue:173-180)

Now include the component as you would any other Vue component.

Example:\
\
*App.vue*

```javascript
<template>
  <div id="app">
    <h1>PriceWell Vue.js Demo</h1>
    <h2>
      Add Stripe subscriptions to your website in minutes at
      <a href="https://www.pricewell.io?utm_src=react">pricewell.io</a>
    </h2>
    <!-- Replace pricingPageId with your Pricing Page id -->
    <PricingPage pricingPageId="314d633d-168a-4c91-9558-5144af807eee" />
  </div>
</template>

<script>
import PricingPage from "./components/PricingPage";

export default {
  name: "App",
  components: {
    PricingPage,
  },
};
</script>
```

When loaded, the component will wait until the DOM is loaded (using updated() and $nextTick) and then load the PriceWell javascript (unless it's already loaded).

[![](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/80061806860/original/dHl-sWqcSf5WAXRUi63Qujd-gjVkGBZkJA.png?1639649056)](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/80061806860/original/dHl-sWqcSf5WAXRUi63Qujd-gjVkGBZkJA.png?1639649056)

[View full source code on CodeSandbox](https://codesandbox.io/s/pricewell-vuejs-y95ul?file=/src/App.vue:0-514)