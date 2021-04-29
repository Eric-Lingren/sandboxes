# Promise.all()

    * Sometimes you need to make mutliple requests at the same time to a server
    * Promise.all() allows you to make multiple api requests and then have them all resolve at the same time.
    * Promise.all() needs an array of pending promises as its primary argument, its .then() will provide all of the data from all of the requests.