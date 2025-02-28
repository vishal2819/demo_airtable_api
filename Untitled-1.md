Airtable API for "Personal CRM" Open base
Introduction
Metadata
Rate Limits
Authentication
People table
Fields
List records
Retrieve a record
Create records
Update/Upsert records
Delete records
Cities table
Fields
List records
Retrieve a record
Create records
Update/Upsert records
Delete records
Companies table
Fields
List records
Retrieve a record
Create records
Update/Upsert records
Delete records
Errors
curl

JavaScript
Introduction
The Personal CRM API provides an easy way to integrate your Personal CRM data in Airtable with any external system. The API closely follows REST semantics, uses JSON to encode objects, and relies on standard HTTP codes to signal operation outcomes.

The API documentation below is specifically generated for your base. We recommend that you use the graphical Airtable interface to add a few records of example data for each table. These records will be displayed in the documentation examples generated below.

To view documentation for all available endpoints, as well as documentation that has not been generated specific to your base, please visit here.

The ID of this base is app5VB9BbEtcXgolQ.

Please note: if you make changes to a field (column) name or type, the API interface for those fields will change correspondingly. Therefore, please make sure to update your API implementation accordingly whenever you make changes to your Airtable schema from the graphical interface.

Official API client:

JavaScript: airtable.js (Node.js + browser)
Community-built API clients:

Ruby: airrecord
.NET: airtable.net
Python 3: pyairtable
Python 2/3: airtable.py
Metadata
This API gives you the ability to list all of your bases, tables, fields, and views. For more, see the API reference documentation for List bases and Get base schema.

Rate Limits
The API is limited to 5 requests per second per base. If you exceed this rate, you will receive a 429 status code and will need to wait 30 seconds before subsequent requests will succeed.

The official JavaScript client has built-in retry logic.

If you anticipate a higher read volume, we recommend using a caching proxy. This rate limit is the same for all plans and increased limits are not currently available.

Authentication
Airtable uses simple token-based authentication. For personal development, we recommend using personal access tokens, which can be created at /create/tokens. To learn more about other authentication methods like OAuth, please visit our developer documentation.

You can authenticate to the API by providing your secret API token (e.g. personal access token) in the HTTP authorization bearer token header.

All API requests must be authenticated and made over HTTPS.

Example
$ curl https://api.airtable.com/v0/app5VB9BbEtcXgolQ/People \
-H "Authorization: Bearer YOUR_SECRET_API_TOKEN"
People Table
The id for People is tblL2Ae1JWgd8Hjws. Table ids and table names can be used interchangeably in API requests. Using table ids means table name changes do not require modifications to your API request.

Fields
Each record in the People table contains the following fields:

Field names and field ids can be used interchangeably. Using field ids means field name changes do not require modifications to your API request. We recommend using field ids over field names where possible, to reduce modifications to your API request if the user changes the field name later.

Field NameField IDTypeDescription
NamefldIWIiUSWec9MbnyText
string
A single line of text.

Example values
"Adrianna Felps"

"Aman Song"

"Anisha Revelle"

"Ardelle Forster"

"Ardelle Ing"

TagfldUTyhSV3fkbElrt
Single select
string
Selected option name.

When creating or updating records, if the choice string does not exactly match an existing option, the request will fail with an INVALID_MULTIPLE_CHOICE_OPTIONS error unless the typecast parameter is enabled. If typecast is enabled, a new choice will be created if one does not exactly match.

Possible values
[
"🛠️ Service Professional",
"🎓 College",
"😊 Friends",
"🃏 Hobby",
"🤝 Networking",
"💼 Employer",
"❤️ Family"
]
ConnectionfldUuNP9ibXFx8xGV
Link to another record
array of record IDs (strings)
Array of linked records IDs from the People table.

Example value
["rec8116cdd76088af", "rec245db9343f55e8", "rec4f3bade67ff565"]

OverduefldLQJhSKXnq8LbhzFormula
number, string, array of numbers or strings
Computed value: IF(DATETIME_DIFF(TODAY(),{Last Catchup},'days')>45,"Overdue").

Example values
"\"Overdue\""

"\"Overdue\""

"\"Overdue\""

"\"Overdue\""

"\"Overdue\""

Last CatchupfldS2IhZXUlinF7oz
Date
string (ISO 8601 formatted date)
UTC date, e.g. "2014-09-05".

Example values
"2018-07-05"

"2018-06-18"

"2018-05-04"

"2018-05-21"

"2018-05-13"

Current LocationfldRTFdQQZlplGcuq
Link to another record
array of record IDs (strings)
Array of linked records IDs from the Cities table.

Example value
["rec8116cdd76088af", "rec245db9343f55e8", "rec4f3bade67ff565"]

Current CompanyfldI4AhZN2khhLgkB
Link to another record
array of record IDs (strings)
Array of linked records IDs from the Companies table.

Example value
["rec8116cdd76088af", "rec245db9343f55e8", "rec4f3bade67ff565"]

Former Companiesfld69jGB0i7ujaimo
Link to another record
array of record IDs (strings)
Array of linked records IDs from the Companies table.

Example value
["rec8116cdd76088af", "rec245db9343f55e8", "rec4f3bade67ff565"]

Primary EmailfldDsQOGBPIm4nbeIEmail
string
A valid email address.

Example values
"adrianna@example.com"

"aman@example.com"

"anisha@example.com"

"ardelle@example.com"

"ardelle@example.com"

Phonefld0esM5OIZd5LxzM
Phone number
string
A telephone number, e.g. "(415) 555-9876".

Example values
"9455551520"

"8365558334"

"9615555936"

"3595556024"

"6035553706"

LinkedInfldP7VND1yBBiWy4bURL
string
A valid URL (e.g. airtable.com or https://airtable.com/universe).

Example values
"www.linkedin.com/in/example"

"www.linkedin.com/in/example"

"www.linkedin.com/in/example"

"www.linkedin.com/in/example"

"www.linkedin.com/in/example"

AddressfldIEZ8HnkCR2akosText
string
A single line of text.

Example values
"1592 Water Street, San Francisco, CA 94108"

"2000 Clair Street, Pittsburgh, PA 15205"

"163 Wayside Lane, San Francisco, CA 94107"

"716 Hickory Lane, Washington DC, 20705"

"3242 Farnum Road, New York, NY 10004"

Service AreafldhwJY2k7aUpOxzu
Single select
string
Selected option name.

When creating or updating records, if the choice string does not exactly match an existing option, the request will fail with an INVALID_MULTIPLE_CHOICE_OPTIONS error unless the typecast parameter is enabled. If typecast is enabled, a new choice will be created if one does not exactly match.

Possible values
[
"🔨 Handyperson",
"💿 DJ",
"💡 Electrician",
"🚰 Plumber",
"➗ Accountant",
"💼 Tax Attorney",
"☂️ Insurance",
"🏗️ Contractor",
"🌳 Landscaper",
"🏥 Doctor"
]
Notesfld82ZquM433vbkm3Long text
string
Multiple lines of text, which may contain "mention tokens", e.g.
<airtable:mention id="menE1i9oBaGX3DseR">@Alex</airtable:mention>

Example value
"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel accumsan orci. Fusce interdum ipsum nec neque iaculis congue. Vivamus bibendum quam at sollicitudin vestibulum. Nunc suscipit nisl sit amet enim hendrerit pellentesque. Curabitur non fermentum orci."
First NamefldDvBbDgY7QhpOInText
string
A single line of text.

Example values
"Ardelle"

"Ardelle"

"Berna"

"Dann"

"Jackson"

Last NamefldGE4PCXuW0EIACbText
string
A single line of text.

Example values
"Rickards"

"Kear"

"Agin"

Outreach?fldEFrAJNHvyHHjqW
Lookup
array of numbers, strings, booleans, or objects
Array of Places I'd like to work fields in linked Companies records.

Example values
[
null
]

[
null
]

[
null
]

[
true
]

[
true
]

List People records
To list records in People, issue a GET request to the People endpoint. Note that table names and table ids can be used interchangeably. Using table ids means table name changes do not require modifications to your API request.

Returned records do not include any fields with "empty" values, e.g. "", [], or false.

You can filter, sort, and format the results with the following query parameters. Note that these parameters need to be URL encoded. You can use our API URL encoder tool to help with this. If you are using a helper library like Airtable.js, these parameters will be automatically encoded.

Note: Airtable's API only accepts request with a URL shorter than 16,000 characters. Encoded formulas may cause your requests to exceed this limit. To fix this issue you can instead make a POST request to /v0/{baseId}/{tableIdOrName}/listRecords while passing the parameters within the body of the request instead of the query parameters. See our support article on this for more information.

fields
array of strings
optional
Only data for fields whose names are in this list will be included in the result. If you don't need every field, you can use this parameter to reduce the amount of data transferred.

For example, to only return data from Name and Tag, send these two query parameters:

fields%5B%5D=Name&fields%5B%5D=Tag
You can also perform the same action with field ids (they can be found in the fields section):

fields%5B%5D=fldIWIiUSWec9Mbny&fields%5B%5D=fldUTyhSV3fkbElrt
Note: %5B%5D may be omitted when specifying multiple fields, but must always be included when specifying only a single field.

filterByFormula
string
optional
A formula used to filter records. The formula will be evaluated for each record, and if the result is not 0, false, "", NaN, [], or #Error! the record will be included in the response. We recommend testing your formula in the Formula field UI before using it in your API request.

If combined with the view parameter, only records in that view which satisfy the formula will be returned.

The formula must be encoded first before passing it as a value. You can use this tool to not only encode the formula but also create the entire url you need. For example, to only include records where Name isn't empty, pass in NOT({Name} = '') as a parameter like this:

filterByFormula=NOT%28%7BName%7D%20%3D%20%27%27%29

Note: Airtable's API only accepts request with a URL shorter than 16,000 characters. Encoded formulas may cause your requests to exceed this limit. To fix this issue you can instead make a POST request to /v0/{baseId}/{tableIdOrName}/listRecords while passing the parameters within the body of the request instead of the query parameters. See our support article on this for more information.

maxRecords
number
optional
The maximum total number of records that will be returned in your requests. If this value is larger than pageSize (which is 100 by default), you may have to load multiple pages to reach this total. See the Pagination section below for more.pageSize
number
optional
The number of records returned in each request. Must be less than or equal to 100. Default is 100. See the Pagination section below for more.sort
array of objects
optional
A list of sort objects that specifies how the records will be ordered. Each sort object must have a field key specifying the name of the field to sort on, and an optional direction key that is either "asc" or "desc". The default direction is "asc".

The sort parameter overrides the sorting of the view specified in the view parameter. If neither the sort nor the view parameter is included, the order of records is arbitrary.

For example, to sort records by Name in descending order, send these two query parameters:

sort%5B0%5D%5Bfield%5D=Name
sort%5B0%5D%5Bdirection%5D=desc
For example, to sort records by Name in descending order, pass in:

[{field: "Name", direction: "desc"}]
view
string
optional
The name or ID of a view in the People table. If set, only the records in that view will be returned. The records will be sorted according to the order of the view unless the sort parameter is included, which overrides that order. Fields hidden in this view will be returned in the results. To only return a subset of fields, use the fields parameter.cellFormat
string
optional
The format that should be used for cell values. Supported values are:

json: cells will be formatted as JSON, depending on the field type.

string: cells will be formatted as user-facing strings, regardless of the field type. The timeZone and userLocale parameters are required when using string as the cellFormat.

Note: You should not rely on the format of these strings, as it is subject to change.
The default is json.

timeZone
string
optional
The time zone that should be used to format dates when using string as the cellFormat. This parameter is required when using string as the cellFormat.

userLocale
string
optional
The user locale that should be used to format dates when using string as the cellFormat. This parameter is required when using string as the cellFormat.

returnFieldsByFieldId
boolean
optional
An optional boolean value that lets you return field objects where the key is the field id.

This defaults to false, which returns field objects where the key is the field name.

recordMetadata
array of strings
optional
An optional field that, if includes commentCount, adds a commentCount read only property on each record returned.

These parameters need to be URL encoded. If you are using a helper library like Airtable.js, they will be automatically encoded.

Pagination
The server returns one page of records at a time. Each page will contain pageSize records, which is 100 by default.

If there are more records, the response will contain an offset. To fetch the next page of records, include offset in the next request's parameters.

Pagination will stop when you've reached the end of your table. If the maxRecords parameter is passed, pagination will stop once you've reached this maximum.

Example request
curl "https://api.airtable.com/v0/app5VB9BbEtcXgolQ/People?maxRecords=3&view=By%20Tag" \
 -H "Authorization: Bearer YOUR_SECRET_API_TOKEN"
Example response
{
"records": [
{
"id": "recT1WWkDH2wAGOdv",
"createdTime": "2018-01-06T04:12:21.000Z",
"fields": {
"Phone": "9455551520",
"Former Companies": [
"recKyaVXpVxNkdYM1"
],
"Primary Email": "adrianna@example.com",
"Current Company": [
"rec7I6xFduVoH6e8k"
],
"Address": "1592 Water Street, San Francisco, CA 94108",
"Name": "Adrianna Felps",
"LinkedIn": "www.linkedin.com/in/example",
"Current Location": [
"recM2x9ZN2fj8Canv"
],
"Last Catchup": "2018-07-05",
"Tag": "❤️ Family",
"Overdue": "Overdue",
"Outreach?": [
null
]
}
},
{
"id": "recrlqNv4w5BZ49U5",
"createdTime": "2018-01-06T04:11:13.000Z",
"fields": {
"Phone": "8365558334",
"Primary Email": "aman@example.com",
"Current Company": [
"recjbBkwYNevJB2yp"
],
"Address": "2000 Clair Street, Pittsburgh, PA 15205",
"Name": "Aman Song",
"LinkedIn": "www.linkedin.com/in/example",
"Current Location": [
"recbFZNsswZtTlPwb"
],
"Last Catchup": "2018-06-18",
"Tag": "🛠️ Service Professional",
"Connection": [
"recIioL2RTwQ1FU0G"
],
"Service Area": "🏥 Doctor",
"Overdue": "Overdue",
"Outreach?": [
null
]
}
},
{
"id": "recIioL2RTwQ1FU0G",
"createdTime": "2018-01-06T04:13:44.000Z",
"fields": {
"Phone": "9615555936",
"Primary Email": "anisha@example.com",
"Current Company": [
"recXKxfbvkTxcwFLm"
],
"Address": "163 Wayside Lane, San Francisco, CA 94107",
"Name": "Anisha Revelle",
"LinkedIn": "www.linkedin.com/in/example",
"Current Location": [
"recM2x9ZN2fj8Canv"
],
"Last Catchup": "2018-05-04",
"Tag": "😊 Friends",
"Overdue": "Overdue",
"Outreach?": [
null
]
}
}
],
"offset": "itr5boAQndnj6DsRG/recIioL2RTwQ1FU0G"
}

Iteration may timeout due to client inactivity or server restarts. In that case, the client will receive a 422 response with error message LIST_RECORDS_ITERATOR_NOT_AVAILABLE. It may then restart iteration from the beginning.

Retrieve a People record
To retrieve an existing record in People table, issue a GET request to the record endpoint.

Any "empty" fields (e.g. "", [], or false) in the record will not be returned.

Example request
curl https://api.airtable.com/v0/app5VB9BbEtcXgolQ/People/recT1WWkDH2wAGOdv \
 -H "Authorization: Bearer YOUR_SECRET_API_TOKEN"
Example response
{
"id": "recT1WWkDH2wAGOdv",
"createdTime": "2018-01-06T04:12:21.000Z",
"fields": {
"Phone": "9455551520",
"Former Companies": [
"recKyaVXpVxNkdYM1"
],
"Primary Email": "adrianna@example.com",
"Current Company": [
"rec7I6xFduVoH6e8k"
],
"Address": "1592 Water Street, San Francisco, CA 94108",
"Name": "Adrianna Felps",
"LinkedIn": "www.linkedin.com/in/example",
"Current Location": [
"recM2x9ZN2fj8Canv"
],
"Last Catchup": "2018-07-05",
"Tag": "❤️ Family",
"Overdue": "Overdue",
"Outreach?": [
null
]
}
}
Create People records
To create new records, issue a POST request to the People endpoint. Note that table names and table ids can be used interchangeably. Using table ids means table name changes do not require modifications to your API request.

Your request body should include an array of up to 10 record objects. Each of these objects should have one key whose value is an inner object containing your record's cell values, keyed by either field name or field id.

Returns an array of record objects created if the call succeeded, including record IDs which will uniquely identify the records within Personal CRM.

Values for Overdue and Outreach? are automatically computed by Airtable and cannot be directly created.

The Airtable API will perform best-effort automatic data conversion from string values if the typecast parameter is passed in (click to show example). Automatic conversion is disabled by default to ensure data integrity, but it may be helpful for integrating with 3rd party data sources.

You can also include a single record object at the top level. Click here to show an example.

Example request
curl -X POST https://api.airtable.com/v0/app5VB9BbEtcXgolQ/People \
 -H "Authorization: Bearer YOUR_SECRET_API_TOKEN" \
 -H "Content-Type: application/json" \
 --data '{
"records": [
{
"fields": {
"Name": "Adrianna Felps",
"Tag": "❤️ Family",
"Last Catchup": "2018-07-05",
"Current Location": [
"recM2x9ZN2fj8Canv"
],
"Current Company": [
"rec7I6xFduVoH6e8k"
],
"Former Companies": [
"recKyaVXpVxNkdYM1"
],
"Primary Email": "adrianna@example.com",
"Phone": "9455551520",
"LinkedIn": "www.linkedin.com/in/example",
"Address": "1592 Water Street, San Francisco, CA 94108"
}
},
{
"fields": {
"Name": "Aman Song",
"Tag": "🛠️ Service Professional",
"Connection": [
"recIioL2RTwQ1FU0G"
],
"Last Catchup": "2018-06-18",
"Current Location": [
"recbFZNsswZtTlPwb"
],
"Current Company": [
"recjbBkwYNevJB2yp"
],
"Primary Email": "aman@example.com",
"Phone": "8365558334",
"LinkedIn": "www.linkedin.com/in/example",
"Address": "2000 Clair Street, Pittsburgh, PA 15205",
"Service Area": "🏥 Doctor"
}
}
]
}'
Example response
{
"records": [
{
"id": "recT1WWkDH2wAGOdv",
"createdTime": "2018-01-06T04:12:21.000Z",
"fields": {
"Phone": "9455551520",
"Former Companies": [
"recKyaVXpVxNkdYM1"
],
"Primary Email": "adrianna@example.com",
"Current Company": [
"rec7I6xFduVoH6e8k"
],
"Address": "1592 Water Street, San Francisco, CA 94108",
"Name": "Adrianna Felps",
"LinkedIn": "www.linkedin.com/in/example",
"Current Location": [
"recM2x9ZN2fj8Canv"
],
"Last Catchup": "2018-07-05",
"Tag": "❤️ Family",
"Overdue": "Overdue",
"Outreach?": [
null
]
}
},
{
"id": "recrlqNv4w5BZ49U5",
"createdTime": "2018-01-06T04:11:13.000Z",
"fields": {
"Phone": "8365558334",
"Primary Email": "aman@example.com",
"Current Company": [
"recjbBkwYNevJB2yp"
],
"Address": "2000 Clair Street, Pittsburgh, PA 15205",
"Name": "Aman Song",
"LinkedIn": "www.linkedin.com/in/example",
"Current Location": [
"recbFZNsswZtTlPwb"
],
"Last Catchup": "2018-06-18",
"Tag": "🛠️ Service Professional",
"Connection": [
"recIioL2RTwQ1FU0G"
],
"Service Area": "🏥 Doctor",
"Overdue": "Overdue",
"Outreach?": [
null
]
}
}
]
}
Update/Upsert People records
To update People records, issue a request to the People endpoint. Table names and table IDs can be used interchangeably. Using table IDs means table name changes won't require modifying your API request code. A PATCH request will only update the fields included in the request. Fields not included in the request will be unchanged. A PUT request will perform a destructive update and clear all unincluded cell values.

Your request body should include an array of up to 10 record objects. Each of these objects should have an id property representing the record ID and a fields property which contains all of your record's cell values by field name or field id for all of your record's cell values by field name.

Upsert behavior can be enabled by including a performUpsert object with a fieldsToMergeOn array in your request. Upserts will treat fieldsToMergeOn as an external ID to find existing records in Airtable. If a match is found, that record will be updated. If no matches are found, a new record will be created. For more details, visit our API reference.
Click here to show an example.

fieldsToMergeOn should be an array with 1-3 field names or field IDs which uniquely identify a record. These cannot be computed fields and must be of the following field types: number, text, long text, single select, multiple select, date.

The API response for upsert requests will additionally include createdRecords and updatedRecords. These are arrays of record IDs, identifying the records from the response's records array that were created or updated.

Airtable reserves the right to throttle upsert requests differently from the standard rate limit throttling policy.

To link to new records in Connection, Current Location, Current Company and Former Companies, add new linked record IDs to the existing array. Be sure to include all existing linked record IDs that you wish to retain. To unlink records, include the existing array of record IDs, excluding any that you wish to unlink.

Notes may contain "mention tokens". A mention token corresponds to a "@mention" in Airtable's user interface; here in the API it will look like <airtable:mention id="menE1i9oBaGX3DseR">@Alex</airtable:mention>. Mention tokens cannot be created via this API and should be left intact (or wholly removed) when updating long text fields.

Values for Overdue and Outreach? are automatically computed by Airtable and cannot be directly updated. You cannot clear these, even with a PUT request.

Automatic data conversion for update actions can be enabled via typecast parameter. See create record for details.

You can also include a single record object at the top level. Click here to show an example.

Example request
curl -X PATCH https://api.airtable.com/v0/app5VB9BbEtcXgolQ/People \
 -H "Authorization: Bearer YOUR_SECRET_API_TOKEN" \
 -H "Content-Type: application/json" \
 --data '{
"records": [
{
"id": "recT1WWkDH2wAGOdv",
"fields": {
"Name": "Adrianna Felps",
"Tag": "❤️ Family",
"Last Catchup": "2018-07-05",
"Current Location": [
"recM2x9ZN2fj8Canv"
],
"Current Company": [
"rec7I6xFduVoH6e8k"
],
"Former Companies": [
"recKyaVXpVxNkdYM1"
],
"Primary Email": "adrianna@example.com",
"Phone": "9455551520",
"LinkedIn": "www.linkedin.com/in/example",
"Address": "1592 Water Street, San Francisco, CA 94108"
}
},
{
"id": "recrlqNv4w5BZ49U5",
"fields": {
"Name": "Aman Song",
"Tag": "🛠️ Service Professional",
"Connection": [
"recIioL2RTwQ1FU0G"
],
"Last Catchup": "2018-06-18",
"Current Location": [
"recbFZNsswZtTlPwb"
],
"Current Company": [
"recjbBkwYNevJB2yp"
],
"Primary Email": "aman@example.com",
"Phone": "8365558334",
"LinkedIn": "www.linkedin.com/in/example",
"Address": "2000 Clair Street, Pittsburgh, PA 15205",
"Service Area": "🏥 Doctor"
}
},
{
"id": "recIioL2RTwQ1FU0G",
"fields": {
"Name": "Anisha Revelle",
"Tag": "😊 Friends",
"Last Catchup": "2018-05-04",
"Current Location": [
"recM2x9ZN2fj8Canv"
],
"Current Company": [
"recXKxfbvkTxcwFLm"
],
"Primary Email": "anisha@example.com",
"Phone": "9615555936",
"LinkedIn": "www.linkedin.com/in/example",
"Address": "163 Wayside Lane, San Francisco, CA 94107"
}
}
]
}'
Example response
{
"records": [
{
"id": "recT1WWkDH2wAGOdv",
"createdTime": "2018-01-06T04:12:21.000Z",
"fields": {
"Phone": "9455551520",
"Former Companies": [
"recKyaVXpVxNkdYM1"
],
"Primary Email": "adrianna@example.com",
"Current Company": [
"rec7I6xFduVoH6e8k"
],
"Address": "1592 Water Street, San Francisco, CA 94108",
"Name": "Adrianna Felps",
"LinkedIn": "www.linkedin.com/in/example",
"Current Location": [
"recM2x9ZN2fj8Canv"
],
"Last Catchup": "2018-07-05",
"Tag": "❤️ Family",
"Overdue": "Overdue",
"Outreach?": [
null
]
}
},
{
"id": "recrlqNv4w5BZ49U5",
"createdTime": "2018-01-06T04:11:13.000Z",
"fields": {
"Phone": "8365558334",
"Primary Email": "aman@example.com",
"Current Company": [
"recjbBkwYNevJB2yp"
],
"Address": "2000 Clair Street, Pittsburgh, PA 15205",
"Name": "Aman Song",
"LinkedIn": "www.linkedin.com/in/example",
"Current Location": [
"recbFZNsswZtTlPwb"
],
"Last Catchup": "2018-06-18",
"Tag": "🛠️ Service Professional",
"Connection": [
"recIioL2RTwQ1FU0G"
],
"Service Area": "🏥 Doctor",
"Overdue": "Overdue",
"Outreach?": [
null
]
}
},
{
"id": "recIioL2RTwQ1FU0G",
"createdTime": "2018-01-06T04:13:44.000Z",
"fields": {
"Phone": "9615555936",
"Primary Email": "anisha@example.com",
"Current Company": [
"recXKxfbvkTxcwFLm"
],
"Address": "163 Wayside Lane, San Francisco, CA 94107",
"Name": "Anisha Revelle",
"LinkedIn": "www.linkedin.com/in/example",
"Current Location": [
"recM2x9ZN2fj8Canv"
],
"Last Catchup": "2018-05-04",
"Tag": "😊 Friends",
"Overdue": "Overdue",
"Outreach?": [
null
]
}
}
]
}
Delete People records
To delete People records, issue a DELETE request to the People endpoint. Note that table names and table ids can be used interchangeably. Using table ids means table name changes do not require modifications to your API request.

Your request should include a URL-encoded array of up to 10 record IDs to delete.

You can also issue a DELETE request to the record endpoint to delete a single record. Click here to show an example.

Example request
curl -X DELETE https://api.airtable.com/v0/app5VB9BbEtcXgolQ/People \
 -H "Authorization: Bearer YOUR_SECRET_API_TOKEN" \
 -G \
 --data-urlencode 'records[]=recT1WWkDH2wAGOdv' \
 --data-urlencode 'records[]=recrlqNv4w5BZ49U5'
Example response
{
"records": [
{
"id": "recT1WWkDH2wAGOdv",
"deleted": true
},
{
"id": "recrlqNv4w5BZ49U5",
"deleted": true
}
]
}
Cities Table
The id for Cities is tblIXxeSO0gkfNeiu. Table ids and table names can be used interchangeably in API requests. Using table ids means table name changes do not require modifications to your API request.

Fields
Each record in the Cities table contains the following fields:

Field names and field ids can be used interchangeably. Using field ids means field name changes do not require modifications to your API request. We recommend using field ids over field names where possible, to reduce modifications to your API request if the user changes the field name later.

Field NameField IDTypeDescription
CityfldS3I5XR4fibJelyText
string
A single line of text.

Example values
"San Francisco, CA"

"New York, NY"

"Boise, ID"

"Washington DC"

"Boston, MA"

StatefldTeArGPCUuYJQIWFormula
number, string, array of numbers or strings
Computed value: RIGHT(City,2).

Example values
"\"CA\""

"\"NY\""

"\"ID\""

"\"DC\""

"\"MA\""

Countfldw5iDSUCgeYMl7N
Count
number
Number of linked People records.

Example values
18

6

3

3

2

ContactsfldTWG5ST39gfQekq
Link to another record
array of record IDs (strings)
Array of linked records IDs from the People table.

Example value
["rec8116cdd76088af", "rec245db9343f55e8", "rec4f3bade67ff565"]

Count (for map)fldywDAebK7jU4VY5Formula
number, string, array of numbers or strings
Computed value: Count.

Example values
18

6

3

3

2

GeocachefldmzdfN6pDrqDSQnText
string
A single line of text.

Example values
"🔵 eyJpIjoiU2FuIEZyYW5jaXNjbywgQ0EiLCJvIjp7InN0YXR1cyI6Ik9LIiwiZm9ybWF0dGVkQWRkcmVzcyI6IlNhbiBGcmFuY2lzY28sIENBLCBVU0EiLCJsYXQiOjM3Ljc3NDkyOTUsImxuZyI..."

"🔵 eyJpIjoiTmV3IFlvcmssIE5ZIiwibyI6eyJzdGF0dXMiOiJPSyIsImZvcm1hdHRlZEFkZHJlc3MiOiJOZXcgWW9yaywgTlksIFVTQSIsImxhdCI6NDAuNzEyNzc1MywibG5nIjotNzQuMDA1OTc..."

"🔵 eyJpIjoiQm9pc2UsIElEIiwibyI6eyJzdGF0dXMiOiJPSyIsImZvcm1hdHRlZEFkZHJlc3MiOiJCb2lzZSwgSUQsIFVTQSIsImxhdCI6NDMuNjE1MDE4NiwibG5nIjotMTE2LjIwMjMxMzd9LCJ..."

"🔵 eyJpIjoiV2FzaGluZ3RvbiBEQyIsIm8iOnsic3RhdHVzIjoiT0siLCJmb3JtYXR0ZWRBZGRyZXNzIjoiV2FzaGluZ3RvbiwgREMsIFVTQSIsImxhdCI6MzguOTA3MTkyMywibG5nIjotNzcuMDM..."

"🔵 eyJpIjoiQm9zdG9uLCBNQSIsIm8iOnsic3RhdHVzIjoiT0siLCJmb3JtYXR0ZWRBZGRyZXNzIjoiQm9zdG9uLCBNQSwgVVNBIiwibGF0Ijo0Mi4zNjAwODI1LCJsbmciOi03MS4wNTg4ODAxfSw..."

List Cities records
To list records in Cities, issue a GET request to the Cities endpoint. Note that table names and table ids can be used interchangeably. Using table ids means table name changes do not require modifications to your API request.

Returned records do not include any fields with "empty" values, e.g. "", [], or false.

You can filter, sort, and format the results with the following query parameters. Note that these parameters need to be URL encoded. You can use our API URL encoder tool to help with this. If you are using a helper library like Airtable.js, these parameters will be automatically encoded.

Note: Airtable's API only accepts request with a URL shorter than 16,000 characters. Encoded formulas may cause your requests to exceed this limit. To fix this issue you can instead make a POST request to /v0/{baseId}/{tableIdOrName}/listRecords while passing the parameters within the body of the request instead of the query parameters. See our support article on this for more information.

fields
array of strings
optional
Only data for fields whose names are in this list will be included in the result. If you don't need every field, you can use this parameter to reduce the amount of data transferred.

For example, to only return data from City and State, send these two query parameters:

fields%5B%5D=City&fields%5B%5D=State
You can also perform the same action with field ids (they can be found in the fields section):

fields%5B%5D=fldS3I5XR4fibJely&fields%5B%5D=fldTeArGPCUuYJQIW
Note: %5B%5D may be omitted when specifying multiple fields, but must always be included when specifying only a single field.

filterByFormula
string
optional
A formula used to filter records. The formula will be evaluated for each record, and if the result is not 0, false, "", NaN, [], or #Error! the record will be included in the response. We recommend testing your formula in the Formula field UI before using it in your API request.

If combined with the view parameter, only records in that view which satisfy the formula will be returned.

The formula must be encoded first before passing it as a value. You can use this tool to not only encode the formula but also create the entire url you need. For example, to only include records where City isn't empty, pass in NOT({City} = '') as a parameter like this:

filterByFormula=NOT%28%7BCity%7D%20%3D%20%27%27%29

Note: Airtable's API only accepts request with a URL shorter than 16,000 characters. Encoded formulas may cause your requests to exceed this limit. To fix this issue you can instead make a POST request to /v0/{baseId}/{tableIdOrName}/listRecords while passing the parameters within the body of the request instead of the query parameters. See our support article on this for more information.

maxRecords
number
optional
The maximum total number of records that will be returned in your requests. If this value is larger than pageSize (which is 100 by default), you may have to load multiple pages to reach this total. See the Pagination section below for more.pageSize
number
optional
The number of records returned in each request. Must be less than or equal to 100. Default is 100. See the Pagination section below for more.sort
array of objects
optional
A list of sort objects that specifies how the records will be ordered. Each sort object must have a field key specifying the name of the field to sort on, and an optional direction key that is either "asc" or "desc". The default direction is "asc".

The sort parameter overrides the sorting of the view specified in the view parameter. If neither the sort nor the view parameter is included, the order of records is arbitrary.

For example, to sort records by City in descending order, send these two query parameters:

sort%5B0%5D%5Bfield%5D=City
sort%5B0%5D%5Bdirection%5D=desc
For example, to sort records by City in descending order, pass in:

[{field: "City", direction: "desc"}]
view
string
optional
The name or ID of a view in the Cities table. If set, only the records in that view will be returned. The records will be sorted according to the order of the view unless the sort parameter is included, which overrides that order. Fields hidden in this view will be returned in the results. To only return a subset of fields, use the fields parameter.cellFormat
string
optional
The format that should be used for cell values. Supported values are:

json: cells will be formatted as JSON, depending on the field type.

string: cells will be formatted as user-facing strings, regardless of the field type. The timeZone and userLocale parameters are required when using string as the cellFormat.

Note: You should not rely on the format of these strings, as it is subject to change.
The default is json.

timeZone
string
optional
The time zone that should be used to format dates when using string as the cellFormat. This parameter is required when using string as the cellFormat.

userLocale
string
optional
The user locale that should be used to format dates when using string as the cellFormat. This parameter is required when using string as the cellFormat.

returnFieldsByFieldId
boolean
optional
An optional boolean value that lets you return field objects where the key is the field id.

This defaults to false, which returns field objects where the key is the field name.

recordMetadata
array of strings
optional
An optional field that, if includes commentCount, adds a commentCount read only property on each record returned.

These parameters need to be URL encoded. If you are using a helper library like Airtable.js, they will be automatically encoded.

Pagination
The server returns one page of records at a time. Each page will contain pageSize records, which is 100 by default.

If there are more records, the response will contain an offset. To fetch the next page of records, include offset in the next request's parameters.

Pagination will stop when you've reached the end of your table. If the maxRecords parameter is passed, pagination will stop once you've reached this maximum.

Example request
curl "https://api.airtable.com/v0/app5VB9BbEtcXgolQ/Cities?maxRecords=3&view=By%20Count" \
 -H "Authorization: Bearer YOUR_SECRET_API_TOKEN"
Example response
{
"records": [
{
"id": "recM2x9ZN2fj8Canv",
"createdTime": "2013-04-17T03:01:08.000Z",
"fields": {
"City": "San Francisco, CA",
"Contacts": [
"recUQwbQeUOhXQ04H",
"recYV4Q0nmSN8LYIm",
"recbQ2rxAu83xqBQv",
"recu2BSlMwtgggnOI",
"reca7zwp0j2wAJAEh",
"recuPCgZy1SWMnJkQ",
"recOZ9POuHRFX1HKP",
"recZKSXvTfC7WqiFc",
"recFwbRFI0nLOFiiq",
"recGI7ruzDdvf0ZXs",
"rechAbi2TOctru9Hi",
"recT1WWkDH2wAGOdv",
"rec0WSxG0hvLdUNiq",
"recIioL2RTwQ1FU0G",
"recphoRja7FYMoa5J",
"recPaBhyIf6CjKQDF",
"recQBWf7748BbhBId",
"recvvPtqAbciO2nPR"
],
"Geocache": "🔵 eyJpIjoiU2FuIEZyYW5jaXNjbywgQ0EiLCJvIjp7InN0YXR1cyI6Ik9LIiwiZm9ybWF0dGVkQWRkcmVzcyI6IlNhbiBGcmFuY2lzY28sIENBLCBVU0EiLCJsYXQiOjM3Ljc3NDkyOTUsImxuZyI...",
"State": "CA",
"Count": 18,
"Count (for map)": 18
}
},
{
"id": "recUWG4WRQnchIboB",
"createdTime": "2013-04-17T03:01:11.000Z",
"fields": {
"City": "New York, NY",
"Contacts": [
"receZ95xx0fI0rLQz",
"rec8XAc5NKezLds8M",
"reclkNynwOIvQ5GBB",
"recaJQlSL6rdpfCtI",
"recWQcddfpWhdw00d",
"reclIPXUv5Ik2LuZF"
],
"Geocache": "🔵 eyJpIjoiTmV3IFlvcmssIE5ZIiwibyI6eyJzdGF0dXMiOiJPSyIsImZvcm1hdHRlZEFkZHJlc3MiOiJOZXcgWW9yaywgTlksIFVTQSIsImxhdCI6NDAuNzEyNzc1MywibG5nIjotNzQuMDA1OTc...",
"State": "NY",
"Count": 6,
"Count (for map)": 6
}
},
{
"id": "recFzTKXEEKIcObbH",
"createdTime": "2017-12-20T06:08:22.000Z",
"fields": {
"City": "Boise, ID",
"Contacts": [
"rec6cwSI1ZGB8qMg3",
"recEsS8Ywh3sr5YEE",
"recuHXXdWot6sUHuj"
],
"Geocache": "🔵 eyJpIjoiQm9pc2UsIElEIiwibyI6eyJzdGF0dXMiOiJPSyIsImZvcm1hdHRlZEFkZHJlc3MiOiJCb2lzZSwgSUQsIFVTQSIsImxhdCI6NDMuNjE1MDE4NiwibG5nIjotMTE2LjIwMjMxMzd9LCJ...",
"State": "ID",
"Count": 3,
"Count (for map)": 3
}
}
],
"offset": "itr5boAQndnj6DsRG/recFzTKXEEKIcObbH"
}

Iteration may timeout due to client inactivity or server restarts. In that case, the client will receive a 422 response with error message LIST_RECORDS_ITERATOR_NOT_AVAILABLE. It may then restart iteration from the beginning.

Retrieve a Cities record
To retrieve an existing record in Cities table, issue a GET request to the record endpoint.

Any "empty" fields (e.g. "", [], or false) in the record will not be returned.

Example request
curl https://api.airtable.com/v0/app5VB9BbEtcXgolQ/Cities/recM2x9ZN2fj8Canv \
 -H "Authorization: Bearer YOUR_SECRET_API_TOKEN"
Example response
{
"id": "recM2x9ZN2fj8Canv",
"createdTime": "2013-04-17T03:01:08.000Z",
"fields": {
"City": "San Francisco, CA",
"Contacts": [
"recUQwbQeUOhXQ04H",
"recYV4Q0nmSN8LYIm",
"recbQ2rxAu83xqBQv",
"recu2BSlMwtgggnOI",
"reca7zwp0j2wAJAEh",
"recuPCgZy1SWMnJkQ",
"recOZ9POuHRFX1HKP",
"recZKSXvTfC7WqiFc",
"recFwbRFI0nLOFiiq",
"recGI7ruzDdvf0ZXs",
"rechAbi2TOctru9Hi",
"recT1WWkDH2wAGOdv",
"rec0WSxG0hvLdUNiq",
"recIioL2RTwQ1FU0G",
"recphoRja7FYMoa5J",
"recPaBhyIf6CjKQDF",
"recQBWf7748BbhBId",
"recvvPtqAbciO2nPR"
],
"Geocache": "🔵 eyJpIjoiU2FuIEZyYW5jaXNjbywgQ0EiLCJvIjp7InN0YXR1cyI6Ik9LIiwiZm9ybWF0dGVkQWRkcmVzcyI6IlNhbiBGcmFuY2lzY28sIENBLCBVU0EiLCJsYXQiOjM3Ljc3NDkyOTUsImxuZyI...",
"State": "CA",
"Count": 18,
"Count (for map)": 18
}
}
Create Cities records
To create new records, issue a POST request to the Cities endpoint. Note that table names and table ids can be used interchangeably. Using table ids means table name changes do not require modifications to your API request.

Your request body should include an array of up to 10 record objects. Each of these objects should have one key whose value is an inner object containing your record's cell values, keyed by either field name or field id.

Returns an array of record objects created if the call succeeded, including record IDs which will uniquely identify the records within Personal CRM.

Values for State, Count and Count (for map) are automatically computed by Airtable and cannot be directly created.

The Airtable API will perform best-effort automatic data conversion from string values if the typecast parameter is passed in (click to show example). Automatic conversion is disabled by default to ensure data integrity, but it may be helpful for integrating with 3rd party data sources.

You can also include a single record object at the top level. Click here to show an example.

Example request
curl -X POST https://api.airtable.com/v0/app5VB9BbEtcXgolQ/Cities \
 -H "Authorization: Bearer YOUR_SECRET_API_TOKEN" \
 -H "Content-Type: application/json" \
 --data '{
"records": [
{
"fields": {
"City": "San Francisco, CA",
"Contacts": [
"recUQwbQeUOhXQ04H",
"recYV4Q0nmSN8LYIm",
"recbQ2rxAu83xqBQv",
"recu2BSlMwtgggnOI",
"reca7zwp0j2wAJAEh",
"recuPCgZy1SWMnJkQ",
"recOZ9POuHRFX1HKP",
"recZKSXvTfC7WqiFc",
"recFwbRFI0nLOFiiq",
"recGI7ruzDdvf0ZXs",
"rechAbi2TOctru9Hi",
"recT1WWkDH2wAGOdv",
"rec0WSxG0hvLdUNiq",
"recIioL2RTwQ1FU0G",
"recphoRja7FYMoa5J",
"recPaBhyIf6CjKQDF",
"recQBWf7748BbhBId",
"recvvPtqAbciO2nPR"
],
"Geocache": "🔵 eyJpIjoiU2FuIEZyYW5jaXNjbywgQ0EiLCJvIjp7InN0YXR1cyI6Ik9LIiwiZm9ybWF0dGVkQWRkcmVzcyI6IlNhbiBGcmFuY2lzY28sIENBLCBVU0EiLCJsYXQiOjM3Ljc3NDkyOTUsImxuZyI..."
}
},
{
"fields": {
"City": "New York, NY",
"Contacts": [
"receZ95xx0fI0rLQz",
"rec8XAc5NKezLds8M",
"reclkNynwOIvQ5GBB",
"recaJQlSL6rdpfCtI",
"recWQcddfpWhdw00d",
"reclIPXUv5Ik2LuZF"
],
"Geocache": "🔵 eyJpIjoiTmV3IFlvcmssIE5ZIiwibyI6eyJzdGF0dXMiOiJPSyIsImZvcm1hdHRlZEFkZHJlc3MiOiJOZXcgWW9yaywgTlksIFVTQSIsImxhdCI6NDAuNzEyNzc1MywibG5nIjotNzQuMDA1OTc..."
}
}
]
}'
Example response
{
"records": [
{
"id": "recM2x9ZN2fj8Canv",
"createdTime": "2013-04-17T03:01:08.000Z",
"fields": {
"City": "San Francisco, CA",
"Contacts": [
"recUQwbQeUOhXQ04H",
"recYV4Q0nmSN8LYIm",
"recbQ2rxAu83xqBQv",
"recu2BSlMwtgggnOI",
"reca7zwp0j2wAJAEh",
"recuPCgZy1SWMnJkQ",
"recOZ9POuHRFX1HKP",
"recZKSXvTfC7WqiFc",
"recFwbRFI0nLOFiiq",
"recGI7ruzDdvf0ZXs",
"rechAbi2TOctru9Hi",
"recT1WWkDH2wAGOdv",
"rec0WSxG0hvLdUNiq",
"recIioL2RTwQ1FU0G",
"recphoRja7FYMoa5J",
"recPaBhyIf6CjKQDF",
"recQBWf7748BbhBId",
"recvvPtqAbciO2nPR"
],
"Geocache": "🔵 eyJpIjoiU2FuIEZyYW5jaXNjbywgQ0EiLCJvIjp7InN0YXR1cyI6Ik9LIiwiZm9ybWF0dGVkQWRkcmVzcyI6IlNhbiBGcmFuY2lzY28sIENBLCBVU0EiLCJsYXQiOjM3Ljc3NDkyOTUsImxuZyI...",
"State": "CA",
"Count": 18,
"Count (for map)": 18
}
},
{
"id": "recUWG4WRQnchIboB",
"createdTime": "2013-04-17T03:01:11.000Z",
"fields": {
"City": "New York, NY",
"Contacts": [
"receZ95xx0fI0rLQz",
"rec8XAc5NKezLds8M",
"reclkNynwOIvQ5GBB",
"recaJQlSL6rdpfCtI",
"recWQcddfpWhdw00d",
"reclIPXUv5Ik2LuZF"
],
"Geocache": "🔵 eyJpIjoiTmV3IFlvcmssIE5ZIiwibyI6eyJzdGF0dXMiOiJPSyIsImZvcm1hdHRlZEFkZHJlc3MiOiJOZXcgWW9yaywgTlksIFVTQSIsImxhdCI6NDAuNzEyNzc1MywibG5nIjotNzQuMDA1OTc...",
"State": "NY",
"Count": 6,
"Count (for map)": 6
}
}
]
}
Update/Upsert Cities records
To update Cities records, issue a request to the Cities endpoint. Table names and table IDs can be used interchangeably. Using table IDs means table name changes won't require modifying your API request code. A PATCH request will only update the fields included in the request. Fields not included in the request will be unchanged. A PUT request will perform a destructive update and clear all unincluded cell values.

Your request body should include an array of up to 10 record objects. Each of these objects should have an id property representing the record ID and a fields property which contains all of your record's cell values by field name or field id for all of your record's cell values by field name.

Upsert behavior can be enabled by including a performUpsert object with a fieldsToMergeOn array in your request. Upserts will treat fieldsToMergeOn as an external ID to find existing records in Airtable. If a match is found, that record will be updated. If no matches are found, a new record will be created. For more details, visit our API reference.
Click here to show an example.

fieldsToMergeOn should be an array with 1-3 field names or field IDs which uniquely identify a record. These cannot be computed fields and must be of the following field types: number, text, long text, single select, multiple select, date.

The API response for upsert requests will additionally include createdRecords and updatedRecords. These are arrays of record IDs, identifying the records from the response's records array that were created or updated.

Airtable reserves the right to throttle upsert requests differently from the standard rate limit throttling policy.

To link to new records in Contacts, add new linked record IDs to the existing array. Be sure to include all existing linked record IDs that you wish to retain. To unlink records, include the existing array of record IDs, excluding any that you wish to unlink.

Values for State, Count and Count (for map) are automatically computed by Airtable and cannot be directly updated. You cannot clear these, even with a PUT request.

Automatic data conversion for update actions can be enabled via typecast parameter. See create record for details.

You can also include a single record object at the top level. Click here to show an example.

Example request
curl -X PATCH https://api.airtable.com/v0/app5VB9BbEtcXgolQ/Cities \
 -H "Authorization: Bearer YOUR_SECRET_API_TOKEN" \
 -H "Content-Type: application/json" \
 --data '{
"records": [
{
"id": "recM2x9ZN2fj8Canv",
"fields": {
"City": "San Francisco, CA",
"Contacts": [
"recUQwbQeUOhXQ04H",
"recYV4Q0nmSN8LYIm",
"recbQ2rxAu83xqBQv",
"recu2BSlMwtgggnOI",
"reca7zwp0j2wAJAEh",
"recuPCgZy1SWMnJkQ",
"recOZ9POuHRFX1HKP",
"recZKSXvTfC7WqiFc",
"recFwbRFI0nLOFiiq",
"recGI7ruzDdvf0ZXs",
"rechAbi2TOctru9Hi",
"recT1WWkDH2wAGOdv",
"rec0WSxG0hvLdUNiq",
"recIioL2RTwQ1FU0G",
"recphoRja7FYMoa5J",
"recPaBhyIf6CjKQDF",
"recQBWf7748BbhBId",
"recvvPtqAbciO2nPR"
],
"Geocache": "🔵 eyJpIjoiU2FuIEZyYW5jaXNjbywgQ0EiLCJvIjp7InN0YXR1cyI6Ik9LIiwiZm9ybWF0dGVkQWRkcmVzcyI6IlNhbiBGcmFuY2lzY28sIENBLCBVU0EiLCJsYXQiOjM3Ljc3NDkyOTUsImxuZyI..."
}
},
{
"id": "recUWG4WRQnchIboB",
"fields": {
"City": "New York, NY",
"Contacts": [
"receZ95xx0fI0rLQz",
"rec8XAc5NKezLds8M",
"reclkNynwOIvQ5GBB",
"recaJQlSL6rdpfCtI",
"recWQcddfpWhdw00d",
"reclIPXUv5Ik2LuZF"
],
"Geocache": "🔵 eyJpIjoiTmV3IFlvcmssIE5ZIiwibyI6eyJzdGF0dXMiOiJPSyIsImZvcm1hdHRlZEFkZHJlc3MiOiJOZXcgWW9yaywgTlksIFVTQSIsImxhdCI6NDAuNzEyNzc1MywibG5nIjotNzQuMDA1OTc..."
}
},
{
"id": "recFzTKXEEKIcObbH",
"fields": {
"City": "Boise, ID",
"Contacts": [
"rec6cwSI1ZGB8qMg3",
"recEsS8Ywh3sr5YEE",
"recuHXXdWot6sUHuj"
],
"Geocache": "🔵 eyJpIjoiQm9pc2UsIElEIiwibyI6eyJzdGF0dXMiOiJPSyIsImZvcm1hdHRlZEFkZHJlc3MiOiJCb2lzZSwgSUQsIFVTQSIsImxhdCI6NDMuNjE1MDE4NiwibG5nIjotMTE2LjIwMjMxMzd9LCJ..."
}
}
]
}'
Example response
{
"records": [
{
"id": "recM2x9ZN2fj8Canv",
"createdTime": "2013-04-17T03:01:08.000Z",
"fields": {
"City": "San Francisco, CA",
"Contacts": [
"recUQwbQeUOhXQ04H",
"recYV4Q0nmSN8LYIm",
"recbQ2rxAu83xqBQv",
"recu2BSlMwtgggnOI",
"reca7zwp0j2wAJAEh",
"recuPCgZy1SWMnJkQ",
"recOZ9POuHRFX1HKP",
"recZKSXvTfC7WqiFc",
"recFwbRFI0nLOFiiq",
"recGI7ruzDdvf0ZXs",
"rechAbi2TOctru9Hi",
"recT1WWkDH2wAGOdv",
"rec0WSxG0hvLdUNiq",
"recIioL2RTwQ1FU0G",
"recphoRja7FYMoa5J",
"recPaBhyIf6CjKQDF",
"recQBWf7748BbhBId",
"recvvPtqAbciO2nPR"
],
"Geocache": "🔵 eyJpIjoiU2FuIEZyYW5jaXNjbywgQ0EiLCJvIjp7InN0YXR1cyI6Ik9LIiwiZm9ybWF0dGVkQWRkcmVzcyI6IlNhbiBGcmFuY2lzY28sIENBLCBVU0EiLCJsYXQiOjM3Ljc3NDkyOTUsImxuZyI...",
"State": "CA",
"Count": 18,
"Count (for map)": 18
}
},
{
"id": "recUWG4WRQnchIboB",
"createdTime": "2013-04-17T03:01:11.000Z",
"fields": {
"City": "New York, NY",
"Contacts": [
"receZ95xx0fI0rLQz",
"rec8XAc5NKezLds8M",
"reclkNynwOIvQ5GBB",
"recaJQlSL6rdpfCtI",
"recWQcddfpWhdw00d",
"reclIPXUv5Ik2LuZF"
],
"Geocache": "🔵 eyJpIjoiTmV3IFlvcmssIE5ZIiwibyI6eyJzdGF0dXMiOiJPSyIsImZvcm1hdHRlZEFkZHJlc3MiOiJOZXcgWW9yaywgTlksIFVTQSIsImxhdCI6NDAuNzEyNzc1MywibG5nIjotNzQuMDA1OTc...",
"State": "NY",
"Count": 6,
"Count (for map)": 6
}
},
{
"id": "recFzTKXEEKIcObbH",
"createdTime": "2017-12-20T06:08:22.000Z",
"fields": {
"City": "Boise, ID",
"Contacts": [
"rec6cwSI1ZGB8qMg3",
"recEsS8Ywh3sr5YEE",
"recuHXXdWot6sUHuj"
],
"Geocache": "🔵 eyJpIjoiQm9pc2UsIElEIiwibyI6eyJzdGF0dXMiOiJPSyIsImZvcm1hdHRlZEFkZHJlc3MiOiJCb2lzZSwgSUQsIFVTQSIsImxhdCI6NDMuNjE1MDE4NiwibG5nIjotMTE2LjIwMjMxMzd9LCJ...",
"State": "ID",
"Count": 3,
"Count (for map)": 3
}
}
]
}
Delete Cities records
To delete Cities records, issue a DELETE request to the Cities endpoint. Note that table names and table ids can be used interchangeably. Using table ids means table name changes do not require modifications to your API request.

Your request should include a URL-encoded array of up to 10 record IDs to delete.

You can also issue a DELETE request to the record endpoint to delete a single record. Click here to show an example.

Example request
curl -X DELETE https://api.airtable.com/v0/app5VB9BbEtcXgolQ/Cities \
 -H "Authorization: Bearer YOUR_SECRET_API_TOKEN" \
 -G \
 --data-urlencode 'records[]=recM2x9ZN2fj8Canv' \
 --data-urlencode 'records[]=recUWG4WRQnchIboB'
Example response
{
"records": [
{
"id": "recM2x9ZN2fj8Canv",
"deleted": true
},
{
"id": "recUWG4WRQnchIboB",
"deleted": true
}
]
}
Companies Table
The id for Companies is tbl6N5FvlbffNBf52. Table ids and table names can be used interchangeably in API requests. Using table ids means table name changes do not require modifications to your API request.

Fields
Each record in the Companies table contains the following fields:

Field names and field ids can be used interchangeably. Using field ids means field name changes do not require modifications to your API request. We recommend using field ids over field names where possible, to reduce modifications to your API request if the user changes the field name later.

Field NameField IDTypeDescription
NamefldzVnjmHYsrgnQ5oText
string
A single line of text.

Example values
"iBeacon"

"Marzen"

"Bank of England"

"Millennium"

"Purplefront"

Current Employees CountfldQKGCvRB7ftBCr0
Count
number
Number of linked People records.

Example values
3

4

1

1

2

Current EmployeesfldN1dqOMv1TWZ3au
Link to another record
array of record IDs (strings)
Array of linked records IDs from the People table.

Example value
["rec8116cdd76088af", "rec245db9343f55e8", "rec4f3bade67ff565"]

Past Employeesfldvy0HGgX3h6RwXb
Link to another record
array of record IDs (strings)
Array of linked records IDs from the People table.

Example value
["rec8116cdd76088af", "rec245db9343f55e8", "rec4f3bade67ff565"]

Places I'd like to workfldxyvxpNGQzbIbpg
Checkbox
boolean
This field is "true" when checked and otherwise empty.

Example value
true

List Companies records
To list records in Companies, issue a GET request to the Companies endpoint. Note that table names and table ids can be used interchangeably. Using table ids means table name changes do not require modifications to your API request.

Returned records do not include any fields with "empty" values, e.g. "", [], or false.

You can filter, sort, and format the results with the following query parameters. Note that these parameters need to be URL encoded. You can use our API URL encoder tool to help with this. If you are using a helper library like Airtable.js, these parameters will be automatically encoded.

Note: Airtable's API only accepts request with a URL shorter than 16,000 characters. Encoded formulas may cause your requests to exceed this limit. To fix this issue you can instead make a POST request to /v0/{baseId}/{tableIdOrName}/listRecords while passing the parameters within the body of the request instead of the query parameters. See our support article on this for more information.

fields
array of strings
optional
Only data for fields whose names are in this list will be included in the result. If you don't need every field, you can use this parameter to reduce the amount of data transferred.

For example, to only return data from Name and Current Employees Count, send these two query parameters:

fields%5B%5D=Name&fields%5B%5D=Current%20Employees%20Count
You can also perform the same action with field ids (they can be found in the fields section):

fields%5B%5D=fldzVnjmHYsrgnQ5o&fields%5B%5D=fldQKGCvRB7ftBCr0
Note: %5B%5D may be omitted when specifying multiple fields, but must always be included when specifying only a single field.

filterByFormula
string
optional
A formula used to filter records. The formula will be evaluated for each record, and if the result is not 0, false, "", NaN, [], or #Error! the record will be included in the response. We recommend testing your formula in the Formula field UI before using it in your API request.

If combined with the view parameter, only records in that view which satisfy the formula will be returned.

The formula must be encoded first before passing it as a value. You can use this tool to not only encode the formula but also create the entire url you need. For example, to only include records where Name isn't empty, pass in NOT({Name} = '') as a parameter like this:

filterByFormula=NOT%28%7BName%7D%20%3D%20%27%27%29

Note: Airtable's API only accepts request with a URL shorter than 16,000 characters. Encoded formulas may cause your requests to exceed this limit. To fix this issue you can instead make a POST request to /v0/{baseId}/{tableIdOrName}/listRecords while passing the parameters within the body of the request instead of the query parameters. See our support article on this for more information.

maxRecords
number
optional
The maximum total number of records that will be returned in your requests. If this value is larger than pageSize (which is 100 by default), you may have to load multiple pages to reach this total. See the Pagination section below for more.pageSize
number
optional
The number of records returned in each request. Must be less than or equal to 100. Default is 100. See the Pagination section below for more.sort
array of objects
optional
A list of sort objects that specifies how the records will be ordered. Each sort object must have a field key specifying the name of the field to sort on, and an optional direction key that is either "asc" or "desc". The default direction is "asc".

The sort parameter overrides the sorting of the view specified in the view parameter. If neither the sort nor the view parameter is included, the order of records is arbitrary.

For example, to sort records by Name in descending order, send these two query parameters:

sort%5B0%5D%5Bfield%5D=Name
sort%5B0%5D%5Bdirection%5D=desc
For example, to sort records by Name in descending order, pass in:

[{field: "Name", direction: "desc"}]
view
string
optional
The name or ID of a view in the Companies table. If set, only the records in that view will be returned. The records will be sorted according to the order of the view unless the sort parameter is included, which overrides that order. Fields hidden in this view will be returned in the results. To only return a subset of fields, use the fields parameter.cellFormat
string
optional
The format that should be used for cell values. Supported values are:

json: cells will be formatted as JSON, depending on the field type.

string: cells will be formatted as user-facing strings, regardless of the field type. The timeZone and userLocale parameters are required when using string as the cellFormat.

Note: You should not rely on the format of these strings, as it is subject to change.
The default is json.

timeZone
string
optional
The time zone that should be used to format dates when using string as the cellFormat. This parameter is required when using string as the cellFormat.

userLocale
string
optional
The user locale that should be used to format dates when using string as the cellFormat. This parameter is required when using string as the cellFormat.

returnFieldsByFieldId
boolean
optional
An optional boolean value that lets you return field objects where the key is the field id.

This defaults to false, which returns field objects where the key is the field name.

recordMetadata
array of strings
optional
An optional field that, if includes commentCount, adds a commentCount read only property on each record returned.

These parameters need to be URL encoded. If you are using a helper library like Airtable.js, they will be automatically encoded.

Pagination
The server returns one page of records at a time. Each page will contain pageSize records, which is 100 by default.

If there are more records, the response will contain an offset. To fetch the next page of records, include offset in the next request's parameters.

Pagination will stop when you've reached the end of your table. If the maxRecords parameter is passed, pagination will stop once you've reached this maximum.

Example request
curl "https://api.airtable.com/v0/app5VB9BbEtcXgolQ/Companies?maxRecords=3&view=By%20Count" \
 -H "Authorization: Bearer YOUR_SECRET_API_TOKEN"
Example response
{
"records": [
{
"id": "recz6f9UWtoZ3hdtF",
"createdTime": "2018-05-29T04:14:47.000Z",
"fields": {
"Current Employees": [
"recEsS8Ywh3sr5YEE",
"recvvPtqAbciO2nPR",
"recQBUG3R5MItu30o"
],
"Name": "iBeacon",
"Current Employees Count": 3
}
},
{
"id": "receNggW474QyV6qV",
"createdTime": "2017-12-20T06:04:49.000Z",
"fields": {
"Current Employees": [
"receZ95xx0fI0rLQz",
"recWQcddfpWhdw00d",
"reclIPXUv5Ik2LuZF",
"recphoRja7FYMoa5J"
],
"Name": "Marzen",
"Current Employees Count": 4
}
},
{
"id": "recT3m86lc5tsLpvu",
"createdTime": "2017-12-20T06:03:25.000Z",
"fields": {
"Current Employees": [
"recUQwbQeUOhXQ04H"
],
"Name": "Bank of England",
"Current Employees Count": 1
}
}
],
"offset": "itr5boAQndnj6DsRG/recT3m86lc5tsLpvu"
}

Iteration may timeout due to client inactivity or server restarts. In that case, the client will receive a 422 response with error message LIST_RECORDS_ITERATOR_NOT_AVAILABLE. It may then restart iteration from the beginning.

Retrieve a Companies record
To retrieve an existing record in Companies table, issue a GET request to the record endpoint.

Any "empty" fields (e.g. "", [], or false) in the record will not be returned.

Example request
curl https://api.airtable.com/v0/app5VB9BbEtcXgolQ/Companies/recz6f9UWtoZ3hdtF \
 -H "Authorization: Bearer YOUR_SECRET_API_TOKEN"
Example response
{
"id": "recz6f9UWtoZ3hdtF",
"createdTime": "2018-05-29T04:14:47.000Z",
"fields": {
"Current Employees": [
"recEsS8Ywh3sr5YEE",
"recvvPtqAbciO2nPR",
"recQBUG3R5MItu30o"
],
"Name": "iBeacon",
"Current Employees Count": 3
}
}
Create Companies records
To create new records, issue a POST request to the Companies endpoint. Note that table names and table ids can be used interchangeably. Using table ids means table name changes do not require modifications to your API request.

Your request body should include an array of up to 10 record objects. Each of these objects should have one key whose value is an inner object containing your record's cell values, keyed by either field name or field id.

Returns an array of record objects created if the call succeeded, including record IDs which will uniquely identify the records within Personal CRM.

Values for Current Employees Count are automatically computed by Airtable and cannot be directly created.

The Airtable API will perform best-effort automatic data conversion from string values if the typecast parameter is passed in (click to show example). Automatic conversion is disabled by default to ensure data integrity, but it may be helpful for integrating with 3rd party data sources.

You can also include a single record object at the top level. Click here to show an example.

Example request
curl -X POST https://api.airtable.com/v0/app5VB9BbEtcXgolQ/Companies \
 -H "Authorization: Bearer YOUR_SECRET_API_TOKEN" \
 -H "Content-Type: application/json" \
 --data '{
"records": [
{
"fields": {
"Name": "iBeacon",
"Current Employees": [
"recEsS8Ywh3sr5YEE",
"recvvPtqAbciO2nPR",
"recQBUG3R5MItu30o"
]
}
},
{
"fields": {
"Name": "Marzen",
"Current Employees": [
"receZ95xx0fI0rLQz",
"recWQcddfpWhdw00d",
"reclIPXUv5Ik2LuZF",
"recphoRja7FYMoa5J"
]
}
}
]
}'
Example response
{
"records": [
{
"id": "recz6f9UWtoZ3hdtF",
"createdTime": "2018-05-29T04:14:47.000Z",
"fields": {
"Current Employees": [
"recEsS8Ywh3sr5YEE",
"recvvPtqAbciO2nPR",
"recQBUG3R5MItu30o"
],
"Name": "iBeacon",
"Current Employees Count": 3
}
},
{
"id": "receNggW474QyV6qV",
"createdTime": "2017-12-20T06:04:49.000Z",
"fields": {
"Current Employees": [
"receZ95xx0fI0rLQz",
"recWQcddfpWhdw00d",
"reclIPXUv5Ik2LuZF",
"recphoRja7FYMoa5J"
],
"Name": "Marzen",
"Current Employees Count": 4
}
}
]
}
Update/Upsert Companies records
To update Companies records, issue a request to the Companies endpoint. Table names and table IDs can be used interchangeably. Using table IDs means table name changes won't require modifying your API request code. A PATCH request will only update the fields included in the request. Fields not included in the request will be unchanged. A PUT request will perform a destructive update and clear all unincluded cell values.

Your request body should include an array of up to 10 record objects. Each of these objects should have an id property representing the record ID and a fields property which contains all of your record's cell values by field name or field id for all of your record's cell values by field name.

Upsert behavior can be enabled by including a performUpsert object with a fieldsToMergeOn array in your request. Upserts will treat fieldsToMergeOn as an external ID to find existing records in Airtable. If a match is found, that record will be updated. If no matches are found, a new record will be created. For more details, visit our API reference.
Click here to show an example.

fieldsToMergeOn should be an array with 1-3 field names or field IDs which uniquely identify a record. These cannot be computed fields and must be of the following field types: number, text, long text, single select, multiple select, date.

The API response for upsert requests will additionally include createdRecords and updatedRecords. These are arrays of record IDs, identifying the records from the response's records array that were created or updated.

Airtable reserves the right to throttle upsert requests differently from the standard rate limit throttling policy.

To link to new records in Current Employees and Past Employees, add new linked record IDs to the existing array. Be sure to include all existing linked record IDs that you wish to retain. To unlink records, include the existing array of record IDs, excluding any that you wish to unlink.

Values for Current Employees Count are automatically computed by Airtable and cannot be directly updated. You cannot clear these, even with a PUT request.

Automatic data conversion for update actions can be enabled via typecast parameter. See create record for details.

You can also include a single record object at the top level. Click here to show an example.

Example request
curl -X PATCH https://api.airtable.com/v0/app5VB9BbEtcXgolQ/Companies \
 -H "Authorization: Bearer YOUR_SECRET_API_TOKEN" \
 -H "Content-Type: application/json" \
 --data '{
"records": [
{
"id": "recz6f9UWtoZ3hdtF",
"fields": {
"Name": "iBeacon",
"Current Employees": [
"recEsS8Ywh3sr5YEE",
"recvvPtqAbciO2nPR",
"recQBUG3R5MItu30o"
]
}
},
{
"id": "receNggW474QyV6qV",
"fields": {
"Name": "Marzen",
"Current Employees": [
"receZ95xx0fI0rLQz",
"recWQcddfpWhdw00d",
"reclIPXUv5Ik2LuZF",
"recphoRja7FYMoa5J"
]
}
},
{
"id": "recT3m86lc5tsLpvu",
"fields": {
"Name": "Bank of England",
"Current Employees": [
"recUQwbQeUOhXQ04H"
]
}
}
]
}'
Example response
{
"records": [
{
"id": "recz6f9UWtoZ3hdtF",
"createdTime": "2018-05-29T04:14:47.000Z",
"fields": {
"Current Employees": [
"recEsS8Ywh3sr5YEE",
"recvvPtqAbciO2nPR",
"recQBUG3R5MItu30o"
],
"Name": "iBeacon",
"Current Employees Count": 3
}
},
{
"id": "receNggW474QyV6qV",
"createdTime": "2017-12-20T06:04:49.000Z",
"fields": {
"Current Employees": [
"receZ95xx0fI0rLQz",
"recWQcddfpWhdw00d",
"reclIPXUv5Ik2LuZF",
"recphoRja7FYMoa5J"
],
"Name": "Marzen",
"Current Employees Count": 4
}
},
{
"id": "recT3m86lc5tsLpvu",
"createdTime": "2017-12-20T06:03:25.000Z",
"fields": {
"Current Employees": [
"recUQwbQeUOhXQ04H"
],
"Name": "Bank of England",
"Current Employees Count": 1
}
}
]
}
Delete Companies records
To delete Companies records, issue a DELETE request to the Companies endpoint. Note that table names and table ids can be used interchangeably. Using table ids means table name changes do not require modifications to your API request.

Your request should include a URL-encoded array of up to 10 record IDs to delete.

You can also issue a DELETE request to the record endpoint to delete a single record. Click here to show an example.

Example request
curl -X DELETE https://api.airtable.com/v0/app5VB9BbEtcXgolQ/Companies \
 -H "Authorization: Bearer YOUR_SECRET_API_TOKEN" \
 -G \
 --data-urlencode 'records[]=recz6f9UWtoZ3hdtF' \
 --data-urlencode 'records[]=receNggW474QyV6qV'
Example response
{
"records": [
{
"id": "recz6f9UWtoZ3hdtF",
"deleted": true
},
{
"id": "receNggW474QyV6qV",
"deleted": true
}
]
}
Errors
The Personal CRM API follows HTTP status code semantics. 2xx codes signify success, 4xx mostly represent user error, 5xx generally correspond to a server error. The error messages will return a JSON-encoded body that contains error and message fields. Those will provide specific error condition and human-readable message to identify what caused the error.

Success code
200OKRequest completed successfully.
User error codes
These errors generally indicate a problem on the client side. If you are getting one of these, check your code and the request details.

400Bad RequestThe request encoding is invalid; the request can't be parsed as a valid JSON.
401UnauthorizedAccessing a protected resource without authorization or with invalid credentials.
402Payment RequiredThe account associated with the API key making requests hits a quota that can be increased by upgrading the Airtable account plan.
403ForbiddenAccessing a protected resource with API credentials that don't have access to that resource.
404Not FoundRoute or resource is not found. This error is returned when the request hits an undefined route, or if the resource doesn't exist (e.g. has been deleted).
413Request Entity Too LargeThe request exceeded the maximum allowed payload size. You shouldn't encounter this under normal use.
422Invalid RequestThe request data is invalid. This includes most of the base-specific validations. You will receive a detailed error message and code pointing to the exact issue.
429Too Many RequestsThe API is limited to 5 requests per second per base. You will receive a 429 status code and a message "Rate limit exceeded. Please try again later" and will need to wait 30 seconds before subsequent requests will succeed. To learn more about rate limits, please visit our Rate Limits guide.
Server error codes
These errors generally represent an error on our side. In the event of a 5xx error code, detailed information about the error will be automatically recorded, and Airtable's developers will be notified.

500Internal Server ErrorThe server encountered an unexpected condition.
502Bad GatewayAirtable's servers are restarting or an unexpected outage is in progress. You should generally not receive this error, and requests are safe to retry.
503Service UnavailableThe server could not process your request in time. The server could be temporarily unavailable, or it could have timed out processing your request. You should retry the request with backoffs.
