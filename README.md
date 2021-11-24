# Raptorium Docs

- Search will not create indexes until `yarn build` is ran

### Install:

1. yarn

### Deploy:

1. yarn build
2. yarn serve

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Dev:

1. yarn start

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.


### Deployment

```
$ GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
