# Simple-Reminder-API

This is a nodejs application (api) with expressjs and mongoDB (for storage) thats used to manage users's reminder data

<h3> How to start the application</h3>

- Create a .env file on root directory
- Add the _PORT_ environment variable to anything you wish to connect to.
- Add the _DB_URI_ environment variable to the mongoDB you will be working with.
- Start server using _npm run dev_

<h3><u>How to use the application</u></h3>
There are 5 apis available and are being detailed below.

- {baseurl}/api/v1/reminders (POST)
    - This endpoint is used to register new reminder using, there are some required parameters which can be found in the Joi validator schema or API documentation.

- {baseurl}/api/v1/reminders (GET)
    - This endpoint is used to fetch a list of reminders with specified filters which can also be found in the API documentation.
    - Note:
        - The *user* can be used to filter based on a specific user ID
        - The *after* can be used to filter the date in each object, as an epoch integer, JS Date object or ISODate String

- {baseurl}/api/v1/reminders/:id (GET)
    - This is endpoint is used to get a specific reminder using its unique ID

- {baseurl}/api/v1/reminders/:id (DELETE)
    - This is endpoint is available, however not able to delete the reminder using its unique ID, as its prohibited

- {baseurl}/api/v1/reminders/:id (PUT) & (PATCH)
    - This is endpoint is available, however not able to adjust or modify the reminder using its unique ID, as its prohibited