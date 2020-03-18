# Prototype for Multiple NextJS Apps working together as an SPA

## Requirements
- NGINX
- Node v12 or above

## Setup
1. Replace your `nginx.conf` file with the one in this repo.
2. Change the path in the configuration for the CDN server to match the actual path to the `multi-nextjs-spa-proto` folder.
3. Run `bash install.sh`, which does an `npm install` on the different apps.
4. Run `bash build.sh` to build the different apps and copy the `.next` folder contents over into the directory for the CDN (`test-nextjs-assets`).
5. Open a terminal for each app and in the folder for the app run `npm start`.
6. Run `nginx` to start the server (or `nginx -s reload` if it's already running).
