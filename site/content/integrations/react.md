---
title: React
date: 2022-01-20T16:58:02.872Z
description: Integrate Stripe Checkout with React using PriceWell
keywords:
  - react
  - stripe
---
In this article, we're going to explain how to set up PriceWell's Pricing Page snippet inside your React app.



First of all, you'll need to get hold of your Pricing Page ID, this is visible on the snippet section (just remove the prefix "pricewell-" from the front)



[![](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/80061801586/original/pKmbAkpNRf7GUgJBVvjPZxvAkhfI2KJZSg.png?1639648469)](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/80061801586/original/pKmbAkpNRf7GUgJBVvjPZxvAkhfI2KJZSg.png?1639648469)



## Pricing Page React Component

## Next, copy the following React component into your codebase:

*\
PriceWellPricingPage.js*

```javascript
import { useEffect } from "react";

// Replace this with your pricing page id
const pricingPageId = "314d633d-168a-4c91-9558-5144af807eee";

export default function PriceWellPricingPage() {
  useEffect(() => {
    if (window.pricewell) {
      return;
    }
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://snippet.pricewell.io/${pricingPageId}/pricewell.js`;
    document.head.appendChild(script);
  }, []);
  return <div id={`pricewell-${pricingPageId}`}></div>;
}
```

[View source code](https://codesandbox.io/s/pricewell-react-demo-egzsm?fontsize=14&hidenavigation=1&module=%2Fsrc%2FPriceWellPricingPage.js&theme=dark&view=editor)



Now include the component as you would any other React component.



Example:\
\
*App.js*

```javascript
import PriceWellPricingPage from "./PriceWellPricingPage";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>PriceWell React Demo</h1>
      <h2>
        Add Stripe subscriptions to your website in minutes at{" "}
        <a href="https://www.pricewell.com?utm_src=react">pricewell.io</a>
      </h2>
      <PriceWellPricingPage />
    </div>
  );
}
```



When loaded, the component will wait until the DOM is loaded (using useEffect) and then load the PriceWell javascript (unless it's already loaded).



[![](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/80061806860/original/dHl-sWqcSf5WAXRUi63Qujd-gjVkGBZkJA.png?1639649056)](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/80061806860/original/dHl-sWqcSf5WAXRUi63Qujd-gjVkGBZkJA.png?1639649056)



[View full source code on CodeSandbox](https://codesandbox.io/s/pricewell-react-demo-egzsm?file=/src/App.js:0-402)