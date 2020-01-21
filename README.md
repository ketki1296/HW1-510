# REST Client
![npm_testing](https://github.com/ketki1296/HW1-510/blob/master/images/npm_test.png)

- 4 functions had to be written:
	- listBranches : A GET method
	- createRepo : A POST method
	- createIssue : A POST method
	- enableWikiSupport : A POST method
- The listBranches function call defaultGetoptions() where other 3 call defaultGetoptions12() which incorporates addition of 'body' to the 'options'.

# REST SERVER
For the One Time Sharing Service, images of working for the basic test case of 1 POST and 1 GET. Rest explained in the screencast.
- Server
![server.png](https://github.com/ketki1296/HW1-510/blob/master/images/server.png)

- Client
![client.png](https://github.com/ketki1296/HW1-510/blob/master/images/client.png)

- For creations of unique URL a hash was created using 'object-hash' package that reliably hashed JavaScript objects. Also a hash of time-stamp was added to it to make the URL unique to avoid generation of same URLs if the same data was posted.
- When the request comes with the unique URL to the server, the value of the endpoint/URL gets stored as a JSON object whose key is 'key' and value is 'endpoint/URL'. It is retrieved via 'req.params.key'.

# Concepts
- Explain additional concerns related to using REST apis
	- REST is resource oriented but the REST-programming languages are not resource oriented so handling code that maps URIs tends to get messy as the number of resources increases.
	- Most client and server applications don't support all verbs or response codes for the HTTP protocol. For example,most web browsers have limited support for PUT or DELETE.
	- The typical intermingling the HTTP protocol of the with the meanng of the transactions makes RESTful APIs completely non-portable. Moving a RESTful API from HTTP to some other transmission method requires disentagling and restructuring information from 7 different locations we use to encode the full meaning of RESTful the transactions.
	- REST APIs are usually a collection of endpoints, where each endpoint represents a resource. SO when a client needs data from multiple resources, it needs to perform multiple round-trips to a REST API to put together the data it needs.
	- Another issue with REST APIs is versioning. IF you need to support multiple versions, that usually means new endpoints. This leads to more problems while using and maintaining those endpoints and it might be the cause of code duplication on the server.
- Compare and contrast the benefits and disadvantages of using a RESTful architecture vs. a graph query language.
	- With the REST API, we would typically gather the data by accessing multiple endpoints i.e to fetch data from multiple resources we need that many REST calls. Where as, in GraphQL you'd simply send a singly query to the GraphQL server that inclues the concrete data requirements. The server then respons with a JSON object where these requirements are fulfilled.
	- CRUD (create,read,update and delete) actions can be intuitively composed for each resource. Whereas for GrapQL mutations allow for multiple actiions to be performed within one query.
	- REST resource-driven design makes it a good choice for highly structured dat sets and applications. Whereas GraphSQL has a flexible nature and makes it a good-chooice when application's data structure requires a large number of queries. 
	- Data can be cached for subsequent API requests, increasing frequency. Whereas in GraphQL clients query for exact information they need, minimizing version-breaking changes.

## Screencast Link
- https://drive.google.com/open?id=1pmwyq_cQrQjqodLYmKvIKzESMLjDZI5M
