# Floom Technical Exercise
Great to hear that you’re looking to get involved with Floom. Create a new private Github repo, push your solution and add us as a collaborator when you're ready. Add github handles, `ahnunn`, `richieteo` as collaborators.

## Brief
At Floom, we have a B2B (florist facing) product and a B2C (consumer facing) product. This exercise deals with understanding your approach to making some changes to our B2B product.

Some terminology:

**Florist** = 1 of many partners that use our software and sell on Floom.com

Each florist sells a **Product** (a bouquet of flowers)

Each product consists of one or more **Flowers**

For Example:

The florist ***London Bridge Floristry*** sells a product called **Elegance** which has two flowers, **Red Rose** and **Red Ranunculus**

For the purposes of keeping the exercise simple, we have assumed that there is only 1 florist on the platform, only 2 products and only 2 flowers

| Florist | Product | Flower | Colour | Quantity |
| --- | --- | --- | --- | --- |
| London Bridge Floristry | Elegance | Rose | Red | 3 |
|  |  | Ranunculus | Red | 3 |
| | True Love | Rose | Red | 10 |

We have teamed up with 2 **wholesale sellers** and aim to display relevant **wholesale items** that they sell to our florist partners.

In order to do this, we need to be able to store and display additional **flower attributes** which define the specific type of flower being sold.
- Cultivar = specific type of flower (e.g. for Red Rose, it would be Red Rose Naomi, Red Rose Avalanche)
- Maturity = how long before the flower completely blooms (e.g. 2 days, 3 days)

For the purposes of keeping the exercise simple, we have assumed there are only 2 wholesale sellers, 3 cultivar and 2 maturity values

| Name of Wholesaler | Wholesale Item Cultivar | Wholesale Item Maturity |
| --- | --- | --- |
| Wholesale Flowers Today | Red Rose Naomi | 2 days |
| | Red Rose Naomi | 3 days |
| | Red Rose Avalanche | 3 days |
| Wholesale Flowers Tomorrow | Red Rose Avalanche | 2 days|
| | Red Rose Avalanche | 3 days |
| | Ran su Firenze | 2 days |

Mapping Table Flower to Cultivar

| Flower | Cultivar |
| --- | --- |
| Red Rose | Red Rose Naomi |
| | Red Rose Avalanche |
| Red Ranunculus | Ran su Firenze |


### Overall Task

We need a **Product List** page that shows a list of products associated with a florist.

We also need a **Product Detail** page that lists the flowers associated with a specific product


### Subtask 1 (data model design)
We don’t have an approach defined yet for storing additional flower attributes in our platform or our database, so you have freedom to decide how you want to implement this.

Whatever approach you take, it needs to be extensible to support additional attributes in the future (e.g. stem length, flower quality, etc.)


### Subtask 2 (backend + frontend)
Implement a service that executes the following:
- Queries all of the wholesale sellers API's for any product data they have available,
- Store this data in the Data model you have designed
- Make this unified data available for querying by the frontend

You have the freedom to decide where you want to show the items being sold. For example, you can show it on the product detail page beside the current Flowers that compose the product.

### Bonus Items (implement only 1 of 2)
### Subtask 3
On the product list page, implement a search that shows all products that match a flower attribute (as a florist, I want to see how many of my products have Red Ranunculus in them).

### Subtask 4
Extend the API to check for whether an item being sold is or isn’t in stock at a specific time and adjust your display to take this into account

## Designs
These are only for reference - you do not need to implement these high fidelity designs exactly as illustrated. Feel free to make changes to them or simplify them as you see fit to meet the time constraints of the exercise (the exercise aims to test your overall approach to solving the problem, not your ability to implement high fidelity designs specifically)

**Product List Page** - Images can be found in the media folder

**Product Detail Page** - Images can be found in the media folder


## Data + Endpoints

`npm install` will pull packages required to supply local mock api endpoints

`npm run apis` will run the local mock apis

`cd frontend && npm install && npm run start` will pull packages required to build the frontend project and run it in dev mode

`cd backend && npm install && npm run start`  will pull packages required to build the backend project and run it in dev mode

We have provided a **Product List** api endpoint that provides a list of products.

## Deliverables
- Constraints - Use React, Node, Typescript and an SQL database of your choice.
- Beyond that you're open to use any frameworks you wish. We'll discuss your choices in our follow up meeting.
- We have provided boiler-plating for the Frontend project as well as for the Api endpoints and data-models you are free to continue from these or roll your own base project structure.
- We don't wish for you to spend longer than two hours on this task. If you haven't time to complete all elements of the task that's fine, we can talk about them more in person.
- We will be evaluating primarily on the strength the implementation directly connected to the tasks listed, as opposed to rigging and boiler plating.
- When we look at your solution we will be mainly looking at your approach to understanding the task, code structure, code style, how you handle styling, your design awareness, how you handle logic and data. So be sure to show these factors in your solution.
