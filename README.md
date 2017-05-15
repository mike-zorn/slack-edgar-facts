slack-edgar-facts
=================

[![Greenkeeper badge](https://badges.greenkeeper.io/apechimp/slack-edgar-facts.svg)](https://greenkeeper.io/)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
[![Circle CI](https://circleci.com/gh/apechimp/slack-edgar-facts.svg?style=svg)](https://circleci.com/gh/apechimp/slack-edgar-facts)

Slack Slash command for facts about @apechimp's :dog:, Edgar.

Installation
------------

1. clone this repo
2. `npm install`

Usage
-----

1. Export a json hash of slack slash command tokens to slack incoming webhook urls to `TOKENS_URLS`, e.g.,
```bash
export TOKENS_URLS='{"gIkuvaNzQIHg97ATvDxqgjtO":"https://hooks.slack.com/services/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"}'
```
2. `npm start`
