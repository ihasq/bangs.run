name: Refresh Bangs

on:
  schedule:
    - cron: '0 * * * *'

jobs:
  build:
    name: refresh
    runs-on: ubuntu-latest
    steps:
      - name: curl
        run: curl -L https://duckduckgo.com/bangs.js