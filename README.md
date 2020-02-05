# docket-ui

This is the React UI for the court-scraper docket tool. This `docket-ui` package
is included as a dependency in the `docket` package, and all frontend stuff is
delegated to the `dist/bundle.js` file that this package compiles.

This package doesn't include any backend at all. This makes it somewhat complicated
to develop with! Here's how you get it up and running:

1. Clone the [docket package](https://github.com/dapperjapper/docket) somewhere
onto your computer and follow the install instructions.
2. Clone this `docket-ui` package onto your computer and run `npm install` in
the folder.
3. In a terminal session, `cd` into the `docket` repo and run `npm run start`.
This will get the backend running.
NOTE: This command will not represent changes in src/
4. In a separate terminal session, `cd` into the `docket-ui` repo and run
`npm run test:server`. This will get the frontend running.

If everything goes well, the backend will be running at http://localhost:3000/
and the frontend will be running at http://localhost:3001/. Your frontend
will talk to the server on port 3000, but will reflect the code you've changed in
your working directory. You may need to run `npm run build` to update your
`dist/bundle.js` with changes.
