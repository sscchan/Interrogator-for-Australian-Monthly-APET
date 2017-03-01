# Interrogator for Australian Monthly Areal Potential Evapotranspiration#

<!-- 
> This material was originally posted [here](http://www.quora.com/What-is-Amazons-approach-to-product-development-and-product-management). It is reproduced here for posterities sake.

There is an approach called "working backwards" that is widely used at Amazon. They work backwards from the customer, rather than starting with an idea for a product and trying to bolt customers onto it. While working backwards can be applied to any specific product decision, using this approach is especially important when developing new products or features.

For new initiatives a product manager typically starts by writing an internal press release announcing the finished product. The target audience for the press release is the new/updated product's customers, which can be retail customers or internal users of a tool or technology. Internal press releases are centered around the customer problem, how current solutions (internal or external) fail, and how the new product will blow away existing solutions.

If the benefits listed don't sound very interesting or exciting to customers, then perhaps they're not (and shouldn't be built). Instead, the product manager should keep iterating on the press release until they've come up with benefits that actually sound like benefits. Iterating on a press release is a lot less expensive than iterating on the product itself (and quicker!).

If the press release is more than a page and a half, it is probably too long. Keep it simple. 3-4 sentences for most paragraphs. Cut out the fat. Don't make it into a spec. You can accompany the press release with a FAQ that answers all of the other business or execution questions so the press release can stay focused on what the customer gets. My rule of thumb is that if the press release is hard to write, then the product is probably going to suck. Keep working at it until the outline for each paragraph flows. 

Oh, and I also like to write press-releases in what I call "Oprah-speak" for mainstream consumer products. Imagine you're sitting on Oprah's couch and have just explained the product to her, and then you listen as she explains it to her audience. That's "Oprah-speak", not "Geek-speak".

Once the project moves into development, the press release can be used as a touchstone; a guiding light. The product team can ask themselves, "Are we building what is in the press release?" If they find they're spending time building things that aren't in the press release (overbuilding), they need to ask themselves why. This keeps product development focused on achieving the customer benefits and not building extraneous stuff that takes longer to build, takes resources to maintain, and doesn't provide real customer benefit (at least not enough to warrant inclusion in the press release).
 -->


## Target Market ##
  This tool is aimed to help stormwater engineers who uses MUSIC stormwater quality modelling tool to quickly and effectively retrieve Bureau of Meteorlogy's (BOM) Areal Potential Evapotranspiration (APET) data.

## Summary ##
  This tool enables an engineer to select their project location on a map and retrieve the BOM APET data for input for thier MUSIC model.

## Problem ##
  Stromwater engineers in Australia, as part of their MUSIC modelling process, require APET data for their project location as inputs. Common practice is to read off APET value contours (and interpolate values) for each month off the maps in the BOM website. This is slow and often error-prone.

  The "proper" way to obtain the data is off the APET ERSI Grid from the BOM, but the often the engineer does not have sufficient GIS knowledge to do so. This means that the task is delegated to the company's GIS operator, which introduce additional issues such as availability, time and cost.

## Solution ##
  This application solves this issue by allowing an engineer to quickly and easily interrogate APET data on a map, bypassing the issues with eye-balling BOM charts or asking the GIS operator to do the work.

## Quote ##
  "I used to cringe looking at a senior engineer eye-balling the BOM APET charts. But with this easy-to-use tool, they can get accurate data first time, everytime." -- ME

## How to Get Started ##
  Go onto the website, click on the map where you want the APET data, and the result data is dispaly on the right. Enter this into your MUSIC model.

## Customer Quote ##
  "I used to have to budget 2 hours for a GIS guy (because he pads his timesheet) to get my APET input data for MUSIC modelling, now I can do it in 5 mintues and I don't have to fight other project managers for the GIS guy's availability." - Adam

## Closing and Call to Action ##
  Goto https://enigmatic-wave-70998.herokuapp.com/ to use the tool!
