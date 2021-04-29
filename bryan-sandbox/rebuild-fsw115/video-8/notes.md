GET Requests
GET all list items:
http://api.bryanuniversity.edu/<yourname>/list

GET one list item:
http://api.bryanuniversity.edu/<yourname>/list/<listItemId>


POST Requests
POST a new list item:
http://api.bryanuniversity.edu/<yourname>/list

Available options for the data being posted are:
name (STRING - Required)
description (STRING - Optional)
price (INTEGER - Optional)
isComplete (Boolean - Optional)

An ID and a username will automatically be assigned to the records upon creation and can not be overridden.

Data object example sent via Postman:
{ "name" : "test", "description" : "test description", "price" : 10, "isComplete" : false }

PUT Requests
PUT a list item:
http://api.bryanuniversity.edu/<yourname>/list/<listItemId>

DELETE Requests
DELETE a list items:
http://api.bryanuniversity.edu/<yourname>/list/<listItemId>