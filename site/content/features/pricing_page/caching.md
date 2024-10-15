---
title: Caching
date: 2024-10-15T19:25:05.893Z
description: Improve performance with caching
keywords:
  - cache
---

D﻿ynamic pricing tables are great for making quick changes without a developer. But there's a performance hit if your pricing table doesn't change and it's loaded regularly. It can take a second or two to load the table (because we fetch all the data each time it loads).

## 10x speed up with caching

C﻿aching means your pricing table is stored for **1 day** on our edge servers so we don't have to look up all the data each time it's loaded. This reduces the load time from a couple of seconds to a few hundred milliseconds. Making your pricing table feel much snappier (and increasing your conversion rate).

Y﻿ou can enable caching using the `data-cache="true"` attribute.

S﻿imply add the attribute to your snippet like so:

`﻿``html
<div id="pricewell-5ff26e79-7c40-40f6-8cfc-5e5d037c82ca" data-cache="true"></div><script src="https://snippet.pricewell.io/5ff26e79-7c40-40f6-8cfc-5e5d037c82ca/pricewell.js" async=""></script>
`﻿``
