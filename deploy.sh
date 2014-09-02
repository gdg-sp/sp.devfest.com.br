#!/bin/bash

jekyll build
git add -A _site/
git commit -m "New release"
git push
git subtree push --prefix _site origin gh-pages
