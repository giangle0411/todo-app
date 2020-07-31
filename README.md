## Setting up the project

### Back-end (database)

The project uses json-server to host the database (db.json) on **port 5000**
In the project directory, on terminal run the following command:

```
json-server --watch db.json -p 5000
```

### Front-end

In the project directory, open another terminal and run:

```
npm install
```

This will install all the required packages that are used in the project.
Then run the app in the development mode.<br />

```
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

#### In order to end any process, use ctrl-C or close the respective terminal
