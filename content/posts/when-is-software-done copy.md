---
title: When is software broken
description:
date: 2021-09-01
tags:
  -
---
I used to say software was done when I had confidence that all remaining work was known. Just some gaps to fill in, but we got this.

Then I said it was done when it was functionally complete on my workstation but not tested by anyone or deployed anywhere.

Then I said it was done when it met a set of criteria on a non exhaustive checklist called definition of done.

Then I said it was done when it had an automated deployment pipeline and was in production. At least at this point it was de-risked. We could welcome users without scrambling to do a build that worked in our production environment.

This was a great professional journey to go on and I needed to grow and mature through what I thought was done vs. the reality which was – if there was anything more to do it wasn't done.

Now I think as long as software is running and has users, it's not done. There is a support cost to all software and treating something as finished ignores the importance of maintenance over time. Bit rot is real and happens all the time from multiple vectors. Dependencies become incompatible, security bugs are found, platforms deprecate features and many others.

Sometimes future states can be imagined, but often they're difficult to frame or plan for ahead of time. The best thing to do is to acknowledge that while software is in use there is an obligation to feed and water it. Sometimes it might not need much attention and other times it may need what seems like an unreasonable amount.

The risk of not providing ongoing investment is always the cost of delay. And reader, with old software services ... that become critical dependencies ... for which the domain knowledge is long gone ... the dependencies are three versions behind the vendor’s current release ... and you need the latest version to fix the known memory leak. The cost will always be higher to fix than to keep something fed, watered and well managed.

So when is software done? When it is turned off, decommissioned and replaced by its successor.

By thinking about done in this way it lets us plan for decommission as a positive outcome, a natural stage in software lifecycles. Something to aspire and look forward to. Not because we've finally turned off the thing that caused us so much pain but because it did its job. It served its purpose and now we have learnt some things and built something better. That too will be done some day when we turn it off.
