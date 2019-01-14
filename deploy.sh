#!/usr/bin/env sh

# abort on errors
set -e

NODE_ENV="production"

# build
yarn run build

# navigate into the build output directory
cd dist

git init
git add -A
git commit -m 'deploy'

# deploy to https://cityofphiladelphia.github.io/li-contractor-lookup
git push -f https://github.com/cityofphiladelphia/li-contractor-lookup.git master:gh-pages

cd -